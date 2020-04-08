package io.javabrains.springsecurity.jwt.models;

import java.util.ArrayList;

import io.javabrains.springsecurity.jwt.models2.Person;
import io.javabrains.springsecurity.jwt.repositories.PersonRepository;

public class UsersResponse {

	private final ArrayList<UserResponse> users;
	
	public UsersResponse(PersonRepository repo) {
		this.users = new ArrayList<UserResponse>();
		repo.findAll().forEach(person->users.add(new UserResponse(person)));
	}

	public ArrayList<UserResponse> getUsers() {
		return users;
	}
}
