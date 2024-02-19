import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxcButtonModule, DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { SharedModule } from "./shared/shared.module";
import { TreatySlipModule } from './features/treaty-slip/treaty-slip.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DxcButtonModule,
        DxcTextInputModule,
        ThemeModule,
        SharedModule,
        TreatySlipModule
    ]
})
export class AppModule { }
