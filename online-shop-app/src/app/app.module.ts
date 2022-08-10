import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClothingComponent } from './clothing/clothing.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerReactiveFormComponent } from './customer-reactive-form/customer-reactive-form.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { CandidateProfileValidReactiveComponent } from './candidate-profile-valid-reactive/candidate-profile-valid-reactive.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ClothingComponent,
    FurnitureComponent,
    ElectronicComponent,
    PageNotFoundComponent,
    CustomerReactiveFormComponent,
    CandidateProfileComponent,
    CandidateProfileValidReactiveComponent,
    SignupFormComponent,
    KidsComponent,
    MensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
