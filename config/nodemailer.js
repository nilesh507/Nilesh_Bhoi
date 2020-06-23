const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');


let transporter = nodemailer.createTransport({
    service: 'gamil',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nilesh50701@gmail.com', // generated ethereal user
      pass: 'community@csgo', // generated ethereal password
    }    
});

let renderTempelate = (data, reletivePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', reletivePath),
        data,
        function(err, template){
            if (err) {console.log('error in rendering the template'); return;}
            mailHTML = template;
        }
    )

    return mailHTML;
}




module.exports = {
    transporter: transporter,
    renderTempelate: renderTempelate,
}