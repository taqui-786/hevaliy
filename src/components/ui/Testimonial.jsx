"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";

import user1 from "../../../public/images/user1.png";
import user2 from "../../../public/images/user2.png";
import user3 from "../../../public/images/user3.png";
import { MoreHorizontal } from "lucide-react";

// LOAD SWITZER VARIABLE FONT
const switzer = localFont({
  src: "../../../public/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
});

// LOAD NUNITO
// const nunito = Nunito_Sans({
//   weight: ["400", "600", "700"],
//   subsets: ["latin"],
// });

// ---- DATA ---- //
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
      content:
        "The groups are incredible. I found people who truly ‘get it’...",
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
      className={`${switzer.className} w-full py-4  md:px-14 mb-22
          
`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT STATIC SECTION  */}
        <div className="flex flex-col justify-center md:pl-18 px-8">
          {/* ⬇️ Figma-perfect H2 */}
          <h2
            className={`
              ${switzer.className}
              font-semibold
              text-3xl
              md:text-[64px]
              md:leading-[63.98px]
              tracking-[0]
              text-[#2C7A59]
            `}
            style={{
              fontVariantNumeric: "lining-nums proportional-nums",
            }}
          >
            What Are People{" "}
            <span className="text-gray-700">Saying About Us</span>
        </h2>

          <p
            className={`md:text-[14px] text-md text-gray-600 leading-[175%] mt-4 max-w-[360px]`}
          >
            We are very happy if you are satisfied with our service. Let’s read
            pure reviews from customers who bought our products.
          </p>

          {/* PAGE NUMBER + BUTTONS */}
          <div className="flex flex-col gap-2 mt-12">
            <div>
              <span className="text-5xl font-bold text-gray-900">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-gray-500 text-md">
                / {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-lg bg-[#8F7A9C] text-white flex items-center justify-center shadow-md"
              >
                <Image
                  src="/icons/arrow_back.png"
                  width={24}
                  height={24}
                  alt="Arrow Back"
                />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-lg bg-[#8F7A9C] text-white flex items-center justify-center shadow-md"
              >
                <Image
                  src="/icons/arrow_right.png"
                  width={24}
                  height={24}
                  alt="Arrow Forward"
                />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — unchanged */}
        <section className="w-full md:py-24 px-8 md:px-20 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.45 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              {/* BIG CARD */}
              <div
                className="p-6 rounded-2xl relative shadow-sm w-full h-full hidden  md:flex flex-col justify-between border border-gray-300"
                style={{ backgroundColor: "#C3C3C34D" }}
              >
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                  <MoreHorizontal size={24} strokeWidth={2.5} />
                </button>
                <p className="text-4xl text-[#2C7A59] leading-none font-serif">
                  “
                </p>

                <p
                  className={` text-[14px] text-gray-700 leading-[175%] mt-2`}
                >
                  {slides[index].big.content}
                </p>

                <div className="flex items-center gap-1 mt-6">
                  <Image
                    src={slides[index].big.img}
                    alt="user"
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <div className="leading-3">
                    <p className="text-[12px]  text-gray-900">
                      {slides[index].big.name}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {slides[index].big.loc}
                    </p>
                  </div>
                </div>
              </div>

              {/* TWO SMALL CARDS */}
              <div className="flex flex-col gap-5 w-full">
                <div
                  className="p-6 rounded-2xl relative shadow-sm w-full border border-gray-300"
                  style={{ backgroundColor: "#C3C3C34D" }}
                >
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                    <MoreHorizontal size={24} strokeWidth={2.5} />
                  </button>
                  <p className="text-4xl text-[#2C7A59] leading-none font-serif">
                    “
                  </p>

                  <p
                    className={` text-[14px] text-gray-700 leading-[175%] mt-2`}
                  >
                    {slides[index].small1.content}
                  </p>

                  <div className="flex items-end justify-end gap-1 mt-4">
                    <Image
                      src={slides[index].small1.img}
                      alt="user"
                      width={25}
                      height={25}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <p className="text-[12px]  text-gray-900">
                        {slides[index].small1.name}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        {slides[index].small1.loc}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 rounded-2xl relative shadow-sm w-full border border-gray-300"
                  style={{ backgroundColor: "#C3C3C34D" }}
                >
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                    <MoreHorizontal size={24} strokeWidth={2.5} />
                  </button>
                  <p className="text-4xl text-[#2C7A59] leading-none font-serif">
                    “
                  </p>

                  <p
                    className={` text-[14px] text-gray-700 leading-[175%] mt-2`}
                  >
                    {slides[index].small2.content}
                  </p>

                  <div className={`${switzer.className} flex justify-end items-end gap-1 mt-4`}>
                    <Image
                      src={slides[index].small2.img}
                      alt="user"
                      width={25}
                      height={25}
                      className="rounded-full"
                    />
                    <div className="leading-3">
                      <p className="text-[12px]   text-gray-900">
                        {slides[index].small2.name}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        {slides[index].small2.loc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </section>
  );
}
