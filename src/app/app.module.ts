import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ButtonComponentComponent } from './components/button-component/button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ButtonComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
