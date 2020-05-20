console.log("Home controller is loaded!");

module.exports.home = function(req, res){
    return res.end('<h1>Expres is up for codeial!</h1>');
};

// modulex.exports.actionName = function (req, res){ ....     }