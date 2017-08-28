import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './app.material-module';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import { environment as env } from '../environments/environment';

import {
  AppComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  PageNotFoundComponent
} from './';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !env.production }
    )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {};
