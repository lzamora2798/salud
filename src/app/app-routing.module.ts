import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'medicamentos',
    pathMatch: 'full'
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },
  {
    path: 'presentacion',
    loadChildren: () => import('./presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'conasa',
    loadChildren: () => import('./conasa/conasa.module').then( m => m.ConasaPageModule)
  },
  {
    path: 'conamei',
    loadChildren: () => import('./conamei/conamei.module').then( m => m.ConameiPageModule)
  },
  {
    path: 'acuerdo',
    loadChildren: () => import('./acuerdo/acuerdo.module').then( m => m.AcuerdoPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'paginaweb',
    loadChildren: () => import('./paginaweb/paginaweb.module').then( m => m.PaginawebPageModule)
  },
  {
    path: 'medicine/:id',
    loadChildren: () => import('./medicine/medicine.module').then( m => m.MedicinePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
