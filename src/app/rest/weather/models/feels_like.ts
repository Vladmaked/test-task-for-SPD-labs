export class Feels_like {

  day?: number;
  night?: number;
  eve?: number;
  morn?: number;

  constructor(data?: Feels_like) {
    if (data) {
      this.day = data.day;
      this.night = data.night;
      this.eve = data.eve;
      this.morn = data.morn;
    }
  }
}
