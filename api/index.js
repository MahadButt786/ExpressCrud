// Routes => To Create Routes
// Controllers => To send response of api's
// Services => To handle all type of logics
// Models => To handle all queries in MySQL,  To handle all schemas in MONGODB

var express = require('express');
var router = express.Router();

var userRouter = require('./routes/users');

router.use('/users', userRouter);

module.exports = router;
