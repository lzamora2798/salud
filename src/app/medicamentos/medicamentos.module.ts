import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosPageRoutingModule } from './medicamentos-routing.module';

import { MedicamentosPage } from './medicamentos.page';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MedicamentosPage]
})
export class MedicamentosPageModule {}
