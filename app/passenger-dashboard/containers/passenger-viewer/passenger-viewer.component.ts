import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <div>
        <button (click)="goBack()">
           &lsaquo; Go Back
        </button>
      </div>
      <passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `

})

export class PassengerViewerComponent implements OnInit {
  // line below tells our component class to have a property passenger, that is of type Passenger
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}

  ngOnInit(){
    // debugger;
    this.route.params
    .switchMap((data: Passenger) => {
      // console.log(data);
      return this.passengerService.getPassenger(data.id);
    })
    // this.passengerService
    // .getPassenger(1)
    .subscribe((data: Passenger) => {
      // debugger;
      this.passenger = data;
      // debugger;
    });
    // debugger;
  }

  onUpdatePassenger(event: Passenger){
    console.log(event);
    this.passengerService.updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, event)
    })
  }

  // imperative routing example below
  goBack() {
    this.router.navigate(['passengers'])
  }
}