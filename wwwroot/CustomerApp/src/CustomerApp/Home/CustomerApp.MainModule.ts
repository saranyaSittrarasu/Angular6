import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import{RouterModule} from "@angular/router";
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { Mainroutes } from '../Routing/CustomerApp.MainRouting';
import { DbLogger, BaseLogger, ConsoleLogger, } from '../Utility/CustomerApp.Logger';

var providerscoll:any=[];
//http call get this from the server
providerscoll.push({provide:"1",useClass:DbLogger});
providerscoll.push({provide:"2",useClass:ConsoleLogger});
providerscoll.push({provide:BaseLogger,useClass:ConsoleLogger});

@NgModule({
  declarations: [
    HomeComponent,MasterPageComponent
  ],
  imports: [
    RouterModule.forRoot(Mainroutes),
    BrowserModule,FormsModule
  ],
  providers: [providerscoll],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
