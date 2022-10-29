import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../utility/utility.module';

const prodRoutes : Routes =[
  { path: "", component: ProductComponent ,children:[
    { path: "laptop", component: LaptopComponent }, // localhost://4200/products/laptop
    { path: "mobile", component: MobileComponent },
    { path: "tv", component: TvComponent },
    { path: "washingmachine", component: WashingMachineComponent }
  ] }, // // localhost://4200/products
  
]

@NgModule({
  declarations: [
    LaptopComponent,
    MobileComponent,
   TvComponent,
   ProductComponent,
   WashingMachineComponent
  ],
  imports: [
    CommonModule, //exports all bydefault modules
  RouterModule.forChild(prodRoutes),
  UtilityModule
],
  exports:[
RouterModule
  ]
})
export class ProductModule {
  constructor(){
    console.log('production module called');
    
  }
 }