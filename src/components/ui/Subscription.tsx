import Image from "next/image";
import { Nunito_Sans, Poppins } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function SubscribeSection() {
  return (
    <section
      className={`px-4 md:px-10 max-w-5xl mx-auto mb-40 ${poppins.className}`}
    >
      {/* Card */}
      <div className="relative max-w-6xl w-full rounded-4xl bg-[#EDEDED] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/images/Lines_newsletter_bg.svg"
          alt="Background"
          fill
          className="object-contain mix-blend-multiply"
        />

        <div className="relative z-[2] text-center px-6 md:px-20 py-8 md:py-16">

          {/* Small Heading */}
          <p className="text-[#164D24] text-md tracking-wide font-medium mb-2 md:mb-3">
            Our Journal of Healing
          </p>

          {/* Main Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[40px] font-semibold text-[#585858] leading-tight">
            Subscribe to Find Calm, Hope, and{" "}
            <br className="hidden md:block" />
            Gentle Guidance from Heartivy
          </h2>

          {/* Subline */}
          <p className="text-[#585858] text-xs sm:text-sm text-center sm:text-justify mx-auto md:mt-6 mt-4 md:leading-relaxed max-w-md">
            Join our circle of care — receive comforting stories, mindful reflections,
            and emotional wellness tips right in your inbox.
          </p>

          {/* Input + Button */}
          <div className="mt-6 md:mt-10 bg-white flex items-center gap-2 mx-auto w-full max-w-xl px-3 py-1 md:px-2 md:py-1.5 rounded-full">

            <input
              type="email"
              placeholder="Enter your email to begin your gentle journey"
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-full font-medium outline-none"
            />

            {/* Desktop Button */}
            <button className="hidden  whitespace-nowrap md:block bg-[#8F7A9C] text-white px-5 py-3.5 rounded-full text-[14px] hover:opacity-90 transition">
              Join the Circle
            </button>

            {/* Mobile Button */}
            <button className="md:hidden bg-[#8F7A9C] text-white px-6 py-2 rounded-full text-[12px] hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
