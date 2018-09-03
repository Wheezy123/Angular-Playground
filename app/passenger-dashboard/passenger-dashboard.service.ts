import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    // console.log(this.http);
  }

  getPassengers(): Passenger[]{
    return [
      {
        id: 1,
        name: 'jerome',
        checkedIn: true
      },
      {
        id: 2,
        name: 'jessica',
        checkedIn: false
      },
      {
        id: 3,
        name: 'tammy',
        checkedIn: true
      },
      {
        id: 4,
        name: 'benny',
        checkedIn: false
      },
      {
        id: 5,
        name: 'Jason',
        checkedIn: true
      },
      {
        id: 6,
        name: 'molly',
        checkedIn: true
      }
    ]
  }
}