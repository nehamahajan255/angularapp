import { Comp2Component } from './comp2/comp2.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Comp3Component } from './comp3/comp3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { Ngfor1Component } from './ngfor1/ngfor1.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ChildComponent } from './child/child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { SimpletempletComponent } from './simpletemplet/simpletemplet.component';
import { StdformComponent } from './stdform/stdform.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { PracticeformComponent } from './practiceform/practiceform.component';
import { AddremoveuserComponent } from './addremoveuser/addremoveuser.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoService } from './sevices/demo.service';
import {HttpClientModule} from '@angular/common/http';
import { UserCompComponent } from './user-comp/user-comp.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { NestedcompComponent } from './nestedcomp/nestedcomp.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { HomeComponent } from './home/home.component';
import { NoPageToDisplayComponent } from './no-page-to-display/no-page-to-display.component'; import { RouterModule,Routes } from '@angular/router';
import { LifecyclehooksPracticeComponent } from './lifecyclehooks-practice/lifecyclehooks-practice.component';
import { SimpleComponent } from './hooks/simple.component';
import { TemppracticeComponent } from './temppractice/temppractice.component';

 
// import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
// import { ProductModule } from './product/product.module';
// import { ServiceModuleModule } from './service-module/service-module.module';
import { ServiceModule } from './service/service.module';
import { ProductModule } from './product/product.module';
import { AuthComponent } from './auth/auth.component';
import { MypipePipe } from './mypipe.pipe';

// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo:'login', pathMatch:'full'},
//   {path :'register user', component: ReactiveFormComponent},
//  {path :'login' , component :LoginComponent},
//   {path: 'products', component: ProductComponent, children : [
    
//     { path: 'laptop', component: LaptopComponent}, // localhost://4200/products/laptop
//     { path: 'tablet', component: MobileComponent},
//     { path: 'tv', component: TvComponent},
//     { path: 'washingmachine', component:WashingMachineComponent}
//   ]},
//   {path :'**' ,component:NoPageToDisplayComponent},

// ];
// for routing
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
  
   ChildComponent,
   LifecyclehooksComponent,
   SimpletempletComponent,
   
   StdformComponent,
   
   FormComponent,
   
   IndexComponent,
   
   PracticeformComponent,
   
   AddremoveuserComponent,
   
   ReactiveFormComponent,
   
   UserCompComponent,
   
   PipedemoComponent,
   
   NestedcompComponent,
   
   NgIfComponent,
   
   HomeComponent,
   
   NoPageToDisplayComponent,
   
   LifecyclehooksPracticeComponent,
   SimpleComponent,
   TemppracticeComponent,
   LoginComponent,
   AuthComponent,
   MypipePipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     
    
    
   ServiceModule,
   AppRoutingModule
   
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log('app module called');
  
}
 }