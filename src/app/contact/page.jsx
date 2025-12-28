import Navbar from "../../components/ui/NavBar";
import Footer from "../../components/Footer";
import { HeartPulse } from "lucide-react";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-white font-sans text-gray-800 flex flex-col relative    bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/Topographic 5.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "contain", // or "auto"
        backgroundPosition: "center",
        mixBlendMode: "screen",
        backgroundColor: "#fff",
        fontFamily: "Arial",
      }}
    >
      <Navbar />

      {/* Added responsive padding but kept lg view same */}
      <main className="grow max-w-5xl mx-auto py-2 md:py-16 w-full p-8 sm:px-12 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-50  gap-10 lg:mb-38 lg:mt-12 my-10 ">
          {/* LEFT SIDE */}
          <div className="md:pt-4 lg:pt-8">
            <span className="inline-block bg-[#DBEAFE] text-[#9B8BAB] px-3 py-1.5 rounded-full text-[11px] font-medium mb-3">
              Contact Us
            </span>

            <h1 className="text-3xl lg:text-4xl text-gray-900 mb-3">
              Let's Get in Touch.
            </h1>

            <p className="text-[#8F7A9C] text-[13px] mb-3">
              Sometimes reaching out is the first step toward feeling a little
              lighter.
            </p>
            <p className="text-[#8F7A9C] text-[13px] mb-6">
              If you have questions, need support, or simply want to share
              feedback, we are here — listening, without judgment.
            </p>

            <div className="mb-8 text-[13px]">
              <p className="text-gray-800 font-medium mb-1">
                If you prefer, you can also reach us at:
              </p>
              <a
                href="mailto:support@heartivy.com"
                className="text-[#8F7A9C] hover:underline"
              >
                support@heartivy.com
              </a>
            </div>

            <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center text-[#9B8BAB]">
              <HeartPulse size={24} />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/20 rounded-lg p-4 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/20 w-full lg:w-md">
            <form className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name..."
                />
                <Field
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address..."
                />
              </div>

              {/* Phone + Inquiry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number..."
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-gray-100 rounded-lg px-4 py-2 text-xs text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200">
                    <option>Select your inquiry type..</option>
                    <option>Support</option>
                    <option>Feedback</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div>
                <label className="text-xs font-medium text-gray block mb-3">
                  What can we help you with?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-4">
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

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray">Message</label>
                <textarea
                  rows={4}
                  placeholder="Enter your message..."
                  className="w-full bg-gray-100 rounded-lg px-3 pt-2 pb-10 text-xs focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none"
                ></textarea>
                <div className="text-right text-xs text-gray-400">0/300</div>
              </div>

              {/* Submit */}
              <button className="w-full bg-[#8e7699] hover:bg-[#7a6385] text-white text-xs py-3 rounded-lg transition shadow-sm flex justify-center items-center gap-2">
                Submit Form
                <span className="flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="inline-block"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Field({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-black">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-100 rounded-lg px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-purple-200"
      />
    </div>
  );
}

function CheckboxItem({ label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="peer sr-only" />
      <div className="w-3 h-3 rounded border border-gray-300 bg-[#F3F3F5] peer-checked:bg-gray-200 peer-checked:border-gray-200 flex items-center justify-center transition">
        <svg
          className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-[12px] text-gray">{label}</span>
    </label>
  );
}
