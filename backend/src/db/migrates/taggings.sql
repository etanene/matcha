CREATE TABLE IF NOT EXISTS taggings
(
  tagging_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  tag_id INT NOT NULL
);
