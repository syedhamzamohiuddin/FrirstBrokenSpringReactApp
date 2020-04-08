package io.javabrains.springsecurity.jwt.models;

import io.javabrains.springsecurity.jwt.models2.RoleE;

public class RoleRequest {

	private  int role_id;
	private  String role_name;
	
	
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	public String getRole_name() {
		return role_name;
	}
	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
	public RoleRequest()
	{
		
		
	}
	public RoleRequest(RoleE role) {
		// TODO Auto-generated constructor stub
		this.role_id=role.getRoleId();
		this.role_name=role.getRoleName();
	}
}
