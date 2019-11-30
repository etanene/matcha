SELECT 'CREATE DATABASE matchadb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'matchadb');
