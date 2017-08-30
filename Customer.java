package com.anz.models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.springmodules.validation.bean.conf.loader.annotation.handler.NotBlank;


@Entity
@Table(name="ANZ_Customer")
public class Customer {
	@NotNull(message="First Name cannot be null")
	@NotBlank(message="First Name cannot be blank")
	@Size(min=5, max=25,message="First Name should be between 5 to 25 chars")
	@Column(name="FirstName",nullable=false,length=25)
	private String firstName;
	@NotNull(message="Last Name cannot be null")
	@NotBlank(message="Last Name cannot be blank")
	@Size(min=5, max=25,message="Last Name should be between 5 to 25 chars")
	@Column(name="LastName",nullable=false,length=25)
	private String lastName;
	@NotNull(message="Address cannot be null")
	@NotBlank(message="Address cannot be blank")
	@Size(min=10, max=100,message="Address should be between 25 to 100 chars")
	@Column(name="Address",nullable=false,length=100)
	private String address;
	@NotNull(message="Email cannot be null")
	@NotBlank(message="Email cannot be blank")
	@Email(message="Email Format Error")
	@Column(name="Email",nullable=false,length=50)
	private String email;
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

}
