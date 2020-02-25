CREATE TABLE IF NOT EXISTS likes
(
  like_id SERIAL PRIMARY KEY NOT NULL,
  from_user_id INT NOT NULL,
  to_user_id INT NOT NULL,
  like_value BOOLEAN NOT NULL,
  match BOOLEAN NOT NULL
);
