import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Rx';

@Component({
  template: `
  <div class="error-message">
    <h1>404</h1>
    <span>Página no existe</span>
    <br/>
    <span class="timer">Te redireccionaremos a la página de incio</span>
  </div>
  `,
  styles: [
    `.error-message {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #673ab7;
      font-family: Verdana, sans-serif;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: -1px;
      text-align: center;
      font-weight: bold;
    }
    .error-message h1 {
      font-size: 10em;
      margin-top: 200px;
      margin-bottom: 0px;
    }
    .error-message .timer {
      font-size: 0.7em;
      letter-spacing: 0;
    }
    `],
})
export class PageNotFoundComponent implements OnInit {
    constructor(private router: Router) {
  }

  ngOnInit() {
    Observable
      .timer(5000, 10)
      .subscribe(t => {
        if (t == 0) this.router.navigate(['/home']);
      });
  }
};
