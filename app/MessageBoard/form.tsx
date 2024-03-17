"use client";
import { POST, GET, PUT, DELETE } from '../api/messageBoard/route';
import React, { useState, useEffect } from 'react';
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

interface Message {
  content: string;
  username: string;
}

const Forum: React.FC = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    fetchMessages();
  }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (input.trim() !== '') {
      try {
        const date = new Date();
        date.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0  
        const dateString = date.toISOString().split('T')[0]; // Convert date to string in format YYYY-MM-DD
        console.log(email, ' ', input, ' ', dateString);
        
        console.log("Connecting to the table...");
        const response = await fetch('/api/messageBoard', {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            date: dateString,
            message: formData.get("message")
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          console.log("Message created successfully.");
          setInput('');
          fetchMessages();
        } else {
          console.error("Error creating message:", response.statusText);
        }
      } catch (error) {
        console.error("Error creating message:", error);
      }
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messageBoard', {
        method: 'GET',
      });
      if (response.status === 200) {
        console.log('Connecting to the table to fetch...');
        const data = await response.json();
        console.log(`Fetching complete. Data: ${JSON.stringify(data)}`);
        setMessages(data.rows);
      } else {
        console.error(`Error fetching messages: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error fetching messages: ${error}`);
    }
  };

  return (
    <div className="mt-4"> {/* Added mt-4 for top margin */}
      <div className="w-4/5 max-w-2xl mx-auto"> {/* Adjusted width and centered */}
        <h1 className="text-2xl font-bold mb-4">Condo Forum</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
          name='message'
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
      {messages && messages.map((message, index) => (
        <div className="border rounded p-2 mb-2" key={index}>
          <p className="text-gray-800">{`${message.username}: ${message.content}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Forum;