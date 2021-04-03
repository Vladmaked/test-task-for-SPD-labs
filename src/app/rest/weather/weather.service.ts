import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CurrentWeatherResponse } from './models/current.weather.response';
import { DailyWeatherByGeographicCoordinates } from './models/daily.weather.by.geographic.coordinates';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  constructor(private http: HttpClient) {}

  initCurrentWeatherByCity(city: string): Observable<CurrentWeatherResponse> {
    const weatherUrl = `${environment.api}weather?q=${city}&appid=${environment.apiId}&units=metric`;
    return this.http
               .jsonp<CurrentWeatherResponse>(weatherUrl, 'callback')
               .pipe(
                 catchError(WeatherService.handleError.bind(this))
               );
  }

  initDailyWeatherByGeographicCoordinates(lat: string, lon: string): Observable<DailyWeatherByGeographicCoordinates> {
    const weatherUrl = `${environment.api}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${environment.apiId}&units=metric`;
    return this.http
               .jsonp<DailyWeatherByGeographicCoordinates>(weatherUrl, 'callback')
               .pipe(
                 catchError(WeatherService.handleError.bind(this))
               );
  }

  private static handleError(error: HttpErrorResponse): Observable<never> {
    const { message } = error.error.error;
    console.log(message);
    return throwError(error);
  }
}
