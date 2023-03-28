import { PayloadAction } from '@reduxjs/toolkit';

import type { TAppState } from './type';

const reducers = {
  setAppIsOnline: (
    state: TAppState,
    action: PayloadAction<TAppState['isOnline']>
  ) => {
    state.isOnline = action.payload;
  },
};

export { reducers };
