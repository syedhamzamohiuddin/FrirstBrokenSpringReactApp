package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the person_addresses database table.
 * 
 */
@Entity
@Table(name="person_addresses")
@NamedQuery(name="PersonAddress.findAll", query="SELECT p FROM PersonAddress p")
public class PersonAddress implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="address_id")
	private int addressId;

	@Column(name="block_name")
	private String blockName;

	@Column(name="house_or_shop_num")
	private String houseOrShopNum;

	@Column(name="location_near_to")
	private String locationNearTo;

	@Column(name="persons_person_id")
	private int personsPersonId;

	//bi-directional many-to-one association to Area
	@ManyToOne
	@JoinColumn(name="areas_area_id")
	private Area area;

	//bi-directional many-to-one association to AddressType
	@ManyToOne
	@JoinColumn(name="address_type_address_type_id")
	private AddressType addressType;

	public PersonAddress() {
	}

	public int getAddressId() {
		return this.addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getBlockName() {
		return this.blockName;
	}

	public void setBlockName(String blockName) {
		this.blockName = blockName;
	}

	public String getHouseOrShopNum() {
		return this.houseOrShopNum;
	}

	public void setHouseOrShopNum(String houseOrShopNum) {
		this.houseOrShopNum = houseOrShopNum;
	}

	public String getLocationNearTo() {
		return this.locationNearTo;
	}

	public void setLocationNearTo(String locationNearTo) {
		this.locationNearTo = locationNearTo;
	}

	public int getPersonsPersonId() {
		return this.personsPersonId;
	}

	public void setPersonsPersonId(int personsPersonId) {
		this.personsPersonId = personsPersonId;
	}

	public Area getArea() {
		return this.area;
	}

	public void setArea(Area area) {
		this.area = area;
	}

	public AddressType getAddressType() {
		return this.addressType;
	}

	public void setAddressType(AddressType addressType) {
		this.addressType = addressType;
	}

}