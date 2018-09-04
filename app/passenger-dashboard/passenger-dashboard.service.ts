import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Passenger } from './models/passenger.interface';

import { Observable } from 'rxjs/Observable';
// rxjs map operator
import 'rxjs/add/operator/map';

// rxjs request error handling
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// rxjs promise operator
// import 'rxjs/add/operator/promise';

const PASSENGER_API: string = '/api/passengers';

// Injectable needs to be used anytime an external dependency is imported!!
@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    // console.log(this.http);
  }

  // Observable using rxjs map
  getPassengers(): Observable<Passenger[]>{
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => {
        return response.json();
      })
      // error handling below
      .catch((error: any) => Observable.throw(error.json()));
  }

  // Observable using rxjs map
  getPassenger(id: number): Observable<Passenger>{
    // debugger;
    return this.http
      .get( `${PASSENGER_API}/${id}`)
      .map((response: Response) => {
        // debugger;
        return response.json();
      })
      // error handling below
      .catch((error: any) => Observable.throw(error.json()));
  }

  // // *Promise using rxjs promise
  // getPassengers(): Promise<Passenger[]>{
  //   return this.http
  //     .get(PASSENGER_API)
  //     .toPromise()
  //     .then((response: Response) => {
  //       return response.json();
  //     });
  // }


  // Observable using rxjs map
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
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  // *Promise using rxjs promise
  // updatePassenger(passenger: Passenger): Promise<Passenger>{
  //   // create custom http headers here, ** must import Headers from angular/http
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });

  //   // create custom request options here, ** must import RequestOptions from angular/http 
  //   let options = new RequestOptions({
  //     // referring to headers defined above
  //     headers: headers
  //   });

  //   return this.http
  //     .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
  //     .toPromise()
  //     .then((response: Response) => {
  //       return response.json();
  //     });
  // }

  // Observable using rxjs map
  removePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  // *Promise using rxjs promise
  // removePassenger(passenger: Passenger): Promise<Passenger>{
  //   return this.http
  //     .delete(`${PASSENGER_API}/${passenger.id}`)
  //     .toPromise()
  //     .then((response: Response) => {
  //       return response.json();
  //     });
  // }
}