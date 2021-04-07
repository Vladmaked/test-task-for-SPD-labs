import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@config/environment';
import { CityCoordsResponse } from '@rest/weather/models/city.coords.response';
import { Coord } from '@rest/weather/models/coord';

import { DailyWeatherResponse } from './models/daily.weather.response';


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}

  getCityCoords(city: string): Observable<CityCoordsResponse[]> {
    const url = `${environment.api}geo/1.0/direct?q=${city}&limit=1&appid=${environment.apiId}`;
    return this.http.get<CityCoordsResponse[]>(url)
               .pipe(
                 catchError(WeatherService.handleError.bind(this))
               );
  }

  getDailyWeatherByCoords(coord: Coord): Observable<DailyWeatherResponse> {
    const url = `${environment.api}data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,minutely,hourly,alerts&appid=${environment.apiId}&units=metric`;
    return this.http
               .get<DailyWeatherResponse>(url)
               .pipe(
                 catchError(WeatherService.handleError.bind(this))
               );
  }

  private static handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
