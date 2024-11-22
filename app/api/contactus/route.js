import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

console.log(`EMAIL_HOST`, process.env.EMAIL_HOST);
console.log(`EMAIL_USER`, process.env.EMAIL_USER);
console.log(`EMAIL_PASS`, process.env.EMAIL_PASS);
export async function POST(req) {
  // CORS headers for requests from the specified origin
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight (OPTIONS) requests
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    const data = await req.json(); // Get the request body data
    const uniqueId = uuidv4(); // Generate a unique ID for the message

    // Destructure all fields from the form data
    const { name, email, phone, subject, message } = data;
    const ip =
      req.headers.get("x-forwarded-for") || req.connection.remoteAddress;

    // Configure Nodemailer transporter with the SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true, // SSL for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Configure the email details
    const mailOptions = {
      from: `"Tim Packaging" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: "contact@waleediqbal.com", // Set your recipient email here
      subject: `Contact Us Form Submission - ${subject || "No Subject"}`,
      messageId: uniqueId,
      html: `
        <h1>Client Information:</h1>
        <p style="font-size: 14px;"><strong>User IP Address:</strong> ${ip}</p>
        <p style="font-size: 14px;"><strong>Name:</strong> ${
          name || "Not Provided"
        }</p>
        <p style="font-size: 14px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 14px;"><strong>Phone Number:</strong> ${
          phone || "Not Provided"
        }</p>
        <p style="font-size: 14px;"><strong>Subject:</strong> ${
          subject || "Not Provided"
        }</p>
        <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;"><strong>Message:</strong><br />${message}</p>
        <p style="color: #e03e2d; font-size: 14pt;">This email was sent via the Contact Us page on your website.</p>
      `,
    };

    // Send the email using the configured transporter
    await transporter.sendMail(mailOptions);

    // Return a success response
    const response = NextResponse.json({ message: "Email sent successfully" });
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    // Return an error response
    const response = NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
    Object.entries(corsHeaders).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }
}

// Handle OPTIONS request for CORS
export function OPTIONS() {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://timpackaging.com",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  return new NextResponse(null, { headers: corsHeaders });
}
