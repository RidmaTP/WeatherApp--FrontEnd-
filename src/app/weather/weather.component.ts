import { Component, OnInit, NgModule } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  temperature :number = 0;
  preassure : number = 0;
  humidity :number = 0
  id:number = 0
  main:string = ""
  icon:string = "01d"
  location:string = ""
  imgLocation:string = "\assets\dayc.jpg"
  description:string = "none"
  message:string = ""
  country :string = ""


  constructor(private weatherService : WeatherService) { }
 
  ngOnInit(): void {
    
  }

  onClick(){
    
    this.weatherService.getWeather(this.location).subscribe(
      res =>{
        this.temperature = res.temp - 273
        this.preassure = res.pressure
        this.humidity = res.humidity
        this.main = res.Main
        this.id = res.id
        this.icon = res.icon
        this.message = res.message
        this.country = res.country
        this.description = res.description
      }
    )
  }
  getValue(location:string){ //textbox value
  
    this.location = location
  }

}
