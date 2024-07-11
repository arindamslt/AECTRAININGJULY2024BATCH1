package com.arindam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.entity.Order;
import com.arindam.repository.OrderRepository;

@Service//@Component+Transaction(commit,rollback,savepoint)
public class OrderService {
	@Autowired
private OrderRepository orepo;
	public void addData(Order o)
	{
		orepo.save(o);
	}
	public List<Order> getData()
	{
		return orepo.findAll();
	}
}
