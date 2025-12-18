import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" border-t border-gray-100 pt-16 pb-8 mt-auto px-4 md:px-0 "
     style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 sm:gap-32 gap-12 mb-12">
        
        {/* Left Column: Brand & Social */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <h3 className=" text-base text-neutral-800 font-bold ">Heartivy</h3>
          <p className="text-gray-600 text-[13px] leading-relaxed max-w-xs">
            A safe, anonymous, and accessible mental health support platform for individuals struggling with loneliness, stress, and emotional challenges. <br/>
            You are not alone anymore.
          </p>
          <div className="flex gap-5 text-gray-500 mt-2">
            <Link href="#"><Twitter size={18} /></Link>
            <Link href="#"><Instagram size={18} /></Link>
            <Link href="#"><Linkedin size={18} /></Link>
            <Link href="#"><Facebook size={18} /></Link>
          </div>
        </div>

        {/* Right Columns: Links */}
        <div className="md:col-span-7 grid sm:grid-cols-3 grid-cols-1 gap-4">
          {/* Support Column */}
          <div>
            <h4 className="text-base text-neutral-800 font-bold mb-4">Support</h4>
            <ul className="space-y-3 text-[13px] text-gray-600">
              <li><Link href="#">Crisis Helpline</Link></li>
              <li><Link href="/chat">Chat Support</Link></li>
              <li><Link href="#">Find a Therapist</Link></li>
              <li><Link href="/marketing/community">Community</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-base text-neutral-800 font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-[13px] text-gray-600">
              <li><Link href="#">Articles</Link></li>
              <li><Link href="#">Self-Help Tools</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-base text-neutral-800 font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-[13px] text-gray-600">
              <li><Link href="/marketing/about">About</Link></li>
              <li><Link href="#">Our Mission</Link></li>
              <li><Link href="#">Team</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-3 border-t border-gray-100 flex flex-col md:flex-row justify-between text-[13px] text-gray-600">
        <p>© 2025 Heartivy. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}