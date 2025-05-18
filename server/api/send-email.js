import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const { name, email, subject, message } = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@tunjangjaya.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: 'info@tunjangjaya.com',
    to: 'info@tunjangjaya.com',
    subject: 'New Contact Form Submission '+new Date().toLocaleString(),
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
});
