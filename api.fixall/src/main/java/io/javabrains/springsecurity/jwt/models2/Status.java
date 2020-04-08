package io.javabrains.springsecurity.jwt.models2;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the status database table.
 * 
 */
@Entity
@Table(name="status")
@NamedQuery(name="Status.findAll", query="SELECT s FROM Status s")
public class Status implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="status_id")
	private int statusId;

	@Column(name="status_name")
	private String statusName;

	public Status() {
	}

	public int getStatusId() {
		return this.statusId;
	}

	public void setStatusId(int statusId) {
		this.statusId = statusId;
	}

	public String getStatusName() {
		return this.statusName;
	}

	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}

}