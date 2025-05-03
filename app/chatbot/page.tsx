"use client"
import React, { useState } from 'react';

const GEMINI_API_KEY = 'AIzaSyDJviWr-Jz2gAFcwPdimGJuH4g_a3C5QNA';

type Message = { role: 'user' | 'bot'; text: string };

export default function Page() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);

    // Call Gemini API
    try {
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=' + GEMINI_API_KEY,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }]
          })
        }
      );
      const data = await res.json();
      console.log('Gemini API response:', data);
      const rawBotText = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not understand.';
      const botText = stripMarkdown(rawBotText);
      setMessages(msgs => [...msgs, { role: 'bot', text: botText }]);
    } catch (e) {
      setMessages(msgs => [...msgs, { role: 'bot', text: 'Error contacting Gemini API.' }]);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-10 right-10 rounded-full w-16 h-16 bg-primary text-primary-contrast border-none text-3xl shadow-lg flex items-center justify-center"
        >
          <span role="img" aria-label="chat">💬</span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-10 right-10 w-[350px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="p-4 border-b border-gray-200 font-bold bg-primary text-primary-contrast rounded-t-2xl flex justify-between items-center">
            Design Assistant
            <button onClick={() => setOpen(false)} className="bg-transparent border-none text-primary-contrast text-lg cursor-pointer">×</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-72">
            {messages.map((msg, i) => (
              <div key={i} className={`my-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`inline-block rounded-xl px-3 py-2 max-w-[80%] ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-gray-400 italic">Thinking...</div>}
          </div>
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-primary text-primary-contrast rounded-lg px-4 font-bold disabled:bg-blue-200"
            >Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

function stripMarkdown(text: string): string {
  // Remove bold (**text**), italics (*text*), inline code (`text`), and links [text](url)
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1')       // italics
    .replace(/`([^`]+)`/g, '$1')           // inline code
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1'); // links
}
