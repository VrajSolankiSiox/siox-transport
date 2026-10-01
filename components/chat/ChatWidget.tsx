"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  chatQuickPrompts,
  chatWelcome,
  getChatReply,
  type ChatReply,
} from "@/lib/chat-rules";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
  links?: ChatReply["links"];
};

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
          isUser
            ? "rounded-br-md bg-brand text-white"
            : "rounded-bl-md border border-border bg-white text-slate-700"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
        {message.links && message.links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                  isUser
                    ? "bg-white/15 text-white hover:bg-white/25"
                    : "bg-brand/10 text-brand hover:bg-brand/15"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [initialized, setInitialized] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !initialized) {
      setMessages([
        {
          id: uid(),
          role: "assistant",
          text: chatWelcome.text,
          links: chatWelcome.links,
        },
      ]);
      setInitialized(true);
    }
  }, [open, initialized]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const reply = getChatReply(trimmed);

    setMessages((prev) => [
      ...prev,
      { id: uid(), role: "user", text: trimmed },
      { id: uid(), role: "assistant", text: reply.text, links: reply.links },
    ]);
    setInput("");
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with SIOX Transports"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-[70] flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-slate-900/15 sm:right-6"
          >
            <div className="bg-gradient-to-r from-brand to-brand-dark px-4 py-3.5 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-bold">Chat with us</p>
                  <p className="text-xs text-blue-100">Questions about shipping &amp; logistics</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-1 text-blue-100 transition hover:bg-white/15 hover:text-white"
                  aria-label="Close chat"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div ref={listRef} className="flex max-h-[340px] flex-1 flex-col gap-3 overflow-y-auto bg-surface px-3 py-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 border-t border-border bg-white px-3 py-2">
                {chatQuickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-slate-600 transition hover:border-brand hover:text-brand"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            <form
              className="flex gap-2 border-t border-border bg-white p-3"
              onSubmit={(event) => {
                event.preventDefault();
                send(input);
              }}
            >
              <label className="sr-only" htmlFor="chat-input">
                Your message
              </label>
              <input
                id="chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about services, quotes, contact…"
                className="min-w-0 flex-1 rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                autoComplete="off"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
                aria-label="Send message"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat with us"}
        className="fixed bottom-5 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark sm:right-6"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg
              key="close"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              aria-hidden
            >
              <path
                d="M6 6l12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              aria-hidden
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-300 opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-white" />
          </span>
        )}
      </motion.button>
    </>
  );
}
