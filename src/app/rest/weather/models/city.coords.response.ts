export class CityCoordsResponse {

  country!: string;
  lat!: number;
  lon!: number;
  local_names!: object;
  name!: string;

  constructor(data?: CityCoordsResponse) {
    if (data) {
      this.country = data.country;
      this.lat = data.lat;
      this.lon = data.lon;
      this.local_names = data.local_names;
      this.name = data.name;
    }
  }
}
