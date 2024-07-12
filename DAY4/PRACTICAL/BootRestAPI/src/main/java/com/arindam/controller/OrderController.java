package com.arindam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arindam.entity.Order;
import com.arindam.service.OrderService;

@RestController//@Controller+Accept the Rest Data
@RequestMapping("/order")
public class OrderController {
	@Autowired
private OrderService oservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Order o)
	{
		oservice.addData(o);
		String msg="DATA INSERTED SUCCESSFULLY";
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Order>> getData()
	{
		List<Order> olist=oservice.getData();
		return new ResponseEntity<List<Order>>(olist,HttpStatus.OK);
	}
	@DeleteMapping("/del/{orderid}")
	public ResponseEntity<String> deleteData(@PathVariable String orderid)
	{
		oservice.deleteData(orderid);
		String msg="DATA DELETED SUCCESSFULLY";
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	@GetMapping("/fetch/{orderid}")
	public ResponseEntity<Order> findByOrderid(@PathVariable String orderid)
	{
		Order ord=oservice.findByOrderid(orderid);
		return new ResponseEntity<Order>(ord,HttpStatus.OK);
	}
	@PutMapping("/upd/{orderid}")
	public ResponseEntity<Order> updateData(@PathVariable String orderid,@RequestBody Order o)
	{
		Order  ords=oservice.updateData(orderid, o);
		return new ResponseEntity<Order>(ords,HttpStatus.OK);
	}
}
