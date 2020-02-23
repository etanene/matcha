INSERT INTO
  tags (tag_value)
VALUES
  ('work'), ('sport'), ('sex'), ('cars'), ('music'), ('travel'), ('study'), ('games'), ('football'), ('vegan')
ON CONFLICT (tag_value)
  DO NOTHING;