import { BrowserModule } from '@angular/platform-browser';
import { ApixuService } from './apixu.service';
import { AppComponent } from './app.component';
import {homeComponent} from './home/home.component';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WeatherComponent } from './weather/weather.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    ContactComponent,
    WeatherComponent,
    AboutmeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas:[ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent],
  providers: [ApixuService],
})
export class AppModule { }
