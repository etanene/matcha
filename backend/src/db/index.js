const { Client } = require('pg');

const client = new Client();

client.connect();
console.log('heloo');

module.exports = client;
