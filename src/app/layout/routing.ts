import { Component } from '@angular/core'
import { CustomerComponent } from '../../app/components/customer/customer.component'
import { MasterLayoutComponent } from './masterLayout.component'
import { HomeComponent } from  './home.component'
import { OneComponent } from '../components/sharing/one.component';
import { StructuralComponent } from '../components/directives/structural.component';
import { AttributeComponent } from '../components/directives/attribute.component';
import { TwoWayComponent } from '../components/sharing/twoWay.Component';
import { TodoComponent } from '../components/todo/todo.component';
export const ApplicationRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Sharing', component: OneComponent },
    { path: 'Attribute', component: AttributeComponent },
    { path: 'Structural', component: StructuralComponent },
    { path: 'Twoway', component: TwoWayComponent },
    { path: 'Todo', component: TodoComponent },
    { path: '**', redirectTo: 'Home', pathMatch: 'full' }
]