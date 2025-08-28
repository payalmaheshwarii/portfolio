import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form email route
  app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    try {
      // Check if email credentials are configured
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log('Email credentials not configured. Message received:', { name, email, subject, message });
        return res.json({ 
          success: true, 
          message: 'Message received! (Email not configured yet - check server logs)' 
        });
      }

      const transporter = createTransporter();
      
      // Email to you (receiving the contact form)
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Your email where you want to receive messages
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>This message was sent from your portfolio contact form.</small></p>
        `
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      
      console.log('Contact form email sent successfully from:', email);
      
      res.json({ 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
