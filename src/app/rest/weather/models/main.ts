export class Main {

  feels_like?: number;
  grnd_level?: number;
  humidity?: number;
  pressure?: number;
  sea_level?: number;
  temp?: number;
  temp_max?: number;
  temp_min?: number;

  constructor(data?: Main) {
    if (data) {
      this.feels_like = data.feels_like;
      this.grnd_level = data.grnd_level;
      this.humidity = data.humidity;
      this.pressure = data.pressure;
      this.sea_level = data.sea_level;
      this.temp = data.temp;
      this.temp_max = data.temp_max;
      this.temp_min = data.temp_min;
    }
  }
}
