import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Security Headers to help with CSP/CORS
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3001 http://localhost:8080 http://localhost:5173;");
  next();
});

// Root route to prevent 404 on http://localhost:3001/
app.get('/', (req, res) => {
  res.status(200).send('Portfolio Backend is running.');
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, type, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "garariyaaditya@gmail.com",
      replyTo: email as string,
      subject: `Portfolio Contact: ${subject || 'New Inquiry'}`,
      html: `
        <h2>New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${type || 'Not specified'}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(500).json({ error: "Email delivery failed" });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error("API Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Handle Chrome DevTools noise silently
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
