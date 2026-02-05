import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import companyDataId from "@/components/ChatBot/data/companyData.id.json";
import companyDataEn from "@/components/ChatBot/data/companyData.en.json";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, locale } = await req.json();

    // 1️⃣ Select data based on locale
    const companyData = locale === "en" ? companyDataEn : companyDataId;

    // 2️⃣ Language hard lock
    const languageLock =
      locale === "en"
        ? "The user is using the English version of the website. Respond strictly in English."
        : "User menggunakan website versi Indonesia. Jawab secara konsisten dalam Bahasa Indonesia.";

    // 3️⃣ Build SYSTEM PROMPT (DINAMIS)
    const SYSTEM_PROMPT = `
You are KREASII, the official AI customer service assistant of PT Kreatif System Indonesia.

LANGUAGE RULE (VERY IMPORTANT):
- Always respond in the SAME language as the user's last message.
- Do NOT mix languages in one response.
- If the language is unclear, follow the website locale.

ROLE & TASKS:
- Answer questions about services, technology, location, and work procedures
- Be professional, concise, and clear
- Use ONLY the provided reference data

REFERENCE DATA:
${JSON.stringify(companyData, null, 2)}

RESTRICTIONS:
- Do NOT invent information
- Do NOT guess pricing
- If information is not available:
  - Indonesian:
    "Maaf, informasi tersebut tidak tersedia. Silakan hubungi kami melalui WhatsApp atau email resmi."
  - English:
    "Sorry, that information is not available. Please contact us via WhatsApp or official email."
`;

    // 4️⃣ Call LLM
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.3,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: languageLock },
        ...messages,
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0]?.message?.content ?? "",
    });
  } catch (err) {
    return NextResponse.json({ error: "Chatbot error" }, { status: 500 });
  }
}
