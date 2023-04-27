import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TypescriptComponentComponent } from './components/typescript-component/typescript-component.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, NavBarComponent,TypescriptComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
