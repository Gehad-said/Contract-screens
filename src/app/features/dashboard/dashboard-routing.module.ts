import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechincianDashboardComponent } from './techincian-dashboard/techincian-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TechincianDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
