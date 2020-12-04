import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicModule } from '@ionic/angular';

import { AcuerdoPageRoutingModule } from './acuerdo-routing.module';

import { AcuerdoPage } from './acuerdo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcuerdoPageRoutingModule,
    PdfViewerModule,
    PinchZoomModule
  ],
  declarations: [AcuerdoPage]
})
export class AcuerdoPageModule {}
