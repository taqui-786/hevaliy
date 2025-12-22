"use client";

import Sidebar from "../../components/chat/Sidebar";
import MessageList from "../../components/chat/MessageList";
import ChatArea from "../../components/chat/ChatArea";
import InfoPanel from "../../components/chat/InfoPanel";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { Filter, Search } from "lucide-react";
import {
  ChatProvider,
  useChatContext,
} from "../../components/chat/ChatContext";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const TopHeader = () => {
  const { setShowMobileSidebar } = useChatContext();

  return (
    <header className="flex items-center justify-between py-4 px-4 md:px-8 bg-white sticky top-0 z-10">
      {/* LEFT: Logo + Menu */}
      <div className={`${nunito.className} flex items-center gap-2`}>
        {/* Helper function / Mobile Menu Button */}
        <button
          className="lg:hidden p-2 mr-1"
          onClick={() => setShowMobileSidebar(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Heartivy Logo"
            width={45}
            height={40}
            className="object-contain"
          />
        </div>

        <span className="text-[#6B6B6B] text-[22px] md:text-[26px] font-extrabold hidden md:block">
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
                className="text-lg text-gray-500 focus:outline-none bg-transparent w-full"
              />
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#DDDDDD] shrink-0">
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
              <Image
                src="/images/Ellipse 139.png"
                alt="Profile"
                width={40}
                height={40}
              />
            </div>

            <div className="leading-tight">
              <p className="text-lg font-semibold text-gray-900">
                Hitesh Thakur
              </p>
              <p className="text-xs text-gray-500 leading-none -mt-1">
                GP | UK
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="flex items-center gap-3 lg:hidden">
        <button className="p-2 bg-gray-100 rounded-full">
          <Search size={20} className="text-gray-600" />
        </button>

        <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/Ellipse 139.png"
            alt="Profile"
            width={40}
            height={40}
          />
        </div>
      </div>
    </header>
  );
};

function DashboardContent() {
  const {
    showInfoPanel,
    setShowInfoPanel,
    showMobileChat,
    showMobileSidebar,
    setShowMobileSidebar,
  } = useChatContext();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Top Header */}
      <TopHeader />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        {showMobileSidebar && (
          <div
            className="fixed inset-0 z-50 lg:hidden text-left"
            style={{ fontFamily: "Arial" }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowMobileSidebar(false)}
            />
            {/* Sidebar Content */}
            <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-white shadow-xl z-50 overflow-y-auto">
              <div className="p-4 flex justify-between items-center border-b">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setShowMobileSidebar(false)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="h-full">
                {/* Reuse Sidebar component but pass props if needed */}
                <Sidebar isResponsive={true} forceText={true} />
              </div>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-64 shrink-0">
          <Sidebar isResponsive={true} />
        </div>

        <div className="p-0 md:p-8 flex-1 overflow-hidden w-full">
          {/* Chat Container */}
          <div
            className={`flex flex-1 overflow-hidden border-0 md:border-2 border-gray-100 md:rounded-xl h-full transition-all duration-300 relative`}
          >
            {/* Message List - Hidden on mobile if viewing chat */}
            <div
              className={`${
                showMobileChat ? "hidden" : "w-full"
              } md:block md:w-70 shrink-0 z-0 h-full`}
            >
              <MessageList />
            </div>

            {/* Chat Area - Hidden on mobile if NOT viewing chat */}
            <div
              className={`${
                !showMobileChat ? "hidden" : "w-full"
              } md:block flex-1 transition-all duration-300 h-full bg-white z-0`}
            >
              <ChatArea />
            </div>

            {/* Info Panel */}
            {showInfoPanel && (
              <div className="hidden md:block w-80 shrink-0 transition-all duration-300">
                <InfoPanel />
              </div>
            )}

            {/* Mobile Info Panel Drawer */}
            {showInfoPanel && (
              <div
                className="fixed inset-0 z-50 md:hidden flex justify-end"
                style={{ fontFamily: "Arial" }}
              >
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setShowInfoPanel(false)}
                />

                {/* Panel Content - Right Side Drawer */}
                <div className="relative bg-white w-full md:w-[280px] h-full shadow-2xl flex flex-col z-50 overflow-hidden">
                  {/* Close Button at Top Right */}
                  <button
                    onClick={() => setShowInfoPanel(false)}
                    className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-800 transition"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>

                  <div className="h-full overflow-y-auto pt-10">
                    <InfoPanel />
                  </div>
                </div>
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
