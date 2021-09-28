import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform'
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FundamentalNgxPlatformModule,
    FundamentalNgxCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
