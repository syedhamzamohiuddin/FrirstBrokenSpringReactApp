package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the areas database table.
 * 
 */
@Entity
@Table(name="areas")
@NamedQuery(name="Area.findAll", query="SELECT a FROM Area a")
public class Area implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="area_id")
	private int areaId;

	@Column(name="area_name")
	private String areaName;

	//bi-directional many-to-one association to District
	@ManyToOne
	private District district;

	//bi-directional many-to-one association to PersonAddress
	@OneToMany(mappedBy="area")
	private List<PersonAddress> personAddresses;

	public Area() {
	}

	public int getAreaId() {
		return this.areaId;
	}

	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}

	public String getAreaName() {
		return this.areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public District getDistrict() {
		return this.district;
	}

	public void setDistrict(District district) {
		this.district = district;
	}

	public List<PersonAddress> getPersonAddresses() {
		return this.personAddresses;
	}

	public void setPersonAddresses(List<PersonAddress> personAddresses) {
		this.personAddresses = personAddresses;
	}

	public PersonAddress addPersonAddress(PersonAddress personAddress) {
		getPersonAddresses().add(personAddress);
		personAddress.setArea(this);

		return personAddress;
	}

	public PersonAddress removePersonAddress(PersonAddress personAddress) {
		getPersonAddresses().remove(personAddress);
		personAddress.setArea(null);

		return personAddress;
	}

}