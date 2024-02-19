import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatySlipRoutingModule } from './treaty-slip-routing.module';
import { TreatySlipComponent } from './treaty-slip.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DxcButtonModule, DxcDateInputModule, DxcSelectModule, DxcTextInputModule, DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';
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
  ]
})
export class TreatySlipModule { }
