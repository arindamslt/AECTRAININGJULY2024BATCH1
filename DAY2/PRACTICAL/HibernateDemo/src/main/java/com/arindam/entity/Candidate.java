package com.arindam.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Candidate {
	@Id
	@Column(length = 10)
private String candid;
	@Column(length = 25)
private String candnm;
	@OneToOne
	@JoinColumn(name="adhar_no")
private Adhar adhar;
}
