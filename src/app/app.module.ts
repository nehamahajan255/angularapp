import { Comp2Component } from './comp2/comp2.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Comp3Component } from './comp3/comp3.component';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { Ngfor1Component } from './ngfor1/ngfor1.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustdirDirective } from './custdir.directive';
import { ChildComponent } from './child/child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { SimpletempletComponent } from './simpletemplet/simpletemplet.component';
import { StdformComponent } from './stdform/stdform.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [
   AppComponent,
   
   Comp2Component,
   Comp3Component,
   Comp1Component,
   NgforComponent,
   Ngfor1Component,
   NgswitchComponent,
   NgstyleComponent,
   NgclassComponent,
   CustdirDirective,
   ChildComponent,
   LifecyclehooksComponent,
   SimpletempletComponent,
   
   StdformComponent,
   
   FormComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
