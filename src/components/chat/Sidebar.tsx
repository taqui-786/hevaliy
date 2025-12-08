import Link from 'next/link';
import { LayoutDashboard, MessageCircle, Users, Briefcase, Settings, HelpCircle, LogOut, Plus, Home, FileText, Calendar, Bell } from 'lucide-react';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
const NavLink = ({ href, icon: Icon, text, badge }: { href: string; icon: React.ComponentType<{ size: number }>; text: string; badge?: number }) => (
  <Link href={href} className={`flex items-center justify-between px-3 py-2 rounded-lg transition ${text === 'General Chats' ? 'bg-[#EFF6FF] text-[#165DFC] text-sm' : 'text-gray-500 hover:bg-[#EFF6FF]'
    } ${
    // Responsive padding and justification for small screens (hiding text)
    'lg:justify-start'
    }`}>
    <div className="flex items-center gap-2 text-[12px] font-bold">
      <Icon size={16} />
      <span className="hidden lg:inline">{text}</span> {/* Text hides on small screens */}
    </div>
    {badge && (
      <span className={`text-[10px]  w-5 h-4 flex items-center justify-center rounded-md
        ${text === 'General Chats' ? 'bg-[#155DFC] text-white' : 'bg-[#FF2056] text-white'}
        ${'lg:ml-auto'}
      `}>
        {badge}
      </span>
    )}
  </Link>
);

export default function Sidebar() {
  return (
    // Sidebar width is controlled in the parent DashboardPage component
    <aside className="bg-white  p-9 flex flex-col  h-full sticky top-0 self-start">

      {/* Top Section: Main Menu */}
      <div className="mb-52">
        <h3 className={`${nunito.className} text-[11px]  text-gray font-extrabold mb-3 hidden lg:block`}>Main Menu</h3>

        <nav className={`space-y-1 ${nunito.className}`}>
          <NavLink href="/dashboard" icon={Home} text="Dashboard" />
          <NavLink href="/general-chats" icon={Users} text="General Chats" badge={4} />
          <NavLink href="/private-chats" icon={MessageCircle} text="Private Chats" badge={3} />
          <NavLink href="/community-feed" icon={FileText} text="Community Feed" />
          <NavLink href="/sessions" icon={Calendar} text="Sessions" />
          <NavLink href="/notification" icon={Bell} text="Notifications" />
        </nav>

        {/* Need Immediate Support Section - Hide completely on small screens for space */}

      </div>
      <div className="pt-4 border-t border-gray-200">
              <div className=" px-3 py-5 bg-[#F5F5FF] rounded-lg  hidden lg:block bgo"
        style={{ fontFamily: "Arial" }}
      >
        <p className="text-xs text-gray mb-3 font-medium">Need immediate support?</p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white  py-2 rounded-lg text-xs flex items-center justify-center gap-2">
          <Plus size={16} />
          Start Chat
        </button>
      </div>
      </div>

      {/* Bottom Section: Settings & Logout */}
      <nav className={`${nunito.className}  mt-10 text-[12px] font-bold `}>
        <Link href="/settings" className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-[#EFF6FF] rounded-lg transition">
          <Settings size={16} />
          <span className="hidden lg:inline">Settings</span>
        </Link>
        <Link href="/help" className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-[#EFF6FF] rounded-lg transition">
          <HelpCircle size={16} />
          <span className="hidden lg:inline">Help Center</span>
        </Link>
        <Link href="/logout" className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-[#EFF6FF] rounded-lg transition">
          <LogOut size={16} />
          <span className="hidden lg:inline">Sign Out</span>
        </Link>
      </nav>
    </aside>
  );
}