import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      {{ passsenger | json }}
    </div>
    {{passenger | json }}
  `

})

export class PassengerViewerComponent implements OnInit {
  // line below tells our component class to have a property passenger, that is of type Passenger
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) {

  }

  ngOnInit(){
    debugger;
    this.passengerService
    .getPassenger(1)
    .subscribe((data: Passenger) => {
      debugger;
      this.passenger = data
      debugger;
    });
  }
}