package io.javabrains.springsecurity.jwt;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import io.javabrains.springsecurity.jwt.models.AuthenticationRequest;
import io.javabrains.springsecurity.jwt.models.AuthenticationResponse;
import io.javabrains.springsecurity.jwt.models.RoleResponse;
import io.javabrains.springsecurity.jwt.models.RoleRequest;
import io.javabrains.springsecurity.jwt.models.RolesResponse;
import io.javabrains.springsecurity.jwt.models.ServiceRequest;
import io.javabrains.springsecurity.jwt.models.ServicesResponse;
import io.javabrains.springsecurity.jwt.models.UserRequest;
import io.javabrains.springsecurity.jwt.models.UserResponse;
import io.javabrains.springsecurity.jwt.models.UsersResponse;
import io.javabrains.springsecurity.jwt.models2.Person;
import io.javabrains.springsecurity.jwt.models2.RoleE;
import io.javabrains.springsecurity.jwt.models2.ServicesE;
import io.javabrains.springsecurity.jwt.repositories.AccessRolesRepo;
import io.javabrains.springsecurity.jwt.repositories.PersonRepository;
import io.javabrains.springsecurity.jwt.repositories.RoleRepo;
import io.javabrains.springsecurity.jwt.repositories.ServiceRepo;
import io.javabrains.springsecurity.jwt.services.MyUserDetailsService;
import io.javabrains.springsecurity.jwt.util.JwtUtil;



@CrossOrigin
@Controller
public class HelloResource {
	
	@Autowired
	PersonRepository repo;
	
	@Autowired
	AccessRolesRepo role;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService userDetailsService;

	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@Secured({"ADMIN","PERSON","EMPLOYEE"})
	@RequestMapping("/user/")
	public ResponseEntity<?>  hello(@RequestHeader("Authorization") String token)
	{
		System.out.println(token);
		Person temp= null;
		String phone=jwtTokenUtil.extractUsername(token);
		
		 Iterable<Person> p=repo.findAll();
			
		  Iterator<Person> it=p.iterator(); 
		  while(it.hasNext()) {
			 
		  temp=it.next(); 
		  
		  if(temp.getPhone().equals(phone)) 
		  { 
			  
		  break; 
		  }
		  
		  } 
		
		return ResponseEntity.ok(new UserResponse(temp));
	}
	
