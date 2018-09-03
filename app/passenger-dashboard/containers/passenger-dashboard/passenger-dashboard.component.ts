import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `

    <div *ngFor="let passenger of passengers">
      {{passenger.name}}
    </div>
    <div>
      <h1 [innerHTML]="title"></h1>
      <h1> {{ title }}</h1>
      <input type="text" [value]="name" (input)="handleChange($event.target.value)">
      <div *ngIf="name.length"> 
        Searching for {{ name }}...
      </div>
      <button (click)="handleClick()">Change Name</button>

      <passenger-count
        [items]="passengers">
      </passenger-count>

      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit{
  title: string;
  name: string = '';
  
  handleBlur(event: any){
    this.name = event.target.value;
    // console.log(event);
  }

  handleInput(event: any){
    this.name = event.target.value;
  }

  handleClick(){
    this.name = 'Wheezy';
  }

  handleChange(value: string){
    this.name = value;
  }

  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) {

  }

  ngOnInit(){
    // console.log('ngOnInit');
    this.title = 'Passenger Dashboard Component';
    this.passengerService.getPassengers()
    // .subscribe((data: Passenger[]) => this.passengers = data);
    // longhand of above single line statement
    .subscribe((data: Passenger[]) => {
      // console.log('Data', data);
      this.passengers = data;
    });
  }

  handleEdit(event: Passenger) {
    // console.log(event);
    // debugger;

    // call PassengerService to update event (passenger) object
    this.passengerService.updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if(passenger.id === event.id){
          // debugger;
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    });

    // console.log(this.passengers);
  }

  handleRemove(event: Passenger) {
    // console.log(event);
    // debugger;

    // call PassengerService to delete event (passenger) object
    this.passengerService.removePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        //  event in this case will be one of the passenger objects
        return passenger.id !== event.id;
      });
    });
  }
}