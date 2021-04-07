export class Coord {

  lon!: number;
  lat!: number;
  name!: string;
  country!: string;

  constructor(data?: Coord) {
    if (data) {
      this.lon = data.lon;
      this.lat = data.lat;
      this.name = data.name;
      this.country = data.country;
    }
  }
}
