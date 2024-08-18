const router = require('express').Router();
const {router: userRouter} = require('./User.router')
router.get('/test', (req,res) => res.send('test'))
router.use('/users', userRouter)
module.exports = {router}