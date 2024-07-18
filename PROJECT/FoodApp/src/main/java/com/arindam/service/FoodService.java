package com.arindam.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arindam.entity.Food;

import com.arindam.repository.FoodRepository;

@Service
public class FoodService {
	@Autowired
private FoodRepository frepo;
	public void addData(Food f)
	{
		frepo.save(f);
	}
	public List<Food> getData()
	{
		return frepo.findAll();
	}
	public Food findByfoodid(String foodid)
	{
		Food f=frepo.findById(foodid).orElse(null);
		return f;
	}
	public void deleteData(String foodid)
	{
		Food ord=frepo.findById(foodid).orElse(null);
		if(ord!=null)
		{
			frepo.delete(ord);
		}
	}
	public Food updateData(String foodid,Food o)
	{
		Food ord=frepo.findById(foodid).orElse(null);
		if(ord!=null)
		{
			ord.setFid(foodid);
			ord.setFname(o.getFname());
			ord.setFprice(o.getFprice());
			frepo.save(ord);
		}
		return ord;
	}
}
