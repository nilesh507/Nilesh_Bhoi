module.exports.profile=function(req,res){
    // return res.end('<h1>UserProfile</h1>');

    return res.render('user_profile', {
        title : "Profile page"
    });
};

// Render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title : "Codeial | Sign Up"
    });
}

// Render the sign in page 
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title : "Codeial | Sign In"
    });
}


//get the sign up data 
module.exports.create = function(req, res){
    //TO DO

};
// sign in and create a session for the user
module.exports.createSession = function(req, res){
    //To DO
};