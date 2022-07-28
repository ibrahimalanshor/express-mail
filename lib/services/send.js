const nodemailer = require('nodemailer');

module.exports = async (data, config) => {
  const transporter = nodemailer.createTransport(config);

  return await transporter.sendMail({
    from: data.from,
    to: data.to,
    subject: data.subject,
    html: data.html,
  });
};
