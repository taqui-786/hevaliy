"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // to detect active link
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import loginIcon from "../../../public/images/login-icon.png";
import { Nunito_Sans, Poppins } from "next/font/google";
import { motion , AnimatePresence } from "framer-motion";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // light-medium-regular-bold
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function NavBar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/marketing/about" },
    { name: "Get Support", href: "/support" },
    { name: "Resources", href: "/resources" },
    { name: "Community", href: "/marketing/community" },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname(); // current route

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // scroll off
    } else {
      document.body.style.overflow = "auto"; // scroll on
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);
  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 flex justify-center pt-6 
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl shadow-lg py-4"
            : "bg-transparent"
        }
        ${nunito.className}
      `}
    >
      <div className="w-full max-w-[1550px] px-10 flex justify-around items-center transition-all relative">
        {/* Logo */}
        <Image
          src={logo}
          width={40}
          height={40}
          alt="logo"
          className="object-contain"
        />

        {/* Center Links */}
        <div className="hidden md:flex items-center lg:gap-8 lg:px-10 lg:py-2 md:gap-4 md:px-13 md:py-2  rounded-full bg-[#FFFFFF26] backdrop-blur-xl relative">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name} className="relative">
                {isActive && (
                  <span className="absolute lg:-left-4 md:-left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-600"></span>
                )}
                <Link
                  href={item.href}
                  className={`text-gray-700 lg:text-xl font-bold md:text-[14px]  hover:text-black transition ${
                    isActive ? "font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Login Button */}
        <Link href="/auth/login">
          <div className="hidden md:flex items-center gap-2 bg-[#E8E8E8] px-5 py-2.5 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <span className="text-[23px]  font-bold">Login</span>
            <Image
              src={loginIcon}
              alt="login icon"
              width={18}
              height={18}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden ml-4" onClick={() => setOpen(!open)}>
          <span className="text-xl text-white">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
    <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}   // animation start
            animate={{ opacity: 1, y: 0 }}     // animation in
            exit={{ opacity: 0, y: -20 }}       // animation close
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`${nunito.className} md:hidden absolute top-2 left-2 right-2 w-full border border-gray-100 backdrop-blur-xl p-5 rounded-3xl shadow-xl text-left space-y-1`}
          >
            {/** Your original mobile menu code (unchanged) */}
            <div
              className="flex justify-between p-2 mb-20 "
              onClick={() => setOpen(!open)}
            >
              <Image src={logo} width={40} height={40} alt="logo" />
              <Image src={"/icons/close.png"} width={18} height={18} alt="close" className="object-contain"/>
            </div>

            {navItems.map((item) => (
              <p
                key={item.name}
                className="text-white font-extrabold text-[36px]"
              >
                {item.name}
              </p>
            ))}

            <Link href="/auth/login" className="flex  text-black ">
              <span className="font-extrabold text-[36px]">Login</span>
              <Image src={loginIcon} width={18} height={18} alt="login icon" className="object-contain"/>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
