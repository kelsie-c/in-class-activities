-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food varchar(50) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song varchar(100) NOT NULL,
  -- Make a string column called "artist" --
  artist varchar(50),
  -- Make an integer column called "score" --
  score INTEGER
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie varchar(100) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN NOT NULL DEFAULT 0,
  -- Make an integer column called "score" --
  score INTEGER,
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);

INSERT INTO favorite_foods (food, score)
VALUES ("Pasta", 10);

INSERT INTO favorite_foods (food, score)
VALUES ("Pizza", 10);

INSERT INTO favorite_foods (food, score)
VALUES ("Peanut Butter", 10);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("Sparks", "Beach House", 10);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("When You Were Young", "The Killers", 10);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("Party Police", "Wild Nothing", 10);

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Brooklyn", 0, 10);

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Before Sunrise", 0, 10);

INSERT INTO favorite_movies (movie, five_times, score)
VALUES ("Evil Dead", 0, 1);

SELECT * FROM favorite_foods;
SELECT * FROM favorite_songs;
SELECT * FROM favorite_movies;