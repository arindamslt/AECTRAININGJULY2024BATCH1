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

import com.arindam.entity.Food;

import com.arindam.service.FoodService;

@RestController
@RequestMapping("/food")
public class FoodController {
	@Autowired
private FoodService  fservice;
	@PostMapping("/add")
	public ResponseEntity<String> addData(@RequestBody Food f)
	{
		String msg="FOOD ADDED SUCCESSFULLY";
		fservice.addData(f);
		return new ResponseEntity<String>(msg,HttpStatus.CREATED);
	}
	@GetMapping("/fetch")
	public ResponseEntity<List<Food>> getData()
	{
		List<Food> flist=fservice.getData();
		return new ResponseEntity<List<Food>>(flist,HttpStatus.OK);
	}
	@DeleteMapping("/del/{fid}")
	public ResponseEntity<String> deleteData(@PathVariable String fid)
	{
		fservice.deleteData(fid);
		String msg="DATA DELETED SUCCESSFULLY";
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	@GetMapping("/fetch/{fid}")
	public ResponseEntity<Food> findByOrderid(@PathVariable String fid)
	{
		Food ord=fservice.findByfoodid(fid);
		return new ResponseEntity<Food>(ord,HttpStatus.OK);
	}
	@PutMapping("/upd/{fid}")
	public ResponseEntity<Food> updateData(@PathVariable String fid,@RequestBody Food o)
	{
		Food  ords=fservice.updateData(fid, o);
		return new ResponseEntity<Food>(ords,HttpStatus.OK);
	}
}
