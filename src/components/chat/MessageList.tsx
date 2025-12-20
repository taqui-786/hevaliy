"use client";

import {
  Search,
  Plus,
  MessageSquare,
  Edit,
  MoreHorizontal,
} from "lucide-react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { useChatContext } from "./ChatContext";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const ChatListItem = ({
  name,
  lastMessage,
  time,
  avatarSrc,
  isOnline,
  unreadCount,
}: {
  name: string;
  lastMessage: string;
  time: string;
  isOnline: boolean;
  unreadCount: number;
  avatarSrc: string;
}) => {
  const { selectedUser, setSelectedUser, setShowMobileChat } = useChatContext();
  const isSelected = selectedUser?.name === name;

  const handleUserClick = () => {
    const userData = {
      name,
      lastMessage,
      time,
      avatarSrc,
      isOnline,
      unreadCount,
    };
    setSelectedUser(userData);
    setShowMobileChat(true);
  };

  return (
    <div
      onClick={handleUserClick}
      className={`flex items-center gap-1 p-1.5 cursor-pointer rounded-full transition ${
        isSelected ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"
      }`}
    >
      <div className="relative">
        <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
          <Image
            src={avatarSrc}
            alt={name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>

      <div className="flex justify-between w-full items-center min-w-0">
        <div className="flex-col justify-between items-center">
          <p className="font-semibold text-xs truncate">{name}</p>
          <p className="text-[9px] text-gray-500 truncate">{lastMessage}</p>
        </div>
        {unreadCount > 0 && (
          <span className="text-[10px] bg-[#155DFC] text-white w-4.5 h-4 flex items-end justify-center rounded-md">
            {unreadCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default function MessageList() {
  const users = [
    {
      name: "Ananya Sharma",
      lastMessage: "Keep believing in yourself; every small....",
      time: "Online",
      isOnline: true,
      unreadCount: 3,
      avatarSrc: "/images/Ellipse 143 (1).png",
    },
    {
      name: "Siya Iyer",
      lastMessage: "Wishing you strength and clarity...",
      time: "10:33 AM",
      isOnline: false,
      unreadCount: 1,
      avatarSrc: "/images/Ellipse 143.png",
    },
    {
      name: "Meera Nambiar",
      lastMessage: "Take a deep breath, move forward",
      time: "10:33 AM",
      isOnline: false,
      unreadCount: 2,
      avatarSrc: "/images/Ellipse 143 (4).png",
    },
    {
      name: "Kunal Rathore",
      lastMessage: "Great things await you; stay focused",
      time: "10:33 AM",
      isOnline: false,
      unreadCount: 0,
      avatarSrc: "/images/Ellipse 143 (2).png",
    },
    {
      name: "Twesha Thakur",
      lastMessage: "Thank you for sharing your story...",
      time: "10:33 AM",
      isOnline: false,
      unreadCount: 0,
      avatarSrc: "/images/Ellipse 143 (3).png",
    },
  ];

  return (
    <div className=" w-full sm:w-70 bg-white sm:border-r-2 border-gray-100 h-full">
      <div className="flex items-center justify-between mb-2 border-b-2 p-4 border-gray-100">
        <h2 className="text-md" style={{ fontFamily: "Arial" }}>
          Messages
        </h2>
        <div className="flex items-center gap-3 text-gray-500">
          <div className="w-5 h-5 bg-[#EDEDED] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
            <Edit size={12} className="text-gray-500" />
          </div>
          <div className="w-5 h-5 bg-[#EDEDED] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
            <MoreHorizontal size={16} className="text-gray-500" />
          </div>
        </div>
      </div>

      <div className={`${nunito.className} mb-6 p-2`}>
        {users.map((user, index) => (
          <ChatListItem key={index} {...user} />
        ))}
      </div>
    </div>
  );
}
