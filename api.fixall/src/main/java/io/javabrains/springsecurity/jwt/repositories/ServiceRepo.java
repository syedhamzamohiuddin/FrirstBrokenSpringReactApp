package io.javabrains.springsecurity.jwt.repositories;

import org.springframework.data.repository.CrudRepository;

import io.javabrains.springsecurity.jwt.models2.ServicesE;

public interface ServiceRepo extends CrudRepository<ServicesE,Integer>{

}
