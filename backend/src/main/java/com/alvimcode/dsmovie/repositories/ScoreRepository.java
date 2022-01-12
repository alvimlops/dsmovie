package com.alvimcode.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alvimcode.dsmovie.entities.Score;
import com.alvimcode.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
