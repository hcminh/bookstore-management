var nodemailer = require('nodemailer');

module.exports = {
  send: function (sendTo, subject, content) {
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.elasticemail.com',
      port: 2525,
      secure: false,
      auth: {
        user: 'r0ngkon9920@gmail.com', // generated ethereal user
        pass: 'a1689a1b-6707-46ee-9980-5e846d605a68' // generated ethereal password
      }
    });
    mailOpts = {
      from: 'Nhà Sách Online <r0ngkon9920@gmail.com>',
      to: sendTo,
      subject: subject,
      generateTextFromHTML: true,
      html: content
    };
    smtpTrans.sendMail(mailOpts, (err, info) => {
      if (err) {
        console.log("Gui that bai");
      } else {
        console.log("Gui thanh cong");
      }
    });
  },
};
