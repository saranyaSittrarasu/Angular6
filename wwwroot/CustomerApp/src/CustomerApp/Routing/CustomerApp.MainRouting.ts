import { HomeComponent } from "../Home/CustomerApp.HomeComponent";

//export const Mainroutes = [
//  { path: 'Home', component: HomeComponent },
//  { path: 'Customer', component: CustomerComponent },
//  { path: 'Supplier', component: SupplierComponent }];

export const Mainroutes=[
    {path:'Home', component:HomeComponent},
    { path: 'Customer', 
    loadChildren:() => import('../Customer/CustomerApp.CustomerModule').then(m => m.CustomerModule) },
    { path: 'Supplier', 
    loadChildren:() => import('../Supplier/CustomerApp.SupplierModule').then(m => m.SupplierModule) },
    { path: '', component: HomeComponent }
];

