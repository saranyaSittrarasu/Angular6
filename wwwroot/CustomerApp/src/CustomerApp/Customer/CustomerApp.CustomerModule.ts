import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import{RouterModule} from "@angular/router";
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import{GridComponent} from "../Utility/CustomerApp.GridComponent";
import { CutomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import {MyInterceptor} from '../Utility/Utility.HttpInterceptor'

@NgModule({
  declarations: [
    CustomerComponent,GridComponent
  ],
  imports: [
    RouterModule.forChild(CutomerRoutes),
    CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:MyInterceptor, multi:true}],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
