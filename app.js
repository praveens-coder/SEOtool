const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./src/routes/index');
const keywordRouter = require('./src/routes/keywords');

app.use(express.json());
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/keywords', keywordRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
