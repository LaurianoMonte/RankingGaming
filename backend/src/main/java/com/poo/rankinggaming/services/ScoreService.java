package com.poo.rankinggaming.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.poo.rankinggaming.dto.GameDTO;
import com.poo.rankinggaming.dto.ScoreDTO;
import com.poo.rankinggaming.entities.Game;
import com.poo.rankinggaming.entities.Score;
import com.poo.rankinggaming.entities.User;
import com.poo.rankinggaming.repositories.ScoreRepository;
import com.poo.rankinggaming.repositories.UserRepository;
import com.poo.rankinggaming.repositories.GameRepository;

@Service
public class ScoreService {
	
	@Autowired
	private GameRepository gameRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public GameDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Game game = gameRepository.findById(dto.getGameId()).get();	
	
		Score score = new Score();
		score.setGame(game);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for (Score s : game.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / game.getScores().size();	
				
		game.setScore(avg);
		game.setCount(game.getScores().size());
		
		game = gameRepository.save(game);
		
		return new GameDTO(game);
	}
	
}