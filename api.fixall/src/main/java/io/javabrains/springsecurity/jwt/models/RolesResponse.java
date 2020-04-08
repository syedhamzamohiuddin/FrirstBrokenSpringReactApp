package io.javabrains.springsecurity.jwt.models;

import java.util.ArrayList;

import io.javabrains.springsecurity.jwt.repositories.RoleRepo;

public class RolesResponse {

	
private final ArrayList<RoleResponse> roles;
	
	public RolesResponse(RoleRepo repo) {
		this.roles = new ArrayList<RoleResponse>();
		repo.findAll().forEach(role->roles.add(new RoleResponse(role)));
	}

	public ArrayList<RoleResponse> getUsers() {
		return roles;
	}
}
