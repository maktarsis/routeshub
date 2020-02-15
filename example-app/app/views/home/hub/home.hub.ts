import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createFeature } from 'routeshub';
import { HOME_NOTES_KEY, HomeNotes } from './home.notes';
import { homeRoutes } from './home.routes';

export const homeConnector = createFeature<HomeNotes>(homeRoutes, {
  key: HOME_NOTES_KEY
});

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeHub {}
