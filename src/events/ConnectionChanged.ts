import NetInfo from '@react-native-community/netinfo';
import { AppState, Platform } from 'react-native';

import { EventBase } from './EventBase';
import { appReady } from './AppReady';

class ConnectionChanged extends EventBase<boolean> {
  private isConnected = false;

  constructor() {
    super();
    appReady.once(() => {
      this.listenNetInfoStateChange();
      this.listenAppStateChange();
    });
  }

  private listenNetInfoStateChange() {
    return NetInfo.addEventListener(({ isConnected }) => {
      if (Boolean(isConnected) !== this.isConnected) {
        this._emit(Boolean(isConnected));
      }
    });
  }

  private listenAppStateChange() {
    const subscription = AppState.addEventListener(
      'change',
      async (nextAppState) => {
        if (Platform.OS === 'ios' && nextAppState === 'active') {
          const { isConnected } = await NetInfo.fetch();
          if (Boolean(isConnected) !== this.isConnected) {
            this._emit(Boolean(isConnected));
          }
        }
      }
    );
    return () => subscription.remove();
  }
}

const connectionChanged = new ConnectionChanged();

export { connectionChanged };
