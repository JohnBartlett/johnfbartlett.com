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
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, company, email, phone, message, honey, privacy } = req.body;

    if (honey) {
      // Honeypot detected
      res.status(200).json({ message: 'Form submitted successfully (honeypot triggered).' });
      return;
    }

    if (!name || !company || !email || !message) {
      res.status(400).json({ error: 'Missing required fields.' });
      return;
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
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

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Your message has been sent successfully.' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
}
