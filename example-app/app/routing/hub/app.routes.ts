import { Routes } from '@angular/router';

import { connectFeatures, createRoot } from 'lib';

import { ViewComponent } from '../../core/components/view/view.component';
import { APP_HUB_KEY, AppChildNotes, AppNotes } from './app.notes';
import { aboutSlice } from '../../views/about/hub';
import { carSlice } from '../../views/car/hub';
import { homeSlice } from '../../views/home/hub';
import { usersSlice } from '../../views/users/hub';

/**
 * Declares routes on App level
 * Cool stuff with routes variables
 * can be used here to add control
 * over magic strings
 */
export const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadChildren: () =>
          import('example-app/app/views/about/about.module').then(
            m => m.AboutModule
          )
      },
      {
        path: 'car',
        loadChildren: () =>
          import('example-app/app/views/car/car.module').then(m => m.CarModule)
      }
    ]
  }
];

/**
 * Creates stateful named App routes
 */
const appSlice = createRoot<AppNotes, AppChildNotes>(
  routes,
  {
    home: homeSlice,
    users: usersSlice
  },
  APP_HUB_KEY
);

connectFeatures<AppNotes, AppChildNotes>(appSlice, {
  about: aboutSlice,
  car: carSlice
});
