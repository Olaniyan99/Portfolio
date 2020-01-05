import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: homeComponent},
  {path: 'weather', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
