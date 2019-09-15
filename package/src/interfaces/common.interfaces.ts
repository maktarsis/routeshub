import { InternalUnit, LazyUnits } from './unit.interfaces';
import { PRIVATE_NOTES_KEY } from '../constants';

/**
 * basic hubs spot
 *
 * describes a Hub's value
 */
export interface Spot {
  id: number;
  parentId: number;
  state: string[];
  name: string;
  path: string;
}

/**
 * Describes parameters
 */
export interface Params {
  [param: string]: any;
}

/**
 * describes a store-like essence
 */
export interface Hub<E> {
  [key: string]: E;
}

/**
 * describes a Hub's value
 * that has unprocessed children
 */
export interface InternalSpot<C = any> extends Spot {
  children?: InternalUnit<C>;
}

/**
 * describes route name options
 */
export interface DefaultNameOptions {
  root?: string;
  wildcard?: string;
}

export type privateNotesKey = string | symbol;

/**
 * private local hubs identifier
 */
export interface PrivateNotesKey {
  [PRIVATE_NOTES_KEY]?: privateNotesKey;
}

/**
 * possible args
 * in root/feature creators
 */
export interface CreatorOptionArgs {
  key: privateNotesKey;
  routeName: DefaultNameOptions;
  detached: LazyUnits;
}
