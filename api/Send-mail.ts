import nodemailer from 'nodemailer';

const { SMTP_USER, SMTP_PASS, SMTP_HOST, SMTP_PORT, RECIPIENT_EMAIL } = process.env;

if (!SMTP_USER || !SMTP_PASS || !SMTP_HOST || !SMTP_PORT || !RECIPIENT_EMAIL) {
  console.error('Missing required environment variables:', {
    SMTP_USER, SMTP_PASS, SMTP_HOST, SMTP_PORT, RECIPIENT_EMAIL
  });
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
  console.log('Incoming request:', req.method, req.url);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, phone, message, honey, privacy } = req.body;

    console.log('Received form data:', { name, company, email, phone, message, honey, privacy });

    if (honey) {
      console.warn('Honeypot triggered.');
      return res.status(200).json({ message: 'Submission ignored (honeypot triggered).' });
    }

    if (!name || !email || !message || !company || privacy !== true) {
      console.error('Validation failed for form submission.');
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

    console.log('Sending email with options:', mailOptions);

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully.');
    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err: any) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}
