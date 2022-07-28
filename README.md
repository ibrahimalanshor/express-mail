# Express Mail

## Instal

```bash
npm install nodemailer
```

## Usage

```js
const { createMail } = require('@ibrahimanshor/express-mail');

await createMail(
  {
    from: 'admin@example.com',
    to: 'user@example.com',
    subject: 'Hello',
    content: 'Hello sir',
    link: 'http://example.com',
    button: 'Click Me',
    footer: 'www.example.com',
  },
  {
    transport: {
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'xxxxxxxxxxxxxx',
        pass: 'xxxxxxxxxxxxxx',
      },
    },
    custom: false, // use custom html template (default false)
  }
);
```
