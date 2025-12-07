import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

import img1 from "../../../public/images/Rectangle 41999.png";
import img2 from "../../../public/images/Rectangle 42000.png";
import img3 from "../../../public/images/Rectangle 42002.png";
import img4 from "../../../public/images/Rectangle 42004.png";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function HealingSection() {
  return (
    <section
      className="w-full pb-10 md:px-16 px-8 mb-2
    "
    >
      {/* HEADING */}
      <h2
        className={`
          ${nunito.className}
          text-center text-[24px] md:text-[20px]
          font-extrabold  text-balck mb-28
        `}
      >
        Healing Is a Journey — and You’re Already On It
      </h2>

      {/* ⭐ FIRST ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:mb-25 md:mb-15 mb-10 gap-6">

  {/* ==== SMALL SCREEN IMAGE 1 (START) ==== */}
  <div className="md:hidden flex justify-start">
    <div className="w-[50%] xs:w-[40%] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img1}
        alt="img1"
        className="object-cover w-full h-auto"
      />
    </div>
  </div>

  {/* ==== SMALL SCREEN TEXT (NOW LEFT) ==== */}
  <div
    className={`${nunito.className} md:hidden font-bold flex justify-start items-center`}
  >
    <p className="text-[14px] leading-relaxed px-4 text-left">
      Every smile tells a story of courage — proof that healing isn’t instant, but it’s real.
      Heartivy is where small steps lead to softer days, lighter hearts, and genuine connection.
    </p>
  </div>

  {/* ==== SMALL SCREEN IMAGE 2 (END) ==== */}
  <div className="md:hidden flex justify-end">
    <div className="w-[50%] xs:w-[40%] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img2}
        alt="img2"
        className="object-cover w-full h-auto"
      />
    </div>
  </div>


  {/* ==== DESKTOP VIEW ==== */}
  <div className="hidden md:flex col-span-2 gap-8 px-18">
    
    {/* LEFT IMAGE */}
    <div className="w-full rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img1}
        alt="img1"
        width={450}
        height={368}
        className="object-cover w-full h-full"
      />
    </div>

    {/* MIDDLE IMAGE */}
    <div className="w-full rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img2}
        alt="img2"
        width={450}
        height={368}
        className="object-cover w-full h-full"
      />
    </div>
  </div>

  {/* QUOTE TEXT DESKTOP */}
  <div
    className={`${nunito.className} hidden md:flex justify-center items-center font-bold`}
  >
    <p className="lg:text-[24px] md:text-[14px] font-bold">
      Every smile tells a story of courage — proof that healing isn’t instant,
      but it’s real. Heartivy is where small steps lead to softer days, lighter hearts,
      and genuine connection.
    </p>
  </div>
</div>


      {/* ⭐ SECOND ROW */}
<div className="grid grid-cols-1 md:grid-cols-3  gap-6 lg:pl-18 ">

  {/* ==== SMALL SCREEN FIRST IMAGE (LEFT) ==== */}
  <div className="md:hidden flex justify-start">
    <div className="w-[55%] xs:w-[40%] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img3}
        alt="img3"
        className="object-cover w-full h-auto"
      />
    </div>
  </div>

  {/* ==== SMALL SCREEN TEXT (LEFT ALIGNED) ==== */}
  <div className={`${nunito.className} md:hidden text-left font-bold flex items-center`}>
    <p className="px-4 text-[14px] leading-relaxed">
      <span className="text-[48px] text-[#8BA764] font-bold leading-none">“</span>
      Every sunrise feels like a quiet victory — proof that even after the darkest
      nights, light always returns. Heartivy is where healing grows slowly, where
      strength is found in softness, and where hope learns to breathe again.
    </p>
  </div>

  {/* ==== SMALL SCREEN SECOND IMAGE (RIGHT) ==== */}
  <div className="md:hidden flex justify-end">
    <div className="w-[55%] xs:w-[40%] rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img4}
        alt="img4"
        className="object-cover w-full h-auto"
      />
    </div>
  </div>


  {/* ==== DESKTOP VIEW ==== */}
  <div
    className={`${nunito.className} hidden md:flex text-[12px] font-bold items-center   justify-center`}
  >
    <p>
      <span className="text-[64px] text-[#8BA764] font-bold leading-none">“</span>
      <span className="lg:text-[24px] md:text-[14px] font-bold">
        Every sunrise feels like a quiet victory — proof that even after the darkest
        nights, light always returns., and where hope learns to breathe again.
      </span>
    </p>
  </div>

  <div className="hidden md:flex col-span-2 gap-8 pl-18">
    
    {/* MIDDLE IMAGE */}
    <div className="w-full rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img3}
        alt="img3"
        width={450}
        height={368}
        className="object-cover w-full h-full"
      />
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full rounded-2xl overflow-hidden bg-gray-200 shadow-md">
      <Image
        src={img4}
        alt="img4"
        width={450}
        height={368}
        className="object-cover w-full h-full"
      />
    </div>
  </div>

</div>

    </section>
  );
}
