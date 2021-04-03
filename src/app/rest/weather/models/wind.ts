export class Wind {

  speed?: number;
  deg?: number;
  gust?: number;

  constructor(data?: Wind) {
    if (data) {
      this.speed = data.speed;
      this.deg = data.deg;
      this.gust = data.gust;
    }
  }
}
