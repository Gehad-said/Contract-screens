import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatySlipComponent } from './treaty-slip.component';

const routes: Routes = [
  {
    path: '',
    component: TreatySlipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatySlipRoutingModule { }
