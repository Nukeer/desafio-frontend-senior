import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listagem' },
  {
    path: '',
    children: [
      {
        path: 'formulario',
        loadChildren: () =>
          import('./modules/form/form.module').then(m => m.FormModule)
      },
      {
        path: 'listagem',
        loadChildren: () =>
          import('./modules/list/list.module').then(m => m.ListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
