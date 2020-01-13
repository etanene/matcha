const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Yandex',
  auth: {
    user: 'matcha21@yandex.ru',
    pass: 'matcha12345',
  },
});

const sendMail = async (userEmail, subject, text) => {
  const message = {
    from: 'matcha21@yandex.ru',
    to: userEmail,
    subject,
    html: `<p>${text}</p>`,
  };

  await transporter.sendMail(message);
};

module.exports = {
  sendMail,
};
