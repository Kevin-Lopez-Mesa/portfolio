'use strict'

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CatWikiComponent } from './cat-wiki/cat-wiki.component';
import { HomeComponent } from './home/home.component';
import { CountryQuizComponent } from "./country-quiz/country-quiz.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'catwiki', component: CatWikiComponent},
    {path: 'countryquiz', component: CountryQuizComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);