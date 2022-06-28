import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { WeatherComponent } from './weather/weather.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  url = 'http://localhost:8000/'
 

  constructor(private http:HttpClient) { 

  }
  

  getWeather(location:string):Observable<any>{
    
    return this.http.get<any>(this.url+location, {}) 
  }

 
}
