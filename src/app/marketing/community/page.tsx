// components/CommunityPage.jsx (Revised for design accuracy)
'use client';
import Header from '@/components/ui/NavBar';
import Footer from '@/components/Footer';
import { Heart, Brain, Leaf, Users, Sun, Mountain, Sparkles, Shield, Lock, User, Smile, Star, MessageCircle, FileSearch, Search, CloudRain, TrendingUp } from "lucide-react";
import SubscribeSection from '@/components/ui/Subscription';
import localFont from 'next/font/local';
const switzer = localFont({
  src: "../../../../public/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
});
// Dummy content for the cards and sections
const communityCards = [
  {
    title: "Anxiety & Overthinking Circle",
    description:
      "A safe space to share your feelings, be heard, and find calm together.",
    tags: ["Safe Space", "Anonymous", "Warm Community"],
    members: "1,247",
    icon: <CloudRain className="w-6 h-6 text-[#A327FF]" />,
    bg: "bg-[#E8DFFF]",
  },
  {
    title: "Self-Growth Journey",
    description:
      "Celebrate your progress, share your wins, and grow with others on the same path.",
    tags: ["Supportive", "Growth", "Uplifting"],
    members: "892",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    bg: "bg-[#CDEDE3]",
  },
  {
    title: "Healing After Heartbreak",
    description:
      "A gentle place to process loss, share your story, and rediscover your strength.",
    tags: ["Compassionate", "Safe Space", "Healing"],
    members: "1,563",
    icon: <Heart className="w-6 h-6 text-red-500" />,
    bg: "bg-[#FBEAEC]",
  },
  {
    title: "Calm Corner (Mindfulness)",
    description:
      "Practice mindfulness, share peaceful moments, and find tranquility together.",
    tags: ["Peaceful", "Mindful", "Grounding"],
    members: "2,104",
    icon: <Leaf className="w-6 h-6 text-[#00A63E]" />,
    bg: "bg-[#CDEDE3]",
  },
  {
    title: "Loneliness Support Group",
    description:
      "You are not alone. Connect with caring hearts who truly understand how you feel.",
    tags: ["Empathy", "Connection", "Understanding"],
    members: "1,876",
    icon: <Users className="w-6 h-6 text-[#5A45F6]" />,
    bg: "bg-[#E8DFFF]",
  },
  {
    title: "Daily Motivation Circle",
    description:
      "Start your day with hope, inspiration, and encouragement from kindred spirits.",
    tags: ["Inspiring", "Uplifting", "Hopeful"],
    members: "3,201",
    icon: <Sun className="w-6 h-6 text-[#E47E18]" />,
    bg: "bg-[#FBEAEC]",
  },
];

const suggestedTopics = [
  {
    name: "Anonymous Heart",
    initials: "AH",
    text: `"This week, I finally felt heard. Thank you, Heartify."`,
    likes: 128,
    support: 64,
  },
  {
    name: "Gentle Soul",
    initials: "GS",
    text: `"I found courage I didn’t know I had. This community saved me."`,
    likes: 215,
    support: 98,
  },
  {
    name: "Hopeful Journey",
    initials: "HJ",
    text: `"For the first time in months, I don't feel alone anymore."`,
    likes: 342,
    support: 156,
  },
  {
    name: "Peaceful Mind",
    initials: "PM",
    text: `"The kindness here helped me see light in my darkest days."`,
    likes: 189,
    support: 87,
  },
];


