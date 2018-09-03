import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';


@NgModule({
  // *** Components are Declared, Modules are Imported!!!
  declarations: [
    // List declared Components from above here
    AppComponent
  ],
  imports: [
    // List declared Modules from above here
    // angular modules
    BrowserModule,
    CommonModule,
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

