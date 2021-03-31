import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting
  ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ]
})
export class AppModule {
}
