import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { materialize } from 'rxjs';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerDetailsComponent,
    LoginpageComponent,
    FooterComponentComponent,
    LogoutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
