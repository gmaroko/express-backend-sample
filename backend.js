const express = require('express');
const getDbConnection = require('./config/db');
const articlesRouter = require('./routes/articles');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // application/json

app.use(articlesRouter);

const db = getDbConnection();

app.set("PORT", process.env.PORT || 5500);

app.listen(app.get('PORT'));