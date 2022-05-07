package com.poo.rankinggaming.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poo.rankinggaming.entities.Game;

public interface GameRepository extends JpaRepository <Game, Long> {
	
}
