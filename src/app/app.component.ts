import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-sidenav-container>
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </md-sidenav-container>
  `,
})
export class AppComponent {};
