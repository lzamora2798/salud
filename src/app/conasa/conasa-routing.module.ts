import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConasaPage } from './conasa.page';

const routes: Routes = [
  {
    path: '',
    component: ConasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConasaPageRoutingModule {}
