package io.javabrains.springsecurity.jwt.models;

public class ServiceRequest {

	private  int service_id;
	private  String description;
	private  int role_id;

	public int getService_id() {
		return service_id;
	}
	public void setService_id(int service_id) {
		this.service_id = service_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}

}
