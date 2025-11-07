import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input) {
  if (typeof input !== "string") return "";
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];

  const validRequests = userRequests.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  );

  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  return true;
}

async function verifyCaptcha(token) {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();

    return data.success && (data.score === undefined || data.score > 0.5);
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

function generateEmailHTML(name, email, subject, message) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f8f9fa;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #1db954, #4ecdc4);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
            }
            .header p {
                margin: 8px 0 0 0;
                opacity: 0.9;
                font-size: 14px;
            }
            .content {
                padding: 30px;
            }
            .field {
                margin-bottom: 24px;
                padding: 20px;
                background: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #1db954;
            }
            .field-label {
                font-weight: 600;
                color: #1db954;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
            }
            .field-value {
                font-size: 16px;
                color: #333;
                word-wrap: break-word;
            }
            .message-field {
                border-left-color: #4ecdc4;
            }
            .message-field .field-label {
                color: #4ecdc4;
            }
            .footer {
                background: #f8f9fa;
                padding: 20px 30px;
                border-top: 1px solid #e9ecef;
                text-align: center;
                font-size: 12px;
                color: #666;
            }
            .timestamp {
                background: #e3f2fd;
                padding: 12px;
                border-radius: 6px;
                font-size: 12px;
                color: #1976d2;
                text-align: center;
                margin-bottom: 20px;
            }
            .reply-button {
                display: inline-block;
                padding: 12px 24px;
                background: #1db954;
                color: white;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin-top: 20px;
            }
            @media (max-width: 600px) {
                .container {
                    margin: 10px;
                    border-radius: 8px;
                }
                .content, .header {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📧 New Contact Form Submission</h1>
                <p>Someone reached out through your portfolio website</p>
            </div>
            
            <div class="content">
                <div class="timestamp">
                    📅 Received on ${currentDate}
                </div>
                
                <div class="field">
                    <div class="field-label">👤 Full Name</div>
                    <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">📧 Email Address</div>
                    <div class="field-value">
                        <a href="mailto:${email}" style="color: #1db954; text-decoration: none;">${email}</a>
                    </div>
                </div>
                
                <div class="field">
                    <div class="field-label">💭 Subject</div>
                    <div class="field-value">${subject}</div>
                </div>
                
                <div class="field message-field">
                    <div class="field-label">💬 Message</div>
                    <div class="field-value">${message.replace(
                      /\n/g,
                      "<br>"
                    )}</div>
                </div>
                
                <div style="text-align: center;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(
    subject
  )}" class="reply-button">
                        Reply to ${name.split(" ")[0]}
                    </a>
                </div>
            </div>
            
            <div class="footer">
                <p>This email was sent from the contact form on <strong>damak.dev</strong></p>
                <p>© ${new Date().getFullYear()} Damilola Akinlade - Software Engineer</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
      status: "error",
    });
  }

  try {
    const { name, email, subject, message, captchaToken } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required (name, email, subject, message)",
        status: "error",
      });
    }

    if (!captchaToken) {
      return res.status(400).json({
        message: "reCAPTCHA verification is required",
        status: "error",
      });
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
      return res.status(400).json({
        message: "reCAPTCHA verification failed. Please try again.",
        status: "error",
      });
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    if (!isValidEmail(sanitizedEmail)) {
      return res.status(400).json({
        message: "Please provide a valid email address",
        status: "error",
      });
    }

    if (
      sanitizedName.length > 100 ||
      sanitizedSubject.length > 200 ||
      sanitizedMessage.length > 2000
    ) {
      return res.status(400).json({
        message: "Input too long. Please keep your message concise.",
        status: "error",
      });
    }

    const clientIP =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      "unknown";
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({
        message:
          "Too many requests. Please wait 15 minutes before sending another message.",
        status: "error",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return res.status(500).json({
        message: "Server configuration error. Please try again later.",
        status: "error",
      });
    }

    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("RECAPTCHA_SECRET_KEY environment variable is not set");
      return res.status(500).json({
        message: "Server configuration error. Please try again later.",
        status: "error",
      });
    }

    const emailHTML = generateEmailHTML(
      sanitizedName,
      sanitizedEmail,
      sanitizedSubject,
      sanitizedMessage
    );

    const emailData = await resend.emails.send({
      from: process.env.FROM_EMAIL || "portfolio@damak.dev",
      to: process.env.TO_EMAIL || "damak.dev@gmail.com",
      subject: `💼 Portfolio Contact: ${sanitizedSubject}`,
      html: emailHTML,
      text: `New contact form submission from ${sanitizedName} (${sanitizedEmail})\n\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
      reply_to: sanitizedEmail,
      tags: [
        { name: "source", value: "portfolio" },
        { name: "type", value: "contact-form" },
      ],
    });

    console.log("Email sent successfully:", emailData.id);

    return res.status(200).json({
      message:
        "Thank you for your message! 🎉 I'll get back to you within 24 hours.",
      status: "success",
      emailId: emailData.id,
    });
  } catch (error) {
    console.error("Contact form error:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    if (error.name === "ResendError") {
      return res.status(400).json({
        message:
          "Email service error. Please try again or contact me directly.",
        status: "error",
      });
    }

    return res.status(500).json({
      message:
        "Something went wrong. Please try again later or reach out via email directly.",
      status: "error",
    });
  }
}
