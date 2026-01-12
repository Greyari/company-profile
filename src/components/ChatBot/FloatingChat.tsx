"use client";

import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChatLogic } from "./chatLogic";
import React, { memo, useEffect, useState } from "react";

/**
 * Advanced text parser for multiple formats
 */
const parseAdvancedText = (text: string) => {
  const lines = text.split("\n");
  const blocks: Array<{
    type: "paragraph" | "numbered-list" | "bullet-list" | "heading" | "empty";
    content: string[];
  }> = [];

  let currentBlock: (typeof blocks)[0] | null = null;

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      if (currentBlock && currentBlock.type !== "empty") {
        blocks.push(currentBlock);
        currentBlock = null;
      }
      return;
    }

    const numberedMatch = trimmed.match(/^(\d+)[.)]\s+(.+)$/);
    if (numberedMatch) {
      if (currentBlock?.type !== "numbered-list") {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: "numbered-list", content: [] };
      }
      currentBlock.content.push(numberedMatch[2]);
      return;
    }

    const bulletMatch = trimmed.match(/^[-*•]\s+(.+)$/);
    if (bulletMatch) {
      if (currentBlock?.type !== "bullet-list") {
        if (currentBlock) blocks.push(currentBlock);
        currentBlock = { type: "bullet-list", content: [] };
      }
      currentBlock.content.push(bulletMatch[1]);
      return;
    }

    const headingMatch = trimmed.match(/^#{1,3}\s+(.+)$/);
    const isAllCaps =
      trimmed === trimmed.toUpperCase() &&
      trimmed.length < 50 &&
      /[A-Z]/.test(trimmed);

    if (headingMatch || isAllCaps) {
      if (currentBlock) blocks.push(currentBlock);
      blocks.push({
        type: "heading",
        content: [headingMatch ? headingMatch[1] : trimmed],
      });
      currentBlock = null;
      return;
    }

    if (currentBlock?.type !== "paragraph") {
      if (currentBlock) blocks.push(currentBlock);
      currentBlock = { type: "paragraph", content: [] };
    }
    currentBlock.content.push(trimmed);
  });

  if (currentBlock) blocks.push(currentBlock);
  return blocks;
};

/**
 * Render formatted blocks
 */
