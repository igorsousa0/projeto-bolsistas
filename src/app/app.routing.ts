import { BolsistasComponent } from './bolsistas/bolsistas.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '../../node_modules/@angular/core';

const APP_ROUTES: Routes = [
    { path: 'bolsistas', component: BolsistasComponent},
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);