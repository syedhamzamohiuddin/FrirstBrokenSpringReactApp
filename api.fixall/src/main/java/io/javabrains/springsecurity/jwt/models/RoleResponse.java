package io.javabrains.springsecurity.jwt.models;

import io.javabrains.springsecurity.jwt.models2.RoleE;

public class RoleResponse {

	public int getRole_id() {
		return role_id;
	}

	public String getRole_name() {
		return role_name;
	}

	private final int role_id;
	private final String role_name;
	
	public RoleResponse(RoleE role) {
		// TODO Auto-generated constructor stub
		this.role_id=role.getRoleId();
		this.role_name=role.getRoleName();
	}
}
