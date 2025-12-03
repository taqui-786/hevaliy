// components/CommunityPage.jsx (Revised for design accuracy)
'use client';
import Header from '@/components/Hearder';
import Footer from '@/components/Footer';
import { Heart, Brain, Leaf, Users, Sun, Mountain, Sparkles, Shield, Lock, User, Smile, Star, MessageCircle } from "lucide-react";

// Dummy content for the cards and sections
const communityCards = [
  {
    title: "Anxiety & Overthinking Circle",
    description:
      "A safe space to share your feelings, be heard, and find calm together.",
    tags: ["Safe Space", "Anonymous", "Warm Community"],
    members: "1,247",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    bg: "bg-purple-100",
  },
  {
    title: "Self-Growth Journey",
    description:
      "Celebrate your progress, share your wins, and grow with others on the same path.",
    tags: ["Supportive", "Growth", "Uplifting"],
    members: "892",
    icon: <Mountain className="w-6 h-6 text-green-600" />,
    bg: "bg-green-100",
  },
  {
    title: "Healing After Heartbreak",
    description:
      "A gentle place to process loss, share your story, and rediscover your strength.",
    tags: ["Compassionate", "Safe Space", "Healing"],
    members: "1,563",
    icon: <Heart className="w-6 h-6 text-red-500" />,
    bg: "bg-pink-100",
  },
  {
    title: "Calm Corner (Mindfulness)",
    description:
      "Practice mindfulness, share peaceful moments, and find tranquility together.",
    tags: ["Peaceful", "Mindful", "Grounding"],
    members: "2,104",
    icon: <Leaf className="w-6 h-6 text-green-700" />,
    bg: "bg-teal-100",
  },
  {
    title: "Loneliness Support Group",
    description:
      "You are not alone. Connect with caring hearts who truly understand how you feel.",
    tags: ["Empathy", "Connection", "Understanding"],
    members: "1,876",
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    bg: "bg-indigo-100",
  },
  {
    title: "Daily Motivation Circle",
    description:
      "Start your day with hope, inspiration, and encouragement from kindred spirits.",
    tags: ["Inspiring", "Uplifting", "Hopeful"],
    members: "3,201",
    icon: <Sun className="w-6 h-6 text-yellow-500" />,
    bg: "bg-orange-100",
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
    <div className="font-sans text-gray-800 bg-white min-h-screen my-6">

      {/* 1. Header Component Import */}
      <Header />

      <main>

        {/* Hero / Banner Section */}
        <section className="pt-20 pb-12 px-4 md:px-10 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-purple-800">
            Welcome to the Heartivy Community
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join a safe space to share experiences, find guidance, and build meaningful connections with people who truly understand.
          </p>
        </section>

        {/* 🎨 REVISED: Search Bar Container Section (Soft, light background) */}
        <section className="px-4 md:px-10 my-4 max-w-4xl mx-auto mb-16">
          <div className="p-8 bg-white rounded-2xl shadow-inner-soft shadow-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics, groups, or members"
                className="w-full py-3 pl-12 pr-4 border border-gray-200 rounded-full focus:ring-purple-500 focus:border-purple-500 shadow-sm bg-gray-200"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div className="flex  space-x-4 mt-4 text-sm text-gray-500">
              <span className="cursor-pointer font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200">Popular</span>
              <span className="cursor-pointer font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200">New</span>
              <span className="cursor-pointer font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200">Therapist Picks</span>
              <span className="cursor-pointer font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200">My Groups</span>
            </div>
          </div>
        </section>

        {/* 🎨 REVISED: Featured Groups/Topics Grid (Pastel Colors, Subtle Styling) */}
        <section className="px-4 md:px-10 max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityCards.map((card, index) => (
              <div
                key={index}
                className={`w-full rounded-xl p-6 shadow-sm hover:shadow-md transition-all ${card.bg}`}
              >
                {/* Icon */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="bg-white shadow-sm p-2 rounded-full">{card.icon}</div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {card.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-sm text-gray-500">{card.members} members</span>

                  <button className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition">
                    Join Circle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* You Might Be Looking For - Card List */}
        {/* 🎨 REVISED: Added light purple background matching the image */}
        <section className="py-16 px-4 md:px-10 bg-[#f9f9ff] max-w-7xl mx-auto mb-16 rounded-xl shadow-sm">
          <div className="w-full py-12 px-6 bg-linear-to-r from-pink-50 to-purple-50">
            {/* Section Title */}
            <h2 className="text-center text-xl font-semibold text-gray-800 mb-10">
              Most Uplifting Stories This Week
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {suggestedTopics.map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-md transition-all"
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold">
                      {story.initials}
                    </div>
                    <p className="font-medium text-gray-800">{story.name}</p>
                  </div>

                  {/* Story Text */}
                  <p className="text-gray-600 text-sm italic leading-relaxed mb-6">
                    {story.text}
                  </p>

                  {/* Likes + Support */}
                  <div className="flex items-center gap-6 text-sm text-gray-700">
                    <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" /> {story.likes}
                    </span>

                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-500" /> {story.support}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
          <div className="w-full py-16 px-6 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        Celebrate Kindness
      </h2>
      <p className="text-gray-500 mt-2 text-center">
        We appreciate every act of kindness that makes this community feel like home.
      </p>

      {/* Icons Row */}
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center shadow-md">
            <Heart className="w-7 h-7 text-pink-500" />
          </div>
          <p className="mt-3 text-gray-800 font-medium text-sm">Kind Soul</p>
          <p className="text-gray-400 text-xs">Given with love</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
            <MessageCircle className="w-7 h-7 text-blue-500" />
          </div>
          <p className="mt-3 text-gray-800 font-medium text-sm">Empathy Giver</p>
          <p className="text-gray-400 text-xs">Always listening</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center shadow-md">
            <Sun className="w-7 h-7 text-yellow-500" />
          </div>
          <p className="mt-3 text-gray-800 font-medium text-sm">Daily Supporter</p>
          <p className="text-gray-400 text-xs">Here every day</p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shadow-md">
            <Leaf className="w-7 h-7 text-green-500" />
          </div>
          <p className="mt-3 text-gray-800 font-medium text-sm">Calm Bringer</p>
          <p className="text-gray-400 text-xs">Spreads peace</p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center shadow-md">
            <Star className="w-7 h-7 text-purple-500" />
          </div>
          <p className="mt-3 text-gray-800 font-medium text-sm">Light Bearer</p>
          <p className="text-gray-400 text-xs">Brings hope</p>
        </div>
      </div>
    </div>
        {/* Community Pillars / Why Join? */}
        <section className="py-12 px-4 md:px-10 max-w-4xl mx-auto  mb-16 flex justify-center">
          <div className="mt-14 bg-purple-50 p-8 rounded-2xl shadow-md w-full max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-purple-600" />
              <p className="font-semibold text-gray-800">
                Community Safety & Emotional Guidelines
              </p>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-3">
                <Heart className="w-4 h-4 text-pink-500" />
                Share gently. Speak with kindness.
              </p>

              <p className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-blue-500" />
                Your safety and privacy come first.
              </p>

              <p className="flex items-center gap-3">
                <User className="w-4 h-4 text-green-500" />
                No judgment. No pressure.
              </p>

              <p className="flex items-center gap-3">
                <Smile className="w-4 h-4 text-purple-500" />
                We are here to uplift, not to diagnose.
              </p>
            </div>

            <button className="mt-6 px-5 py-2 text-sm bg-white shadow-md rounded-full border border-gray-300 hover:bg-gray-100 transition">
              Read Full Guidelines
            </button>
          </div>
        </section>

        {/* Subscribe / Call to Action Section */}
        {/* 🎨 REVISED: Soft background and gentle styling */}
     <section className="px-4 md:px-10 max-w-4xl mx-auto mb-20">
  <div className="p-6 sm:p-10 md:p-16 bg-[#f0f0f0] rounded-3xl text-center shadow-lg">

    {/* Title */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
      Subscribe to Find Calm, Hope, and Gentle Guidance from Heartivy
    </h2>

    {/* Description */}
    <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm sm:text-base">
      Get weekly insights, community updates, and therapist-approved tools directly to your inbox. Join over 20,000 members.
    </p>

    {/* Form */}
    <form className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-3 sm:space-y-0 md:bg-white bg-transparent rounded-full md:shadow-md max-w-md mx-auto p-2">
      
      <input
        type="email"
        placeholder="Enter your email address"
        className="py-3 px-5 w-full sm:flex-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />

      <button
        type="submit"
        className="bg-gray-700 text-white font-medium py-3 px-8 rounded-full w-full sm:w-auto hover:bg-gray-900 transition"
      >
        Subscribe
      </button>

    </form>
  </div>
</section>


      </main>

      {/* 2. Footer Component Import */}
      <Footer />
    </div>
  );
};

export default CommunityPage;

