import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // *** Components are Declared, Modules are Imported!!!
  declarations: [
    // List declared Components from above here
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // List declared Modules from above here
    // angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

