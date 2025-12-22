"use client";
import Navbar from "../../components/ui/NavBar"; // Assuming you named it Navbar.jsx
import Footer from "../../components/Footer"; // Assuming you named it Footer.jsx
import { Shield, User, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import Image from "next/image";

const switzer = localFont({
  src: "../../../public/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
});
// --- Helper Components ---

function FeatureCard({ src, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-[#EFEFEF] md:bg-transparent rounded-xl">
      {/* Image Inside Circle */}
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Image
          src={src}
          alt={title}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <h4 className="font-medium  text-[13px] mb-1">{title}</h4>
      <p className="text-[12px] leading-3 font-light text-neutral-500 ">
        {description}
      </p>
    </div>
  );
}

// 2. Left Navigation Sidebar Component (Accordion/Dropdown)
function HelpCentreNav({ isMobile = false }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Data structured with sub-items
  const navItems = [
    {
      title: "Getting Started",
      items: [
        "How to create an account",
        "Platform overview",
        "First steps guide",
      ],
    },
    {
      title: "Account Setup & Management",
      items: ["Update profile settings", "Change password", "Delete account"],
    },
    {
      title: "Using Heartivy",
      items: ["Support chat features", "Community circles", "Mood tracker"],
    },
    {
      title: "Billing & Subscriptions",
      items: ["Subscription plans", "Payment methods", "Cancel subscription"],
    },
    {
      title: "Safety & Support",
      items: ["Report content", "Block users", "Crisis resources"],
    },
    {
      title: "Privacy & Security",
      items: [
        "Data encryption",
        "Two-factor authentication",
        "Privacy controls",
      ],
    },
    {
      title: "Trust & Protection",
      items: ["Verified counselors", "Content moderation", "Safety policies"],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={`${isMobile ? "w-full" : "w-full shrink-0"} pt-8 ${
        !isMobile &&
        "border-r h-full border-gray-100 pr-6 sticky top-0 self-start"
      }`}
    >
      <h3 className="text-sm text-gray-800 mb-4 font-medium">Help Centre</h3>
      <p className="text-xs text-gray-600 mb-6">Find answers and get support</p>

      <div className="py-3">
        <ul className="space-y-5">
          {navItems.map((section, index) => (
            <li key={index}>
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center justify-between text-xs w-full text-left text-black hover:text-[#8F7A9C] transition-colors cursor-pointer mb-2"
              >
                {section.title}
                <ChevronRight
                  size={16}
                  className={`text-gray-400 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="ml-4 mt-2 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href="#"
                        className="text-xs text-gray-600 hover:text-[#8F7A9C] transition-colors block py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 3. Getting Started Accordion Component
function GettingStartedAccordion() {
  const [expandedSteps, setExpandedSteps] = useState([]);
  const [showGettingStarted, setShowGettingStarted] = useState(true);

  // Initialize expanded steps based on screen size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDesktopOrTablet = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktopOrTablet) {
        // Open all steps by default on desktop/tablet
        setExpandedSteps([0, 1, 2, 3, 4]);
      }
    }
  }, []);

  const toggleStep = (index) => {
    setExpandedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const steps = [
    {
      title: "1. Signing Up",
      content: (
        <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
          <li>
            Click the <sub className="font-bold text-[13px]">Sign Up</sub> or{" "}
            <sub className="font-bold text-[13px]">Create Account</sub> button.
          </li>
          <li>You can join with an email or continue anonymously.</li>
          <li>
            All information remains private at the highest security level.
          </li>
          <li>Review our emotional safety guidelines to continue.</li>
        </ul>
      ),
    },
    {
      title: "2. Onboarding Checklist",
      content: (
        <>
          <p className="text-sm text-gray-600 mb-2">
            Once you join, we will walk you through a short onboarding flow. You
            can quickly set goals, such as:
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
        </>
      ),
    },
    {
      title: "3. Navigating the Platform",
      content: (
        <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
          <li>
            The <sub className="font-bold text-[13px]">Home</sub> shows the
            navigation bar to access{" "}
            <sub className="font-bold text-[13px]">Support Chats</sub>,{" "}
            <sub className="font-bold text-[13px]">Journal Community</sub>, or{" "}
            <sub className="font-bold text-[13px]">Resources</sub>.
          </li>
          <li>
            The <sub className="font-bold text-[13px]">Home</sub> tab shows your
            mood tracker, daily affirmations, and quick tools.
          </li>
          <li>
            The <sub className="font-bold text-[13px]">Support</sub> tab lets
            you book professional counseling or find a therapist.
          </li>
        </ul>
      ),
    },
    {
      title: "4. First Steps for New Users",
      content: (
        <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
          <li>
            Try the{" "}
            <sub className="font-bold text-[13px]">Quick Comfort Journey</sub> —
            a safe space just for you.
          </li>
          <li>
            Join a beginner-friendly community circle like{" "}
            <sub className="font-bold text-[13px]">Calm Corner</sub> or{" "}
            <sub className="font-bold text-[13px]">Letting Go</sub>.
          </li>
          <li>
            Spend five minutes with simple breathing exercises or guided
            reflections.
          </li>
        </ul>
      ),
    },
    {
      title: "5. Need More Help?",
      content: (
        <>
          <p className="text-sm text-gray-600 mb-4">
            If you ever feel stuck or unsure, you are not alone — reach out
            anytime.
          </p>
          <p className="text-sm text-gray-600">
            <sub className="font-bold text-[13px]">Visit</sub> Support Talk to
            Us
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <sub className="font-bold text-[13px]">Or email us at</sub>:{" "}
            <a
              href="mailto:support@heartivy.com"
              className="text-purple-600 hover:underline"
            >
              support@heartivy.com
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* For tablet and desktop - accordion style */}
      <div className="grow pt-8 max-w-5xl bg-gray-100 p-6 md:p-8 lg:pl-28 border border-gray-200 lg:border-l-2 border-t-0 border-b-0 border-r-0">
        {/* Mobile: Collapsible Getting Started Header */}
        <div className="md:hidden">
          <button
            onClick={() => setShowGettingStarted(!showGettingStarted)}
            className="w-full flex items-center justify-between text-sm mb-4 text-gray-900 border-b border-gray-200 pb-3"
          >
            <span>Getting Started</span>
            <ChevronRight
              size={16}
              className={`text-gray-400 transition-transform duration-300 ${
                showGettingStarted ? "rotate-90" : ""
              }`}
            />
          </button>

          {/* Mobile: Collapsible content */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showGettingStarted
                ? "max-h-[3000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[14px] text-gray-600 leading-relaxed mb-6 bg-[#F3F8FD] border-blue-100 border p-4 rounded-lg">
              Welcome to Heartivy! We are really glad you are here. This guide
              will help you understand the platform and make the most of the
              emotional support tools we have built for you.
            </p>

            <ol className="space-y-4 list-none pl-0 mb-6">
              {steps.map((step, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleStep(index)}
                    className="flex items-center justify-between w-full text-left text-sm mb-2 text-gray-900 hover:text-[#8F7A9C] transition-colors"
                  >
                    <span>{step.title}</span>
                    <ChevronRight
                      size={16}
                      className={`text-gray-400 transition-transform duration-300 ${
                        expandedSteps.includes(index) ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedSteps.includes(index)
                        ? "max-h-96 opacity-100 mb-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {step.content}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Tablet and Desktop: Always visible accordion */}
        <div className="hidden md:block">
          <h2 className="text-sm mb-6 text-gray-900 border-b border-gray-100 pb-3">
            Getting Started
          </h2>

          <p className="text-[14px] text-gray-600 leading-relaxed mb-6 bg-[#F3F8FD] border-blue-100 border p-4 rounded-lg">
            Welcome to Heartivy! We are really glad you are here. This guide
            will help you understand the platform and make the most of the
            emotional support tools we have built for you.
          </p>

          <ol className="space-y-4 list-none pl-0">
            {steps.map((step, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleStep(index)}
                  className="flex items-center justify-between w-full text-left text-sm mb-2 text-gray-900 hover:text-[#8F7A9C] transition-colors"
                >
                  <span>{step.title}</span>
                  <ChevronRight
                    size={16}
                    className={`text-gray-400 transition-transform duration-300 ${
                      expandedSteps.includes(index) ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSteps.includes(index)
                      ? "max-h-96 opacity-100 mb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {step.content}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile only: Show HelpCentreNav below Getting Started */}
      <div className="md:hidden bg-white px-6 py-8">
        <HelpCentreNav isMobile={true} />
      </div>
    </>
  );
}

// --- Main Page Component (Wrapping the content) ---
export default function SupportPage() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("General");
  return (
    <div
      className="w-full min-h-screen font-sans text-gray-800 flex flex-col relative    bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Topographic 5.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain", // or "auto"
        backgroundPosition: "center",
        mixBlendMode: "screen",
        backgroundColor: "#fff",
      }}
    >
      {/* 1. Import Header/Navbar */}
      <Navbar />

      <main className="grow flex lg:block">
        <div className=" w-57 hidden md:block lg:hidden px-2 mt-16 h-full overflow-hidden ">
          <HelpCentreNav isMobile={true} />
        </div>
        <div
          className={`${switzer.className} w-full max-w-full lg:max-w-7xl mx-auto lg:px-6 lg:py-12 flex flex-col lg:block px-4`}
        >
          {/* --- 1. Top Heading Section --- */}
          <div className="text-center mb-12 md:mb-32 mt-32 lg:mt-62 max-w-full lg:max-w-2xl mx-auto">
            <h1 className="text-4xl font-semibold mb-4">Help Centre</h1>
            <p className="text-gray-500 text-md ">
              We know that reaching out for support or navigating a new platform
              can feel overwhelming. That’s why we created this Help Centre — a
              gentle space where you can find answers, guidance, and reassurance
              every step of the way.
            </p>
          </div>
          <div className="w-full flex justify-center mb-12 sm:mb-25 md:mb-50">
            {/* Mobile Layout */}
            <div className="flex md:hidden flex-col gap-3 w-full max-w-md px-4">
              {/* Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Type a keyword"
                  className="border border-gray-300 rounded-md py-2.5 px-4 w-full text-sm outline-none focus:ring-[1px] focus:ring-gray-300 transition placeholder:text-gray-400"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                {keyword && (
                  <button
                    onClick={() => setKeyword("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition"
                  >
                    <X size={16} strokeWidth={2} className="text-gray-400" />
                  </button>
                )}
              </div>

              {/* Dropdown */}
              <select
                className="border border-gray-300 rounded-md py-2.5 px-4 w-full text-sm outline-none focus:ring-[1px] focus:ring-gray-300 transition cursor-pointer bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>General</option>
                <option>Account</option>
                <option>Billing</option>
                <option>Technical</option>
              </select>

              {/* Button */}
              <button className="py-2.5 px-4 bg-[#8F7A9C] text-white text-sm rounded-md transition hover:opacity-90 w-full">
                Find Answers
              </button>
            </div>

            {/* Desktop/Tablet Layout */}
            <div className="hidden md:flex gap-6 items-center">
              {/* Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type a keyword"
                  className="border border-gray-300 rounded-md py-1.5 px-2 w-47 text-[13px] outline-none focus:ring-[1px] focus:ring-gray-300 transition placeholder:text-gray-400 placeholder:px-2"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />

                <button
                  onClick={() => setKeyword("")}
                  className="absolute right-3 top-[8px] transition"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              </div>

              {/* Dropdown */}
              <select
                className="border border-gray-300 rounded-md py-1.5 px-2 pr-8 text-sm outline-none focus:ring-[1px] focus:ring-gray-300 transition cursor-pointer bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>General</option>
                <option>Account</option>
                <option>Billing</option>
                <option>Technical</option>
              </select>

              {/* Button */}
              <button className="py-1.5 px-4 bg-[#8F7A9C] text-white text-sm rounded-md transition hover:opacity-90">
                Find Answers
              </button>
            </div>
          </div>

          {/* --- 2. Feature Cards --- */}
          <div
            className={`${switzer.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 md:mb-52 max-w-5xl mx-auto`}
          >
            <FeatureCard
              src="/icons/consumer-protection_11668189 1.svg"
              title="Emotional Safety & Protection"
              description="We work every day to make Heartivy a safe, anonymous, and comforting space. Learn how we protect you and the community while ensuring your emotional wellbeing."
            />
            <FeatureCard
              src="/icons/shield_16399379 1.svg"
              title="Privacy & Security"
              description="Your privacy is our priority. Discover how your identity, data, and conversations remain secure, confidential, and fully in your control."
            />
            <FeatureCard
              src="/icons/bank-account_12366380 1.svg"
              title="Managing My Account"
              description="Need help updating your preferences, notifications, or profile? This section guides you through everything you need to personalize your Heartivy experience."
            />
          </div>

          {/* --- 3. Main Content Columns (Sidebar + Guide) --- */}
          <div className="flex flex-col lg:flex-row mb-12 md:mb-32 p-0">
            {/* Left Sidebar (Desktop Only) */}
            <div className="w-57 hidden lg:block">
              <HelpCentreNav />
            </div>

            {/* Right Content - Guide */}
            <GettingStartedAccordion />
          </div>
        </div>
      </main>

      {/* 2. Import Footer */}
      <Footer />
    </div>
  );
}
