const { Client } = require('pg');
const fs = require('fs');
const path = require('path');


const client = new Client();

const users = fs.readFileSync(path.join(__dirname, '/migrates/users.sql')).toString();
const root = fs.readFileSync(path.join(__dirname, '/migrates/root.sql')).toString();
const photos = fs.readFileSync(path.join(__dirname, '/migrates/photos.sql')).toString();
const tags = fs.readFileSync(path.join(__dirname, '/migrates/tags.sql')).toString();
const taggings = fs.readFileSync(path.join(__dirname, '/migrates/taggings.sql')).toString();
const fakeusers = fs.readFileSync(path.join(__dirname, '/migrates/fakeusers.sql')).toString();
const faketags = fs.readFileSync(path.join(__dirname, '/migrates/faketags.sql')).toString();
const faketaggings = fs.readFileSync(path.join(__dirname, '/migrates/faketaggings.sql')).toString();
const fakephotos = fs.readFileSync(path.join(__dirname, '/migrates/fakephotos.sql')).toString();

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

  await client.query(fakeusers);
  console.log('Fake users created');

  await client.query(faketags);
  console.log('Fake tags created');

  await client.query(faketaggings);
  console.log('Fake taggings created');

  await client.query(fakephotos);
  console.log('Fake photos created');

  client.end();
})();
