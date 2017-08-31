package com.anz.banking.dao;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;
import com.anz.banking.models.Loan;

@Repository
public class LoanSearch {

	@Autowired
	MongoTemplate mongoTemplate;
	
	public Collection loanSearch(String text)
	{
		
		 return mongoTemplate.find(Query.query(new Criteria()
                 .orOperator(Criteria.where("loanNo").regex(text, "i"),
                             Criteria.where("loanType").regex(text, "i"),
                             Criteria.where("loanAmount").regex(text, "i"))
                 ), Loan.class);
	}
}
