import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BolsistaspageComponent } from './bolsistaspage/bolsistaspage.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    BolsistaspageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
