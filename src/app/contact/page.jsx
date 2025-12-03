import Navbar from '../../components/ui/NavBar'; // Make sure this path matches your file name (e.g., Header.jsx)
import Footer from '../../components/Footer'; // Make sure this path matches your file name (e.g., Footer.jsx)
import { HeartPulse } from 'lucide-react'; // FIXED: Changed HeartActivity to HeartPulse

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col ">
      
      {/* 1. Import Navbar */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main className="grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start my-52">
          
          {/* --- LEFT SIDE: Text Content --- */}
          <div className="pt-8">
            {/* Badge */}
            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let us Get in Touch.
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Sometimes reaching out is the first step toward feeling a little lighter.
            </p>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
              If you have questions, need support, or simply want to share feedback, we are here — listening, without judgment.
            </p>

            <div className="mb-12">
              <p className="text-gray-800 font-medium mb-1">If you prefer, you can also reach us directly at:</p>
              <a href="mailto:support@heartivy.com" className="text-purple-600 hover:underline">
                support@heartivy.com
              </a>
            </div>

            {/* Heart Icon Circle */}
            <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-700">
               {/* FIXED: Used HeartPulse here */}
               <HeartPulse size={28} />
            </div>
          </div>

          {/* --- RIGHT SIDE: Contact Form --- */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
            <form className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name..." 
                    className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Inquiry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number..." 
                    className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-200 cursor-pointer">
                        <option>Select your inquiry type..</option>
                        <option>Support</option>
                        <option>Feedback</option>
                        <option>Partnership</option>
                    </select>
                    {/* Custom Arrow for select */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkboxes Section */}
              <div className="py-2">
                <label className="text-sm font-medium text-gray-700 block mb-3">What can we help you with?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                    <CheckboxItem label="Support Chat" />
                    <CheckboxItem label="Professional Counseling" />
                    <CheckboxItem label="Community Circles" />
                    <CheckboxItem label="Wellness Resources" />
                    <CheckboxItem label="Crisis Support" />
                    <CheckboxItem label="Feedback" />
                    <CheckboxItem label="General Inquiry" />
                    <CheckboxItem label="Other" />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Enter your main text here..." 
                    className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none"
                  ></textarea>
                  <div className="text-right text-xs text-gray-400">0/300</div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#8e7699] hover:bg-[#7a6385] text-white font-medium py-3 rounded-lg transition shadow-sm flex justify-center items-center gap-2">
                Submit Form 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>

            </form>
          </div>

        </div>
      </main>

      {/* 3. Import Footer */}
      <Footer />
    </div>
  );
}

// Helper Component for Checkboxes
function CheckboxItem({ label }) {
    return (
        <label className="flex items-center gap-2 cursor-pointer group">
            <input 
                type="checkbox" 
                className="peer sr-only" 
            />
            {/* Custom Checkbox Style */}
            <div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-purple-600 peer-checked:border-purple-600 flex items-center justify-center transition">
                <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span className="text-sm text-gray-600 group-hover:text-gray-900">{label}</span>
        </label>
    )
}