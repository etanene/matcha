CREATE TABLE IF NOT EXISTS taggings
(
  taggings_id SERIAL PRIMARY KEY NOT NULL,
  tag_id INT NOT NULL,
  user_id INT NOT NULL
);
