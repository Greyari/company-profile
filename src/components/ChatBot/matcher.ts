/**
 * Keyword matching and scoring logic with synonym expansion
 * Core NLP matching engine
 */

import { KnowledgeEntry, Language, MatchResult } from "./type";
import { NLP_CONFIG } from "./config";
import { ID_SYNONYMS, EN_SYNONYMS } from "./synonym";
import { calculateSimilarity } from "./tokenizer";

/**
 * Expand tokens with synonyms
 */
export function expandWithSynonyms(
  tokens: string[],
  language: Language
): string[] {
  const synonymMap = language === "id" ? ID_SYNONYMS : EN_SYNONYMS;
  const expanded = new Set(tokens);

  for (const token of tokens) {
    // Add synonyms for this token
    if (synonymMap[token]) {
      synonymMap[token].forEach((syn) => expanded.add(syn));
    }

    // Check if this token is a synonym of another word
    for (const [key, syns] of Object.entries(synonymMap)) {
      if (syns.includes(token)) {
        expanded.add(key);
      }
    }
  }

  return Array.from(expanded);
}

/**
 * Calculate match score for a knowledge entry
 */
export function calculateMatchScore(
  userTokens: string[],
  entry: KnowledgeEntry,
  language: Language
): number {
  const keywords = entry.keywords[language];
  let score = 0;

  // Expand user tokens with synonyms
  const expandedUserTokens = expandWithSynonyms(userTokens, language);

  // Calculate base similarity score
  const similarity = calculateSimilarity(expandedUserTokens, keywords);
  score += similarity;

  // Check for exact keyword matches (bonus)
  const exactMatches = keywords.filter((kw) => {
    const kwTokens = kw.toLowerCase().split(" ");
    return kwTokens.every((kwToken) => expandedUserTokens.includes(kwToken));
  });

  if (exactMatches.length > 0) {
    score += NLP_CONFIG.exactMatchBonus * exactMatches.length;
  }

  // Apply priority multiplier
  const priority = entry.priority || 5;
  score *= priority / 5;

  return score;
}

/**
 * Find matched keywords for display purposes
 */
export function getMatchedKeywords(
  userTokens: string[],
  entry: KnowledgeEntry,
  language: Language
): string[] {
  const keywords = entry.keywords[language];
  const expandedUserTokens = expandWithSynonyms(userTokens, language);

  return keywords.filter((kw) => {
    const kwTokens = kw.toLowerCase().split(" ");
    return kwTokens.some((kwToken) => expandedUserTokens.includes(kwToken));
  });
}

/**
 * Find best matching knowledge entries
 */
export function findMatches(
  userTokens: string[],
  knowledgeBase: KnowledgeEntry[],
  language: Language,
  topK: number = 3
): MatchResult[] {
  const results: MatchResult[] = [];

  for (const entry of knowledgeBase) {
    const score = calculateMatchScore(userTokens, entry, language);

    if (score > 0) {
      const matchedKeywords = getMatchedKeywords(userTokens, entry, language);

      results.push({
        entry,
        score,
        confidence: Math.min(score, 1), // Normalize to 0-1
        matchedKeywords,
      });
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  // Return top K results
  return results.slice(0, topK);
}

/**
 * Apply context-based score adjustment
 */
export function adjustScoreWithContext(
  results: MatchResult[],
  lastCategory?: string
): MatchResult[] {
  if (!lastCategory) return results;

  return results.map((result) => {
    if (result.entry.category === lastCategory) {
      return {
        ...result,
        score: result.score + NLP_CONFIG.categoryMatchBonus,
        confidence: Math.min(
          result.confidence + NLP_CONFIG.categoryMatchBonus,
          1
        ),
      };
    }
    return result;
  });
}
