"use client";

import React, { useState } from 'react';

interface Message {
  content: string;
  username: string;
}

const Forum: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() !== '') {
      const newMessage: Message = {
        content: input.trim(),
        username: 'Public User', // Assuming a default username for public users
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className="mt-4"> {/* Added mt-4 for top margin */}
      <div className="w-4/5 max-w-2xl mx-auto"> {/* Adjusted width and centered */}
        <h1 className="text-2xl font-bold mb-4">Condo Forum</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            value={input}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
          >
            Post Message
          </button>
        </form>
        <MessageList messages={messages} />
      </div>
    </div>
  );
};

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div className="border rounded p-2 mb-2" key={index}>
          <p className="text-gray-800">{`${message.username}: ${message.content}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Forum;