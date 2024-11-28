import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerDetail(stud: Customer) {
    throw new Error('Method not implemented.');
  }
  getCustomerById(id: number) {
    throw new Error('Method not implemented.');
  }
  
  
 addCustomerURL : string;
 getCustomerURL : string;
 updateCustomerURL : string;
 deleteCustomerURL : string;
//  getStudentDetailsURL : string; 

  constructor(private http : HttpClient) { 
    this.addCustomerURL = 'http://127.0.0.1:8080/custom/addCustomer';
    this.getCustomerURL = 'http://127.0.0.1:8080/custom/customers';
    this.updateCustomerURL = 'http://127.0.0.1:8080/custom/updateCustomer';
    this.deleteCustomerURL = 'http://127.0.0.1:8080/custom/deleteCustomerById';
    // this.getcustomerDetailsURL = 'http://localhost:9090/custom/getcustomerByID'; 
  }
  // add customer
   addCustomer(custom : Customer): Observable<Customer> {
    return this.http.post<Customer>(this.addCustomerURL,custom);
  }
  // get customer
  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.getCustomerURL);
   }
 
 // update customer
 updateCustomer(custom : Customer): Observable<Customer> {
   return this.http.put<Customer>(this.updateCustomerURL, custom);
 }
 
 // delete customer
  deleteCustomer(custom : Customer): Observable<Customer> {
   return this.http.delete<Customer>(this.deleteCustomerURL+ '/'+ custom.id);
 }
 
}
