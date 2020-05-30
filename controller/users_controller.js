const User = require("../models/user");

module.exports.profile=function(req,res){
    // return res.end('<h1>UserProfile</h1>');

    return res.render('user_profile', {
        title : "Profile page"
    });
};

// Render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title : "Codeial | Sign Up"
    });
}

// Render the sign in page 
module.exports.signIn = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title : "Codeial | Sign In"
    });
}


//get the sign up data 
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log("Error in finding user in signing up" );
            return;
        }
        
        if(!user){  
            // console.log(req.body);
            User.create(req.body, function(err, user){
                if(err){
                    console.log("Error in creating user while signing up", err);
                    return;
                } 
                return res.redirect('/users/sign-in');
            });
        }else{      //password does not match go back to sign up page Ro user already exist 
            return res.redirect('back');
        }
    });

};
// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/')
};

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}