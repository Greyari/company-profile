import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME,
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.BREVO_SENDER_EMAIL,
            name: "Admin",
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `📩 Contact Form – ${name}`,
        htmlContent: `
          <div style="font-family:Arial;padding:20px;background:#f4f4f4">
            <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:10px">
              <h2>New Message from Website</h2>
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Phone:</b> ${phone || "-"}</p>
              <hr/>
              <p><b>Message:</b></p>
              <p>${message}</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Brevo error:", data);
      return NextResponse.json(
        { error: "Brevo error", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
