import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConasaPageRoutingModule } from './conasa-routing.module';

import { ConasaPage } from './conasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConasaPageRoutingModule
  ],
  declarations: [ConasaPage]
})
export class ConasaPageModule {}
