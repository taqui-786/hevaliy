import Navbar from '../../components/Hearder'; // Assuming you named it Navbar.jsx
import Footer from '../../components/Footer'; // Assuming you named it Footer.jsx
import { Shield, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// --- Helper Components ---

// 1. Feature Card Component 
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Icon Placeholder Circle */}
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-500">
        <Icon size={32} />
      </div>
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <p className="text-xs text-gray-500 max-w-xs">{description}</p>
    </div>
  );
}

// 2. Left Navigation Sidebar Component
function HelpCentreNav() {
    // Data structured exactly as per the image sidebar
    const navItems = [
        { title: 'Get Started', links: ['Getting set up', 'How to get support'] },
        { title: 'Account Setup & Management', links: ['Profile', 'Settings'] },
        { title: 'Billing & Subscriptions', links: ['Plans', 'Payment'] },
        { title: 'Safety & Security', links: ['Safety', 'Security'] },
        { title: 'Trust & Protection', links: ['Trust', 'Protection'] },
    ];

    return (
        // Sticky class added for proper sidebar behavior
        <div className="w-64 shrink-0 pt-8 border-r border-gray-100 pr-8 sticky top-0 self-start"> 
            <h3 className="font-bold text-sm uppercase text-gray-800 mb-4 tracking-wider">Help Centre</h3>
            
            <ul className="space-y-4">
                {navItems.map((section, index) => (
                    <li key={index}>
                        <div className="flex items-center justify-between text-sm text-black font-semibold mb-2 cursor-pointer">
                            {section.title}
                            <ChevronRight size={16} className="text-gray-400" />
                        </div>
                        {/* Sub-links */}
                        <ul className='space-y-1'>
                            {section.links.map((link, linkIndex) => (
                                <Link key={linkIndex} href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="block text-sm text-gray-600 hover:text-purple-600 py-1 pl-2">
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// --- Main Page Component (Wrapping the content) ---
export default function SupportPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-800 flex flex-col my-6">
      
      {/* 1. Import Header/Navbar */}
      <Navbar /> 

      <main className="grow">
        <div className="max-w-7xl mx-auto px-6 py-12">
            
            {/* --- 1. Top Heading Section --- */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">
                    Help Centre
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed">
                    We know that reaching out for support or navigating a new platform can feel overwhelming. That is why we have created this Help Centre to answer your most common questions and give you reassurance every step of the way.
                </p>
            </div>

            {/* --- 2. Feature Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
                <FeatureCard 
                    icon={Shield} 
                    title="Privacy & Security" 
                    description="Your privacy is non-negotiable. Learn about our data security, compliance, and anonymous communication options."
                />
                <FeatureCard 
                    icon={User} 
                    title="Managing My Account" 
                    description="Need help updating credentials, subscriptions, or contact details? We'll help you manage your member experience."
                />
                <FeatureCard 
                    icon={ChevronRight} 
                    title="Platform Guide" 
                    description="Detailed walkthroughs of features, tools, and best practices to help you get the most out of our resources."
                />
            </div>

            {/* --- 3. Main Content Columns (Sidebar + Guide) --- */}
            <div className="flex flex-col lg:flex-row ">
                
                {/* Left Sidebar (Desktop Only) */}
                <div className="hidden lg:block">
                    <HelpCentreNav />
                </div>

                {/* Right Content - Guide */}
                <div className="grow pt-8 max-w-5xl  bg-gray-100 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-3">Getting Started</h2>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 bg-blue-100 p-4 rounded-lg">
                        Welcome to Heartivy! We are really glad you are here. This guide will help you understand the platform and make the most of the emotional support tools we have built for you.
                    </p>

                    {/* Guide Steps */}
                    <ol className="space-y-6 list-none pl-0">
                        {/* Step 1 */}
                        <li>
                            <h3 className="text-lg font-bold mb-2">1. Signing Up</h3>
                            <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                                <li>Click the <strong>Sign Up</strong> or <strong>Create Account</strong> button.</li>
                                <li>You can join with an email or continue anonymously.</li>
                                <li>All information remains private at the highest security level.</li>
                                <li>Review our emotional safety guidelines to continue.</li>
                            </ul>
                        </li>
                        
                        {/* Step 2 */}
                        <li>
                            <h3 className="text-lg font-bold mb-2">2. Onboarding Checklist</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Once you join, we will walk you through a short onboarding flow. You can quickly set goals, such as:
                            </p>
                            <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                                <li>To talk to someone</li>
                                <li>To learn coping skills</li>
                                <li>To join community circles</li>
                                <li>To track my daily mood</li>
                            </ul>
                            <p className="text-sm text-gray-600 mt-2">
                                Customize your notification and privacy settings at any time.
                            </p>
                        </li>

                        {/* Step 3 */}
                        <li>
                            <h3 className="text-lg font-bold mb-2">3. Navigating the Platform</h3>
                            <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                                <li>The <strong>Home</strong> shows the navigation bar to access <strong>Support Chats</strong>, <strong>Journal Community</strong>, or <strong>Resources</strong>.</li>
                                <li>The <strong>Home</strong> tab shows your mood tracker, daily affirmations, and quick tools.</li>
                                <li>The <strong>Support</strong> tab lets you book professional counseling or find a therapist.</li>
                            </ul>
                        </li>

                        {/* Step 4 */}
                        <li>
                            <h3 className="text-lg font-bold mb-2">4. First Steps for New Users</h3>
                            <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                                <li>Try the <strong>Quick Comfort Journey</strong> — a safe space just for you.</li>
                                <li>Join a beginner-friendly community circle like <strong>Calm Corner</strong> or <strong>Letting Go</strong>.</li>
                                <li>Spend five minutes with simple breathing exercises or guided reflections.</li>
                            </ul>
                        </li>

                        {/* Step 5 */}
                        <li>
                            <h3 className="text-lg font-bold mb-2">5. Need More Help?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                If you ever feel stuck or unsure, you are not alone — reach out anytime.
                            </p>
                            <p className="text-sm text-gray-600">
                                Visit <strong>Support</strong>  <strong>Talk to Us</strong>
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                                Or email us at: <a href="mailto:support@heartivy.com" className="text-purple-600 hover:underline">support@heartivy.com</a>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
      </main>
      
      {/* 2. Import Footer */}
      <Footer />
    </div>
  );
}