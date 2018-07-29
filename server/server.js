const express = require('express');
const chalk = require('chalk');
// const debug = require('debug')('app');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/www')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, () => {
    console.log(`listening on port ${chalk.green('3000')}`);
});
