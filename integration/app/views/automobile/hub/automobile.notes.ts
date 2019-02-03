import { RootRoute, RoutesNotes } from 'routeshub';

/**
 * Declares a type which contains
 * only route with root key
 */
export type AutomobileNotes = RootRoute;

/**
 * Declares an Automobile' notes
 */
export const automobileNotes: RoutesNotes<AutomobileNotes> = {
  root: {
    path: ''
  }
};
