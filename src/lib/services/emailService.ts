import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendNotificationEmail({ to, subject, text, html }: EmailOptions) {
  // For development, log to console instead of sending emails
  if (process.env.NODE_ENV === 'development') {
    console.log('Email notification:', { to, subject, text });
    return;
  }

  // In production, implement actual email sending
  // You can use services like SendGrid, AWS SES, etc.
  console.log('Would send email in production:', { to, subject, text });
} 