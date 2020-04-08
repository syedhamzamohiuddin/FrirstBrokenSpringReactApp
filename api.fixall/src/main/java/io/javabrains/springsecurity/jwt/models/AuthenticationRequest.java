package io.javabrains.springsecurity.jwt.models;

public class AuthenticationRequest {
	
	private String phone;
	private String password;

	public AuthenticationRequest() {
	}
	public AuthenticationRequest(String phone, String password) {
		super();
		this.phone = phone;
		this.password = password;
	}
	
	public String getPhone() {
		return phone;
	}
	public void setPhone(String username) {
		this.phone = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
