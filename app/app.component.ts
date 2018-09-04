import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  // template: `
  //   <div class="app">
  //     <passenger-dashboard></passenger-dashboard>
  //   </div>    
  // `
  template: `
    <div class="app">
      <nav class="nav">
        <a 
          *ngFor="let item of nav"
          [routerLink]="item.link"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: item.exact }">
          {{ item.name }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>    
  `
  // TEMPLATEURL is optional or could use above inline template
  // templateUrl: './app.component.html'
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/opps',
      name: '404',
      exact: false
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    }
  ];
}
