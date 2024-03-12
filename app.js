const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const indexRouter = require('./routes/routes');
app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}. Ctrl^c to quit.`));

module.exports = app;