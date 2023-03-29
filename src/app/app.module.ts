import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GohanComponent } from './gohan/gohan.component';
import { GokuComponent } from './goku/goku.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GohanComponent,GokuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
