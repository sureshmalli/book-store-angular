import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowItWorksComponent
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