	@RequestMapping(value= "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception
	{
		
		try {
 			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getPhone(), authenticationRequest.getPassword()));
			
		}
		catch(BadCredentialsException e)
		{
			
			throw new Exception("Incorrect username or password",e);
		}
		
		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getPhone());
		final String jwt = jwtTokenUtil.generateToken(userDetails);
	
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
		
		
	}
	
	@RequestMapping(value="/register", method=RequestMethod.POST)
	public @ResponseBody String  register(@RequestBody Person person)
	{
		System.out.println("hello");
		/*
		 * System.out.println(person.getFirstName());
		 * System.out.println(person.getLastName());
		 * System.out.println(person.getPerson_id());
		 * System.out.println(person.getPhone());
		 */
		
		System.out.println(person.getAccessRoleBean());
		repo.save(person);
		return "added";
	}
	
	@Secured({"ADMIN"})
	@RequestMapping(value="/users", method=RequestMethod.GET)
	public ResponseEntity<?> getAllUsers()
	{
		System.out.println();
		return ResponseEntity.ok(new UsersResponse(repo));
	}
	

	@RequestMapping(value="/updateUser", method=RequestMethod.POST)
	public ResponseEntity<?> updateUsers(@RequestBody UserRequest req)
	{
		
		Person p =  repo.findById(req.getId()).get();
		p.setEmail(req.getEmail());
		p.setFullname(req.getFullname());
		p.setPhone(req.getPhone());
		p.setAccessRoleBean(role.findById(req.getAccess_role()).get());
		repo.save(p);
		return ResponseEntity.ok(new String("done"));
	}
	
	@RequestMapping(value="/deleteUser", method=RequestMethod.DELETE)
	public ResponseEntity<?> deleteUsers(@RequestParam int id)
	{
		
		repo.delete(repo.findById(id).get());
		return ResponseEntity.ok(new String("done"));
	}
	
	@RequestMapping(value="/addUser",headers="Content-Type=application/json", method=RequestMethod.POST)
	public @ResponseBody String  addUser( @RequestBody UserRequest req)
	{
		
		System.out.println(req.getAccess_role());
		
		Person p = new Person();
		p.setEmail(req.getEmail());
		p.setPassword(req.getPassword());
		p.setFullname(req.getFullname());
		p.setPhone(req.getPhone());
		p=repo.save(p);
		p.setAccessRoleBean(role.findById(req.getAccess_role()).get());
		repo.save(p);
		return "added";
	}
	
	
	@Autowired
	ServiceRepo rep;
	
	@Autowired 
	RoleRepo repoo;
	

	/*****************************           managing category              ********************************************************************/
	@RequestMapping(value="/categories", method=RequestMethod.GET)
	public ResponseEntity<?> getCategories()
	{
		return ResponseEntity.ok(new RolesResponse(repoo));
	}
	
	
	
	@RequestMapping(value="/addCategory",headers="Content-Type=application/json", method=RequestMethod.POST)
	public @ResponseBody String addCategory(@RequestBody RoleRequest role)
	{
		System.out.println(role.getRole_id()+" "+role.getRole_name());
		RoleE s= new RoleE();
		System.out.println("after s:");
		s.setRoleId(role.getRole_id());
		s.setRoleName(role.getRole_name());
		repoo.save(s);
		return "role added";
	}
	
	

	@RequestMapping(value="/updateCategory", method=RequestMethod.POST)
	public ResponseEntity<?> updateCategory(@RequestBody RoleRequest req)
	{
		
		RoleE p =  repoo.findById(req.getRole_id()).get();
		p.setRoleName(req.getRole_name());
		repoo.save(p);
		return ResponseEntity.ok(new String("done"));
	}
	
	@RequestMapping(value="/deleteCategory", method=RequestMethod.DELETE)
	public ResponseEntity<?> deleteCategory(@RequestParam int id)
	{
		
		repoo.delete(repoo.findById(id).get());
		return ResponseEntity.ok(new String("done"));
	}
	/******************************************* managing services                ..................................................................*/
	
	
	@RequestMapping(value="/services", method=RequestMethod.GET)
	public ResponseEntity<?> getServices()
	{
		return ResponseEntity.ok(new ServicesResponse(rep));
	}
	
	@RequestMapping(value="/addService",headers="Content-Type=application/json", method=RequestMethod.POST)
	public @ResponseBody String addService(@RequestBody ServiceRequest service)
	{
		System.out.println(service.getService_id());
		ServicesE s= new ServicesE();
		s.setDescription(service.getDescription());
		s.setServiceId(service.getService_id());
		s.setRoleE(repoo.findById(service.getRole_id()).get());
		rep.save(s);
		return "service added";
	}
	
	
	

	@RequestMapping(value="/updateService", method=RequestMethod.POST)
	public ResponseEntity<?> updateService(@RequestBody ServiceRequest req)
	{
		
		ServicesE p =  rep.findById(req.getService_id()).get();
		p.setDescription(req.getDescription());
		p.setRoleE(repoo.findById(req.getRole_id()).get());
		rep.save(p);
		return ResponseEntity.ok(new String("done"));
	}
	
	@RequestMapping(value="/deleteService", method=RequestMethod.DELETE)
	public ResponseEntity<?> deleteService(@RequestParam int id)
	{
		
		rep.delete(rep.findById(id).get());
		return ResponseEntity.ok(new String("done"));
	}
	
	
	

}
