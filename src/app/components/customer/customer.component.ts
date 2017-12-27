import { Component } from "@angular/core"
import { CustomerModel } from "../../models/customer/customer.model";
import { CustomerService } from '../../services/customer/customer.service';

@Component({    
    templateUrl: '../../views/customer/customer.html'
})
export class CustomerComponent{
    //binding logic
    currentCustomer: CustomerModel = new CustomerModel(); 
    //customer collection
    customers: Array<CustomerModel> = new Array<CustomerModel>();
    constructor(private customerService: CustomerService){
        this.customers = customerService.InitialCustomerList();
    }
   
    Add(){
        if(this.currentCustomer.customerCode != '' && this.currentCustomer.customerName != '')
        {
            this.customers.push(this.currentCustomer);
            this.customers = this.customers.slice();
            this.currentCustomer = new CustomerModel();
        }
    }
    Select(customer: CustomerModel)
    {
        this.currentCustomer = Object.assign({},customer);
    }
    Update(){
        /*var updatedCustomer = this.customers.find(c=>c.customerCode == this.currentCustomer.customerCode)
        updatedCustomer.customerName = this.currentCustomer.customerName;
        updatedCustomer.customerAmount = this.currentCustomer.customerAmount;*/
        for(let customer of this.customers){
            if(customer.customerCode == this.currentCustomer.customerCode){
                customer.customerName = this.currentCustomer.customerName;
                customer.customerAmount = this.currentCustomer.customerAmount;
            }
        }
        this.currentCustomer = new CustomerModel();
    }    
    Cancel(){
        this.currentCustomer = new CustomerModel();
    }
}