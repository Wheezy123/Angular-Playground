import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <br/>
      <br/>
      (BEGIN Count component)
      <h3>Airline Passengers!!</h3>
      <div>
        Total passengers: {{ items.length }}
        Total checked in: {{checkedInCount()}} / {{items.length}}
      </div>
      (END Count component)
      <br/>  
      <br/>  
    </div>

  `
})

export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  checkedInCount(): number {
    if(!this.items) return;
    return this.items.filter((passenger: Passenger) => {
      return passenger.checkedIn;
    }).length;

    // above function as shorthand tS
    // return this.items.filter((passenger: Passenger) => passenger.checkedIn).length:
  }
  constructor() {}
}