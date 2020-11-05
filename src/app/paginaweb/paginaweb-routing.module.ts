import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginawebPage } from './paginaweb.page';

const routes: Routes = [
  {
    path: '',
    component: PaginawebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginawebPageRoutingModule {}
