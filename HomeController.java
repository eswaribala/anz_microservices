package com.anz.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


import com.anz.models.Customer;

@Controller
public class HomeController {
	@Autowired
	private Validator validator;

	@RequestMapping(value="/home",method=RequestMethod.GET)
	public String index(HttpServletRequest req,HttpServletResponse res,ModelMap map)
	{
		map.addAttribute("message", "Banking Application");
		return ("index");
	}
	
	@RequestMapping(value="/reg.htm",method=RequestMethod.GET)
	public ModelAndView registration(HttpServletRequest req,HttpServletResponse res,ModelMap map)
	{
		//map.addAttribute("message", "Banking Application");
		Customer customer = new Customer();
		map.addAttribute("customer", customer);
		ModelAndView mv = new ModelAndView();
		mv.setViewName("registration");
		return mv;
	}
	
	@RequestMapping(value="/process",method=RequestMethod.POST)
	public ModelAndView process(HttpServletRequest req,HttpServletResponse res,
			@ModelAttribute("customer") @Valid Customer customer,BindingResult result)
	{
		
		validator.validate(customer, result);
		ModelAndView mv =new ModelAndView();
		if(result.hasErrors())
			mv.setViewName("registration");
		else
			mv.setViewName("login");
		return mv;
		
	}
}
