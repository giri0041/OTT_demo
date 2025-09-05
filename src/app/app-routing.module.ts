import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { HelpSettingComponent } from './help-setting/help-setting.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { ParentalControlComponent } from './parental-control/parental-control.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { RegisterComponent } from './register/register.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'movie/:movieTitle',component:MovieDetailsComponent},
  {path:'tv-shows',component:TvShowsComponent},
  {path:'help-setting',component:HelpSettingComponent,
  children:[
    {path:'account-details',component:AccountDetailsComponent},
    {path:'register-device',component:RegisterDeviceComponent},
    {path:'parental-control',component:ParentalControlComponent}
  ]
},
   {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
