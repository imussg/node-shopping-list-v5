
const express = require('express');
const morgan = require('morgan');

const app = express();

const shoppingListRouter = require('./shoppingListRouter');
const recipesRouter = require('./recipesRouter');

// log the http layer
app.use(morgan(':date[web] :url :method :status'));

app.use(express.static('public'));

app.use('/shopping-list', shoppingListRouter);
app.use('/recipes', recipesRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
