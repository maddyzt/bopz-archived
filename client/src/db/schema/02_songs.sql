DROP TABLE IF EXISTS songs CASCADE;
CREATE TABLE songs (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  artist VARCHAR(255) NOT NULL,
  likes INTEGER NOT NULL
);