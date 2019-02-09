import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehiclesResolver } from './resolvers/vehicles.resolver';
import { routes } from './hub/app.routes';

/**
 * Routing configuration
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes as Routes,
  {
    enableTracing: false,
    initialNavigation: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top'
  }
);

/**
 * Routing module contains its configuration
 * and providers (resolvers, guard, interceptors etc)
 * and also exports RouterModule
 */
@NgModule({
  imports: [routing],
  exports: [RouterModule],
  providers: [VehiclesResolver]
})
export class RoutingModule {}
