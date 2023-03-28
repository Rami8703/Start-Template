import { configureStore } from '@reduxjs/toolkit';
import { reducer as appReducer } from './slices/app';

class Redux {
  public readonly store;
  constructor() {
    this.store = configureStore({
      reducer: {
        app: appReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: {},
          },
        }),
    });
  }
}

export { Redux };
