import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import {
  automobileNotes,
  AutomobileNotes as R
} from '~app/views/automobile/hub/automobile.notes';

/**
 * Creates a feature slice
 */
export const automobileSlice: Slice<R> = createFeature<R>(
  appSlice.automobile,
  automobileNotes
);