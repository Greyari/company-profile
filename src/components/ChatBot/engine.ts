/**
 * Main chatbot engine
 * Orchestrates tokenization, matching, and response generation
 */

import { Language, ChatContext, MatchResult } from "./type";
import { KNOWLEDGE_BASE, FALLBACK_RESPONSES } from "./knowledge";
import { NLP_CONFIG } from "./config";
import {
  normalizeText,
  detectLanguage,
  tokenize,
  extractNGrams,
} from "./tokenizer";
import { findMatches, adjustScoreWithContext } from "./matcher";

/**
 * Process user input and generate response
 * Main entry point for chatbot logic
 */
export function processUserInput(
  input: string,
  context?: ChatContext
): {
  response: string;
  language: Language;
  confidence: number;
  updatedContext: ChatContext;
} {
  // Validate input
  if (!input || input.trim().length === 0) {
    return {
      response: FALLBACK_RESPONSES.id,
      language: "id",
      confidence: 0,
      updatedContext: context || { messageCount: 1 },
    };
  }

  // Detect language
  const language = detectLanguage(input);

  // Normalize and tokenize
  const normalized = normalizeText(input);
  const tokens = tokenize(normalized, language);

  // Extract n-grams for better phrase matching
  const ngrams = extractNGrams(tokens, 2);

  // Find matches
  let matches = findMatches(ngrams, KNOWLEDGE_BASE, language, 3);

  // Apply context-based adjustments
  if (context?.lastCategory) {
    matches = adjustScoreWithContext(matches, context.lastCategory);
  }

  // Get best match
  const bestMatch = matches[0];

  // Check confidence threshold
  if (!bestMatch || bestMatch.confidence < NLP_CONFIG.minConfidence) {
    return {
      response: FALLBACK_RESPONSES[language],
      language,
      confidence: bestMatch?.confidence || 0,
      updatedContext: {
        messageCount: (context?.messageCount || 0) + 1,
      },
    };
  }

  // Generate response
  const response = bestMatch.entry.answer[language];

  // Update context
  const updatedContext: ChatContext = {
    lastCategory: bestMatch.entry.category,
    lastEntryId: bestMatch.entry.id,
    messageCount: (context?.messageCount || 0) + 1,
  };

  return {
    response,
    language,
    confidence: bestMatch.confidence,
    updatedContext,
  };
}

/**
 * Get suggested follow-up questions based on current entry
 */
export function getSuggestedQuestions(
  entryId: string,
  language: Language
): string[] {
  const entry = KNOWLEDGE_BASE.find((e) => e.id === entryId);

  if (!entry || !entry.relatedTopics) {
    return [];
  }

  const suggestions: string[] = [];

  for (const topicId of entry.relatedTopics.slice(0, 3)) {
    const relatedEntry = KNOWLEDGE_BASE.find((e) => e.id === topicId);
    if (relatedEntry) {
      // Generate a simple question based on the first keyword
      const firstKeyword = relatedEntry.keywords[language][0];
      if (firstKeyword) {
        suggestions.push(
          language === "id"
            ? `Bagaimana dengan ${firstKeyword}?`
            : `What about ${firstKeyword}?`
        );
      }
    }
  }

  return suggestions;
}

/**
 * Simple exported function for backward compatibility
 */
export function findAnswer(input: string): string {
  const result = processUserInput(input);
  return result.response;
}
