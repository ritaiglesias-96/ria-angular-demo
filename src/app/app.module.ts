import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { CliComponent } from './pages/cli/cli.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { CssPreprocessorsComponent } from './pages/css-preprocessors/css-preprocessors.component';
import { NgmodulesComponent } from './pages/ngmodules/ngmodules.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavBarComponent,
    TypescriptComponent,
    HomePageComponent,
    DirectivasComponent,
    CliComponent,
    CssPreprocessorsComponent,
    NgmodulesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
