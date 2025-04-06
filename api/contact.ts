import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Tworzymy konfigurację transportu email (używając np. Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Można użyć innego serwisu, np. SendGrid
      auth: {
        user: "your-email@gmail.com", // Twój e-mail
        pass: "your-email-password", // Twoje hasło
      },
    });

    const mailOptions = {
      from: email,
      to: "your-email@example.com", // E-mail, na który mają przyjść wiadomości
      subject: "New Contact Form Submission",
      html: `
        <h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending message" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
