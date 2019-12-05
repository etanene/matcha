INSERT INTO
  users (login, email, first_name, last_name, validate, passwd)
VALUES
  ('root', 'kratyuk@mail.ru', 'root', 'root', TRUE, '$2y$10$tQhJ0VLeViX7gWIxPtLlpONzt6erbt.SxRhiibZwZ/RN9qRtcqzk6')
ON CONFLICT (login)
  DO NOTHING;
