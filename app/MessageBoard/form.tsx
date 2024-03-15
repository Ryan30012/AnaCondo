"use client";
import { POST } from '../api/auth/register/route';
import React, { useState } from 'react';
import { getServerSession } from "next-auth";

interface Message {
  content: string;
  username: string;
}

const Forum: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const session = await getServerSession()
    if (input.trim() !== '') {
      try {
        console.log("connecting to the table");
        const response = await fetch('/api/messageBoard/route', {
          method: "POST",
          body: JSON.stringify({
            email: session?.user?.email,
            date: new Date(),
            message: input.trim()
          })
        })
        console.log(`Insertion Complete ${response.status}`);
      } catch (error) {
        console.error('Error creating message:', error);
      }
    }
  };

  const fetchMessages= async () => {
    try {
      const response = await fetch('/api/messageBoard/route', {
        method: "GET"
      });
      if (response.status === 200) {
        console.log("connecting to the table to fetch");
        const data = await response.json();
        console.log(`Fetching Complete ${data.rows}`);
        setMessages(data);
      } else {
        console.error('Error fetching messages:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
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