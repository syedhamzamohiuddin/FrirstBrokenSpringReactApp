package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the employees database table.
 * 
 */
@Entity
@Table(name="employees")
@NamedQuery(name="Employee.findAll", query="SELECT e FROM Employee e")
public class Employee implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="employee_id")
	private int employeeId;

	@Column(name="cnic_no")
	private int cnicNo;

	@Column(name="father_name")
	private String fatherName;

	//bi-directional many-to-many association to ServicesE
	@ManyToMany(mappedBy="employees")
	private List<ServicesE> servicesEs;

	//bi-directional many-to-one association to Person
	@ManyToOne
	@JoinColumn(name="persons_person_id")
	private Person person;

	//bi-directional many-to-many association to RoleE
	@ManyToMany
	@JoinTable(
		name="employees_roles"
		, joinColumns={
			@JoinColumn(name="employees_employee_id")
			}
		, inverseJoinColumns={
			@JoinColumn(name="role_e_role_id")
			}
		)
	private List<RoleE> roleEs;

	public Employee() {
	}

	public int getEmployeeId() {
		return this.employeeId;
	}

	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}

	public int getCnicNo() {
		return this.cnicNo;
	}

	public void setCnicNo(int cnicNo) {
		this.cnicNo = cnicNo;
	}

	public String getFatherName() {
		return this.fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public List<ServicesE> getServicesEs() {
		return this.servicesEs;
	}

	public void setServicesEs(List<ServicesE> servicesEs) {
		this.servicesEs = servicesEs;
	}

	public Person getPerson() {
		return this.person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public List<RoleE> getRoleEs() {
		return this.roleEs;
	}

	public void setRoleEs(List<RoleE> roleEs) {
		this.roleEs = roleEs;
	}

}