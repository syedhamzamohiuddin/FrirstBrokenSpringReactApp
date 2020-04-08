package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the log database table.
 * 
 */
@Entity
@Table(name="log")
@NamedQuery(name="Log.findAll", query="SELECT l FROM Log l")
public class Log implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="log_id")
	private int logId;

	@Column(name="employee_current_locationsss")
	private String employeeCurrentLocationsss;

	@Column(name="emplyee_id")
	private int emplyeeId;

	private String feedback;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="request_date")
	private Date requestDate;

	@Column(name="role_e_role_id")
	private int roleERoleId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="service_date")
	private Date serviceDate;

	private String stars;

	@Column(name="status_status_id")
	private int statusStatusId;

	@Column(name="user_id")
	private int userId;

	@Column(name="user_street_addresses_address_id")
	private int userStreetAddressesAddressId;

	public Log() {
	}

	public int getLogId() {
		return this.logId;
	}

	public void setLogId(int logId) {
		this.logId = logId;
	}

	public String getEmployeeCurrentLocationsss() {
		return this.employeeCurrentLocationsss;
	}

	public void setEmployeeCurrentLocationsss(String employeeCurrentLocationsss) {
		this.employeeCurrentLocationsss = employeeCurrentLocationsss;
	}

	public int getEmplyeeId() {
		return this.emplyeeId;
	}

	public void setEmplyeeId(int emplyeeId) {
		this.emplyeeId = emplyeeId;
	}

	public String getFeedback() {
		return this.feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public Date getRequestDate() {
		return this.requestDate;
	}

	public void setRequestDate(Date requestDate) {
		this.requestDate = requestDate;
	}

	public int getRoleERoleId() {
		return this.roleERoleId;
	}

	public void setRoleERoleId(int roleERoleId) {
		this.roleERoleId = roleERoleId;
	}

	public Date getServiceDate() {
		return this.serviceDate;
	}

	public void setServiceDate(Date serviceDate) {
		this.serviceDate = serviceDate;
	}

	public String getStars() {
		return this.stars;
	}

	public void setStars(String stars) {
		this.stars = stars;
	}

	public int getStatusStatusId() {
		return this.statusStatusId;
	}

	public void setStatusStatusId(int statusStatusId) {
		this.statusStatusId = statusStatusId;
	}

	public int getUserId() {
		return this.userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getUserStreetAddressesAddressId() {
		return this.userStreetAddressesAddressId;
	}

	public void setUserStreetAddressesAddressId(int userStreetAddressesAddressId) {
		this.userStreetAddressesAddressId = userStreetAddressesAddressId;
	}

}