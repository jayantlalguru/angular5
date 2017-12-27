
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './components/customer/customer.component';
import { GridComponent } from './partialViews/grid.Component';
import { MasterLayoutComponent } from './layout/masterLayout.component'
import { HomeComponent } from  './layout/home.component'
import { RouterModule } from "@angular/router";
import { ApplicationRoutes } from './layout/routing';
import { CustomerService } from './services/customer/customer.service';
import { SharingService } from './services/sharing/sharing.service';
import { OneComponent } from './components/sharing/one.component';
import { TwoComponent } from './components/sharing/two.component';
import { SharedModule } from './sharedmodule/shared.module';
import { StructuralComponent } from './components/directives/structural.component';
import { AttributeComponent } from './components/directives/attribute.component';
import { TwoWayComponent } from './components/sharing/twoWay.Component';
import { TodoComponent } from './components/todo/todo.component';
@NgModule({
    imports: [
        RouterModule.forRoot(ApplicationRoutes),
        BrowserModule, FormsModule, SharedModule],
    declarations: [
        CustomerComponent
        ,GridComponent
        ,MasterLayoutComponent
        ,HomeComponent
        ,OneComponent
        ,TwoComponent
        ,StructuralComponent
        ,AttributeComponent
        ,TwoWayComponent
        ,TodoComponent
    ],
    providers: [
        CustomerService,
        SharingService
    ],
    bootstrap: [MasterLayoutComponent]
})
export class AppModule{    
}
