DROP TABLE IF EXISTS posts CASCADE;
CREATE TABLE posts (
  user_id INTEGER,
  song_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (song_id) REFERENCES songs(id)
);