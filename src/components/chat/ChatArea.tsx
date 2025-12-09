import { MoreVertical, Phone, Video, X } from 'lucide-react';
import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';
const nunito = Nunito_Sans({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});
const ChatBubble = ({ message, time, isSender }: { message: string; time: string; isSender: boolean; status?: string }) => (
    <div  className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}>
        <div >
{            !isSender ? <p className="text-left text-[10px] text-gray-500 px-4">Ananya Sharma</p> : ""}
            <div className={`max-w-xs p-3 rounded-xl ${isSender ? 'bg-[#155DFC] text-white ' : 'border border-gray-200 text-gray-900 '
                }`}>
                <p className="text-xs">{message}</p>

            </div>
            <div className={`text-[10px] mt-1 px-4 ${isSender ? 'text-gray-500' : 'text-gray-500'} flex items-center justify-start gap-1`}>
                {time}
                {/* Status placeholder if needed */}
            </div>
        </div>
    </div>
);

export default function ChatArea() {
    const messages = [
        { sender: 'Ananya Sharma', message: "Hi! How are you feeling today?", time: "10:33 AM", isSender: false },
        { sender: 'You', message: "Work has been tiring and anxious today.", time: "10:33 AM", isSender: true, status: 'sent' },
        { sender: 'Ananya Sharma', message: "I'm here to listen. Tell me, what's been making work anxious today?", time: "10:33 AM", isSender: false },
        { sender: 'You', message: "Work has been tiring and anxious today.", time: "10:33 AM", isSender: true, status: 'sent' },
        { sender: 'You', message: "I'm having trouble sleeping", time: "10:33 AM", isSender: true, status: 'sent' },
    ];

    return (
        <div className="grow  flex flex-col relative">

            {/* Chat Header */}
            <div className={`${nunito.className
                } flex items-center justify-between p-2 border-b-2 border-gray-100 bg-white`}>
                <div className="flex items-center gap-1">
                    <div className="w-10 h-10 bg-gray-300 rounded-full relative">
                        {/* Avatar Placeholder */}
                        <Image src="/images/Ellipse 143 (1).png" alt="image" className="object-contain" fill />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 leading-4">Ananya Sharma</p>
                        <p className="text-[12px] font-semibold text-gray-400">Online</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 text-gray">
                    <Phone size={12} className="cursor-pointer hover:text-gray-800" />
                    <Video size={12} className="cursor-pointer hover:text-gray-800" />
                    <MoreVertical size={12} className="cursor-pointer hover:text-gray-800" />
                    {/* <X size={12} className="cursor-pointer hover:text-gray-800" /> */}
                </div>
            </div>

            {/* Chat Messages Area */}
            <div className="grow p-5  overflow-y-auto"
                style={{ fontFamily: "Arial" }} >

                {messages.map((msg, index) => (
                    <ChatBubble
                        key={index}
                        message={msg.message}
                        time={msg.time}
                        isSender={msg.isSender}
                    />
                ))}
            </div>

            {/* Message Input */}
            <div className="p-4  mt-38 bg-white"
            style={{fontFamily:"Arial"}}>
       <div className="w-full">
  {/* Input Wrapper */}
  <div className="relative w-full flex items-center bg-[#F4F4F6] rounded-2xl px-4 py-3 border border-[#E5E5E8]">
    
    {/* LEFT ICON (📎 Attach) */}
    <button className="mr-3 opacity-60 hover:opacity-100 transition">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A5A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.44 11.05l-9.19 9.19a5 5 0 01-7.07-7.07l9.19-9.19a3 3 0 014.24 4.24L10.83 15.2a1 1 0 01-1.41-1.41l8.48-8.48" />
      </svg>
    </button>

    {/* INPUT */}
    <input
      type="text"
      placeholder="Type a message..."
      className="w-full bg-transparent outline-none text-[14px] text-[#383838] placeholder:text-[#9B9B9F]"
    />

    {/* EMOJI ICON */}
    <button className="mr-3 opacity-60 hover:opacity-100 transition">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5A5A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    </button>

    {/* SEND BUTTON */}
    <button className="bg-[#2F7BFF] p-2 rounded-xl hover:brightness-110 transition">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    </button>
  </div>

  {/* Credits Line */}
  <div className="flex items-center gap-2 mt-2">
    <img
      src="/icons/Coin.png"
      alt="coin"
      className="w-[14px] h-[14px]"
    />
    <p className="text-[12px] text-[#C46A3A]">
      This message will cost <span className="font-semibold">10 credits</span>
    </p>
  </div>
</div>

            </div>
        </div>
    );
}