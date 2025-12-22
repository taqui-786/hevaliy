import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

import img1 from "../../../public/images/Rectangle 41999.png";
import img2 from "../../../public/images/Rectangle 42000.png";
import img3 from "../../../public/images/Rectangle 42002.png";
import img4 from "../../../public/images/Rectangle 42004.png";
import { QuoteIcon } from "./Testimonial";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function HealingSection() {
  return (
    <section
      className="w-full pb-10 px-4 sm:px-6 md:px-8 md:pt-12 lg:px-24 mb-2
    "
    >
      {/* HEADING */}
      <h2
        className={`
          ${nunito.className}
          text-center text-xl md:text-2xl lg:text-3xl
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
          className={`${nunito.className} md:hidden font-bold flex justify-center md:justify-start items-center`}
        >
          <div className="w-fit flex flex-col items-start justify-center">
            <QuoteIcon className="text-2xl rotate-180 text-[#8BA764] " />
            <p
              className="
  text-left
  lg:text-2xl
  md:text-base
  leading-relaxed
  max-w-xs
  line-clamp-5
  overflow-hidden
"
            >
              Every smile tells a story of courage — proof that healing isn’t
              instant, but it’s real. Heartivy is where small steps lead to
              softer days, lighter hearts, and genuine connection.
            </p>
          </div>
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
        <div className="hidden md:flex col-span-2 gap-8 px-0  lg:px-8 xl:px-18">
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
          <div className="max-w-sm">
            <p
              className="
  text-left
  lg:text-2xl
  md:text-base
  leading-relaxed
  line-clamp-5
  overflow-hidden
"
            >
              Every smile tells a story of courage — proof that healing isn’t
              instant, but it’s real. Heartivy is where small steps lead to
              softer days, lighter hearts, and genuine connection.
            </p>
          </div>
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
        <div
          className={`${nunito.className} md:hidden font-bold flex justify-center md:justify-start items-center`}
        >
          <div className="w-fit flex flex-col items-start justify-center mb-2 ">
            <QuoteIcon className="text-2xl rotate-180 text-[#8BA764] " />
            <p
              className="
  text-left
  lg:text-2xl
  md:text-base
  leading-relaxed
  line-clamp-6
  overflow-hidden
  max-w-xs
"
            >
              Every sunrise feels like a quiet victory — proof that even after
              the darkest nights, light always returns.
              <p className="">
                Heartivy is where healing grows slowly, where strength is found
                in softness, and where hope learns to breathe again.
              </p>
            </p>
          </div>
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
          className={`${nunito.className} hidden md:flex text-[12px] font-bold items-center   justify-center `}
        >
          <div className="flex flex-col items-start">
            <QuoteIcon className="text-2xl rotate-180 text-[#8BA764] mb-4" />
            <p>
              <span className="lg:text-2xl md:text-base font-bold">
                Every sunrise feels like a quiet victory — proof that even after
                the darkest nights, light always returns.
                <p className="">
                  Heartivy is where healing grows slowly, where strength is
                  found in softness, and where hope learns to breathe again.
                </p>
              </span>
            </p>
          </div>
        </div>

        <div className="hidden md:flex col-span-2 gap-8  pl-0  lg:pl-8 xl:pl-18">
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
