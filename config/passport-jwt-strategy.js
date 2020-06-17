const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
//Options 
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codial'
}

passport.use(new JWTStrategy(opts, function(jwtPayload, done) {
    User.findOne({id: jwtPayload._id}, function(err, user) {
        if (err) {
            console.log('Error in finding the user from JWT!!!');
            return ;
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            //False means user is not found
            // or you could create a new account
        }
    });
}));


module.exports = passport;
