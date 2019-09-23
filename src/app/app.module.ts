import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Fase1Component } from './fase1/fase1.component';
import { Sottofase1Component } from './fase1/sottofase1/sottofase1.component';
import { Sottofase2Component } from './fase1/sottofase2/sottofase2.component';
import { Sottofase3Component } from './fase1/sottofase3/sottofase3.component';
import { RoutingStepperComponent } from './routing-stepper/routing-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    Fase1Component,
    Sottofase1Component,
    Sottofase2Component,
    Sottofase3Component,
    RoutingStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
