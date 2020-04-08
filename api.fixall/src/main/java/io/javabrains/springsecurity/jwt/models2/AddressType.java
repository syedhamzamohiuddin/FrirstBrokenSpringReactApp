package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the address_type database table.
 * 
 */
@Entity
@Table(name="address_type")
@NamedQuery(name="AddressType.findAll", query="SELECT a FROM AddressType a")
public class AddressType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="address_type_id")
	private int addressTypeId;

	@Column(name="type_name")
	private String typeName;

	//bi-directional many-to-one association to PersonAddress
	@OneToMany(mappedBy="addressType")
	private List<PersonAddress> personAddresses;

	public AddressType() {
	}

	public int getAddressTypeId() {
		return this.addressTypeId;
	}

	public void setAddressTypeId(int addressTypeId) {
		this.addressTypeId = addressTypeId;
	}

	public String getTypeName() {
		return this.typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public List<PersonAddress> getPersonAddresses() {
		return this.personAddresses;
	}

	public void setPersonAddresses(List<PersonAddress> personAddresses) {
		this.personAddresses = personAddresses;
	}

	public PersonAddress addPersonAddress(PersonAddress personAddress) {
		getPersonAddresses().add(personAddress);
		personAddress.setAddressType(this);

		return personAddress;
	}

	public PersonAddress removePersonAddress(PersonAddress personAddress) {
		getPersonAddresses().remove(personAddress);
		personAddress.setAddressType(null);

		return personAddress;
	}

}