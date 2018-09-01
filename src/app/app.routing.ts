import { BolsistaspageComponent } from './bolsistaspage/bolsistaspage.component';
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';



const APP_ROUTES: Routes = [
    { path: '', component: MainpageComponent },
    { path: 'bolsistaspage', component: BolsistaspageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);