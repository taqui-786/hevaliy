"use client";

import { MoreVertical, Phone, Video, ArrowLeft } from "lucide-react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useChatContext } from "./ChatContext";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const ChatBubble = ({
  message,
  time,
  isSender,
  senderName,
}: {
  message: string;
  time: string;
  isSender: boolean;
  senderName: string;
  status?: string;
}) => (
  <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-3`}>
    <div>
      {!isSender ? (
        <p className="text-left text-[10px] text-gray-500 px-4 mb-1">
          {senderName}
        </p>
      ) : (
        ""
      )}
      <div
        className={`max-w-xs p-3 rounded-xl ${
          isSender
            ? "bg-[#155DFC] text-white"
            : "border border-gray-200 text-gray-900"
        }`}
      >
        <p className="text-xs break-words">{message}</p>
      </div>
      <div
        className={`text-[10px] mt-1 px-4 text-gray-500 flex items-center justify-start gap-1`}
      >
        {time}
      </div>
    </div>
  </div>
);

export default function ChatArea() {
  const {
    messages,
    addMessage,
    selectedUser,
    showInfoPanel,
    setShowInfoPanel,
    setMessages,
    chatHistories,
    setChatHistory,
    setShowMobileChat,
  } = useChatContext();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Jab user change ho to uska chat history load karo
  useEffect(() => {
    if (selectedUser?.name) {
      // Agar pehle se chat history hai to load karo, nahi to default messages set karo
      if (chatHistories[selectedUser.name]) {
        setMessages(chatHistories[selectedUser.name]);
      } else {
        const defaultMessages = [
          {
            id: "1",
            sender: selectedUser.name,
            message: "Hi! How are you feeling today?",
            time: "10:33 AM",
            isSender: false,
          },
          {
            id: "2",
            sender: "You",
            message: "I'm doing well, thanks for asking!",
            time: "10:34 AM",
            isSender: true,
            status: "sent",
          },
        ];
        setMessages(defaultMessages);
        setChatHistory(selectedUser.name, defaultMessages);
      }
    }
  }, [selectedUser?.name]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      sender: "You",
      message: inputValue,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isSender: true,
      status: "sent",
    };

    // Add user message
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Update chat history
    if (selectedUser) {
      setChatHistory(selectedUser.name, updatedMessages);
    }

    setInputValue("");

    // Auto-reply simulation
    setTimeout(() => {
      const replyMessage = {
        id: (Date.now() + 1000).toString(),
        sender: selectedUser?.name || "Therapist",
        message: "Thank you for sharing. I'm here to help you through this.",
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isSender: false,
      };

      const finalMessages = [...updatedMessages, replyMessage];
      setMessages(finalMessages);

      // Update chat history with reply
      if (selectedUser) {
        setChatHistory(selectedUser.name, finalMessages);
      }
    }, 1000);
  };

  const handleProfileClick = () => {
    setShowInfoPanel(true);
  };

  const handleCloseInfoPanel = () => {
    setShowInfoPanel(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Chat Header - Fixed Height */}
      <div
        className={`${nunito.className} flex items-center justify-between p-2 border-b-2 border-gray-100 bg-white shrink-0`}
      >
        <div className="flex items-center gap-1">
          {/* Back Button for Mobile */}
          <button
            onClick={() => setShowMobileChat(false)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full mr-1"
          >
            <ArrowLeft size={20} />
          </button>

          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleProfileClick}
          >
            <div className="w-10 h-10 bg-gray-300 rounded-full relative">
              <Image
                src={selectedUser?.avatarSrc || "/images/Ellipse 143 (1).png"}
                alt="image"
                className="object-contain"
                fill
              />
              {selectedUser?.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-4">
                {selectedUser?.name || "Select a chat"}
              </p>
              <p className="text-[12px] font-semibold text-gray-400">
                {selectedUser?.isOnline ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-gray">
          <Phone size={12} className="cursor-pointer hover:text-gray-800" />
          <Video size={12} className="cursor-pointer hover:text-gray-800" />
          <MoreVertical
            size={12}
            className="cursor-pointer hover:text-gray-800"
          />
        </div>
      </div>

      {/* Chat Messages Area - Flexible Height with Scroll */}
      <div
        className="flex-1 overflow-y-auto p-5"
        style={{ fontFamily: "Arial" }}
      >
        {messages && messages.length > 0 ? (
          messages.map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg.message}
              time={msg.time}
              isSender={msg.isSender}
              senderName={msg.sender}
            />
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>No messages yet. Start a conversation!</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input - Fixed Height */}
      <div
        className="shrink-0 bg-white p-4 border-t-2 border-gray-100"
        style={{ fontFamily: "Arial" }}
      >
        <div className="w-full px-4">
          {/* Input Wrapper */}
          <div className="relative w-full flex items-end gap-2">
            {/* LEFT ICON (Attach) */}
            <button className="hover:opacity-100 transition flex-shrink-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5A5A5E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3 3 0 014.24 4.24L10.83 15.2a1 1 0 01-1.41-1.41l8.48-8.48" />
              </svg>
            </button>

            {/* INPUT */}
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
              className="flex-1 bg-[#F3F3F5] outline-none text-[14px] text-[#383838] rounded-lg p-2 placeholder:text-[#9B9B9F]"
            />

            {/* EMOJI ICON */}
            <button className="hover:opacity-100 transition flex-shrink-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5A5A5E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </button>

            {/* SEND BUTTON */}
            <button
              onClick={handleSendMessage}
              className="bg-[#155DFC] p-2 rounded-xl hover:brightness-110 transition flex-shrink-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Credits Line */}
        <div className="flex w-full max-w-[170px] gap-2 p-2">
          <Image
            src="/icons/Coin.svg"
            alt="coin"
            width={12}
            height={12}
            className="w-[14px] h-[14px]"
          />
          <p className="text-[12px] text-[#C46A3A]">
            This message will cost{" "}
            <span className="font-semibold">10 credits</span>
          </p>
        </div>
      </div>

      {/* Info Panel Overlay for Mobile */}
      {/* {showInfoPanel && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={handleCloseInfoPanel} />
      )} */}
    </div>
  );
}
