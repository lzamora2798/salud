import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicModule } from '@ionic/angular';

import { ConameiPageRoutingModule } from './conamei-routing.module';

import { ConameiPage } from './conamei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConameiPageRoutingModule,
    PdfViewerModule,
    PinchZoomModule
  ],
  declarations: [ConameiPage]
})
export class ConameiPageModule {}
