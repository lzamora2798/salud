import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConameiPage } from './conamei.page';

const routes: Routes = [
  {
    path: '',
    component: ConameiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConameiPageRoutingModule {}
