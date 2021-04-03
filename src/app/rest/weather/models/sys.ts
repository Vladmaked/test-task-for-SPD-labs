export class Sys {

  country?: string;
  sunrise?: number;
  sunset?: number;

  constructor(data?: Sys) {
    if (data) {
      this.country = data.country;
      this.sunrise = data.sunrise;
      this.sunset = data.sunset;
    }
  }
}
