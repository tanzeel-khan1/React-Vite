/**
 * React + Tailwind Chatbot (Rule-based, Coding Focus)
 * ------------------------------------------------
 * Yeh version coding ke bare mein answers deta hai (offline, free).
 * Example queries: "what is React?", "for loop in js", "what is tailwind".
 */

import React, { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'react-tailwind-chatbot-messages';

export default function Chatbot() {
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [
        { id: 1, from: 'bot', text: 'Hello! 👋 Main coding chatbot hoon. Mujhse programming ke bare mein poochho.' }
      ];
    } catch (e) {
      return [
        { id: 1, from: 'bot', text: 'Hello! 👋 Main coding chatbot hoon. Mujhse programming ke bare mein poochho.' }
      ];
    }
  });
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const idRef = useRef(2);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // rule-based coding answers
  function getBotReply(userMsg) {
    const s = userMsg.toLowerCase().trim();

    // greetings
    if (/\bhi|hello|hey|salaam|assalam|assalamo?alekum\b/.test(s)) {
      return 'Hi! 👋 Ask me about coding, e.g., "what is React?" or "for loop in js"';
    }

    // coding Q&A
    if (s.includes('what is react')) {
      return '⚛️ React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai. Yeh component-based aur fast hoti hai.';
    }

    if (s.includes('for loop in js')) {
      return `JavaScript for loop example:
\nfor (let i = 0; i < 5; i++) {
  console.log(i);
}`;
    }

    if (s.includes('what is tailwind')) {
      return '🎨 Tailwind CSS ek utility-first CSS framework hai jo classes ki madad se fast styling allow karta hai.';
    }

    if (s.includes('difference between var let const')) {
      return `👉 var: function-scoped, re-declared ho sakta hai
👉 let: block-scoped, re-declared nahi ho sakta
👉 const: block-scoped, value change nahi hoti (reference object ho sakta hai)`;
    }

    if (s.includes('array methods in js')) {
      return '🔹 Common array methods: push(), pop(), shift(), unshift(), map(), filter(), reduce(), forEach().';
    }

    if (s.includes('what is node')) {
      return '🟢 Node.js ek runtime environment hai jo JavaScript ko browser ke bahar (server side) run karta hai.';
    }

    if (s.includes('what is vite')) {
      return '⚡ Vite ek fast frontend build tool hai jo development aur bundling ko fast banata hai (React, Vue, etc. ke liye).';
    }

    // fallback
    return `Mujhe "${userMsg}" samajh nahi aaya 🙈. Try queries like: "what is React?", "for loop in js", "array methods in js".`;
  }

  function sendMessage(text) {
    if (!text.trim()) return;
    const userMsg = { id: idRef.current++, from: 'user', text: text.trim(), ts: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setIsTyping(true);
    const reply = getBotReply(text.trim());
    setTimeout(() => {
      const botMsg = { id: idRef.current++, from: 'bot', text: reply, ts: Date.now() };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  function clearChat() {
    if (!confirm('Clear chat?')) return;
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-3">
        <div className="hidden md:flex flex-col gap-4 p-6 border-r border-slate-200 bg-slate-50">
          <h2 className="text-xl font-semibold">💻 Coding Chatbot</h2>
          <p className="text-sm text-slate-600">Mujhse coding ke bare mein sawaal poochho:</p>
          <ul className="list-disc list-inside text-slate-500 text-sm">
            <li>what is React?</li>
            <li>for loop in JS</li>
            <li>array methods in JS</li>
          </ul>
          <div className="mt-auto">
            <button onClick={clearChat} className="w-full py-2 rounded-lg border border-slate-200 hover:bg-slate-100">Clear chat</button>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col">
          <header className="flex items-center justify-between p-4 border-b border-slate-200">
            <div className="font-semibold">💻 Coding Chatbot</div>
            <div className="text-xs text-slate-500">Offline Demo</div>
          </header>

          <main ref={scrollRef} className="flex-1 p-4 overflow-auto space-y-3 bg-slate-50">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] px-4 py-2 rounded-xl break-words shadow-sm ${msg.from === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-slate-200 text-slate-800 rounded-bl-none'}`}>
                  <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-200 px-4 py-2 rounded-xl rounded-bl-none shadow-sm text-sm text-slate-600">Typing...</div>
              </div>
            )}
          </main>

          <footer className="p-4 border-t border-slate-200 bg-white">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="flex-1 resize-none p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ask about coding..."
              />
              <button type="button" onClick={() => sendMessage(input)} className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90">Send</button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}