import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { MockIconComponent } from './mock-components/mock-icon/mock-icon';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DxcDialogModule, DxcInputTextModule, DxcSelectModule, DxcSpinnerModule, DxcTextInputModule } from '@dxc-technology/halstack-angular';
import { HelpComponent } from './components/help/help.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GlobalHeaderComponent,
    MockIconComponent,
    SpinnerComponent,
    HelpComponent,
    DateInputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DxcSpinnerModule,
    DxcDialogModule,
    DxcInputTextModule,
    DxcTextInputModule,
    DxcSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    GlobalHeaderComponent,
    SpinnerComponent,
    DxcSpinnerModule,
    DxcDialogModule,
    HelpComponent,
    DateInputComponent
  ]
})
export class SharedModule { }
