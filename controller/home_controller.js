const Post = require('../models/post');

module.exports.home = function(req, res){
    // return res.end('<h1>Expres is up for codeial!</h1>');
    // console.log(req.cookies);
    // res.cookie("user_id", 555);
    
    // Post.find({}, function(err, posts){
    //     return res.render('home.ejs', {
    //         title : "Home Page",
    //         posts: posts
    //     });
    // });
    //Populate the user of each post 
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err, posts){
        return res.render('home.ejs', {
            title : "Home Page",
            posts: posts
        });
    });
};



// modulex.exports.actionName = function (req, res){ ....     }~