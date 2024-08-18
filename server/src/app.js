const path = require('path');
const {router: apiRouter} = require('./routers/api.router')
const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/api', apiRouter);

module.exports = app;