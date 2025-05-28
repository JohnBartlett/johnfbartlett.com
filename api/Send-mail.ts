import type { VercelRequest, VercelResponse } from '@vercel/node';
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, phone, message, honey, privacy } = req.body;

    // Honeypot spam filter
    if (honey) {
      return res.status(200).json({ message: 'Thanks for your submission.' });
    }

    // Basic validation
    if (!name || !email || !message || !company) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    if (!privacy) {
      return res.status(400).json({ error: 'Privacy agreement required.' });
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: RECIPIENT_EMAIL,
      subject: `New Inquiry from ${name} (${company})`,
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}
