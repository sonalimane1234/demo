package com.customer.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.customer.model.Customer;
import com.customer.repository.repositoryCustomer;







@Service
public class CustomerService {
	
	@Autowired
	private repositoryCustomer repositoryCustomer;  // "customerRepository" is the object of "CustomerService" class.
    
	// add customer
	

	// get all customer
	public List<Customer> addAllCustomer(List<Customer> customers) {
		return repositoryCustomer.saveAll(customers);
	}
	
    // get customer by id
	public Customer getCustomerByID(int id) {
		return repositoryCustomer.findById(id).orElse(null);
	}
  
	// get customer by name
	public List<Customer> getCustomerByName(String firstname) {
		return repositoryCustomer.findByFirstname(firstname);
	}
	
	// update customer
	public Customer updateCustomer(Customer customer) {
		Customer existingTEACH = repositoryCustomer.findById(customer.getId()).orElse(null);
		if(existingTEACH == null)
		{
			return repositoryCustomer.save(customer);
		}
		else
		{
			repositoryCustomer.deleteById(existingTEACH.getId());
			repositoryCustomer.save(customer);
		}
		return customer;
	}

	// delete customer
	public boolean deleteCustomerByID(int id) {
		Customer existingTEACH = repositoryCustomer.findById(id).orElse(null);
		System.out.println(existingTEACH);
		if(existingTEACH != null)
		{
			repositoryCustomer.deleteById(id);
			return true;
		}
		else 
		{
		return false;
		}
	}
	
	public List<Customer> getCustomers() {
		return repositoryCustomer.findAll();
	}

	public Customer addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return repositoryCustomer.save(customer);
	}

}


