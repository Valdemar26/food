let express = require("express"),
  path = require('path'),
  nodeMailer = require('nodemailer'),
  bodyParser = require('body-parser');

let app = express();

app.use(express.static('src'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/basket-restaurant', function (req, res) {
console.log('POST: ', req);
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Імя клієнта: ${req.body.name}</li>
      <li>Адреса доставки: вулиця ${req.body.street}</li>
      <li>будинок: ${req.body.build}</li>
      <li>Телефон: +38 ${req.body.phone}</li>
    </ul>
  `;


  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: mail,
      pass: password
    }
  });
  let mailOptions = {
    // should be replaced with real recipient's account
    to: 'olehviznyi@gmail.com',
    subject: req.body.subject,
    body: req.body.message,
    html: output // html body
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
  // res.writeHead(302, { Location: 'http://localhost:4300' });
  res.end();
});

let server = app.listen(8081, function(){
  let port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
