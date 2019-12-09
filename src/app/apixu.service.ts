import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApixuService {
  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
        `http://api.weatherstack.com/current?access_key=36d150f932570c70132df117908d9cbd&query=${location}`
    );
  }
}