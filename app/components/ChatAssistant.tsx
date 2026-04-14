'use client';

import { useState, useRef, useEffect } from 'react';
import { chat } from '@/content/en/chat';

type Message = { role: 'user' | 'assistant'; content: string };

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: chat.initialMessage },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setIsTyping(true);

    // Placeholder response — replace with real API call later
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: chat.placeholderResponse },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#540619] text-white shadow-lg shadow-[#540619]/30 transition-all hover:bg-[#6d0822] hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#540619] focus:ring-offset-2 focus:ring-offset-[#f6f4f0]"
        aria-label={open ? chat.closeAriaLabel : chat.openAriaLabel}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-40 flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-200 ${
          open ? 'h-[420px] opacity-100' : 'h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-[#f6f4f0] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#540619] text-white">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-900">{chat.title}</p>
            <p className="text-xs text-slate-500">{chat.subtitle}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.role === 'user' ? 'bg-[#540619] text-white' : 'bg-slate-100 text-slate-800'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-slate-100 px-4 py-2.5 text-sm text-slate-500">
                <span className="inline-flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="border-t border-slate-200 p-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={chat.inputPlaceholder}
              className="flex-1 rounded-xl border border-slate-200 bg-[#f6f4f0] px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-[#540619] focus:outline-none focus:ring-1 focus:ring-[#540619]"
              aria-label={chat.inputAriaLabel}
            />
            <button
              type="submit"
              className="rounded-xl bg-[#540619] px-4 py-2.5 text-white transition-colors hover:bg-[#6d0822] focus:outline-none focus:ring-2 focus:ring-[#540619] focus:ring-offset-2 disabled:opacity-50"
              aria-label={chat.sendAriaLabel}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
