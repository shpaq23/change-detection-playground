import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child11Component } from './child11/child11.component';
import { Child21Component } from './child21/child21.component';
import { Child12Component } from './child12/child12.component';
import { Child22Component } from './child22/child22.component';
import { Child32Component } from './child32/child32.component';
import { Child122Component } from './child122/child122.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ChildComponent,
    Child1Component,
    Child2Component,
    Child11Component,
    Child21Component,
    Child12Component,
    Child22Component,
    Child32Component,
    Child122Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
