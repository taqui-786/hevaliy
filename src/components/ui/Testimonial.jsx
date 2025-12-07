"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import localFont from "next/font/local";

import user1 from "../../../public/images/user1.png";
import user2 from "../../../public/images/user2.png";
import user3 from "../../../public/images/user3.png";
import { MoreHorizontal } from "lucide-react";

const switzer = localFont({
  src: "../../../public/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
});

// DATA
const slides = [
  {
    big: {
      content:
        "I finally felt safe enough to talk about things I’ve kept hidden for years...",
      img: user1,
      name: "Ruth M.I.",
      loc: "USA",
    },
    small1: {
      content:
        "Knowing I can connect with a compassionate listener 24/7 is a massive weight off my shoulders.",
      img: user2,
      name: "Alex R.",
      loc: "Canada",
    },
    small2: {
      content: "The groups are incredible. I found people who truly ‘get it’...",
      img: user3,
      name: "Yaretzi H.",
      loc: "UK",
    },
  },
  {
    big: {
      content: "This platform gave me peace I didn’t know I needed...",
      img: user2,
      name: "Sarah W.",
      loc: "Germany",
    },
    small1: {
      content: "Finally someone listened without judgment...",
      img: user1,
      name: "Daniel R.",
      loc: "Norway",
    },
    small2: {
      content: "Felt understood for the first time ever.",
      img: user3,
      name: "Liya P.",
      loc: "Dubai",
    },
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className={`${switzer.className} w-full py-10 px-6 md:px-12 lg:px-20 mb-32`}>
      
      {/* GRID FIXED FOR MD AND UP */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 lg:px-12">


        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col ">
          <h2 className="font-semibold text-3xl md:text-5xl lg:text-[64px] text-[#575757] leading-tight">
            What Are People Saying<span className="text-[#164D24]"> About Us</span>
          </h2>

          <p className="md:text-[14px] text-md text-gray-600 leading-[175%] mt-4 max-w-[360px]">
            We are very happy if you are satisfied with our service. Let’s read
            pure reviews from customers who bought our products.
          </p>

          {/* PAGE + BUTTON */}
          <div className="flex flex-col gap-2 mt-12">
            <div className="flex items-end gap-4">
              <span className="text-5xl font-bold text-gray-900">
                {String(index + 1).padStart(2, "0")}  
              </span>
              <span className="text-gray-500 text-md">
                /   {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-lg bg-[#8F7A9C] text-white flex items-center justify-center shadow-md"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-lg bg-[#8F7A9C] text-white flex items-center justify-center shadow-md"
              >
                →
              </button>
            </div>
          </div>
        </div>

{/* RIGHT SIDE SLIDES */}
<section className="w-full h-full flex">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.45 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-stretch"
    >

              
{/* BIG CARD */}
<div
  className="p-6 rounded-2xl relative shadow-sm border border-gray-300 hidden md:flex flex-col h-full justify-between"
  style={{ backgroundColor: "#C3C3C34D" }}
>

                <MoreHorizontal className="absolute top-4 right-4 text-gray-400" size={24} />
                <p className="text-4xl text-[#2C7A59] leading-none font-serif">“</p>
                <p className="text-[14px] text-gray-700 leading-[175%] mt-2">
                  {slides[index].big.content}
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <Image src={slides[index].big.img} width={28} height={28} alt="user" className="rounded-full"/>
                  <div>
                    <p className="text-[12px]">{slides[index].big.name}</p>
                    <p className="text-[10px] text-gray-500">{slides[index].big.loc}</p>
                  </div>
                </div>
              </div>

              {/* SMALL CARDS */}
              <div className="flex flex-col gap-5 ">
                {[slides[index].small1, slides[index].small2].map((card, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl relative shadow-sm border border-gray-300"
                    style={{ backgroundColor: "#C3C3C34D" }}
                  >
                    <MoreHorizontal className="absolute top-4 right-4 text-gray-400" size={24} />
                    <p className="text-4xl text-[#2C7A59] font-serif">“</p>
                    <p className="text-[14px] text-gray-700 leading-[175%] mt-2">{card.content}</p>

                    <div className="flex justify-end items-center gap-2 mt-4">
                      <Image src={card.img} width={28} height={28} alt="user" className="rounded-full"/>
                      <div>
                        <p className="text-[12px]">{card.name}</p>
                        <p className="text-[10px] text-gray-500">{card.loc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </section>
  );
}
