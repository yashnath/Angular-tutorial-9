import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UufuComponent } from './uufu/uufu.component';
import { UuComponent } from './uu/uu.component';


const routes: Routes = [{path:'iii',component:UufuComponent},{path:'',component:UuComponent},{path:'**',pathMatch:'full',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
