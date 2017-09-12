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

import {
  SwiperModule,
  SwiperConfigInterface
} from 'ngx-swiper-wrapper';

import { ScrollToModule } from 'ng2-scroll-to';

import { NguiMapModule } from '@ngui/map';

import { environment as env } from '../environments/environment';

import {
  AppComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  SlideComponent,
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

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  keyboardControl: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SlideComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.googleapis.com/maps/api/js?key=' + env.googleKey
    }),
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !env.production }
    ),
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {};
