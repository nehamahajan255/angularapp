import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NoPageToDisplayComponent } from "./no-page-to-display/no-page-to-display.component";
// import { LaptopComponent } from "./product/laptop/laptop.component";
// import { MobileComponent } from "./product/mobile/mobile.component";
// import { TvComponent } from "./product/tv/tv.component";
// import { WashingMachineComponent } from "./product/washing-machine/washing-machine.component";
import { StdformComponent } from "./stdform/stdform.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "stdform", component: StdformComponent },
  { path: "login", component: LoginComponent },
  {path: 'product', loadChildren: './product/product.module#ProductModule'},
  {path: 'service', loadChildren: './service/service.module#ServiceModule'},

  {path:'orders', loadChildren:'./orders/orders.module#OrdersModule'},//lazy loading
  { path: "**", component: NoPageToDisplayComponent }
  // { path: "product", localChildren:'./product/product.module#ProductModule'}
    // children: [
    //   // { path: "", component: ProductComponent }, // // localhost://4200/products
    //   { path: "laptop", component: LaptopComponent }, // localhost://4200/products/laptop
    //   { path: "mobile", component: MobileComponent },
    //   { path: "tv", component: TvComponent },
    //   { path: "washingMachine", component: WashingMachineComponent },
    // ],
  
];
// for routing

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})], //preloading strategy
  exports: [RouterModule],
})
export class AppRoutingModule {}
