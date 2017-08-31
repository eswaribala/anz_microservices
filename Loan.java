package com.anz.banking.models;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="loans")
public class Loan {

	private Integer loanNo;
	private String loanType;
	private Long loanAmount;
	private String startDate;
	private Float interestRate;
	public Integer getLoanNo() {
		return loanNo;
	}
	public void setLoanNo(Integer loanNo) {
		this.loanNo = loanNo;
	}
	public String getLoanType() {
		return loanType;
	}
	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}
	public Long getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(Long loanAmount) {
		this.loanAmount = loanAmount;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public Float getInterestRate() {
		return interestRate;
	}
	public void setInterestRate(Float interestRate) {
		this.interestRate = interestRate;
	}
	
	
	
}
