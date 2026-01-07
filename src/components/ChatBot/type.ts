/**
 * Core type definitions for static NLP-powered chatbot
 * Defines data structures for bilingual knowledge base
 */

export type Language = "id" | "en";

export interface LocalizedText {
  id: string;
  en: string;
}

export interface KnowledgeEntry {
  id: string;
  category: string;
  keywords: {
    id: string[];
    en: string[];
  };
  answer: LocalizedText;
  priority?: number; // Higher priority = preferred when multiple matches
  relatedTopics?: string[]; // IDs of related entries for context
}

export interface SynonymMap {
  [key: string]: string[];
}

export interface NLPConfig {
  minConfidence: number;
  tokenMinLength: number;
  synonymWeight: number;
  exactMatchBonus: number;
  categoryMatchBonus: number;
}

export interface MatchResult {
  entry: KnowledgeEntry;
  score: number;
  confidence: number;
  matchedKeywords: string[];
}

export interface ChatMessage {
  role: "user" | "bot";
  text: string;
  hasAnimated?: boolean;
  timestamp?: number;
}

export interface ChatContext {
  lastCategory?: string;
  lastEntryId?: string;
  messageCount: number;
}
