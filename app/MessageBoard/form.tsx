"use client";


import { POST, GET, PUT, DELETE } from '../api/messageBoard/route';
import React, { useState, useEffect } from 'react';
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import NotificationsBtn from "@/components/NotificationsBtn/NotificationsBtn";


interface Message {
  content: string;
  username: string;
}

const Forum: React.FC = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

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
        const messageData = data.data.rows;
        console.log('Fetching complete. Data:', messageData);
        setMessages(messageData);
      } else {
        console.error(`Error fetching messages: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error fetching messages: ${error}`);
    }
  };
  return (
    <div className="bg-yellow-300 bg-opacity-40 min-h-screen pt-16 relative">
      <div className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center -z-10" style={{ left: '-40px'}}>
        <img src="/imgbin_architectural-drawing-architecture-sketch-building-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
      </div>
      <div className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center -z-10" style={{ right: '-40px'}}>
        <img src="/imgbin_drawing-building-architecture-png.png" alt="Condo" className="h-auto w-full max-h-80vh" />
      </div>
  
      <div className="w-4/5 max-w-2xl mx-auto z-10">
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
      <div className="absolute top-0 right-0 p-4">
        <NotificationsBtn />
      </div>
    </div>

    <div className="w-4/5 max-w-2xl mx-auto z-10">

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
    <div className="absolute top-0 right-0 p-4">
        <NotificationsBtn />
      </div>
  </div>
);
};


interface Message {
  id: number;
  email: string;
  date: string;
  message: string;
}

interface MessageListProps {
  messages: Message[];
}
const MessageList: React.FC<MessageListProps> = ({ messages }) => {

  const reversedMessages = messages.slice().reverse();

  return (
    <div>
      {reversedMessages.map((message, index) => (
        <div className="border rounded p-2 mb-2 bg-white" key={index}>
          <p className="text-gray-800">
            ID: {message.id}<br />
            Email: {message.email}<br />
            Date: {message.date}<br />
            Message: {message.message}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forum;
