package io.javabrains.springsecurity.jwt.models;

public class UserRequest {

	private  int id;
	private  String email;
	private  String fullname;
	private  String phone;
	private  String reg_date;
	private String password;
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	private  int access_role;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getReg_date() {
		return reg_date;
	}
	public void setReg_date(String reg_date) {
		this.reg_date = reg_date;
	}
	public int getAccess_role() {
		return access_role;
	}
	public void setAccess_role(int access_role) {
		this.access_role = access_role;
	}
}
