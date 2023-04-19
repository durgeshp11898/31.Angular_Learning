import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path:"first",
    component:FirstComponent,
    pathMatch:'full'
  },
  {
    path:"",
    component:FirstComponent,
    pathMatch:'full'
  },
  {
    path:"second",
    component:SecondComponent,
    pathMatch:'full'
  },
  {
    path:"third",
    component:ThirdComponent,
    pathMatch:'full'
  },
  {
    path:"**",
    component:PagenotfoundComponent,
    pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
