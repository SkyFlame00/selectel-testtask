import { Component, OnInit } from '@angular/core';

import { ForecastService } from '../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  forecastSubscription: Subscription | null = null;
  forecasts: any[] = [];
  isLoading: boolean = false;

  constructor(
    private forecastService: ForecastService
  ) { }

  ngOnInit() {
  }

  onSubmit(city) {
    console.log('data came', city);

    this.forecastSubscription = this.forecastService.get(city, 'ru')
      .subscribe((forecasts) => {
        console.log(forecasts);
        this.forecastSubscription.unsubscribe();
        this.isLoading = false;
      });
    
    this.isLoading = true;
  }

}
