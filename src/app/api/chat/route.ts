import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import companyData from "../../../components/Chatbot/data/companyData.json";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

const SYSTEM_PROMPT = `
Kamu adalah KREASII, chatbot resmi PT Kreatif System Indonesia.

Tugas kamu:
- Menjawab pertanyaan seputar layanan, harga, teknologi, lokasi, dan proses kerja
- Gunakan **bahasa yang sama dengan pertanyaan user**
- Jawaban profesional, singkat, jelas
- Gunakan informasi ini sebagai referensi:
${JSON.stringify(companyData, null, 2)}
- Jangan menjawab pertanyaan yang tidak ada di data referensi
- Jika pertanyaan di luar data, jawab: "Maaf, informasi itu tidak tersedia. Silakan hubungi kami via WhatsApp atau email resmi."
- Jika tidak yakin jawaban, arahkan user ke WhatsApp atau email resmi.
- Jangan mengarang informasi apalagi harga product.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.3,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    });

    return NextResponse.json({
      reply: completion.choices[0]?.message?.content ?? "",
    });
  } catch (err) {
    return NextResponse.json({ error: "Chatbot error" }, { status: 500 });
  }
}
