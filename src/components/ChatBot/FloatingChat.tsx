"use client";

import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, memo } from "react";
import { processUserInput } from "./engine";
import type { ChatContext, ChatMessage } from "./type";

/**
 * Typewriter effect component for bot messages
 */
const TypewriterMessage = memo(
  ({ text, onFinish }: { text: string; onFinish?: () => void }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 15);
        return () => clearTimeout(timeout);
      } else {
        onFinish?.();
      }
    }, [currentIndex, text, onFinish]);

    return <span className="whitespace-pre-line">{displayedText}</span>;
  }
);

TypewriterMessage.displayName = "TypewriterMessage";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ChatContext>({ messageCount: 0 });
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Halo! Ada yang bisa kami bantu seputar layanan Kreatif System?",
      hasAnimated: true,
      timestamp: Date.now(),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      role: "user",
      text: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate processing delay
    setTimeout(() => {
      const result = processUserInput(input, context);

      const botMsg: ChatMessage = {
        role: "bot",
        text: result.response,
        hasAnimated: false,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setContext(result.updatedContext);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-zinc-950 text-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] z-50 border border-zinc-800"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 w-95 h-145 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-60 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 bg-zinc-950 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ rotate: -20 }}
                    animate={{ rotate: 0 }}
                    className="w-10 h-10 bg-white text-zinc-950 rounded-xl flex items-center justify-center"
                  >
                    <Bot strokeWidth={2} />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-[15px] leading-none tracking-tight">
                      KREASII
                    </p>
                    <span className="text-[11px] text-zinc-400 flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      Ready to help
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F8F8F8] scrollbar-hide flex flex-col"
              >
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 200,
                      }}
                      key={`${msg.timestamp}-${i}`}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 text-[13.5px] leading-relaxed shadow-sm ${
                          msg.role === "user"
                            ? "bg-zinc-950 text-white rounded-[1.3rem] rounded-tr-none"
                            : "bg-white text-zinc-800 rounded-[1.3rem] rounded-tl-none border border-zinc-200/50"
                        }`}
                      >
                        {msg.role === "bot" ? (
                          !msg.hasAnimated ? (
                            <TypewriterMessage
                              text={msg.text}
                              onFinish={() => {
                                setMessages((prev) =>
                                  prev.map((m, idx) =>
                                    idx === i ? { ...m, hasAnimated: true } : m
                                  )
                                );
                              }}
                            />
                          ) : (
                            msg.text
                          )
                        ) : (
                          msg.text
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white px-4 py-3 rounded-[1.3rem] rounded-tl-none border border-zinc-200/50 shadow-sm flex gap-1 items-center">
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 0.6 }}
                          className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.2,
                          }}
                          className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.4,
                          }}
                          className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input */}
              <div className="p-5 bg-white border-t border-zinc-100">
                <div className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-[2rem] border border-transparent focus-within:border-zinc-300 transition-all shadow-inner">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-none outline-none text-sm py-2 text-zinc-800 placeholder:text-zinc-400"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="p-2 bg-zinc-950 text-white rounded-full hover:bg-zinc-800 transition-all disabled:opacity-30"
                    aria-label="Send message"
                  >
                    <Send size={16} />
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
