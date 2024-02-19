import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatySlipRoutingModule } from './treaty-slip-routing.module';
import { TreatySlipComponent } from './treaty-slip.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxcButtonModule, DxcDateInputModule, DxcSelectModule, DxcTextInputModule, DxcTextareaModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TreatySlipComponent
  ],
  imports: [
    CommonModule,
    TreatySlipRoutingModule,
    SharedModule,
    DxcTextInputModule,
    ReactiveFormsModule,
    DxcDateInputModule,
    ThemeModule,
    DxcTextareaModule,
    DxcButtonModule,
    DxcSelectModule
  ],
  exports: [
    TreatySlipComponent
  ],
  providers: [
  { provide: 'ThemeService', useClass: ThemeService }
  ]
})
export class TreatySlipModule { }
