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
        subject: `Pesan Baru dari Website - ${name}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
          </head>
          <body style="margin:0;padding:0;background-color:#f8f9fa;font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
            
            <!-- Main Container -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fa;padding:20px 0">
              <tr>
                <td align="center">
                  
                  <!-- Email Card -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.1)">
                    
                    <!-- Header with Company Branding -->
                    <tr>
                      <td style="background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%);padding:40px 30px;text-align:center">
                        <h1 style="margin:0 0 8px 0;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:-0.5px">Pesan Baru</h1>
                        <p style="margin:0;color:#e5e7eb;font-size:14px;font-weight:400">PT Kreatif System Indonesia</p>
                      </td>
                    </tr>
                    
                    <!-- Content Section -->
                    <tr>
                      <td style="padding:40px 30px">
                        
                        <p style="margin:0 0 30px 0;font-size:15px;color:#6b7280;line-height:1.6">
                          Anda menerima pesan baru dari formulir kontak website PT Kreatif System Indonesia:
                        </p>
                        
                        <!-- Contact Information Card -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border-radius:8px;padding:24px;margin-bottom:24px">
                          
                          <!-- Full Name -->
                          <tr>
                            <td style="padding-bottom:20px">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="width:140px;vertical-align:top">
                                    <p style="margin:0;font-size:13px;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.5px">Nama Lengkap</p>
                                  </td>
                                  <td style="vertical-align:top">
                                    <p style="margin:0;font-size:15px;font-weight:500;color:#1a1a1a;line-height:1.5">${name}</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Email -->
                          <tr>
                            <td style="padding-bottom:20px">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="width:140px;vertical-align:top">
                                    <p style="margin:0;font-size:13px;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.5px">Email</p>
                                  </td>
                                  <td style="vertical-align:top">
                                    <p style="margin:0;font-size:15px;font-weight:400;color:#1a1a1a;line-height:1.5">
                                      <a href="mailto:${email}" style="color:#2563eb;text-decoration:none">${email}</a>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                          <!-- Phone -->
                          <tr>
                            <td>
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="width:140px;vertical-align:top">
                                    <p style="margin:0;font-size:13px;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.5px">No. Telepon</p>
                                  </td>
                                  <td style="vertical-align:top">
                                    <p style="margin:0;font-size:15px;font-weight:400;color:#1a1a1a;line-height:1.5">${
                                      phone || "-"
                                    }</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          
                        </table>
                        
                        <!-- Message Section -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border-radius:8px;padding:24px">
                          <tr>
                            <td>
                              <p style="margin:0 0 12px 0;font-size:13px;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.5px">Pesan</p>
                              <p style="margin:0;font-size:15px;font-weight:400;color:#1f2937;line-height:1.8;white-space:pre-wrap">${message}</p>
                            </td>
                          </tr>
                        </table>
                        
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color:#f9fafb;padding:30px;text-align:center;border-top:1px solid #e5e7eb">
                        <p style="margin:0 0 8px 0;font-size:13px;color:#6b7280;line-height:1.6">
                          Pesan ini dikirim dari formulir kontak website
                        </p>
                        <p style="margin:0;font-size:13px;font-weight:600;color:#1a1a1a">
                          PT Kreatif System Indonesia
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                  
                </td>
              </tr>
            </table>
            
          </body>
          </html>
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
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
