import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Log that we're starting the process
    console.log('Starting contact form submission...');

    const { firstName, lastName, email, message } = await request.json();
    console.log('Received form data:', { firstName, lastName, email });

    // Validate the input
    if (!firstName || !lastName || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log before sending email
    console.log('Attempting to send email...');

    // Send email using Resend
    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'virtualspeeddate1@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    console.log('Email data:', emailData);

    const data = await resend.emails.send(emailData);
    console.log('Email sent successfully:', data);

    return NextResponse.json({
      message: 'Email sent successfully',
      data
    });
  } catch (error) {
    // Log the full error
    console.error('Failed to send email:', error);
    
    return NextResponse.json({ 
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 500 
    });
  }
} 