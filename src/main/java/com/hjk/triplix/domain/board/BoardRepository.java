package com.hjk.triplix.domain.board;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {

	Board findByMemberId(int memberId);

}
