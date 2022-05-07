package com.poo.rankinggaming.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poo.rankinggaming.dto.GameDTO;
import com.poo.rankinggaming.dto.ScoreDTO;
import com.poo.rankinggaming.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public GameDTO saveScore(@RequestBody ScoreDTO dto) {
		GameDTO gameDTO = service.saveScore(dto);
		return gameDTO;
	}
}
