package io.javabrains.springsecurity.jwt.repositories;

import org.springframework.data.repository.CrudRepository;

import io.javabrains.springsecurity.jwt.models2.Person;

public interface PersonRepository extends CrudRepository<Person,Integer>{

}
