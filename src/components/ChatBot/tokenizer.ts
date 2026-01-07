/**
 * Tokenization and text preprocessing utilities
 * Handles text normalization, tokenization, and stop word removal
 */

import { Language } from "./type";
import { CHAR_NORMALIZE_MAP, STOP_WORDS, NLP_CONFIG } from "./config";

/**
 * Normalize text by removing special characters and diacritics
 */
export function normalizeText(text: string): string {
  let normalized = text.toLowerCase().trim();

  // Replace diacritics and special characters
  for (const [char, replacement] of Object.entries(CHAR_NORMALIZE_MAP)) {
    normalized = normalized.replace(new RegExp(char, "g"), replacement);
  }

  // Remove punctuation except spaces
  normalized = normalized.replace(/[^\w\s]/g, " ");

  // Collapse multiple spaces
  normalized = normalized.replace(/\s+/g, " ");

  return normalized;
}

/**
 * Detect language from text (simple heuristic)
 */
export function detectLanguage(text: string): Language {
  const normalized = normalizeText(text);
  const tokens = normalized.split(" ");

  let idScore = 0;
  let enScore = 0;

  for (const token of tokens) {
    if (STOP_WORDS.id.includes(token)) {
      idScore++;
    }
    if (STOP_WORDS.en.includes(token)) {
      enScore++;
    }
  }

  // Default to Indonesian if unclear
  return enScore > idScore ? "en" : "id";
}

/**
 * Tokenize text into meaningful tokens
 * Removes stop words and short tokens
 */
export function tokenize(text: string, language: Language): string[] {
  const normalized = normalizeText(text);
  const tokens = normalized.split(" ");

  const stopWords = STOP_WORDS[language];
  const minLength = NLP_CONFIG.tokenMinLength;

  return tokens.filter((token) => {
    return (
      token.length >= minLength && // Long enough
      !stopWords.includes(token) // Not a stop word
    );
  });
}

/**
 * Extract n-grams from tokens (for better phrase matching)
 */
export function extractNGrams(tokens: string[], n: number = 2): string[] {
  const ngrams: string[] = [];

  // Add unigrams (original tokens)
  ngrams.push(...tokens);

  // Add bigrams if requested
  if (n >= 2 && tokens.length >= 2) {
    for (let i = 0; i < tokens.length - 1; i++) {
      ngrams.push(`${tokens[i]} ${tokens[i + 1]}`);
    }
  }

  // Add trigrams if requested
  if (n >= 3 && tokens.length >= 3) {
    for (let i = 0; i < tokens.length - 2; i++) {
      ngrams.push(`${tokens[i]} ${tokens[i + 1]} ${tokens[i + 2]}`);
    }
  }

  return ngrams;
}

/**
 * Calculate similarity between two token sets using Jaccard similarity
 */
export function calculateSimilarity(
  tokens1: string[],
  tokens2: string[]
): number {
  const set1 = new Set(tokens1);
  const set2 = new Set(tokens2);

  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  if (union.size === 0) return 0;

  return intersection.size / union.size;
}
