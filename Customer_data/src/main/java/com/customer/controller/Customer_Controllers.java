package com.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.customer.model.Customer;
import com.customer.services.CustomerService;





@RestController
@CrossOrigin(origins ="http://localhost:4200")
@RequestMapping("/custom")
public class Customer_Controllers {

	@Autowired
	private CustomerService customerService;   
	
	//Add new customer
	@PostMapping("/addCustomer")
	public Customer addCustomer(@RequestBody Customer customer)
	{
		return customerService.addCustomer(customer);		
	}
	
	//Add more than one new customers
	@PostMapping("/addCustomers")
	public List<Customer> addAllCustomers(@RequestBody List<Customer> customers)
	{
		return customerService.addAllCustomer(customers);		
	}
	
	// Get  by ID
	@GetMapping("/getCustomerByID/{id}")
	public Customer getCustomerById(@PathVariable int id)
	{
		return customerService.getCustomerByID(id);	
	}
	
	// Get  by firstname
	@GetMapping("/getCustomerByName/{firstname}")
	public List<Customer> getCustomerByName(@PathVariable String firstname)
	{
		return customerService.getCustomerByName(firstname);	
	}
	
	
	//Get All  details
		@GetMapping("/customers")
		public List<Customer> getCustomers()
		{
			return customerService.getCustomers();
			
		}
	
	// Update customer
	@PutMapping("/updateCustomer")
	public Customer updateCustomer(@RequestBody Customer customer)
	{
		return customerService.updateCustomer(customer);		
	}
	
	
	
	// another delete try
	@DeleteMapping("/deleteCustomerById/{id}")
	public boolean deleteCustomerById(@PathVariable int id)
	{
			return customerService.deleteCustomerByID(id);	
		
	}
	
}
