package com.poo.rankinggaming.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.poo.rankinggaming.entities.User;

public interface UserRepository extends JpaRepository <User, Long> {
	
	User findByEmail(String email);
}
