package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the services_e database table.
 * 
 */
@Entity
@Table(name="services_e")
@NamedQuery(name="ServicesE.findAll", query="SELECT s FROM ServicesE s")
public class ServicesE implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="service_id")
	private int serviceId;

	private String description;

	//bi-directional many-to-many association to Employee
	@ManyToMany
	@JoinTable(
		name="employee_services"
		, joinColumns={
			@JoinColumn(name="service_id")
			}
		, inverseJoinColumns={
			@JoinColumn(name="employee_id")
			}
		)
	private List<Employee> employees;

	//bi-directional many-to-one association to RoleE
	@ManyToOne
	@JoinColumn(name="role_id")
	private RoleE roleE;

	public ServicesE() {
	}

	public int getServiceId() {
		return this.serviceId;
	}

	public void setServiceId(int serviceId) {
		this.serviceId = serviceId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Employee> getEmployees() {
		return this.employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}

	public RoleE getRoleE() {
		return this.roleE;
	}

	public void setRoleE(RoleE roleE) {
		this.roleE = roleE;
	}

}