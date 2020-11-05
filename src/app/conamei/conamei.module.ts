import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConameiPageRoutingModule } from './conamei-routing.module';

import { ConameiPage } from './conamei.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConameiPageRoutingModule
  ],
  declarations: [ConameiPage]
})
export class ConameiPageModule {}
