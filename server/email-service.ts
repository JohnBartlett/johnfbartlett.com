import nodemailer from 'nodemailer';
import { google } from 'googleapis';
const OAuth2 = google.auth.OAuth2;

// Types for email sending
interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Configure OAuth2 client
const createTransporter = async () => {
  try {
    // These will need to be provided as environment variables
    const oauth2Client = new OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.error("Failed to get access token:", err);
          reject(err);
        }
        resolve(token);
      });
    });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_FROM,
        accessToken,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    return transporter;
  } catch (error) {
    console.error('Error creating email transporter:', error);
    throw error;
  }
};

// Send email function
export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    const fromEmail = process.env.EMAIL_FROM;
    
    if (!fromEmail) {
      console.error('EMAIL_FROM environment variable is not set');
      return false;
    }

    const transporter = await createTransporter();
    
    const mailOptions = {
      from: `JF Bartlett & Associates <${fromEmail}>`,
      to: options.to,
      subject: options.subject,
      text: options.text || '',
      html: options.html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Send contact form email - format a nice HTML email
export const sendContactFormEmail = async (formData: {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
}): Promise<boolean> => {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_FROM;
  
  if (!adminEmail) {
    console.error('ADMIN_EMAIL or EMAIL_FROM environment variable is not set');
    return false;
  }

  // HTML email body for admin notification
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
      
      <h3 style="color: #1F2937;">Contact Information</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
      
      <h3 style="color: #1F2937;">Message</h3>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px;">
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      </div>
      
      <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
      <p style="color: #6B7280; font-size: 14px;">
        This is an automated email from your website contact form.
      </p>
    </div>
  `;

  // Plain text version as fallback
  const textBody = `
    New Contact Form Submission
    Date: ${new Date().toLocaleString()}
    
    Contact Information:
    Name: ${formData.name}
    Company: ${formData.company}
    Email: ${formData.email}
    ${formData.phone ? `Phone: ${formData.phone}` : ''}
    
    Message:
    ${formData.message}
  `;

  // Send email to admin
  return sendEmail({
    to: adminEmail,
    subject: `New Contact Form: ${formData.name} from ${formData.company}`,
    html: htmlBody,
    text: textBody,
  });
};

// Send an auto-reply to the user
export const sendAutoReplyEmail = async (formData: {
  name: string;
  email: string;
}): Promise<boolean> => {
  // HTML email for auto-reply
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #3B82F6;">Thank You for Contacting JF Bartlett & Associates</h2>
      
      <p>Dear ${formData.name},</p>
      
      <p>Thank you for reaching out to us. We have received your message and appreciate your interest in our AI advisory services.</p>
      
      <p>A member of our team will review your inquiry and get back to you shortly. We typically respond within 1-2 business days.</p>
      
      <p>If your matter is urgent, please call us directly at [Company Phone Number].</p>
      
      <p>Best regards,<br>
      JF Bartlett & Associates Team</p>
      
      <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
      <p style="color: #6B7280; font-size: 12px;">
        This is an automated response. Please do not reply to this email.
      </p>
    </div>
  `;

  // Plain text version as fallback
  const textBody = `
    Thank You for Contacting JF Bartlett & Associates
    
    Dear ${formData.name},
    
    Thank you for reaching out to us. We have received your message and appreciate your interest in our AI advisory services.
    
    A member of our team will review your inquiry and get back to you shortly. We typically respond within 1-2 business days.
    
    If your matter is urgent, please call us directly at [Company Phone Number].
    
    Best regards,
    JF Bartlett & Associates Team
    
    This is an automated response. Please do not reply to this email.
  `;

  // Send auto-reply email
  return sendEmail({
    to: formData.email,
    subject: 'Thank You for Contacting JF Bartlett & Associates',
    html: htmlBody,
    text: textBody,
  });
};