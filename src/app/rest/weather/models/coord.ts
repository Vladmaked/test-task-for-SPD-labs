export class Coord {

  lon?: number;
  lat?: number;

  constructor(data?: Coord) {
    if (data) {
      this.lon = data.lon;
      this.lat = data.lat;
    }
  }
}
