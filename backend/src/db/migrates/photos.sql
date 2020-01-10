CREATE TABLE IF NOT EXISTS photos
(
  photo_id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  name varchar(255) NOT NULL,
  order INT NOT NULL,
);
