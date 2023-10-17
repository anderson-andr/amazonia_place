import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
  loadChildren: () => import('./promotions/promotions.module').then(m => m.PromotionsModule)
  },
  { path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
