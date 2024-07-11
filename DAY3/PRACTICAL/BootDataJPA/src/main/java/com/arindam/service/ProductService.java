package com.arindam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.entity.Product;
import com.arindam.repository.ProductRepository;

@Service//@Component+Transaction Management
public class ProductService {
	@Autowired
private ProductRepository prepo;
	public void addData(Product ps)
	{
		prepo.save(ps);
		
	}
	public List<Product> getData()
	{
		return prepo.findAll();
	}
	public void deleteData(String pid)
	{
		Product ps=prepo.findById(pid).orElse(null);
		if(ps!=null)
		{
			prepo.delete(ps);
		}
	}
	public void updateData(String pid,Integer pqty,double price,String compnm,String pname )
	{
		Product ps1=prepo.findById(pid).orElse(null);
		if(ps1!=null)
		{
			ps1.setPid(pid);
			ps1.setPqty(pqty);
			ps1.setPrice(price);
			ps1.setPname(pname);
			ps1.setCompnm(compnm);
			prepo.save(ps1);
			
		}
	}
	
}
