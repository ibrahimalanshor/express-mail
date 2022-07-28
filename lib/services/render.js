const mustache = require('mustache');
const path = require('path');
const fs = require('fs').promises;

module.exports = async (data) => {
  const template = await fs.readFile(
    path.resolve('lib/template/mail.html'),
    'utf-8'
  );

  return mustache.render(template, {
    title: data.title ?? data.subject,
    content: data.content ?? data.subject,
    link: data.link,
    button: data.button,
    footer: data.footer,
  });
};
