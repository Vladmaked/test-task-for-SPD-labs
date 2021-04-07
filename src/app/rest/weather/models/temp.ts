export class Temp {

  day!: number;
  eve!: number;
  max!: number;
  min!: number;
  morn!: number;
  night!: number;

  constructor(data?: Temp) {
    if (data) {
      this.day = data.day;
      this.eve = data.eve;
      this.max = data.max;
      this.min = data.min;
      this.morn = data.morn;
      this.night = data.night;
    }
  }
}
