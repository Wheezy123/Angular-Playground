import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Passenger } from './models/passenger.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const PASSENGER_API: string = '/api/passengers';

// Injectable needs to be used anytime an external dependency is imported!!
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    // console.log(this.http);
  }

  getPassengers(): Observable<Passenger[]>{
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => {
        return response.json();
      });
  }
}