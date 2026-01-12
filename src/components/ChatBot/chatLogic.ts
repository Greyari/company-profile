"use client";

import { useEffect, useRef, useState } from "react";

/* =====================
   TYPES
===================== */
export type Role = "user" | "bot";

export interface ChatMessage {
  role: Role;
  text: string;
  timestamp: number;
  hasAnimated?: boolean;
}

/* =====================
   HOOK
===================== */
export function useChatLogic() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Halo! Ada yang bisa kami bantu seputar layanan Kreatif System?",
      hasAnimated: true,
      timestamp: Date.now(),
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  /* Auto scroll */
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  /* =====================
     SEND MESSAGE
  ===================== */
  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userText = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText, timestamp: Date.now() },
    ]);

    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              role: m.role === "bot" ? "assistant" : "user",
              content: m.text,
            })),
            { role: "user", content: userText },
          ],
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data: { reply: string } = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply,
          hasAnimated: false,
          timestamp: Date.now(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Mohon Maaf, terjadi kesalahan. Silakan hubungi tim kami via WhatsApp.",
          hasAnimated: true,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const markAnimated = (index: number) => {
    setMessages((prev) =>
      prev.map((m, i) => (i === index ? { ...m, hasAnimated: true } : m))
    );
  };

  return {
    open,
    setOpen,
    input,
    setInput,
    isTyping,
    messages,
    scrollRef,
    sendMessage,
    markAnimated,
  };
}
