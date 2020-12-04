import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PresentacionPageRoutingModule } from './presentacion-routing.module';

import { PresentacionPage } from './presentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentacionPageRoutingModule,
    PdfViewerModule,
    PinchZoomModule
  ],
  declarations: [PresentacionPage]
})
export class PresentacionPageModule {}
