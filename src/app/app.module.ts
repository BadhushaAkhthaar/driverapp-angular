import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from  '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { CustomdatePipe } from './pipes/customdate.pipe';
import { ExecutionPipe } from './pipes/execution.pipe';
import { ExecutionBGPipe } from './pipes/execution-bg.pipe';
import { DetailComponent } from './components/detail/detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes :Routes = [
  { path: '' , component: ListComponent },
  { path: 'freightorder/detail/:foid' , component: DetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CustomdatePipe,
    ExecutionPipe,
    ExecutionBGPipe,
    DetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
