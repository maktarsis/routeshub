import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { bikeRouting } from './hub';
import { SharedModule } from '~app/shared/shared.module';
import { BikeComponent } from './container/bike.component';

@NgModule({
  declarations: [BikeComponent],
  imports: [CommonModule, SharedModule, bikeRouting]
})
export class BikeModule {}