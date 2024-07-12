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
	public void deleteData(String orderid)
	{
		Order ord=orepo.findById(orderid).orElse(null);
		if(ord!=null)
		{
			orepo.delete(ord);
		}
	}
	public Order findByOrderid(String orderid)
	{
		Order ord=orepo.findById(orderid).orElse(null);
		return ord;
	}
	public Order updateData(String orderid,Order o)
	{
		Order ord=orepo.findById(orderid).orElse(null);
		if(o!=null)
		{
			ord.setOid(orderid);
			ord.setOqty(o.getOqty());
			ord.setPrice(o.getPrice());
			ord.setCname(o.getCname());
			orepo.save(ord);
		}
		return ord;
	}
}
