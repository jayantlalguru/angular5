import { Injectable } from '@angular/core'
import { CustomerModel } from '../../models/customer/customer.model'
@Injectable()
export class CustomerService{
    customers: Array<CustomerModel> = new Array<CustomerModel>();
    customer: CustomerModel = new CustomerModel();
    private customerCodeNew: string = "";
    //Create data for customer page load
    InitialCustomerList(): Array<CustomerModel>{
        if(this.customers.length == 0){
            for(let index = 0; index < 5; index++){            
                this.customer.customerAmount = 400 + index;
                this.customer.customerCode = "A" + "9004" + index;
                this.customer.customerName = "Customer" + index;            
                this.customers.push(this.customer);
                this.customer = new CustomerModel();
                this.get();
            }
        }
        return this.customers;
    }

    get(){
       console.log(Date.now.toString()); 
    }
}