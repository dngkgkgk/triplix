package com.hjk.triplix.domain.comment;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hjk.triplix.domain.board.Board;
import com.hjk.triplix.domain.member.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
    
	private String comment;
	
	@CreationTimestamp
	private Timestamp createdate;
	
	@JoinColumn(name = "boardId")
	@ManyToOne
	private Board board;
	 
	@JoinColumn(name = "memberId")
	@ManyToOne(fetch = FetchType.EAGER)
	private Member member;
	
	

}
