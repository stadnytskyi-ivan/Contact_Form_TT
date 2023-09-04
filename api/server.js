const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { port } = require('../src/config');
const { adminEmail } = require('../src/config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, email, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
        user: 'email-sender@ukr.net',
        pass: 'xOhEYvkh0oJFsIfK'
    }
});

  const mailOptions = {
    from: 'email-sender@ukr.net',
    to: adminEmail,
    subject: `Contact Form - new message`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${text}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
