import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
const routes: Routes = [{path:'typescript' , component: TypescriptComponent},{ path: '', component: HomePageComponent },{ path: 'directivas', component: DirectivasComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
