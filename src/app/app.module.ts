import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BolsistasComponent } from './bolsistas/bolsistas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BolsistasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
