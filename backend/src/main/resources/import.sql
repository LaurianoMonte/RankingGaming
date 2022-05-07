INSERT INTO tb_user(email) VALUES ('lauriano@gmail.com');
INSERT INTO tb_user(email) VALUES ('enio@gmail.com');
INSERT INTO tb_user(email) VALUES ('leonardo@gmail.com');
INSERT INTO tb_user(email) VALUES ('jorge@gmail.com');
INSERT INTO tb_user(email) VALUES ('lucas@gmail.com');

INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Genshin Impact', 'https://notadogame.com/uploads/game/cover/150x185/5f407bf88461a.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Elden Ring', 'https://notadogame.com/uploads/game/cover/150x185/5d02a1ee880d9.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'The Witcher III', 'https://notadogame.com/uploads/game/cover/150x185/5bfdc2fc3c38d.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Cyberpunk', 'https://notadogame.com/uploads/game/cover/150x185/5bfdc4ef2b1fa.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Marvels Avengers', 'https://notadogame.com/uploads/game/cover/150x185/5d005f01a73f8.jpg');
INSERT INTO tb_game(score, count, title, image) VALUES (0, 0, 'Minecraft Dungeons', 'https://notadogame.com/uploads/game/cover/150x185/5c2fbd0f75337.jpg');

INSERT INTO tb_score(game_id, user_id, value) VALUES (1, 1, 5.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (1, 2, 4.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 1, 3.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 2, 3.0);
INSERT INTO tb_score(game_id, user_id, value) VALUES (2, 3, 4.0);