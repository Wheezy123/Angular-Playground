import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService {
  constructor() {

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