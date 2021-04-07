import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WeatherItemDayModule } from '@components/weather-item-day/weather-item-day.module';

import { WeatherRouting } from '@containers/weather/weather.routing';

import { WeatherService } from '@rest/weather/weather.service';

import { WeatherComponent } from './weather.component';

@NgModule({
  imports: [
    CommonModule,
    WeatherRouting,
    WeatherItemDayModule,
    FormsModule
  ],
  declarations: [ WeatherComponent ],
  providers: [ WeatherService ]
})
export class WeatherModule {}
