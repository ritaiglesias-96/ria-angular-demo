import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponentComponent,
    NavBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
