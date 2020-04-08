package io.javabrains.springsecurity.jwt.models;

import java.util.ArrayList;

import io.javabrains.springsecurity.jwt.repositories.ServiceRepo;

public class ServicesResponse {

	private final ArrayList<ServiceResponse> services;
	
	public ServicesResponse(ServiceRepo repo)
	{
		this.services = new ArrayList<ServiceResponse>();
		
		repo.findAll().forEach(service->{
			services.add(new ServiceResponse(service));
		});
	}

	public ArrayList<ServiceResponse> getServices() {
		return services;
	}
	
	
}
