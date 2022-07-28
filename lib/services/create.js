const render = require('./render.js');
const send = require('./send.js');

module.exports = async (data, config) => {
  const custom = config.custom ?? false;
  const message = {
    from: data.from,
    to: data.to,
    subject: data.subject,
  };

  if (!custom) {
    message.html = await render(data);
  } else {
    message.html = data.message;
  }

  return await send(message, config.transport);
};
