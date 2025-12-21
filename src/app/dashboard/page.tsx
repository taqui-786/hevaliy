"use client";

import React, { useState } from "react";
import { Menu, X, Heart, Search, Star, ChevronRight } from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Heartivy</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                About
              </a>
              <a
                href="#support"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                Get Support
              </a>
              <a
                href="#resources"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                Resources
              </a>
              <a
                href="#community"
                className="text-sm font-medium text-gray-700 hover:text-purple-600"
              >
                Community
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="/login"
                className="hidden md:block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300"
              >
                Login ↗
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <a
                href="#home"
                className="block text-gray-700 hover:text-purple-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-purple-600"
              >
                About
              </a>
              <a
                href="#support"
                className="block text-gray-700 hover:text-purple-600"
              >
                Get Support
              </a>
              <a
                href="#resources"
                className="block text-gray-700 hover:text-purple-600"
              >
                Resources
              </a>
              <a
                href="#community"
                className="block text-gray-700 hover:text-purple-600"
              >
                Community
              </a>
              <a
                href="/login"
                className="block bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium"
              >
                Login
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Every Heart Deserves Care and Understanding
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A safe, anonymous, and accessible mental health support platform
                for individuals struggling with loneliness, stress, and
                emotional challenges. You're not alone anymore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/signup"
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition text-center"
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
                alt="Hero"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where Your Heart Can Rest */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where Your Heart Can Finally Rest
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healing is a journey — and you're already on it. Every smile tells
              a story of encouragement.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Safe & Anonymous
              </h3>
              <p className="text-gray-700">
                Your privacy is our priority. Share your thoughts and feelings
                in a completely confidential space where you feel comfortable.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Support
              </h3>
              <p className="text-gray-700">
                Connect with thousands of people who understand your journey.
                Share, listen, and grow together in our supportive circles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Guidance
              </h3>
              <p className="text-gray-700">
                Access resources, articles, and expert guidance from mental
                health professionals who care about your wellbeing.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of people who have found peace, support, and
              understanding in our community.
            </p>
            <a
              href="/signup"
              className="inline-block bg-purple-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Join the Circle Today
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                50K+
              </div>
              <p className="text-gray-600 font-semibold">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                100+
              </div>
              <p className="text-gray-600 font-semibold">Support Circles</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">1M+</div>
              <p className="text-gray-600 font-semibold">Stories Shared</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600 font-semibold">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            What People Are Saying About Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya",
                text: "Finding this community was the best decision I made. I finally felt heard and understood.",
              },
              {
                name: "Rohit",
                text: "The support I received here helped me navigate through my darkest times. Thank you Heartivy!",
              },
              {
                name: "Anjali",
                text: "An amazing platform where I could be myself without any judgment. Highly recommended!",
              },
              {
                name: "Vikram",
                text: "Connecting with people who truly understand my struggles made all the difference.",
              },
              {
                name: "Deepa",
                text: "The resources and support circles here are incredibly helpful. I recommend it to everyone.",
              },
              {
                name: "Arjun",
                text: "Finally found a safe space where I can express myself freely. Thank you team!",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">
            Subscribe to Find Calm, Hope, and Gentle Guidance
          </h3>
          <p className="text-lg mb-8 text-purple-100">
            Our Journal of Healing brings you thoughtful insights and kind
            reminders each week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="font-bold text-lg">Heartivy</span>
              </div>
              <p className="text-gray-400">
                A safe, anonymous, and accessible mental health support platform
                for individuals struggling with loneliness, stress, and
                emotional challenges.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="/support" className="hover:text-white transition">
                    Crisis Helpline
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-white transition">
                    Chat Support
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-white transition">
                    Find a Therapist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Self-Help Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-center">
              © 2025 Heartivy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
