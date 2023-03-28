import type { TRequestConfig } from './type';

interface IRequestClient {
  get<T>(
    url: string,
    config?: TRequestConfig
  ): {
    cancel: () => void;
    response: Promise<T>;
  };
  post<T>(
    url: string,
    data?: any,
    config?: TRequestConfig
  ): {
    cancel: () => void;
    response: Promise<T>;
  };
  setAuthorizationHeader(token?: string): void;
}

export type { IRequestClient };
