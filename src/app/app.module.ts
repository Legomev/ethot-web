import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
//Angular material components
import { AngularMaterialModule } from './angular-material.module';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    LogInComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
