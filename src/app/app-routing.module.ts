import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{path:'typescript' , component: TypescriptComponent}{ path: '', component: HomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
