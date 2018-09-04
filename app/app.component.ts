import { Component } from '@angular/core';

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
      <passenger-viewer></passenger-viewer>
    </div>    
  `
  // TEMPLATEURL is optional or could use above inline template
  // templateUrl: './app.component.html'
})
export class AppComponent {
  
}
