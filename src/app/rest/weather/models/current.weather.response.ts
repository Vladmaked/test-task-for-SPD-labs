import { Clouds } from './clouds';
import { Coord } from './coord';
import { Main } from './main';
import { Sys } from './sys';
import { Weather } from './weather';
import { Wind } from './wind';

export class CurrentWeatherResponse {

  base?: number;
  clouds?: Clouds;
  cod?: number;
  coord?: Coord;
  dt?: number;
  id?: number;
  main?: Main;
  name?: string;
  sys?: Sys;
  timezone?: number;
  visibility?: number;
  weather?: Weather[] = [];
  wind?: Wind;

  constructor(data?: CurrentWeatherResponse) {
    if (data) {
      this.base = data.base;
      this.clouds = data.clouds;
      this.cod = data.cod;
      this.coord = data.coord;
      this.dt = data.dt;
      this.id = data.id;
      this.main = data.main;
      this.name = data.name;
      this.sys = data.sys;
      this.timezone = data.timezone;
      this.visibility = data.visibility;
      this.weather = data.weather;
      this.wind = data.wind;
    }
  }
}
