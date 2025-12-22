"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  MessageCircle,
  Users,
  Briefcase,
  Settings,
  HelpCircle,
  LogOut,
  Plus,
  Home,
  FileText,
  Calendar,
  Bell,
} from "lucide-react";
import { Nunito_Sans } from "next/font/google";
import { useChatContext } from "./ChatContext";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const NavLink = ({
  href,
  icon: Icon,
  text,
  badge,
  forceText,
}: {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  text: string;
  badge?: number;
  forceText?: boolean;
}) => {
  const { activeNavLink, setActiveNavLink } = useChatContext();
  const isActive = activeNavLink === href;

  return (
    <Link
      href={href}
      onClick={() => setActiveNavLink(href)}
      className={`flex items-center justify-between px-3 py-2 rounded-lg transition ${
        isActive
          ? "bg-[#EFF6FF] text-[#165DFC] text-sm"
          : "text-gray-500 hover:bg-[#EFF6FF]"
      } lg:justify-start`}
    >
      <div className="flex items-center gap-2 text-[12px] font-bold">
        <Icon size={16} />
        <span className={`${forceText ? "inline" : "hidden lg:inline"}`}>
          {text}
        </span>
      </div>
      {badge && (
        <span
          className={`text-[10px] w-5 h-4 flex items-center justify-center rounded-md ${
            isActive ? "bg-[#155DFC] text-white" : "bg-[#FF2056] text-white"
          } lg:ml-auto`}
        >
          {badge}
        </span>
      )}
    </Link>
  );
};

export default function Sidebar({
  isResponsive,
  forceText,
}: {
  isResponsive?: boolean;
  forceText?: boolean;
}) {
  return (
    <aside className="bg-white p-9 flex flex-col h-full sticky top-0 self-start">
      <div className="mb-52">
        <h3
          className={`${nunito.className} text-[11px] text-gray font-extrabold mb-3 hidden lg:block`}
        >
          Main Menu
        </h3>

        <nav className={`space-y-1 ${nunito.className}`}>
          <NavLink
            href="/chat"
            icon={Home}
            text="Dashboard"
            forceText={forceText}
          />
          <NavLink
            href="/chat"
            icon={Users}
            text="General Chats"
            badge={4}
            forceText={forceText}
          />
          <NavLink
            href="/chat"
            icon={MessageCircle}
            text="Private Chats"
            badge={3}
            forceText={forceText}
          />
          <NavLink
            href="/chat"
            icon={FileText}
            text="Community Feed"
            forceText={forceText}
          />
          <NavLink
            href="/chat"
            icon={Calendar}
            text="Sessions"
            forceText={forceText}
          />
          <NavLink
            href="/chat"
            icon={Bell}
            text="Notifications"
            forceText={forceText}
          />
        </nav>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div
          className="px-3 py-5 bg-[#F5F5FF] rounded-lg hidden lg:block"
          style={{ fontFamily: "Arial" }}
        >
          <p className="text-xs text-gray mb-3 font-medium">
            Need immediate support?
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs flex items-center justify-center gap-2">
            <Plus size={16} />
            Start Chat
          </button>
        </div>
      </div>

      <nav className={`${nunito.className} mt-10 text-[12px] font-bold`}>
        <Link
          href="/settings"
          className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-[#EFF6FF] rounded-lg transition"
        >
          <Settings size={16} />
          <span className={`${forceText ? "inline" : "hidden lg:inline"}`}>
            Settings
          </span>
        </Link>
        <Link
          href="/help"
          className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-[#EFF6FF] rounded-lg transition"
        >
          <HelpCircle size={16} />
          <span className={`${forceText ? "inline" : "hidden lg:inline"}`}>
            Help Center
          </span>
        </Link>
        <Link
          href="/logout"
          className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-[#EFF6FF] rounded-lg transition"
        >
          <LogOut size={16} />
          <span className={`${forceText ? "inline" : "hidden lg:inline"}`}>
            Sign Out
          </span>
        </Link>
      </nav>
    </aside>
  );
}
