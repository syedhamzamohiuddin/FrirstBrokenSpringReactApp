package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the city database table.
 * 
 */
@Entity
@Table(name="city")
@NamedQuery(name="City.findAll", query="SELECT c FROM City c")
public class City implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="city_id")
	private int cityId;

	@Column(name="city_name")
	private String cityName;

	//bi-directional many-to-one association to District
	@OneToMany(mappedBy="city")
	private List<District> districts;

	public City() {
	}

	public int getCityId() {
		return this.cityId;
	}

	public void setCityId(int cityId) {
		this.cityId = cityId;
	}

	public String getCityName() {
		return this.cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public List<District> getDistricts() {
		return this.districts;
	}

	public void setDistricts(List<District> districts) {
		this.districts = districts;
	}

	public District addDistrict(District district) {
		getDistricts().add(district);
		district.setCity(this);

		return district;
	}

	public District removeDistrict(District district) {
		getDistricts().remove(district);
		district.setCity(null);

		return district;
	}

}