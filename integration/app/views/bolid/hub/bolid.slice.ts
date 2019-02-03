import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { bolidNotes, BolidNotes as R } from '~app/views/bolid/hub/bolid.notes';

/**
 * Creates a feature slice
 */
export const bolidSlice: Slice<R> = createFeature<R>(
  appSlice.bolid,
  bolidNotes
);
