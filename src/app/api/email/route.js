import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { to, subject, text } = body;

    if (!to || !subject || !text) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    let info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully", info }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email", error }), { status: 500 });
  }
}
