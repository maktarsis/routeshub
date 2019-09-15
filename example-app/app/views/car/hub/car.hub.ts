import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createFeature } from 'lib';
import { CAR_NOTES_KEY, CarNotes } from './car.notes';
import { carRoutes } from './car.routes';
import { detailsUnit } from '../../details/hub/details.hub';

export const carUnit = createFeature<CarNotes>(carRoutes, {
  detached: { details: detailsUnit },
  key: CAR_NOTES_KEY
});

@NgModule({
  imports: [RouterModule.forChild(carRoutes)],
  exports: [RouterModule]
})
export class CarHub {}
