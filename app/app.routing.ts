import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { BolsistaspageComponent } from './bolsistaspage/bolsistaspage.component';
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';



const APP_ROUTES: Routes = [
    { path: '', component: MainpageComponent },
    { path: 'bolsistaspage', component: BolsistaspageComponent },
    { path: 'cadastro-page', component: CadastroPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);