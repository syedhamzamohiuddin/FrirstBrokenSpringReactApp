package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the role_e database table.
 * 
 */
@Entity
@Table(name="role_e")
@NamedQuery(name="RoleE.findAll", query="SELECT r FROM RoleE r")
public class RoleE implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="role_id")
	private int roleId;

	@Column(name="role_name")
	private String roleName;

	//bi-directional many-to-many association to Employee
	@ManyToMany(mappedBy="roleEs")
	private List<Employee> employees;

	//bi-directional many-to-one association to ServicesE
	@OneToMany(mappedBy="roleE")
	private List<ServicesE> servicesEs;

	public RoleE() {
	}

	public int getRoleId() {
		return this.roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public List<Employee> getEmployees() {
		return this.employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}

	public List<ServicesE> getServicesEs() {
		return this.servicesEs;
	}

	public void setServicesEs(List<ServicesE> servicesEs) {
		this.servicesEs = servicesEs;
	}

	public ServicesE addServices(ServicesE services) {
		getServicesEs().add(services);
		services.setRoleE(this);

		return services;
	}

	public ServicesE removeServices(ServicesE services) {
		getServicesEs().remove(services);
		services.setRoleE(null);

		return services;
	}

}