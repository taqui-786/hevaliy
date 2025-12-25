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
        "I finally felt safe enough to talk about things I've kept hidden for years. The anonymity is absolute, and that freedom allowed me to be truly honest for the first time. It changed everything.",
      img: user1,
      name: "Ruth M.I.",
      loc: "USA",
    },
    small1: {
      content:
        "Knowing I can connect with a compassionate listener 24/7 is a massive weight off my shoulders. I didn't feel alone anymore.",
      img: user2,
      name: "Alex R.",
      loc: "Canada",
    },
    small2: {
      content:
        "The groups are incredible. I found people who truly 'get it' in a supportive, judgment-free community.",
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
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className={`${switzer.className} w-full py-10 px-6 md:px-8 xl:px-12 2xl:px-20 md:mb-32 mb-20`}
    >
      {/* GRID FIXED FOR MD AND UP */}
      <div className="flex flex-col lg:flex-row  gap-4 xl:gap-8 2xl:gap-12 2xl:20 2xl:px-12">
        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col w-full lg:w-[40%] xl:w-1/2 items-start ">
          <h2 className="font-semibold text-4xl sm:text-5xl xl:text-[64px] text-[#575757] leading-tight inline-block w-fit">
            What Are People <br /> Saying
            <span className="text-[#164D24]"> About Us</span>
          </h2>

          <p className=" lg:text-lg text-base text-[#999999] leading-[175%] mt-4 max-w-[360px]">
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
                / {String(slides.length).padStart(2, "0")}
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
        <section className=" h-full flex w-auto lg:w-[60%] xl:w-1/2">
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
                <MoreHorizontal
                  className="absolute top-4 right-4 text-gray-400"
                  size={24}
                />
                <QuoteIcon className="text-2xl rotate-180 text-[#2C7A59] " />
                <p className="text-base text-[#575757] leading-[175%] mt-2">
                  {slides[index].big.content}
                </p>

                <div className="flex items-center gap-2 mt-6">
                  <Image
                    src={slides[index].big.img}
                    width={28}
                    height={28}
                    alt="user"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-xs">{slides[index].big.name}</p>
                    <p className="text-xs text-gray-500">
                      {slides[index].big.loc}
                    </p>
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
                    <MoreHorizontal
                      className="absolute top-4 right-4 text-gray-400"
                      size={24}
                    />
                   <QuoteIcon className="text-2xl rotate-180 text-[#2C7A59]" />
                    <p className="text-base text-[#575757] leading-[175%] mt-2">
                      {card.content}
                    </p>

                    <div className="flex justify-end items-center gap-2 mt-4">
                      <Image
                        src={card.img}
                        width={28}
                        height={28}
                        alt="user"
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-xs">{card.name}</p>
                        <p className="text-xs text-gray-500">{card.loc}</p>
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
export const QuoteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 304 384"
    {...props}
  >
    <path
      fill="currentColor"
      d="m21 299l43-86H0V85h128v128l-43 86H21zm171 0l43-86h-64V85h128v128l-43 86h-64z"
    ></path>
  </svg>
);
