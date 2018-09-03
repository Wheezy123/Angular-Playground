import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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

  updatePassenger(passenger: Passenger): Observable<Passenger>{
    // create custom http headers here, ** must import Headers from angular/http
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    // create custom request options here, ** must import RequestOptions from angular/http 
    let options = new RequestOptions({
      // referring to headers defined above
      headers: headers
    });

    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => {
        return response.json();
      });
  }

  removePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => {
        return response.json();
      });
  }
}