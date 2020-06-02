const express = require('express');
const router = express.Router();
const commentsController = require('../controller/comments_controller');
const passport = require('passport');

//Check that the user is logged in 
router.post('/create', passport.checkAuthentication,commentsController.create);
router.get('/destroy/:id', passport.checkAuthentication, commentsController.destroy);

module.exports = router;
