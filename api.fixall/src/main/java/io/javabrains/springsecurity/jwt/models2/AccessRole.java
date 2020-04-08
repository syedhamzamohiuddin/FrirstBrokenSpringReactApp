package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the access_roles database table.
 * 
 */
@Entity
@Table(name="access_roles")
@NamedQuery(name="AccessRole.findAll", query="SELECT a FROM AccessRole a")
public class AccessRole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	@Column(name="role_name")
	private String roleName;

	//bi-directional many-to-one association to Person
	@OneToMany(mappedBy="accessRoleBean")
	private List<Person> persons;

	public AccessRole() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public List<Person> getPersons() {
		return this.persons;
	}

	public void setPersons(List<Person> persons) {
		this.persons = persons;
	}

	public Person addPerson(Person person) {
		getPersons().add(person);
		person.setAccessRoleBean(this);

		return person;
	}

	public Person removePerson(Person person) {
		getPersons().remove(person);
		person.setAccessRoleBean(null);

		return person;
	}

}