import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './pages/typescript/typescript.component';

const routes: Routes = [{path:'typescript' , component: TypescriptComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
