import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ConasaPageRoutingModule } from './conasa-routing.module';

import { ConasaPage } from './conasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConasaPageRoutingModule,
    PdfViewerModule,
    PinchZoomModule
  ],
  declarations: [ConasaPage]
})
export class ConasaPageModule {}
