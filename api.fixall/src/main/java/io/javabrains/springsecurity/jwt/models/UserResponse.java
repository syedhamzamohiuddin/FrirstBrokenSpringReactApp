package io.javabrains.springsecurity.jwt.models;

import io.javabrains.springsecurity.jwt.models2.Person;

public class UserResponse 
{

	private final int id;
	private final String email;
	private final String fullname;
	private final String phone;
	private final String reg_date;
	private final int access_role;
	
	public UserResponse(Person person)
	{
		id=person.getId();
		email=person.getEmail();
		fullname=person.getFullname();
		phone=person.getPhone();
		reg_date=person.getRegDate().toString();
		access_role=person.getAccessRoleBean().getId();
	}

	public int getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getFullname() {
		return fullname;
	}

	public String getPhone() {
		return phone;
	}

	public String getReg_date() {
		return reg_date;
	}

	public int getAccess_role() {
		return access_role;
	}
}
