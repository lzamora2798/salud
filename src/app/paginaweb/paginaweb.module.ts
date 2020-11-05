import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginawebPageRoutingModule } from './paginaweb-routing.module';

import { PaginawebPage } from './paginaweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginawebPageRoutingModule
  ],
  declarations: [PaginawebPage]
})
export class PaginawebPageModule {}
