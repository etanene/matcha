const express = require('express');

const router = require('./routes');

const app = express();
const port = process.env.PORT || 8000;

app.use('/', router);

app.listen(port, () => console.log(`Server listening on port ${port}`));
