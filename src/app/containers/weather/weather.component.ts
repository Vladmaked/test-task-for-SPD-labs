import { Component, OnInit } from '@angular/core';

import { LocalStorage } from 'ngx-webstorage';

import { CityCoordsResponse } from '@rest/weather/models/city.coords.response';
import { CountriesNames } from '@rest/weather/models/countries.names';
import { Daily } from '@rest/weather/models/daily';
import { DailyWeatherResponse } from '@rest/weather/models/daily.weather.response';

import { WeatherService } from '@rest/weather/weather.service';

@Component({
  templateUrl: './weather.html',
  styleUrls: [ './weather.scss' ]
})

export class WeatherComponent implements OnInit {

  @LocalStorage()
  searchStorage!: string[];

  searchField!: string;

  countriesNames = CountriesNames;
  disableBtn = false;

  cityCoors = new CityCoordsResponse();
  dailyWeather = new DailyWeatherResponse();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.initWeather('Cherkasy');
  }

  initWeather(city: string): void {
    this.disableBtn = true;
    this.checkNullSearchStorage();
    this.weatherService.getCityCoords(city)
        .subscribe(coords => {
          if (coords.length) {
            this.cityCoors = new CityCoordsResponse(coords[0]);
            this.initDailyWeather();
          }
        });
    this.searchField = '';
    this.disableBtn = false;
  }

  checkCountryCode(): boolean {
    return this.cityCoors.country in this.countriesNames;
  }

  private initDailyWeather(): void {
    this.weatherService.getDailyWeatherByCoords(this.cityCoors)
        .subscribe(weatherResponse => {
          this.dailyWeather = new DailyWeatherResponse(weatherResponse);
          this.dailyWeather.daily = weatherResponse.daily
                                                   .slice(0, 4)
                                                   .map(dailyItem => new Daily(dailyItem));
          this.saveCitySearchToSearchStorage();
        });
  }

  private saveCitySearchToSearchStorage(): void {
    this.checkNullLengthSearchStorage();
    if (!this.searchStorage.includes(this.cityCoors.name)) {
      this.checkMaxLengthSearchStorage();
      this.searchStorage.push(this.cityCoors.name);
      this.searchStorage = this['searchStorage'];
    }
  }

  private checkNullSearchStorage(): void {
    if (!this.searchStorage) this.searchStorage = [];
  }

  private checkNullLengthSearchStorage(): void {
    if (!this.searchStorage.length) {
      this.searchStorage.push(this.cityCoors.name);
      this.searchStorage = this['searchStorage'];
    }
  }

  private checkMaxLengthSearchStorage(): void {
    if (this.searchStorage.length >= 8) {
      this.searchStorage.shift();
      this.searchStorage = this['searchStorage'];
    }
  }
}
