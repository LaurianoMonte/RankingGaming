package com.poo.rankinggaming.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poo.rankinggaming.entities.Score;
import com.poo.rankinggaming.entities.ScorePK;

public interface ScoreRepository extends JpaRepository <Score, ScorePK> {
	
}
