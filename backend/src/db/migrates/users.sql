CREATE EXTENSION IF NOT EXISTS pg_trgm;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'sex') THEN
    CREATE TYPE sex AS ENUM ('male', 'female');
  END IF;
END$$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'orientation') THEN
    CREATE TYPE orientation AS ENUM ('homo', 'hetero', 'bi');
  END IF;
END$$;

CREATE TABLE IF NOT EXISTS users
(
  user_id SERIAL PRIMARY KEY NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  login varchar(255) UNIQUE NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  birthday DATE,
  passwd varchar(255) NOT NULL,
  sex sex,
  orientation orientation NOT NULL DEFAULT 'bi',
  info varchar(10000),
  city varchar(255),
  latitude varchar(255),
  longitude varchar(255),
  last_connection TIMESTAMP,
  online BOOLEAN DEFAULT FALSE,
  validate BOOLEAN DEFAULT FALSE,
  unique_link varchar(255)
);
