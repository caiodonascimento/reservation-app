import { Component } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = env.appName;
}
