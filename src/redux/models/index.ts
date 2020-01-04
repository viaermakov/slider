import { Models } from '@rematch/core';
import { slider } from './slider';

export interface RootModel extends Models {
  slider: typeof slider;
}

const rootModel: RootModel = { slider };

export default rootModel;
