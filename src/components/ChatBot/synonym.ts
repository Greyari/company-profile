/**
 * Synonym expansion dictionaries for Indonesian and English
 * Add new synonyms here to improve matching flexibility
 * Safe for non-developers to update
 */

import { SynonymMap } from "./type";

// Indonesian synonyms
export const ID_SYNONYMS: SynonymMap = {
  // Greetings
  halo: ["hi", "hai", "helo", "hello"],
  pagi: ["morning"],
  siang: ["afternoon", "sore"],
  malam: ["evening", "night", "malem"],

  // Services related
  layanan: ["service", "jasa", "produk", "fitur", "feature"],
  pembuatan: ["buat", "bikin", "develop", "develop", "pembangunan"],
  aplikasi: ["app", "apps", "software", "sistem", "system"],
  website: ["web", "site", "portal"],
  mobile: ["hp", "handphone", "smartphone"],
  desain: ["design", "rancangan", "mockup"],

  // Pricing related
  harga: ["biaya", "tarif", "price", "cost", "budget", "invest", "investasi"],
  bayar: ["payment", "pembayaran", "pay"],
  murah: ["terjangkau", "affordable", "hemat"],
  mahal: ["expensive", "costly"],

  // Location related
  alamat: ["lokasi", "kantor", "office", "tempat", "address"],
  dimana: ["where", "di mana", "posisi", "letak"],

  // Contact related
  kontak: ["contact", "hubungi", "telepon", "telpon", "call"],
  whatsapp: ["wa", "watsap", "whasap"],
  email: ["mail", "surel", "e-mail"],

  // Benefits related
  keunggulan: [
    "kelebihan",
    "benefit",
    "advantage",
    "plus",
    "mengapa",
    "kenapa",
  ],
  bagus: ["baik", "good", "excellence", "quality", "kualitas"],

  // Technology related
  teknologi: ["tech", "technology", "stack", "framework"],
  bahasa: ["language", "programming"],

  // Questions
  apa: ["what", "apakah"],
  bagaimana: ["how", "gimana"],
  kapan: ["when"],
  siapa: ["who"],
  berapa: ["how much", "how many"],
};

// English synonyms
export const EN_SYNONYMS: SynonymMap = {
  // Greetings
  hello: ["hi", "hey", "greetings", "halo"],
  morning: ["pagi"],
  afternoon: ["siang"],
  evening: ["malam", "night"],

  // Services related
  service: ["layanan", "jasa", "product", "feature", "offering"],
  development: ["pembuatan", "build", "create", "pembangunan"],
  application: ["app", "apps", "software", "system", "aplikasi"],
  website: ["web", "site", "portal"],
  mobile: ["smartphone", "phone", "hp"],
  design: ["desain", "mockup", "ui", "ux"],

  // Pricing related
  price: ["harga", "cost", "biaya", "pricing", "tarif"],
  payment: ["bayar", "pembayaran", "pay"],
  cheap: ["affordable", "murah", "budget-friendly"],
  expensive: ["costly", "mahal", "pricey"],

  // Location related
  address: ["alamat", "location", "office"],
  where: ["dimana", "location", "position"],

  // Contact related
  contact: ["kontak", "reach", "hubungi"],
  whatsapp: ["wa", "watsap"],
  email: ["mail", "e-mail"],

  // Benefits related
  advantage: ["benefit", "keunggulan", "strength", "plus"],
  quality: ["kualitas", "excellence", "bagus"],
  why: ["mengapa", "kenapa", "reason"],

  // Technology related
  technology: ["tech", "teknologi", "stack"],
  framework: ["library", "tool"],

  // Questions
  what: ["apa"],
  how: ["bagaimana"],
  when: ["kapan"],
  who: ["siapa"],
};
