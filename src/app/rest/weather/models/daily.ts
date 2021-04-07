import { Feels_like } from './feels_like';
import { Temp } from './temp';
import { Weather } from './weather';

export class Daily {

  clouds!: number;
  dew_point!: number;
  dt!: number;
  feels_like = new Feels_like();
  humidity!: number;
  pop!: number;
  pressure!: number;
  sunrise!: number;
  sunset!: number;
  temp = new Temp();
  uvi!: number;
  weather: Weather[] = [];
  wind_deg!: number;
  wind_speed!: number;

  constructor(data?: Daily) {
    if (data) {
      this.clouds = data.clouds;
      this.dew_point = data.dew_point;
      this.dt = data.dt;
      this.feels_like = new Feels_like(data.feels_like);
      this.humidity = data.humidity;
      this.pop = data.pop;
      this.pressure = data.pressure;
      this.sunrise = data.sunrise;
      this.sunset = data.sunset;
      this.temp = new Temp(data.temp);
      this.uvi = data.uvi;
      this.weather = data.weather.map(weatherItem => new Weather(weatherItem));
      this.wind_deg = data.wind_deg;
      this.wind_speed = data.wind_speed;
    }
  }
}
