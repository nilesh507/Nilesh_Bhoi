const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req, res){
    try{
        //Populate the user of each post 
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })

        let user = await User.find({});

        return res.render('home.ejs', {
            title: "Home Page",
            posts: posts,
            all_users: user
        });
    }catch (err) {
        console.log('Error ', err);
        return;
    }
    
}


// modulex.exports.actionName = function (req, res){ ....     }