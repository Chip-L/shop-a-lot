const nodemailer = require("nodemailer");

async function sendMail(userEmail) {
  const testAccount = await nodemailer.createTestAccount();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Account Creation",
    text: "You have succesfully created a an account on Shop a Lot. Thanks for checking us out!",
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendMail };
