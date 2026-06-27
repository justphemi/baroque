"use client"

import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./chatboticon";
import ChatMessage from "./chatmsg";
import ChatForm from "./chatform";
import {companyInfo} from "./info"
import { BotIcon, XIcon } from "lucide-react";

const Bvbot = () => {
  const chatBodyRef = useRef();
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: companyInfo,
    },
  ]);

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [...prev.filter((msg) => msg.text != "Thinking..."), { role: "model", text, isError }]);
    };

    // Convert the chat history into Groq (OpenAI compatible) messages.
    // The first hidden entry holds the company info, so it becomes the system prompt.
    const messages = history.map((msg, index) => ({
      role: index === 0 ? "system" : msg.role === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    try {
      const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
      if (!apiKey) {
        throw new Error(
          "The assistant is not configured yet. Please set NEXT_PUBLIC_GROQ_API_KEY in your .env.local file."
        );
      }

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: process.env.NEXT_PUBLIC_GROQ_MODEL || "llama-3.3-70b-versatile",
          messages,
          temperature: 0.4,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error?.message || "Something went wrong!");

      const apiResponseText = data?.choices?.[0]?.message?.content
        ?.replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      if (!apiResponseText) {
        throw new Error("The assistant could not generate a response. Please try again.");
      }

      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className={`container z-30 ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded">
          <BotIcon />
        </span>
        <span className="material-symbols-rounded">
          <XIcon />
        </span>
      </button>

      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Baroque Assistant</h2>
          </div>
          <button onClick={() => setShowChatbot((prev) => !prev)} className="material-symbols-rounded">
            <XIcon />
          </button>
        </div>

        {/* Chatbot Body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there  <br /> How can I help you today?
            </p>
          </div>

          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};

export default Bvbot;