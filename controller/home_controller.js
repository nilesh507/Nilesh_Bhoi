console.log("Home controller is loaded!");

module.exports.home = function(req, res){
    // return res.end('<h1>Expres is up for codeial!</h1>');
    // console.log(req.cookies);
    // res.cookie("user_id", 555);
    return res.render('home.ejs', {
        title : "Home Page"
    });
};



// modulex.exports.actionName = function (req, res){ ....     }~