import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeatherItemDayComponent } from './weather-item-day.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ WeatherItemDayComponent ],
  declarations: [ WeatherItemDayComponent ]
})
export class WeatherItemDayModule {}
