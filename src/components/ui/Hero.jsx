import Image from "next/image";
import heroBg from "../../../public/images/john-towner-3Kv48NS4WUU-unsplash 1.png";
import rightImg from "../../../public/images/hero-right-img.png";
import { Cog } from "lucide-react";
import { Nunito_Sans, Poppins } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // light-medium-regular-bold
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section
      className={` ${nunito.className} relative w-full h-dvh   overflow-hidden`}
    >
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="hero"
        fill
        priority
        quality={100}
        className="object-cover saturate-[1.2] contrast-[1.1] brightness-[1.05]"
      />

      {/* Main Center Content */}
      <div className="absolute md:inset-0  top-147 left-0   flex flex-col md:items-center md:justify-center md:text-center  px-6">
        <h1
          className="
          text-5xl lg:text-8xl md:text-6xl font-extrabold
          text-[#D5B485]
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
        "
        >
          Every Heart Deserves <br /> Care and Understanding
        </h1>

        <p className="text-gray-200 mt-3 max-w-full  text-sm  md:text-base leading-relaxed">
          Find a safe, judgment-free space to share, heal, and rediscover
          emotional balance with people who truly listen.
        </p>
      </div>

      {/* Bottom Left Card */}
      <div
        className="
        absolute lg:bottom-10 lg:left-24 hidden md:bottom-8 md:left-10  md:flex flex-col text-white max-w-md
        
        
      "
      >
        <div className="flex  md:justify-start items-center gap-2 mb-2">
          <Cog className="w-4 h-4 md:w-6 md:h-6" />
          <h3 className="text-sm lg:text-xl md:text-lg  font-semibold">
            Strength in Stillness
          </h3>
        </div>

        <p className="text-xs lg:text-base md:text-sm text-[#D5B485] font-medium leading-relaxed  ">
          Mental well-being shapes how we think, feel, and connect with others.
          When you take time to care for your mind, you nurture your confidence,
          balance, and resilience — one gentle moment at a time.
        </p>
      </div>

      {/* Bottom Right Circular Card */}
      <div className="absolute hidden  bottom-10 right-24 lg:flex text-[#D5B485]  items-center ">
        {/* Text on the LEFT side */}
        <div className="flex flex-col text-right leading-tight gap-1">
          <span className="text-sm opacity-90">Growth</span>
          <span className="text-sm opacity-90">Balance</span>
          <span className="text-sm opacity-90">Awareness</span>
          <span className="text-sm opacity-90">Expression</span>
        </div>

        {/* Circle Image */}
        <div
          className="
      w-[120px] h-[120px] rounded-full overflow-hidden 
      border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]
    "
        >
          <Image
            src={rightImg}
            alt="growth"
            width={120}
            height={120}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
