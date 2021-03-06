import { Routes } from '@angular/router';
import {
  Connector,
  CreatorOptionArgs,
  Notes,
  Spot,
  Unit,
  Units
} from '../interfaces';
import { createNote } from './note.creator';
import { createUnit } from './unit.creator';
import { connectNearby } from '../functions';
import {
  getUnitFromHubByName,
  recordNextHubValue,
  updateHub
} from '../utils/hub';

/**
 * Creates a feature route
 */
export const createFeature = <R = any, C = any>(
  routes: Routes,
  { key, nearby, routeName }: Partial<CreatorOptionArgs> = {}
): Connector<R, C> => (
  parentSpot: Spot,
  alternativeName?: string
): Unit<R, C> => {
  const name = alternativeName ? alternativeName : parentSpot.name;
  const notes: Notes<R, C> = createNote<R, C>(routes, routeName);
  const feature: Unit<R, C> = createUnit<R, C>(parentSpot, notes);
  const updatedRouteState: Units<Unit<R, C>> = updateHub<R, C>(
    feature,
    name,
    key || name
  );

  recordNextHubValue(updatedRouteState);

  connectNearby(nearby, parentSpot);

  return getUnitFromHubByName<R, C>(name);
};
