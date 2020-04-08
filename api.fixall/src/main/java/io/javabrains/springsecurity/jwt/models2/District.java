package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the district database table.
 * 
 */
@Entity
@Table(name="district")
@NamedQuery(name="District.findAll", query="SELECT d FROM District d")
public class District implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="id_district")
	private int idDistrict;

	@Column(name="district_name")
	private String districtName;

	//bi-directional many-to-one association to Area
	@OneToMany(mappedBy="district")
	private List<Area> areas;

	//bi-directional many-to-one association to City
	@ManyToOne
	private City city;

	public District() {
	}

	public int getIdDistrict() {
		return this.idDistrict;
	}

	public void setIdDistrict(int idDistrict) {
		this.idDistrict = idDistrict;
	}

	public String getDistrictName() {
		return this.districtName;
	}

	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}

	public List<Area> getAreas() {
		return this.areas;
	}

	public void setAreas(List<Area> areas) {
		this.areas = areas;
	}

	public Area addArea(Area area) {
		getAreas().add(area);
		area.setDistrict(this);

		return area;
	}

	public Area removeArea(Area area) {
		getAreas().remove(area);
		area.setDistrict(null);

		return area;
	}

	public City getCity() {
		return this.city;
	}

	public void setCity(City city) {
		this.city = city;
	}

}