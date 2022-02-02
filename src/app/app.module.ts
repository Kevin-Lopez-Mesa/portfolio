import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { CatWikiComponent } from './cat-wiki/cat-wiki.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { CountryQuizComponent } from './country-quiz/country-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    CatWikiComponent,
    HomeComponent,
    SliderComponent,
    CountryQuizComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
