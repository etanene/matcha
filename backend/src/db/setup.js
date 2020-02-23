const { Client } = require('pg');
const fs = require('fs');
const path = require('path');


const client = new Client();

const users = fs.readFileSync(path.join(__dirname, '/migrates/users.sql')).toString();
const root = fs.readFileSync(path.join(__dirname, '/migrates/root.sql')).toString();
const photos = fs.readFileSync(path.join(__dirname, '/migrates/photos.sql')).toString();
const tags = fs.readFileSync(path.join(__dirname, '/migrates/tags.sql')).toString();
const taggings = fs.readFileSync(path.join(__dirname, '/migrates/taggings.sql')).toString();
const likes = fs.readFileSync(path.join(__dirname, '/migrates/likes.sql')).toString();

(async () => {
  await client.connect();

  // Созданаем tables users
  await client.query(users);
  console.log('Tables users created');

  // Создаем в users рута
  await client.query(root);
  console.log('Root created');

  // Создаем таблицу photos
  await client.query(photos);
  console.log('Table photos created');

  // Создаем таблицу tags
  await client.query(tags);
  console.log('Table tags created');

  // Создаем таблицу taggings
  await client.query(taggings);
  console.log('Table taggings created');

  // Создаем таблицу likes
  await client.query(likes);
  console.log('Table likes created');

  client.end();
})();
