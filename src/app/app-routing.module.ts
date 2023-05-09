import { CliComponent } from './pages/cli/cli.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { CssPreprocessorsComponent } from './pages/css-preprocessors/css-preprocessors.component';
import { NgmodulesComponent } from './pages/ngmodules/ngmodules.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cli', component: CliComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'scss', component: CssPreprocessorsComponent },
  { path: 'ngmodules', component: NgmodulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
