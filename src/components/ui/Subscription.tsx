import Image from "next/image";
import { Nunito_Sans, Poppins } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // light-medium-regular-bold
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function SubscribeSection() {
  return (
    <section className={`px-4 md:px-10 max-w-5xl mx-auto mb-40 ${poppins.className}`} >
      {/* Card */}
      <div className="relative max-w-6xl w-full rounded-4xl bg-[#EDEDED] overflow-hidden ">

        {/* Background Image */}
        <Image
          src="/images/Lines_newsletter_bg.svg"
          alt="Background"
          fill
          className="object-contain mix-blend-multiply  "
        />

        <div className="relative z-[2] text-center px-6 md:px-20 py-6 md:py-16">
          
          {/* Small Heading */}
          <p className="text-gray-900 text-md tracking-wide font-medium mb-3">
            Our Journal of Healing
          </p>

          {/* Main Heading */}
          <h2 className="text-md md:text-[40px] font-semibold text-[#625A60] leading-tight">
            Subscribe to Find Calm, Hope, and <br className="hidden md:block" />
            Gentle Guidance from Heartivy
          </h2>

          {/* Subline */}
          <p className="text-[#808080] text-xs md:text-sm text-justify  mx-auto md:mt-6 mt-8 md:leading-relaxed  px-32 md:px-0">
            Join our circle of care — receive comforting stories, mindful reflections, 
            and emotional wellness tips right in your inbox.
          </p>

          {/* Input + Button */}
          <div className="md:mt-10 mt-6 bg-white flex flex-row items-center justify-between gap-3 mx-auto w-full max-w-xl md:px-2 md:py-1.5 py-1 px-3 rounded-full">
            <input
              type="email"
              placeholder="Enter your email to begin your gentle journey"
              className="w-full sm:flex-1 px-4 py-2 rounded-full text-sm font-medium outline-none"
            />
            <button className="bg-[#8F7A9C] hidden md:block text-white px-5 py-3.5 rounded-full text-[14px]  hover:opacity-90 transition">
              Join the Circle
            </button>
            <button className="bg-[#8F7A9C] md:hidden text-white px-8 py-2 rounded-full text-[12px]  hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
