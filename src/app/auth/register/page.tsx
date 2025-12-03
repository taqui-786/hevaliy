'use client';

import React, { useState } from 'react';
import {  Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/ui/NavBar';

export default function LoginSignup() {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <>  
        <Navbar />  
        <div className="min-h-screen bg-white">


            {/* Main Content */}
            <div className="pt-24 pb-20 bg-linear-to-br from-purple-50 to-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-22">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Form */}
                        <div>



                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome</h2>
                                <p className="text-gray-600 mb-8">A safe and gentle space where every journey matters.</p>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-900 mb-2">First Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    placeholder="First"
                                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    placeholder="Last"
                                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Join as a</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 appearance-none bg-white cursor-pointer">
                                            <option>User</option>
                                            <option>Psychologist</option>
                                            <option>Counselor</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                placeholder="Example@email.com"
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="At least 8 characters"
                                                className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                                            />
                                            <button
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </div>

                                    <label className="flex items-center">
                                        <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                                        <span className="ml-2 text-sm text-gray-700">
                                            I agree to the <a href="#" className="text-purple-600 hover:text-purple-700">Terms of Service</a> and <a href="#" className="text-purple-600 hover:text-purple-700">Privacy Policy</a>
                                        </span>
                                    </label>

                                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                                        Register
                                    </button>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-gray-500">Or</span>
                                        </div>
                                    </div>

                                    {/* <button className="w-full flex items-center justify-center gap-3 bg-blue-50 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Sign up with Facebook
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-3 bg-blue-50 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        Sign up with Google
                                    </button> */}

                                    <p className="text-center text-gray-600 text-sm">
                                        Already have an account?{' '}
                                        <Link href="/auth/login" className="text-purple-600 font-semibold hover:text-purple-700">
                                            Sign in here
                                        </Link>
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Right Side - Image */}
                        <div className="hidden md:block">
                            <Image
                                src="/images/Login Art (1).png"
                                alt="Heartivy Logo"
                                width={600}
                                height={400}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
        </>
    );
}