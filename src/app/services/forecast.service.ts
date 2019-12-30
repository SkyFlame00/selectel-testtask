import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiUrl, appId } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  get(city: string, country: string) {
    const url = `${apiUrl}?q=${city},${country}&appid=${appId}`;
    return this.http.get(url);
  }
}
