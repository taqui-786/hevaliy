"use client";

import React, { createContext, useContext, useState } from "react";

interface Message {
  id: string;
  sender: string;
  message: string;
  time: string;
  isSender: boolean;
  status?: string;
}

interface User {
  name: string;
  lastMessage: string;
  time: string;
  isOnline: boolean;
  unreadCount: number;
  avatarSrc: string;
  status?: string;
}

interface ChatContextType {
  selectedUser: User | null;
  setSelectedUser: (user: User) => void;
  messages: Message[];
  addMessage: (message: Message) => void;
  setMessages: (messages: Message[]) => void;
  activeNavLink: string;
  setActiveNavLink: (link: string) => void;
  showInfoPanel: boolean;
  setShowInfoPanel: (show: boolean) => void;
  chatHistories: { [key: string]: Message[] };
  setChatHistory: (userName: string, messages: Message[]) => void;
  showMobileChat: boolean;
  setShowMobileChat: (show: boolean) => void;
  showMobileSidebar: boolean;
  setShowMobileSidebar: (show: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultUser: User = {
    name: "Ananya Sharma",
    lastMessage: "Keep believing in yourself; every small....",
    time: "Online",
    isOnline: true,
    unreadCount: 3,
    avatarSrc: "/images/Ellipse 143 (1).png",
  };

  const defaultMessages: Message[] = [
    {
      id: "1",
      sender: "Ananya Sharma",
      message: "Hi! How are you feeling today?",
      time: "10:33 AM",
      isSender: false,
    },
    {
      id: "2",
      sender: "You",
      message: "Work has been tiring and anxious today.",
      time: "10:33 AM",
      isSender: true,
      status: "sent",
    },
    {
      id: "3",
      sender: "Ananya Sharma",
      message:
        "I'm here to listen. Tell me, what's been making work anxious today?",
      time: "10:33 AM",
      isSender: false,
    },
  ];

  const [selectedUser, setSelectedUser] = useState<User>(defaultUser);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [activeNavLink, setActiveNavLink] = useState("/general-chats");
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [showMobileChat, setShowMobileChat] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Store chat history for each user
  const [chatHistories, setChatHistoriesState] = useState<{
    [key: string]: Message[];
  }>({
    "Ananya Sharma": defaultMessages,
  });

  const addMessage = (message: Message) => {
    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);

    // Update chat history for selected user
    if (selectedUser) {
      setChatHistoriesState({
        ...chatHistories,
        [selectedUser.name]: updatedMessages,
      });
    }
  };

  const setChatHistory = (userName: string, msgs: Message[]) => {
    setChatHistoriesState({
      ...chatHistories,
      [userName]: msgs,
    });
  };

  return (
    <ChatContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        messages,
        addMessage,
        setMessages,
        activeNavLink,
        setActiveNavLink,
        showInfoPanel,
        setShowInfoPanel,
        chatHistories,
        setChatHistory,
        showMobileChat,
        setShowMobileChat,
        showMobileSidebar,
        setShowMobileSidebar,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within ChatProvider");
  }
  return context;
};
