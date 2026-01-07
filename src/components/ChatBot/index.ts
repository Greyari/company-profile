/**
 * Public API exports
 * Import from this file in your components
 */

// Main engine functions
export { processUserInput, findAnswer, getSuggestedQuestions } from "./engine";

// Types (useful for TypeScript)
export type {
  Language,
  KnowledgeEntry,
  ChatMessage,
  ChatContext,
  MatchResult,
} from "./type";

// Configuration (if you need to access it)
export { NLP_CONFIG } from "./config";

// Knowledge base (for reference or extension)
export { KNOWLEDGE_BASE } from "./knowledge";