const FormattedText = memo(({ text }: { text: string }) => {
  const blocks = parseAdvancedText(text);

  return (
    <div className="space-y-4">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading":
            return (
              <h3 key={idx} className="font-semibold text-sm sm:text-base mb-2">
                {block.content[0]}
              </h3>
            );

          case "numbered-list":
            return (
              <ol key={idx} className="space-y-2 sm:space-y-2.5">
                {block.content.map((item, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3 items-start">
                    <span className="font-medium text-zinc-700 mt-0.5 min-w-5 sm:min-w-6 text-sm">
                      {i + 1}.
                    </span>
                    <span className="flex-1 leading-relaxed text-sm sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "bullet-list":
            return (
              <ul key={idx} className="space-y-2 sm:space-y-2.5">
                {block.content.map((item, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3 items-start">
                    <span className="text-zinc-700 mt-1 text-sm">•</span>
                    <span className="flex-1 leading-relaxed text-sm sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "paragraph":
            return (
              <p
                key={idx}
                className="leading-relaxed text-zinc-800 text-sm sm:text-[15px]"
              >
                {block.content.join(" ")}
              </p>
            );

          default:
            return null;
        }
      })}
    </div>
  );
});

FormattedText.displayName = "FormattedText";

/**
 * Typewriter with consistent formatting
 */
const TypewriterMessage = memo(
  ({ text, onFinish }: { text: string; onFinish: () => void }) => {
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
      if (charIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + text[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 12);
        return () => clearTimeout(timer);
      } else {
        onFinish();
      }
    }, [charIndex, text, onFinish]);

    const blocks = parseAdvancedText(displayText);

    return (
      <div className="space-y-4">
        {blocks.map((block, idx) => {
          switch (block.type) {
            case "heading":
              return (
                <h3
                  key={idx}
                  className="font-semibold text-sm sm:text-base mb-2"
                >
                  {block.content[0]}
                </h3>
              );

            case "numbered-list":
              return (
                <ol key={idx} className="space-y-2 sm:space-y-2.5">
                  {block.content.map((item, i) => (
                    <li key={i} className="flex gap-2 sm:gap-3 items-start">
                      <span className="font-medium text-zinc-700 mt-0.5 min-w-5 sm:min-w-6 text-sm">
                        {i + 1}.
                      </span>
                      <span className="flex-1 leading-relaxed text-sm sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              );

            case "bullet-list":
              return (
                <ul key={idx} className="space-y-2 sm:space-y-2.5">
                  {block.content.map((item, i) => (
                    <li key={i} className="flex gap-2 sm:gap-3 items-start">
                      <span className="text-zinc-700 mt-1 text-sm">•</span>
                      <span className="flex-1 leading-relaxed text-sm sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              );

            case "paragraph":
              return (
                <p
                  key={idx}
                  className="leading-relaxed text-zinc-800 text-sm sm:text-[15px]"
                >
                  {block.content.join(" ")}
                </p>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  }
);

TypewriterMessage.displayName = "TypewriterMessage";

/**
 * Main component
 */
export default function FloatingChat() {
  const {
    open,
    setOpen,
    input,
    setInput,
    isTyping,
    messages,
    scrollRef,
    sendMessage,
    markAnimated,
  } = useChatLogic();

  // Lock body scroll when chat is open
  useEffect(() => {
    if (open) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        document.documentElement.style.overflow = "";
      };
    }
  }, [open]);

  // Auto scroll to bottom when new message or typing
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating Button - Responsive positioning */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 bg-zinc-950 text-white rounded-full shadow-lg z-50 hover:bg-zinc-800 transition-colors"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay - prevents interaction with page */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60"
            />

            {/* Chat Window - Responsive with original size */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="fixed inset-4 sm:inset-auto sm:bottom-24 sm:right-6 
                         w-auto sm:w-96
                         h-auto sm:h-144
                         max-h-[calc(100vh-2rem)] sm:max-h-144
                         bg-white rounded-2xl sm:rounded-3xl shadow-2xl z-70 
                         flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 sm:p-6 bg-zinc-950 text-white flex justify-between items-center shrink-0">
                <div className="flex gap-2 sm:gap-3 items-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-zinc-950 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-xs sm:text-sm">
                        KREASII
                      </p>
                      <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium rounded-md bg-yellow-100 text-yellow-700 border border-yellow-200">
                        BETA
                      </span>
                    </div>

                    <span className="text-[10px] sm:text-xs text-zinc-400">
                      Ready to help
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="hover:bg-zinc-800 p-1.5 sm:p-2 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Messages Container */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 
                           bg-linear-to-b from-zinc-50 to-white
                           overscroll-contain"
              >
                {messages.map((msg, i) => (
                  <div
                    key={msg.timestamp}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[82%] px-3 py-3 sm:px-4 sm:py-4 md:px-5 
                                  rounded-2xl ${
                                    msg.role === "user"
                                      ? "bg-zinc-950 text-white rounded-tr-md shadow-md"
                                      : "bg-white border border-zinc-200 rounded-tl-md shadow-sm"
                                  }`}
                    >
                      {msg.role === "bot" ? (
                        msg.hasAnimated ? (
                          <FormattedText text={msg.text} />
                        ) : (
                          <TypewriterMessage
                            text={msg.text}
                            onFinish={() => markAnimated(i)}
                          />
                        )
                      ) : (
                        <p className="leading-relaxed text-sm sm:text-[15px]">
                          {msg.text}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-zinc-200 rounded-2xl rounded-tl-md px-3 py-3 sm:px-5 sm:py-4 shadow-sm">
                      <div className="flex gap-1 sm:gap-1.5">
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-3 sm:p-4 border-t border-zinc-200 bg-white shrink-0">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    className="flex-1 border border-zinc-300 rounded-full
                               px-3 py-2 sm:px-4 sm:py-2
                               text-sm
                               focus:outline-none focus:ring-2 focus:ring-zinc-900 
                               focus:border-transparent transition-all"
                    placeholder="Type your message..."
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || isTyping}
                    className="bg-zinc-950 text-white p-2 sm:p-2.5
                               rounded-full
                               hover:bg-zinc-800 disabled:opacity-40 
                               disabled:cursor-not-allowed transition-all 
                               active:scale-95 shrink-0"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
