console.log("Home controller is loaded!");

module.exports.home = function(req, res){
    // return res.end('<h1>Expres is up for codeial!</h1>');
    return res.render('home.ejs', {
        title : "Home Page"
    });
};

// modulex.exports.actionName = function (req, res){ ....     }