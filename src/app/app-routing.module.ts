import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'treaty-slip', pathMatch: 'full'
  },
  {
    path: 'treaty-slip',
    loadChildren: () => import('./features/treaty-slip/treaty-slip.module').then(m => m.TreatySlipModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
