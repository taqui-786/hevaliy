'use client';

import { Calendar, X } from 'lucide-react';
import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';
import { useChatContext } from './ChatContext';

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const SessionCard = ({ time, date, isNext }: { time: string; date: string; isNext: boolean }) => (
  <div
    className={`p-4 rounded-xl ${
      isNext ? 'bg-[#FEF6D4] border border-orange-200' : 'bg-[#DFFFDA] border border-green-200'
    }`}
  >
    <div className="flex gap-2 mb-2 text-sm text-gray-600">
      <div
        className={`${
          isNext ? "text-orange-600" : "text-green-600"
        } bg-white rounded-lg p-2 flex items-center justify-center`}
      >
        <Calendar size={16} />
      </div>

      <div>
        <span className="text-[13px] text-gray">{isNext ? 'Next Session' : 'Upcoming Session'}</span>
        <p className="text-[10px] text-gray-600">{time}</p>
      </div>
    </div>

    <button
      className={`w-50 py-2 rounded-lg text-[12px] text-white transition ${
        isNext ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      View Details
    </button>
  </div>
);

export default function InfoPanel() {
  const { selectedUser, showInfoPanel, setShowInfoPanel } = useChatContext();

  if (!showInfoPanel) {
    return null;
  }

  const handleClose = () => {
    setShowInfoPanel(false);
  };

  return (
    <div className="w-80 shrink-0 bg-white border-l-2 border-gray-100 overflow-y-auto h-full flex flex-col">
      {/* Panel Header */}
      <div className={`${nunito.className} flex p-3 items-center justify-between border-b-2 border-gray-100 pb-4 mb-6 shrink-0`}>
        <h2 className="text-lg font-bold">Chat Info</h2>
        <button
          onClick={handleClose}
          className="cursor-pointer text-gray-500 hover:text-gray-800 transition"
        >
          <X size={18} />
        </button>
      </div>

      {/* Therapist/User Profile */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 overflow-hidden">
          <Image
            src={selectedUser?.avatarSrc || '/images/Ellipse 143 (1).png'}
            alt={selectedUser?.name || 'User'}
            width={80}
            height={80}
          />
        </div>
        <p className={`${nunito.className} font-bold text-lg`}>{selectedUser?.name}</p>
        <p className="text-[13px] text-gray-600" style={{ fontFamily: "Arial" }}>
          Licensed Therapist
        </p>
        <span
          style={{ fontFamily: "Arial" }}
          className="inline-block mt-2 bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full"
        >
          Action Now
        </span>
      </div>

      {/* Session Cards */}
      <div className="space-y-6 px-4 flex-1" style={{ fontFamily: "Arial" }}>
        <SessionCard isNext={true} time="Tomorrow, 3:00 PM" date="26 Nov, 2025" />
        <SessionCard isNext={false} time="1 Dec, 2:00 PM" date="Upcoming" />
      </div>
    </div>
  );
}