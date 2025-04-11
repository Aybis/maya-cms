'use client';
import React, { useState } from 'react';

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState<
    { sender: string; message: string }[]
  >([
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
    { sender: 'AI', message: 'Hello! How can I assist you today?' },
    { sender: 'User', message: 'Can you tell me about GPT-4o?' },
    { sender: 'AI', message: 'GPT-4o is a state-of-the-art language model.' },
  ]);
  const [input, setInput] = useState('');
  const [model, setModel] = useState('gpt-4o');

  const handleSend = () => {
    if (input.trim()) {
      setChatHistory((prev) => [...prev, { sender: 'User', message: input }]);
      // Simulate AI response
      setChatHistory((prev) => [
        ...prev,
        { sender: 'User', message: input },
        { sender: 'AI', message: `Response from ${model}: ${input}` },
      ]);
      setInput('');
    }
  };

  {
    /* AI Message Component */
  }
  const AIMessage = ({ message }: { message: string }) => {
    return (
      <div className="flex flex-col gap-y-2 w-full">
        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mr-2">
          AI
        </div>
        <div
          className="inline-block max-w-3/4 text-zinc-900 dark:text-zinc-200 bg-red-300 py-2"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      </div>
    );
  };

  {
    /* User Message Component */
  }
  const UserMessage = ({ message }: { message: string }) => {
    return (
      <div className="inline-block bg-blue-500 text-white rounded-l-md rounded-tr-md px-3 py-2">
        {message}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Dropdown for Model Selection */}
      <div className="my-4">
        <label
          htmlFor="model"
          className="block text-sm font-medium leading-relaxed text-gray-700 dark:text-zinc-300"
        >
          List Models
        </label>
        <select
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-zinc-900 px-4 py-2 appearance-none border-2 dark:border-zinc-500 text-zinc-800 dark:text-zinc-200"
        >
          <option value="gpt-4o">GPT-4o</option>
          <option value="gemini">Gemini</option>
          <option value="llama">Llama</option>
        </select>
      </div>

      {/* Chat History */}
      <div className="flex flex-col">
        <div className="overflow-y-auto h-[75vh] border rounded-xl p-8 bg-gray-50 dark:bg-zinc-800 ">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`mb-2 flex ${
                chat.sender === 'User'
                  ? 'justify-end'
                  : 'justify-start items-center'
              }`}
            >
              {chat.sender === 'AI' ? (
                <AIMessage message={chat.message} />
              ) : (
                <UserMessage message={chat.message} />
              )}
            </div>
          ))}
        </div>

        {/* Input Form */}
        <div className="mt-4 bg-yellow-100 h-32">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
