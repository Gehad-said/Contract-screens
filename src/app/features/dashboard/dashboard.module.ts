import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TechincianDashboardComponent } from './techincian-dashboard/techincian-dashboard.component';
import { DxcButtonModule, DxcTableModule, DxcTabsModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';


@NgModule({
  declarations: [
    TechincianDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DxcTableModule,
    ThemeModule,
    DxcTabsModule,
    DxcButtonModule
  ],
  providers: [
    { provide: 'ThemeService', useClass: ThemeService }
    ]
})
export class DashboardModule { }
