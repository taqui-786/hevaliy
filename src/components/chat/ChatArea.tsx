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
                <div className="relative border-t-2 py-4 px-6 border-gray-100">
       <div>             <textarea
                        rows={2}
                        placeholder="Type a message..."
                        className="w-full bg-gray-100 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-purple-300"
                    />
                    <button className="absolute right-3 bottom-3 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </button></div>
                    <p className="absolute left-4 bottom-1 text-xs text-red-500">
                        <span className='line-through'>Type message and cast</span> <span className='font-bold'>curse</span>
                    </p>
                </div>
            </div>
        </div>
    );
}