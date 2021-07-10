\c
\l

CREATE DATABASE torre_pre_lanc;

\c torre_pre_lanc

CREATE TABLE IF NOT EXISTS card(
	id SERIAL PRIMARY KEY NOT NULL,
	img VARCHAR(150),
	descri VARCHAR(250),
	checkout VARCHAR(250)
);

INSERT INTO card VALUES(1,'https://pixabay.com/pt/vectors/controlador-jogo-v%c3%addeo-game-2923485/','Você irá aprender a fazer jogos de diversos estilos, mesmo sem nenhum conhecimento! ','https://go.hotmart.com/H41835493I');
INSERT INTO card VALUES(2,'https://pixabay.com/pt/photos/telefone-celular-smartphone-gsm-3364089/','Manutenção em Tablet e 14,5GB de Arquivos com Programas, Manuais de Serviços e Roms para Celular.
','https://go.hotmart.com/V41461376T');

SELECT * FROM card;


SELECT id, img FROM card;
SELECT id, img FROM card WHERE id = 1;

SELECT id, descri FROM card;
SELECT id, descri FROM card WHERE id = 2;

SELECT id, checkout FROM card;
SELECT COUNT (*) from card;
SELECT now();




