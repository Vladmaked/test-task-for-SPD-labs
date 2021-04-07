export class Weather {

  description!: string;
  icon!: string;
  id!: number;
  main!: string;

  constructor(data?: Weather) {
    if (data) {
      this.description = data.description;
      this.icon = data.icon;
      this.id = data.id;
      this.main = data.main;
    }
  }
}
