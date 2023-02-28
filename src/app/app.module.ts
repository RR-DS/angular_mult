import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MultModule } from './mult';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
