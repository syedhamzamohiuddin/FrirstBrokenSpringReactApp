package io.javabrains.springsecurity.jwt.services;

import java.util.List;
import java.util.ArrayList;

import javax.swing.event.ListSelectionEvent;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.GrantedAuthoritiesContainer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.authority.SimpleGrantedAuthority ;



import io.javabrains.springsecurity.jwt.models2.Person;
import io.javabrains.springsecurity.jwt.models2.AccessRole;

import io.javabrains.springsecurity.jwt.repositories.PersonRepository;
import io.javabrains.springsecurity.jwt.repositories.AccessRolesRepo;;


@Service
public class MyUserDetailsService implements UserDetailsService{

	@Autowired
	private PersonRepository repo;
	
	@Autowired
	private AccessRolesRepo access_role;

	@Override
	public UserDetails loadUserByUsername(String phone) throws UsernameNotFoundException {
	
		;
		
		  Person temp;
		  Iterable<Person> p=repo.findAll();
		
		  Iterator<Person> it=p.iterator(); 
		  User u = new User("hamza","hamza",new ArrayList<>()); 
		  while(it.hasNext()) {
			 
		  temp=it.next(); 
		  List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
		  
		  if(temp.getPhone().equals(phone)) 
		  { 
			  authorities.add(new SimpleGrantedAuthority(temp.getAccessRoleBean().getRoleName()));
			  System.out.println(authorities.get(0));
			  u=new User(temp.getPhone(),temp.getPassword(), authorities);
		  break; 
		  }
		  
		  } 
		
		
		/*
		 * access_role.findAll().forEach(role->{authorities.add(new
		 * SimpleGrantedAuthority(role.getRoleName()));});
		 * 
		 * authorities.forEach(ro->{System.out.println(ro.getAuthority());});
		 */ 
		return u;
	}

}
