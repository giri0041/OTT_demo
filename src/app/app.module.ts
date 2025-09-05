import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarsoulComponent } from './carsoul/carsoul.component';
import { HomeComponent } from './home/home.component';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HighlightDirective } from './highlight.directive';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import {HttpClientModule} from '@angular/common/http';
import { HelpSettingComponent } from './help-setting/help-setting.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { ParentalControlComponent } from './parental-control/parental-control.component';
import { RegisterComponent } from './register/register.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarsoulComponent,
    HomeComponent,
    TrendingMovieComponent,
    SubscriptionDetailsComponent,
    MoviesComponent,
    MovieDetailsComponent,
    HighlightDirective,
    TvShowsComponent,
    HelpSettingComponent,
    AccountDetailsComponent,
    RegisterDeviceComponent,
    ParentalControlComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
