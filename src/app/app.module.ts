import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfluenceLadderComponent } from './influence-ladder/influence-ladder.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    InfluenceLadderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
