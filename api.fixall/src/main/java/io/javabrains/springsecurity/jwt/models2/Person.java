package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;


import java.util.Date;
import java.util.List;


/**
 * The persistent class for the person database table.
 * 
 */
@Entity
@Table(name="person")
@NamedQuery(name="Person.findAll", query="SELECT p FROM Person p")
public class Person implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;

	private String email;
	
	@Column(name="fullname", nullable=false)
	private String fullname;

	@Column(name="password",nullable=false)
	private String password;

	@Column(name="phone", nullable=false,length = 11)
	private String phone;

	
	@Column(name="reg_date", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date regDate;

	//bi-directional many-to-one association to Employee
	@OneToMany(mappedBy="person")
	private List<Employee> employees;

	//bi-directional many-to-one association to AccessRole
	@ManyToOne
	@JoinColumn(name="access_role",nullable=false, insertable = false,columnDefinition = "int default 2")
	private AccessRole accessRoleBean;

	public Person() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFullname() {
		return this.fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getRegDate() {
		return this.regDate;
	}

	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}

	public List<Employee> getEmployees() {
		return this.employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}

	public Employee addEmployee(Employee employee) {
		getEmployees().add(employee);
		employee.setPerson(this);

		return employee;
	}

	public Employee removeEmployee(Employee employee) {
		getEmployees().remove(employee);
		employee.setPerson(null);

		return employee;
	}

	public AccessRole getAccessRoleBean() {
		return this.accessRoleBean;
	}

	public void setAccessRoleBean(AccessRole accessRoleBean) {
		this.accessRoleBean = accessRoleBean;
	}

}