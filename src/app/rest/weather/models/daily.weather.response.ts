import { Daily } from './daily';

export class DailyWeatherResponse {

  daily: Daily[] = [];
  lat!: number;
  lon!: number;
  timezone!: string;
  timezone_offset!: number;

  constructor(data?: DailyWeatherResponse) {
    if (data) {
      this.daily = data.daily;
      this.lat = data.lat;
      this.lon = data.lon;
      this.timezone = data.timezone;
      this.timezone_offset = data.timezone_offset;
    }
  }
}
