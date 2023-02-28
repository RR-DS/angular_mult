import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultComponent } from './mult/mult.component';
import { MultService } from './services';


@NgModule({
  declarations: [
    MultComponent
  ],
  imports: [
    CommonModule
  ],
   exports: [
    MultComponent
   ],
    providers: [
      MultService
    ]
})
export class MultModule { }
