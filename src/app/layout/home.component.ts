import { Component, style } from "@angular/core"
import {Router} from '@angular/router'
@Component({    
    templateUrl: './home.html',
    styleUrls: ['../css/home.css']
})
export class HomeComponent{
    constructor(private router:Router){}
    Navigate(value){              
        switch(value) { 
            case "Twoway": { 
                this.router.navigate(['Twoway']);
               break; 
            } 
            case "Customer": { 
                this.router.navigate(['Customer']);
               break; 
            } 
            case "Sharing": { 
                this.router.navigate(['Sharing']);
               break; 
            } 
            case "Attribute": { 
                this.router.navigate(['Attribute']);
               break; 
            } 
            case "Structural": { 
                this.router.navigate(['Structural']);
               break; 
            } 
            case "Todo": { 
                this.router.navigate(['Todo']);
               break; 
            }              
         } 
    }
    
    customer: string = "Customer data fetched from service and loaded inside a grid. You can also add & update customers. The grid is dyanamic and can be used in any component. Click To Check";
    twoway: string = "2 way Data Binding. Write/delete/edit in one textbox and see it in the other and vice versa. Click To Check";
    sharing: string = "Sharing data between 2 components by the help of service. Type/edit/delete in any one textbox, it will reflect to the other. Click To Check";
    attribute: string = "Attribute directive to underline any text. Click To Check";
    structural: string = "Structural directive to create element based on the value passed. Click To Check";
    todo: string = "Add To do items and never forget to complete your task. Create todos and mark them completed when done. You can also see the completed task. Click To Check";
}