package io.javabrains.springsecurity.jwt.repositories;

import org.springframework.data.repository.CrudRepository;

import io.javabrains.springsecurity.jwt.models2.AccessRole;;

public interface AccessRolesRepo extends CrudRepository<AccessRole,Integer>{

}
