import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'

import {Router} from '@angular/router'; 
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
editCustomer(_t28: Customer) {
throw new Error('Method not implemented.');
}
addcustomer() {
throw new Error('Method not implemented.');
}
      
 
updateCustomer() {
  throw new Error('Method not implemented.');
  }
  
    customerDetail! : FormGroup ;
    customerObj : Customer = new Customer(); //customerObj is the object of Customer Class
    CustomerList : Customer[] = [];
    CustomerService: any;
  
    constructor(private formBuilder : FormBuilder, private customerService : CustomerService, private router: Router) {}
  
    ngOnInit(): void {
      this.getAllCustomer();
  
      this.customerDetail =new FormGroup({
        id: new FormControl('',[Validators.required]),
        firstname: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
        lastname: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
        menu: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
        price: new FormControl('',[Validators.required]),
        });
  }
  clickLogout()
  {
    console.log("Successfully Logged out");  
    this.router.navigate (['/logout']);  
  }
  // validation .....................................................
  loginUser()
  {
    console.warn(this.customerDetail.value)
  }
  get id()
  {
    return this.customerDetail.get('id');
  }
  get firstname()
  {
    return this.customerDetail.get('firstname');
  }
  get lastname()
  {
    return this.customerDetail.get('lastname');
  }
  get menu()
  {
    return this.customerDetail.get('menu');
  }
  get price()
  {
    return this.customerDetail.get('price');
  }
  // ........................................................
  
    // add customer
  
    addCustomer()  {
      console.log(this.customerDetail);
      this.customerObj.id = this.customerDetail.value.id;
      this.customerObj.firstname = this.customerDetail.value.firstname;
      this.customerObj.lastname = this.customerDetail.value.lastname;
      this.customerObj.menu = this.customerDetail.value.menu;
      this.customerObj.price = this.customerDetail.value.price;
    
    //declaring the method and passing the customer object
    this.customerService.addCustomer(this.customerObj).subscribe(res=>{
      console.log(res);
      this.getAllCustomer();
      },err=>{
      console.log(err);
      });
    }
    // get  all customer
  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(res=>{
       this.CustomerList =res;
      },err=>{
      console.log("error while fetching data");
     })
    }
  
    // edit customer
  editCustomerr(custom : Customer)
  {
     this.customerDetail.controls['id'].setValue(custom.id);
     this.customerDetail.controls['firstname'].setValue(custom.firstname);
     this.customerDetail.controls['lastname'].setValue(custom.lastname);
     this.customerDetail.controls['menu'].setValue(custom.menu);
     this.customerDetail.controls['price'].setValue(custom.price);
  }
  
  // update customer
  UpdateCustomer(){
    this.customerObj.id = this.customerDetail.value.id;
    this.customerObj.firstname = this.customerDetail.value.firstname;
    this.customerObj.lastname = this.customerDetail.value.lastname;
    this.customerObj.menu = this.customerDetail.value.menu;
    this.customerObj.price = this.customerDetail.value.price;
  
    this.customerService.updateCustomer(this.customerObj).subscribe(res=>{
      console.log(res);
      this.getAllCustomer();
    },err=>{
      console.log(err);
    })
  }
    
  deleteCustomer(custom : Customer){
    this.customerService.deleteCustomer(custom).subscribe((res: any)=>{
      console.log(res);
      alert("Customer Profile Deleted Successfully");
      this.getAllCustomer();
    },(err: any)=>{
      console.log(err);
    });
  }
  }
  
  
  