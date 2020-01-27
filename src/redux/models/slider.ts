import { createModel } from '@rematch/core';

export type SharksState = number;

export const model = createModel({
  state: 0,
  reducers: {
    increment: (state: SharksState, payload: number): SharksState => state + payload,
  },
});

export const slider: typeof model = createModel(model);
