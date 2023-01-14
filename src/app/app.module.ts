import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appTestComponent } from './appTest/appTest.component';
import { AppTestComponentAutoComponent } from './app-test-component-auto/app-test-component-auto.component';


@NgModule({
  declarations: [
    AppComponent,
    appTestComponent,
    AppTestComponentAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
