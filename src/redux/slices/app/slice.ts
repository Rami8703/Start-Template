import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { reducers } from './reducers';

const { reducer, actions } = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export { reducer, actions };
