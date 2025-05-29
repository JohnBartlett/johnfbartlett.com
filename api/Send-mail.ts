import nodemailer from 'nodemailer';

const { SMTP_USER, SMTP_PASS, SMTP_HOST, SMTP_PORT, RECIPIENT_EMAIL } = process.env;

if (!SMTP_USER || !SMTP_PASS || !SMTP_HOST || !SMTP_PORT || !RECIPIENT_EMAIL) {
  throw new Error('Missing required environment variables.');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, phone, message, honey, privacy } = req.body;

    if (honey) {
      return res.status(200).json({ message: 'Thanks for your submission.' });
    }

    if (!name || !email || !message || !company) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const mailOptions = {
      from: email,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone || 'N/A'}
Message: ${message}
Privacy Accepted: ${privacy ? 'Yes' : 'No'}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    // Explicitly send success response
    return res.status(200).json({
      message: 'Message sent successfully!',
      info: info.response || 'Email sent',
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Failed to send message.' });
  }
}
