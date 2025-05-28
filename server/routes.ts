import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail, sendAutoReplyEmail } from "./email-service";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  privacy: boolean;
}

interface NewsletterSignupData {
  email: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const formData: ContactFormData = req.body;
      
      // Validate required fields
      if (!formData.name || !formData.company || !formData.email || !formData.message || !formData.privacy) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      
      // Check if required env variables are set
      if (!process.env.GOOGLE_CLIENT_ID || 
          !process.env.GOOGLE_CLIENT_SECRET || 
          !process.env.GOOGLE_REFRESH_TOKEN || 
          !process.env.EMAIL_FROM) {
        console.error('Missing required environment variables for email service');
        return res.status(500).json({ message: 'Email service not properly configured' });
      }
      
      // Send notification email to admin
      const emailSent = await sendContactFormEmail(formData);
      
      if (emailSent) {
        // Send auto-reply to the user
        await sendAutoReplyEmail({
          name: formData.name,
          email: formData.email
        });
        
        res.status(200).json({ message: 'Form submitted successfully. We will contact you shortly.' });
      } else {
        // Email failed to send but don't expose this to the user
        console.error('Failed to send email notification');
        res.status(200).json({ message: 'Form submitted successfully. We will contact you shortly.' });
      }
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });

  // API route for newsletter signup
  app.post('/api/newsletter-signup', async (req, res) => {
    try {
      const { email }: NewsletterSignupData = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // Here you would typically integrate with a newsletter service
      // For now, we'll just log the signup
      console.log('Newsletter signup:', email);
      
      res.status(200).json({ message: 'Successfully subscribed to newsletter' });
    } catch (error) {
      console.error('Error processing newsletter signup:', error);
      res.status(500).json({ message: 'An error occurred while processing your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
