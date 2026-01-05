export interface ChatData {
  keywords: string[];
  answer: string;
}

export const knowledgeBase: ChatData[] = [
  {
    keywords: ["halo", "hi", "siapa", "pagi", "siang", "malam", "p", "permisi"],
    answer:
      "Selamat datang di Layanan Bantuan Kreatif System. Kami adalah mitra transformasi digital yang siap membantu bisnis Anda berkembang melalui solusi teknologi inovatif. Ada yang bisa kami bantu hari ini?",
  },
  {
    keywords: ["layanan", "service", "produk", "buat apa", "jasa", "feature"],
    answer:
      "Kreatif System menyediakan berbagai layanan profesional, di antaranya:\n1. Custom Software Development\n2. Mobile Apps (Android & iOS)\n3. Web Development\n4. UI/UX Design\n5. Sistem Enterprise & Integrasi API.\nSemua solusi kami bangun secara custom sesuai kebutuhan unik bisnis Anda.",
  },
  {
    keywords: ["harga", "biaya", "price", "budget", "bayar", "murah", "mahal"],
    answer:
      "Investasi untuk pengembangan sistem di Kreatif System bersifat fleksibel, tergantung pada kompleksitas fitur dan skala project. Kami menyarankan Anda untuk melakukan konsultasi gratis guna mendapatkan penawaran harga (Quotation) yang paling akurat.",
  },
  {
    keywords: ["alamat", "lokasi", "kantor", "dimana", "posisi", "base"],
    answer:
      "Kantor pusat kami berlokasi di Kota Batam, Indonesia. Meskipun demikian, kami memiliki sistem manajemen project remote yang efisien untuk melayani klien dari seluruh wilayah Indonesia maupun mancanegara.",
  },
  {
    keywords: ["kontak", "wa", "whatsapp", "telepon", "hubungi", "email"],
    answer:
      "Anda dapat menghubungi tim kami melalui WhatsApp di nomor yang tertera pada tombol 'Contact Us' di website ini, atau mengirimkan detail kebutuhan project Anda ke email resmi kami di info@kreatifsystem.com.",
  },
  {
    keywords: ["keunggulan", "kenapa", "kelebihan", "benefit", "mengapa"],
    answer:
      "Kreatif System mengutamakan skalabilitas, keamanan data, dan pengalaman pengguna (UX) yang intuitif. Kami tidak hanya sekadar membangun software, tapi kami menciptakan solusi yang mampu menyelesaikan masalah operasional bisnis Anda secara nyata.",
  },
  {
    keywords: ["teknologi", "stack", "bahasa", "framework", "pake apa"],
    answer:
      "Kami menggunakan teknologi modern yang scalable seperti React, Next.js, Node.js, Flutter, dan sistem cloud computing terkini untuk memastikan performa aplikasi Anda tetap optimal dalam jangka panjang.",
  },
];
