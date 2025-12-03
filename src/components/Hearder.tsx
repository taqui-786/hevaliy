"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname(); // Active route check karega
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/marketing/about" },
        { name: "Get Support", path: "/support" },
        { name: "Contact", path: "/contact" },
        { name: "Community", path: "/marketing/community" },
    ];

    return (
        <div className="absolute top-0 left-0 w-full z-50 md:bg-transparent bg-white/50 ">

    
        <nav className="flex items-center justify-around px-6 py-5  ">
            {/* Logo */}
            <div className="flex gap-2">
                <div className="w-10 h-10 relative">
                    <Image
                        src="/images/logo.svg"
                        alt="Heartivy Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-base backdrop-blur-2xl px-8 py-3 rounded-full bg-white/30  font-medium text-gray-700">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={` transition ${pathname === link.path
                                ? "text-black font-semibold border-b-2 border-black pb-1"
                                : "hover:text-black"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Login Button */}
            <Link
                href="/auth/login"
                className="hidden md:flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-black px-6 py-2.5 rounded-full font-bold transition"
            >
                Login
                <ArrowUpRight size={18} strokeWidth={2.5} />
            </Link>

            {/* Hamburger Button */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-black"
            >
                {open ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setOpen(false)}
                            className={`text-lg transition ${pathname === link.path
                                    ? "text-black font-semibold border-b-2 border-black pb-1"
                                    : "text-gray-600 hover:text-black"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/auth/login"
                        className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-black px-6 py-2.5 rounded-full font-bold transition"
                    >
                        Login
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                    </Link>

                </div>
            )}
        </nav>
            </div>
    );
}
