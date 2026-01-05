import { knowledgeBase } from "./data";

/**
 * Fungsi untuk mencari jawaban berdasarkan input pengguna.
 * Menggunakan pendekatan keyword matching yang dioptimasi.
 */
export const findAnswer = (input: string): string => {
  if (!input || input.trim().length === 0) {
    return "Mohon maaf, pesan Anda tidak terbaca. Ada yang bisa kami bantu mengenai layanan Kreatif System?";
  }

  const lowerInput = input.toLowerCase();

  // Mencari item yang memiliki salah satu keyword di dalam input user
  for (const item of knowledgeBase) {
    if (
      item.keywords.some((keyword) =>
        lowerInput.includes(keyword.toLowerCase())
      )
    ) {
      return item.answer;
    }
  }

  // Jawaban standar jika tidak ada keyword yang cocok
  return "Mohon maaf, saya belum memiliki informasi spesifik mengenai hal tersebut. Untuk mendapatkan penjelasan yang lebih detail dan akurat, Anda dapat langsung berkonsultasi dengan konsultan IT kami melalui WhatsApp.";
};
