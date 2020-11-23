import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { IonicModule } from '@ionic/angular';

import { MedicinePageRoutingModule } from './medicine-routing.module';

import { MedicinePage } from './medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinePageRoutingModule,
    PinchZoomModule
  ],
  declarations: [MedicinePage]
})
export class MedicinePageModule {}
