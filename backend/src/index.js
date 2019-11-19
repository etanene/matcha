const express = require('express');

const app = express();
const port = process.env.PORT || 8002;

app.get('/', (req, res) => res.send('hello world!'));

app.get('/api', (req, res) => res.send('privet'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
