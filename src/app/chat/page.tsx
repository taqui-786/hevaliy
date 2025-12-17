'use client';

import Sidebar from '../../components/chat/Sidebar';
import MessageList from '../../components/chat/MessageList';
import ChatArea from '../../components/chat/ChatArea';
import InfoPanel from '../../components/chat/InfoPanel';
import Image from 'next/image';
import { Nunito_Sans } from 'next/font/google';
import { Filter, Search } from 'lucide-react';
import { ChatProvider, useChatContext } from '../../components/chat/ChatContext';

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const TopHeader = () => {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-white sticky top-0 z-10">
      {/* Logo + Title */}
      <div className={`${nunito.className} flex items-center gap-2`}>
        <div className="w-12 h-12 relative">
          <Image
            src="/images/logo.svg"
            alt="Heartivy Logo"
            width={45}
            height={40}
            className="object-contain"
          />
        </div>

        <span className="text-[#6B6B6B] text-[26px] font-extrabold hidden md:block">
          Heartivy
        </span>
      </div>

      {/* LARGE SCREEN CONTENT */}
      <div className="hidden lg:flex w-full justify-between items-center">
        {/* Left: Title */}
        <div className={`${nunito.className} mx-24`}>
          <h1 className="text-xl font-bold text-gray-800">General Chats</h1>
          <p className="text-[10px] text-gray-400">25 November, 2025</p>
        </div>

        {/* Center: Search */}
        <div className="grow max-w-sm" style={{ fontFamily: "Arial" }}>
          <div className="relative flex items-center bg-[#EBEBEB] gap-3 p-1 pl-4 rounded-full">
            <Search className="text-gray-400 w-8 h-8" />
            <div className="flex w-full justify-between">
              <input
                type="text"
                placeholder="Search here..."
                className="text-lg text-gray-500 focus:outline-none"
              />
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#DDDDDD]">
                <Filter size={14} strokeWidth={1.7} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Coin + User Info */}
        <div className={`${nunito.className} flex items-center gap-4`}>
          <div className="flex items-center gap-1">
            <Image src="/icons/Coin.svg" width={18} height={40} alt="coin" />
            <span className="font-bold text-xs text-gray-600">200</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden">
              <Image src="/images/Ellipse 139.png" alt="Profile" width={40} height={40} />
            </div>

            <div className="leading-tight">
              <p className="text-lg font-semibold text-gray-900">Hitesh Thakur</p>
              <p className="text-xs text-gray-500 leading-none -mt-1">GP | UK</p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="flex items-center gap-4 lg:hidden">
        <button className="p-2 bg-gray-200 rounded-full">
          <Search size={20} className="text-gray-600" />
        </button>

        <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden">
          <Image src="/images/Ellipse 139.png" alt="Profile" width={40} height={40} />
        </div>
      </div>
    </header>
  );
};

function DashboardContent() {
  const { showInfoPanel } = useChatContext();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Header */}
      <TopHeader />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:block lg:w-64">
          <Sidebar isResponsive={true} />
        </div>

        <div className="p-8 flex-1 overflow-hidden">
          {/* Chat Container - Dynamic width based on info panel */}
          <div className={`flex flex-1 overflow-x-hidden border-2 border-gray-100 rounded-xl h-full transition-all duration-300`}>
            {/* Message List */}
            <div className="sm:w-70 w-full shrink-0">
              <MessageList />
            </div>

            {/* Chat Area - Expands when info panel closes */}
            <div className={`transition-all duration-300 ${
              showInfoPanel ? 'md:w-[570px] lg:w-[570px]' : 'md:flex-1 lg:flex-1'
            } w-full`}>
              <ChatArea />
            </div>

            {/* Info Panel - Conditional render with smooth transition */}
            {showInfoPanel && (
              <div className="hidden lg:block w-80 shrink-0 transition-all duration-300">
                <InfoPanel />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ChatProvider>
      <DashboardContent />
    </ChatProvider>
  );
}