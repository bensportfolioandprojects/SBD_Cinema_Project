let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
const creds = require('./config');

let transport = {
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `

  let mail = {
    from: name,
    to: 'sbd.qacinemas@hotmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      transporter.sendMail({
        from: "sbd.qacinemas@hotmail.com",
        to: email,
        subject: "Submission was successful",
        text: `Thank you for contacting us!\n\nForm details\n Name: ${name}\n Email: ${email}\n Message: ${message}`
      }, function(error, info){
        if(error) {
          console.log(error);
        } else{
          res.json({
            status: 'success'
          })
          console.log('Message sent: ' + info.response);
        }
      });
    }
  })
});

module.exports = router;