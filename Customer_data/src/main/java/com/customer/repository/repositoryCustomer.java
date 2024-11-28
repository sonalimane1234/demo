package com.customer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.customer.model.Customer;




public interface repositoryCustomer extends JpaRepository<Customer,Integer> {

	List<Customer> findByFirstname(String firstname);


}
