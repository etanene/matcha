const { Client } = require('pg');
const fs = require('fs');
const path = require('path');


const client = new Client();

const users = fs.readFileSync(path.join(__dirname, '/migrates/users.sql')).toString();
const root = fs.readFileSync(path.join(__dirname, '/migrates/root.sql')).toString();
client.connect();

// Созданаем tables users
client.query(users);
console.log('Tables users created');

// Создаем в users рута
client.query(root);
console.log('Root created');

client.end();
