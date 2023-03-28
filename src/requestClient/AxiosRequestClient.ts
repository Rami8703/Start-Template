import axios from 'axios';
import type { Axios, AxiosRequestConfig } from 'axios';

import { requestUnauthorized } from '@/events';

import type { IRequestClient } from './IRequestClient';

class AxiosRequestClient implements IRequestClient {
  private client: Axios;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BASE_URL,
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 401:
              requestUnauthorized.emit();
              break;
            default:
              break;
          }
        }
        return Promise.reject(error);
      }
    );
  }

  public get<T>(url: string, config?: AxiosRequestConfig) {
    const controller = new AbortController();
    return {
      cancel() {
        controller.abort();
      },
      response: (async () => {
        const { data } = await this.client.get<T>(url, {
          ...config,
          signal: controller.signal,
        });
        return data;
      })(),
    };
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    const controller = new AbortController();
    return {
      cancel() {
        controller.abort();
      },
      response: (async () => {
        const { data: responseData } = await this.client.post<T>(url, data, {
          ...config,
          signal: controller.signal,
        });
        return responseData;
      })(),
    };
  }

  setAuthorizationHeader(token?: string) {
    if (token) {
      this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common.Authorization;
    }
  }
}

export { AxiosRequestClient };
