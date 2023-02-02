import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
   
    MaterialModule,
   
  ],
  exports:[ToolbarComponent, FooterComponent]
})
export class SharedModule { 

}
