CREATE TABLE IF NOT EXISTS users
(
  user_id SERIAL PRIMARY KEY NOT NULL,
  email varchar(255) NOT NULL,
  login varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  birthday TIMESTAMP,
  passwd varchar(255) NOT NULL,
  sex varchar(25),
  orientation varchar(255),
  info varchar(10000),
  city varchar(255),
  latitude varchar(255),
  longitude varchar(255),
  last_connection TIMESTAMP,
  online BOOLEAN DEFAULT FALSE,
  validate boolean NOT NULL,
  unique_link varchar(255)
);
