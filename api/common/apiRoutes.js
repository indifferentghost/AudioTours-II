const api = require('express').Router();

const userRouter = require('../users/userRoutes.js');
// const tourRouter = require('./tourRoutes.js');

api.use('/users', userRouter);
// api.use('/tours', tourRouter);

module.exports = api;
