const { Client } = require('pg');
const fs = require('fs');
const path = require('path');


const client = new Client();

const users = fs.readFileSync(path.join(__dirname, '/migrates/users.sql')).toString();
const db = fs.readFileSync(path.join(__dirname, '/migrates/db.sql')).toString();
client.connect();

// Создание БД, если нет
client.query(db);
console.log('DB matchadb created');

// Создани tables users
client.query(users);
console.log('Tables users created');
