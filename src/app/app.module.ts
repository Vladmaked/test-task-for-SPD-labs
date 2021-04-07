import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StorageModule } from '@modules/storage/loader.module';

import { AppComponent } from './app.component';

import { AppRouting } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    StorageModule
  ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ]
})
export class AppModule {
}
