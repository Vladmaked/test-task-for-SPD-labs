import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ]
})
export class AppModule {
}
