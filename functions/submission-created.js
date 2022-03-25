require('dotenv').config()
const { EMAIL_TOKEN } = process.env
const sgMail = require('@sendgrid/mail')
const handler = async (event) => {
  const { name, message, email, number } = JSON.parse(event.body).payload.data
  try {
    sgMail.setApiKey(EMAIL_TOKEN)
    const toRees = {
      to: 'timmikoch@gmail.com',
      from: 'Ree\'s Desk <tim@dezinerdudes.com>',
      subject: "New message from Ree's Desk",
      text: message,
      html: `<p>Hey Marie,</p>
      <p>You received a new message from your site Ree's Desk. See details below:</p>
      <p>Client Name: ${name}<br>
      Email: ${email}<br>
      Contact Number: ${number}<br>
      Message: ${message}<br>
      </p>
      <p>Ree's Desk Site</p>
      `
    }
    const toClient = {
      to: email,
      from: 'ReesDesk <tim@dezinerdudes.com>',
      subject: "Thank you for contacting Ree's Desk",
      text: `Hey ${name}!
      
      This is just to say we got your message and will be in touch with you shortly!
      
      Kind Regards,
      Ree's Desk Team
      `,

      html: `<p>Hey there ${name},</p>
      <p>Thank you for reaching out to us!</p>
      <p>We have received your message and will get back to you shortly!<p>
      <p>Looking forward to chat!</p>
      <p>Kind Regards,<br>
      Ree's Desk Team</p>
      `
    }
    sgMail
      .send(toClient).then(sgMail.send(toRees))
      .then(() => {
        return event
      })
      .catch((error) => {
        return error
      })
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
