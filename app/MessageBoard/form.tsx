"use client";

import NotificationsBtn from "@/components/NotificationsBtn/NotificationsBtn";
import React, { useState } from "react";

interface Message {
  content: string;
  username: string;
}

const Forum: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() !== "") {
      const newMessage: Message = {
        content: input.trim(),
        username: "Public User", // Change this corresponding to user profile
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="bg-yellow-300 bg-opacity-40 min-h-screen pt-16 relative">
      <div
        className="fixed left-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0"
        style={{ left: "-40px", top: "82px" }}
      >
        <img
          src="/imgbin_architectural-drawing-architecture-sketch-building-png.png"
          alt="Condo"
          className="h-auto w-full max-h-80vh"
        />
      </div>
      <div
        className="fixed right-0 top-0 bottom-0 w-1/3 flex items-center justify-center z-0"
        style={{ right: "-40px", top: "82px" }}
      >
        <img
          src="/imgbin_drawing-building-architecture-png.png"
          alt="Condo"
          className="h-auto w-full max-h-80vh"
        />
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

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div
          className="border rounded p-2 mb-2 bg-white break-words"
          style={{ wordWrap: "break-word" }}
          key={index}
        >
          <p className="text-gray-800">{`${message.username}: ${message.content}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Forum;
