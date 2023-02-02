import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './public-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
   
 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
