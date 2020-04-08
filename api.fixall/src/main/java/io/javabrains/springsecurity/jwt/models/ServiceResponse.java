package io.javabrains.springsecurity.jwt.models;

import io.javabrains.springsecurity.jwt.models2.ServicesE;

public class ServiceResponse {

	public int getService_id() {
		return service_id;
	}
	public String getDescription() {
		return description;
	}
	public int getRole_id() {
		return role_id;
	}
	public ServiceResponse(ServicesE service) {
		this.service_id = service.getServiceId();
		this.description = service.getDescription();
		this.role_id = service.getRoleE().getRoleId();
	}
	private final int service_id;
	private final String description;
	private final int role_id;
	
	
}
