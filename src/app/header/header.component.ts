import { Component, Input } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = env.appName;

  @Input('no-icon')
  noIcon: Boolean = false;

  @Input('sticky')
  sticky: Boolean = false;
}
