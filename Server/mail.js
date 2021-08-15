var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');//for template

const mail=(data)=>{
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'upify.tech@gmail.com',
          pass: ''
        }
      });
      
      //for template
      transporter.use('compile',hbs({
          viewEngine:'express-handlebars',
          viewPath:'./views',
      }));
      

      var mailOptions = {
        from: 'upify.tech@gmail.com',
        to: '',
      //   cc:'',
        bcc:'',
        subject: "UPIFY-TECH",
        text: `<h1>hello   jjjjj</h1>`,
      //   attachments:[
      //       {
      //           filename:'xyz.jpg',path:'./xyz.jpg'
      //       }
      //   ]
      
      //for template
      template:'index'
      
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
};

module.exports=mail;
