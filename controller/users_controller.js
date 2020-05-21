module.exports.profile=function(req,res){
    // return res.end('<h1>UserProfile</h1>');

    return res.render('user_profile', {
        title : "Profile page"
    });
};