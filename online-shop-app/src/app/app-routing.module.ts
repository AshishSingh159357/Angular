import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateProfileValidReactiveComponent } from './candidate-profile-valid-reactive/candidate-profile-valid-reactive.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { ClothingComponent } from './clothing/clothing.component';
import { CustomerReactiveFormComponent } from './customer-reactive-form/customer-reactive-form.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MensComponent } from './mens/mens.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'furniture',
    component:FurnitureComponent
  },
  {
    path:'clothing',
    component:ClothingComponent,
    children:[
      {
        path:'kids',
        component:KidsComponent
      },
      {
        path:'mens',
        component:MensComponent
      }
  ]
  },
  {
    path:'electronic',
    component:ElectronicComponent
  },
  {
    path:'profile',
    component:CustomerReactiveFormComponent
  },
  {
    path:'candidate',
    component:CandidateProfileComponent
  },
  {
    path:'reactive',
    component:CandidateProfileValidReactiveComponent
  },
  {
    path:'signup',
    component:SignupFormComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'**',
   component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
