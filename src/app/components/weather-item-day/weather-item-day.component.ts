import { Component, Input } from '@angular/core';

import { Daily } from '@rest/weather/models/daily';

@Component({
  selector: 'cwi-weather-item-day',
  templateUrl: './weather-item-day.html',
  styleUrls: [ './weather-item-day.scss' ]
})

export class WeatherItemDayComponent {

  @Input()
  dailyWeatherItem!: Daily;
}