const CommunityPage = () => {
  return (
    <div style={{ fontFamily: "Arial" }} className="font-arial text-gray-800 bg-white min-h-screen  ">

      {/* 1. Header Component Import */}
      <Header />

      <main>

        {/* Hero / Banner Section */}
        <section className={`${switzer.className} pt-70 mb-35 px-4 md:px-10 max-w-5xl mx-auto text-center `}>
          <h1 className="text-3xl   mb-4 ">
            Welcome to the Heartivy Community
          </h1>
          <p className="text-gray-600  mx-auto">
            A gentle space where you can share, connect, and grow with others who understand.
          </p>
          <div className="flex my-8 justify-center gap-5"><span>                <Heart className="w-7 h-7  text-green-300" /></span><span><Leaf className="w-7 h-7 text-green-300"></Leaf></span><span><Heart className="w-7 h-7 text-blue-300"></Heart></span></div>
        </section>

        {/* 🎨 REVISED: Search Bar Container Section (Soft, light background) */}
        <section className="px-4 my-2 max-w-3xl mx-auto mb-18">
          {/* MAIN BOX WRAPPER (Shadow + Padding) */}
          <div className=" bg-white rounded-3xl px-6 py-4 shadow-lg border border-gray-100">

            {/* SEARCH INPUT */}
            <div className="flex items-center gap-3 w-full border border-gray-200 bg-[#F4F5F7] rounded-full px-5 py-2.5">
              <Search className="text-gray-400 " size={20} />
              <input
                type="text"
                placeholder="Search for topics, stories, or circles…"
                className="bg-transparent w-full text-[11px] text-gray-600 outline-none placeholder:text-gray-500"
              />
            </div>

            {/* TAGS ROW */}
            <div className="flex flex-wrap gap-3 mt-5">
              {["Anxiety", "Healing", "Relationships", "Self-Growth", "Stress Relief", "Motivation"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#F4F5F7] text-gray-600 text-[11px] rounded-full"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

          </div>


        </section>

        {/* 🎨 REVISED: Featured Groups/Topics Grid (Pastel Colors, Subtle Styling) */}
        <section className="px-4 md:px-12 max-w-6xl mx-auto mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {communityCards.map((card, index) => (
              <div
                key={index}
                className={`w-full rounded-xl px-7 pt-6 pb-3 shadow-md hover:shadow-md transition-all ${card.bg}`}
              >
                {/* Icon */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="bg-white shadow-sm p-2.5 rounded-full">{card.icon}</div>
                </div>

                {/* Title */}
                <h2 className="text-[13px]    text-gray-900">{card.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9.5px] bg-[#F6F2FF]   rounded-full px-3 py-1 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[9.5px] text-gray-500">{card.members} <br /> members</span>

                  <button className="px-2 py-1 shadow-sm text-[12px] font-medium bg-white  rounded-full hover:bg-gray-100 transition">
                    Join Circle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* You Might Be Looking For - Card List */}
        {/* 🎨 REVISED: Added light purple background matching the image */}
        <section className="py-16 px-4 md:px-8  max-w-7xl mx-auto  ">
          <div className="w-full py-12 px-26  bg-[#FCF9FE]">
            {/* Section Title */}
            <h2 className="text-center text-md text-gray-800 mb-10">
              Most Uplifting Stories This Week
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {suggestedTopics.map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl px-6 py-5 shadow-md hover:shadow-md transition-all flex flex-col h-full"
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-[1.5px] border border-[#ECECF0] rounded-full">   
                         <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm">
                      {story.initials}
                    </div></div>
                    <p className="text-xs text-gray-800">{story.name}</p>
                  </div>

                  {/* Story Text */}
                  <p className="text-gray-600 text-[13px] italic leading-relaxed">
                    {story.text}
                  </p>

                  {/* Likes + Support (fixed bottom) */}
                  <div className="flex items-center gap-4 text-[11px] text-gray-500 mt-auto ">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {story.likes}
                    </span>

                    <span className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {story.support}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
        <div className="w-full py-8 px-6 flex flex-col items-center">

          {/* Title */}
          <h2 className="text-md text-gray-800">
            Celebrate Kindness
          </h2>
          <p className="text-gray-500 mt-2 text-sm text-center">
            We appreciate every act of kindness that makes this community feel like home.
          </p>

<div className="flex flex-wrap gap-5 justify-center mt-10">

  {/* Card 1 (Reference style) */}
  <div className="flex flex-col items-center">
    <div className="w-16 h-14 rounded-full bg-[#FFE4E6] flex items-center justify-center shadow-md">
      <Heart className="w-7 h-7 text-[#ED0E49]" />
    </div>
    <p className="mt-2 mb-3 text-gray-800 text-[13px]">Kind Soul</p>
    <p className="text-gray-500 text-[11px]">Given with love</p>
  </div>

  {/* Card 2 (matched to card 1) */}
  <div className="flex flex-col items-center">
    <div className="w-16 h-14 rounded-full bg-[#DBEAFE] flex items-center justify-center shadow-md">
      <MessageCircle className="w-7 h-7 text-[#155DFC]" />
    </div>
    <p className="mt-2 mb-3 text-gray-800 text-[13px]">Empathy Giver</p>
    <p className="text-gray-500 text-[11px]">Always listening</p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center">
    <div className="w-16 h-14 rounded-full bg-[#FEF3C6] flex items-center justify-center shadow-md">
      <Sun className="w-7 h-7 text-[#E17101]" />
    </div>
    <p className="mt-2 mb-3 text-gray-800 text-[13px]">Daily Supporter</p>
    <p className="text-gray-500 text-[11px]">Here every day</p>
  </div>

  {/* Card 4 */}
  <div className="flex flex-col items-center">
    <div className="w-16 h-14 rounded-full bg-[#DCFCE7] flex items-center justify-center shadow-md">
      <Leaf className="w-7 h-7 text-[#00A63E]" />
    </div>
    <p className="mt-2 mb-3 text-gray-800 text-[13px]">Calm Bringer</p>
    <p className="text-gray-500 text-[11px]">Spreads peace</p>
  </div>

  {/* Card 5 */}
  <div className="flex flex-col items-center">
    <div className="w-16 h-14 rounded-full bg-[#F3E8FF] flex items-center justify-center shadow-md">
      <Star className="w-7 h-7 text-purple-500" />
    </div>
    <p className="mt-2 mb-3 text-gray-800 text-[13px]">Light Bearer</p>
    <p className="text-gray-500 text-[11px]">Brings hope</p>
  </div>

</div>

        </div>
        {/* Community Pillars / Why Join? */}
        <section className="px-4  max-w-3xl mx-auto  mb-48 flex justify-center">
          <div className="mt-14 bg-[#F4EFFF] pt-8 px-8 pb-4 rounded-2xl shadow-md w-full max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1.5 bg-white rounded-full"><Shield className="text-purple-600 w-5" /></div>
              <p className="text-[13px] text-gray-800">
                Community Safety & Emotional Guidelines
              </p>
            </div>

            <div className="space-y-1 text-[13px] text-gray-600">
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-500" />
                Share gently. Speak with kindness.
              </p>

              <p className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                Your safety and privacy come first.
              </p>

              <p className="flex items-center gap-2">
                <User className="w-4 h-4 text-green-500" />
                No judgment. No pressure.
              </p>

              <p className="flex items-center gap-2">
                <Smile className="w-4 h-4 text-purple-500" />
                We are here to uplift, not to diagnose.
              </p>
            </div>

            <button className="mt-4 py-2 px-3 text-xs bg-white shadow-md rounded-full  hover:bg-gray-100 transition">
              Read Full Guidelines
            </button>
          </div>
        </section>
        <SubscribeSection />

      </main>

      {/* 2. Footer Component Import */}
      <Footer />
    </div>
  );
};

export default CommunityPage;

