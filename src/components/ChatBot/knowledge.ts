/**
 * Bilingual knowledge base for Kreatif System
 * This file is SAFE for non-developers to update
 *
 * HOW TO ADD NEW ENTRIES:
 * 1. Copy an existing entry structure
 * 2. Give it a unique 'id' (lowercase, use dashes)
 * 3. Set appropriate 'category' (greeting, service, pricing, etc.)
 * 4. Add keywords in both languages (id and en)
 * 5. Write answers in both languages (id and en)
 * 6. Optionally set 'priority' (higher = more important)
 */

import { KnowledgeEntry } from "./type";

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: "greeting",
    category: "greeting",
    priority: 10,
    keywords: {
      id: ["halo", "hi", "hai", "pagi", "siang", "malam", "permisi", "siapa"],
      en: [
        "hello",
        "hi",
        "hey",
        "morning",
        "afternoon",
        "evening",
        "greetings",
      ],
    },
    answer: {
      id: "Selamat datang di Layanan Bantuan Kreatif System. Kami adalah mitra transformasi digital yang siap membantu bisnis Anda berkembang melalui solusi teknologi inovatif. Ada yang bisa kami bantu hari ini?",
      en: "Welcome to Kreatif System Support. We are your digital transformation partner ready to help your business grow through innovative technology solutions. How can we assist you today?",
    },
    relatedTopics: ["services-overview", "contact-info"],
  },
  {
    id: "services-overview",
    category: "service",
    priority: 9,
    keywords: {
      id: [
        "layanan",
        "service",
        "produk",
        "jasa",
        "feature",
        "buat apa",
        "apa saja",
        "tawarkan",
      ],
      en: [
        "service",
        "product",
        "feature",
        "offering",
        "what do you",
        "provide",
      ],
    },
    answer: {
      id: "Kreatif System menyediakan berbagai layanan profesional:\n\n1. Custom Software Development - Solusi software yang disesuaikan dengan kebutuhan bisnis Anda\n2. Mobile Apps (Android & iOS) - Aplikasi mobile native dan cross-platform\n3. Web Development - Website profesional dan aplikasi web modern\n4. UI/UX Design - Desain antarmuka yang intuitif dan user-friendly\n5. Sistem Enterprise & Integrasi API - Solusi enterprise dan integrasi sistem\n\nSemua solusi kami bangun secara custom sesuai kebutuhan unik bisnis Anda.",
      en: "Kreatif System provides various professional services:\n\n1. Custom Software Development - Tailored software solutions for your business needs\n2. Mobile Apps (Android & iOS) - Native and cross-platform mobile applications\n3. Web Development - Professional websites and modern web applications\n4. UI/UX Design - Intuitive and user-friendly interface design\n5. Enterprise Systems & API Integration - Enterprise solutions and system integration\n\nAll our solutions are custom-built to match your unique business requirements.",
    },
    relatedTopics: ["pricing-inquiry", "technology-stack"],
  },
  {
    id: "pricing-inquiry",
    category: "pricing",
    priority: 8,
    keywords: {
      id: [
        "harga",
        "biaya",
        "price",
        "tarif",
        "budget",
        "bayar",
        "murah",
        "mahal",
        "berapa",
      ],
      en: [
        "price",
        "cost",
        "budget",
        "payment",
        "how much",
        "expensive",
        "cheap",
      ],
    },
    answer: {
      id: "Investasi untuk pengembangan sistem di Kreatif System bersifat fleksibel dan disesuaikan dengan:\n\n• Kompleksitas fitur yang dibutuhkan\n• Skala dan cakupan project\n• Timeline pengerjaan\n• Teknologi yang digunakan\n\nKami menyarankan Anda untuk melakukan konsultasi gratis terlebih dahulu. Dengan begitu, kami dapat memberikan penawaran harga (quotation) yang akurat sesuai kebutuhan spesifik bisnis Anda.",
      en: "Investment for system development at Kreatif System is flexible and tailored based on:\n\n• Feature complexity required\n• Project scale and scope\n• Development timeline\n• Technologies used\n\nWe recommend scheduling a free consultation first. This way, we can provide an accurate quotation that matches your specific business needs.",
    },
    relatedTopics: ["contact-info", "consultation-process"],
  },
  {
    id: "location-office",
    category: "location",
    priority: 7,
    keywords: {
      id: ["alamat", "lokasi", "kantor", "dimana", "posisi", "base", "tempat"],
      en: ["address", "location", "office", "where", "position", "base"],
    },
    answer: {
      id: "Kantor pusat Kreatif System berlokasi di Kota Batam, Indonesia.\n\nMeskipun demikian, kami memiliki sistem manajemen project remote yang efisien sehingga dapat melayani klien dari seluruh wilayah Indonesia maupun mancanegara. Lokasi fisik bukan halangan bagi kami untuk memberikan layanan terbaik kepada Anda.",
      en: "Kreatif System headquarters is located in Batam City, Indonesia.\n\nHowever, we have an efficient remote project management system that enables us to serve clients from all regions of Indonesia and internationally. Physical location is not a barrier for us to deliver the best service to you.",
    },
    relatedTopics: ["contact-info"],
  },
  {
    id: "contact-info",
    category: "contact",
    priority: 9,
    keywords: {
      id: [
        "kontak",
        "hubungi",
        "whatsapp",
        "wa",
        "telepon",
        "email",
        "chat",
        "komunikasi",
      ],
      en: [
        "contact",
        "reach",
        "whatsapp",
        "wa",
        "phone",
        "email",
        "chat",
        "communicate",
      ],
    },
    answer: {
      id: "Anda dapat menghubungi tim Kreatif System melalui:\n\n📱 WhatsApp: Klik tombol 'Contact Us' di website ini untuk terhubung langsung dengan tim kami\n✉️ Email: info@kreatifsystem.com\n\nTim kami siap membantu menjawab pertanyaan dan mendiskusikan kebutuhan project Anda.",
      en: "You can contact the Kreatif System team through:\n\n📱 WhatsApp: Click the 'Contact Us' button on this website to connect directly with our team\n✉️ Email: info@kreatifsystem.com\n\nOur team is ready to help answer your questions and discuss your project requirements.",
    },
    relatedTopics: ["consultation-process"],
  },
  {
    id: "company-advantage",
    category: "benefit",
    priority: 7,
    keywords: {
      id: [
        "keunggulan",
        "kelebihan",
        "benefit",
        "mengapa",
        "kenapa",
        "pilih",
        "bagus",
      ],
      en: [
        "advantage",
        "benefit",
        "why",
        "strength",
        "choose",
        "good",
        "quality",
      ],
    },
    answer: {
      id: "Keunggulan Kreatif System:\n\n✓ Skalabilitas - Sistem yang kami bangun dapat berkembang seiring pertumbuhan bisnis Anda\n✓ Keamanan Data - Implementasi best practices security untuk melindungi data bisnis Anda\n✓ User Experience - Desain antarmuka yang intuitif dan mudah digunakan\n✓ Problem Solver - Kami tidak hanya membangun software, tapi menciptakan solusi untuk masalah operasional bisnis Anda\n✓ Modern Technology - Menggunakan tech stack terkini yang proven dan reliable\n✓ Long-term Support - Dukungan maintenance dan pengembangan berkelanjutan",
      en: "Kreatif System Advantages:\n\n✓ Scalability - Systems we build can grow alongside your business\n✓ Data Security - Implementation of security best practices to protect your business data\n✓ User Experience - Intuitive and easy-to-use interface design\n✓ Problem Solver - We don't just build software, we create solutions for your operational business problems\n✓ Modern Technology - Using proven and reliable cutting-edge tech stack\n✓ Long-term Support - Ongoing maintenance and development support",
    },
    relatedTopics: ["technology-stack", "services-overview"],
  },
  {
    id: "technology-stack",
    category: "technology",
    priority: 6,
    keywords: {
      id: [
        "teknologi",
        "tech",
        "stack",
        "bahasa",
        "framework",
        "pakai apa",
        "tools",
      ],
      en: [
        "technology",
        "tech",
        "stack",
        "framework",
        "language",
        "tools",
        "use what",
      ],
    },
    answer: {
      id: "Kreatif System menggunakan teknologi modern dan scalable:\n\n🌐 Web Development:\n• React & Next.js untuk frontend yang performant\n• Node.js untuk backend yang robust\n• TypeScript untuk code quality yang lebih baik\n\n📱 Mobile Development:\n• Flutter untuk cross-platform apps\n• Native Android/iOS untuk performa maksimal\n\n☁️ Infrastructure:\n• Cloud computing (AWS, GCP, Azure)\n• Docker & Kubernetes untuk containerization\n• CI/CD automation\n\nKami memilih teknologi yang tepat berdasarkan kebutuhan spesifik project Anda untuk memastikan performa optimal jangka panjang.",
      en: "Kreatif System uses modern and scalable technologies:\n\n🌐 Web Development:\n• React & Next.js for performant frontend\n• Node.js for robust backend\n• TypeScript for better code quality\n\n📱 Mobile Development:\n• Flutter for cross-platform apps\n• Native Android/iOS for maximum performance\n\n☁️ Infrastructure:\n• Cloud computing (AWS, GCP, Azure)\n• Docker & Kubernetes for containerization\n• CI/CD automation\n\nWe choose the right technology based on your specific project requirements to ensure optimal long-term performance.",
    },
    relatedTopics: ["services-overview", "company-advantage"],
  },
  {
    id: "consultation-process",
    category: "process",
    priority: 6,
    keywords: {
      id: [
        "konsultasi",
        "gratis",
        "mulai",
        "proses",
        "langkah",
        "cara",
        "bagaimana",
      ],
      en: [
        "consultation",
        "free",
        "start",
        "process",
        "step",
        "how to",
        "begin",
      ],
    },
    answer: {
      id: "Proses memulai project dengan Kreatif System sangat mudah:\n\n1️⃣ Konsultasi Gratis - Hubungi kami untuk diskusi awal tentang kebutuhan bisnis Anda\n2️⃣ Analisis Kebutuhan - Tim kami akan menganalisis requirement secara detail\n3️⃣ Proposal & Quotation - Kami menyusun proposal teknis dan penawaran harga\n4️⃣ Development - Proses pengembangan dengan update progress berkala\n5️⃣ Testing & Launch - Quality assurance dan deployment\n6️⃣ Support - Maintenance dan dukungan berkelanjutan\n\nHubungi kami hari ini untuk memulai konsultasi gratis!",
      en: "Starting a project with Kreatif System is very easy:\n\n1️⃣ Free Consultation - Contact us for initial discussion about your business needs\n2️⃣ Requirement Analysis - Our team will analyze requirements in detail\n3️⃣ Proposal & Quotation - We prepare technical proposal and price quotation\n4️⃣ Development - Development process with regular progress updates\n5️⃣ Testing & Launch - Quality assurance and deployment\n6️⃣ Support - Ongoing maintenance and support\n\nContact us today to start your free consultation!",
    },
    relatedTopics: ["contact-info", "pricing-inquiry"],
  },
];

// Fallback responses when no good match is found
export const FALLBACK_RESPONSES = {
  id: "Mohon maaf, saya belum memiliki informasi spesifik mengenai hal tersebut. Untuk mendapatkan penjelasan yang lebih detail dan akurat, Anda dapat langsung berkonsultasi dengan konsultan IT kami melalui WhatsApp atau email di info@kreatifsystem.com.",
  en: "I apologize, but I don't have specific information about that topic yet. For more detailed and accurate explanations, you can directly consult with our IT consultants via WhatsApp or email at info@kreatifsystem.com.",
};
