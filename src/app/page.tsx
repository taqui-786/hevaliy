import Navbar from '../components/Hearder'; // Header component
import Footer from '../components/Footer'; // Footer component
import Image from 'next/image';
import Link from 'next/link';

// Icons jinka upyog features section mein ho sakta hai
import { Quote, ChevronRight, ChevronLeft, MoreHorizontal, Cog } from 'lucide-react';
import Head from 'next/head';

// --- Helper Components ---

// Component for the centered Testimonial boxes
// const TestimonialCard = ({ quote, author, date }: { quote: string; author: string; date: string }) => (
//   <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 min-h-full">
//     <Quote size={24} className="text-purple-400 mb-3" />
//     <p className="text-gray-700 italic text-sm mb-4">&ldquo; {quote} &rdquo;</p>
//     <div className="border-t border-gray-100 pt-3 text-xs text-gray-500">
//       <p className="font-semibold text-gray-800">{author}</p>
//       <p>{date}</p>
//     </div>
//   </div>
// );

// // Component for the small features grid (Find Your Way section)
// const SmallFeatureItem = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ size: number; className: string }>; title: string; description: string }) => (
//   <div className="flex items-start gap-4 p-4">
//     <Icon size={24} className="text-purple-600 shrink-0 mt-1" />
//     <div>
//       <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   </div>
// );


// --- Main Page Component ---
export default function LandingPage() {
  return (

    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Head>
      <title>Heartivy</title>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400;500;600;700&family=Yellowtail&display=swap"
        rel="stylesheet"
      />
        </Head>

      {/* 1. Header/Navbar Import */}
      <Navbar />

      <main className="grow">

        {/* ---------------------------------------------------- */}
        {/* 1. HERO SECTION (Image Background) */}
        {/* ---------------------------------------------------- */}
        <section className="relative w-full min-h-[550px] md:min-h-[650px] flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/john-towner-3Kv48NS4WUU-unsplash 1.png"
              alt="Therapy session background"
              fill
              className="object-cover brightness-50"
            />
          </div>

          {/* CENTER HEADINGS */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            {/* <p className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-2">HEARTIVY</p> */}

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#D5B485] leading-tight">
              Every Heart Deserves <br className="hidden md:block" /> Care and Understanding
            </h1>

            <p className="mt-3 text-[10px] md:text-sm text-gray-200 max-w-md mx-auto ">
              We provide a safe, anonymous space for emotional support, helping you find your path to healing and peace.
            </p>
          </div>


          {/* BOTTOM CONTENT */}
          <div className="absolute bottom-4 md:bottom-10 hidden lg:block left-0 right-0 z-10 justify-center items-center">
            <div className="container mx-auto px-4 md:px-12  flex  flex-row justify-between items-center md:items-end gap-10">

              {/* LEFT CONTENT */}
              <div className="max-w-md text-center md:text-left text-white">
                <div className="flex  md:justify-start items-center gap-2 mb-2">
                  <Cog className="w-4 h-4 md:w-6 md:h-6" />
                  <h3 className="text-sm md:text-xl  font-semibold">Strength in Stillness</h3>
                </div>

                <p className="text-xs md:text-sm text-[#D5B485] leading-relaxed">
                  Mental well-being shapes how we think, feel, and connect with others.
                  When you take time to care for your mind, you nurture your confidence,
                  balance, and resilience — one gentle moment at a time.
                </p>
              </div>


              {/* RIGHT CIRCLE SECTION */}
              <div className="relative flex items-center justify-center">

                {/* Labels */}
                <div className="absolute -left-20 md:-left-28 space-y-2 text-right text-[10px] md:text-sm text-[#D5B485]">
                  <p>Growth</p>
                  <p>Balance</p>
                  <p>Awareness</p>
                  <p>Expression</p>
                </div>

                {/* Circle Image */}
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 md:border-[3px] border-t-[#D5B485] border-l-[#D5B485] border-r-0 border-b-0  ">
                  <Image
                    src="/images/Ellipse 57.png"
                    alt="person"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>

              </div>
            </div>
          </div>

        </section>



        <hr className="my-12 border-gray-100" />



<section className="relative bg-white py-24 px-6 md:px-24">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" fill="#f3f4f6" />
    </svg>
  </div>

  <div className="relative max-w-6xl mx-auto flex flex-col gap-10 md:gap-14">

    {/* 1️⃣ Welcome (Left on desktop, center on mobile) */}
    <p className="text-sm uppercase tracking-widest font-bold text-gray-600 text-center md:text-left md:translate-x-4 lg:translate-x-20">
      Welcome
    </p>

    {/* 2️⃣ Heading (center always, slight shift on desktop) */}
    <h1 
      className="text-4xl md:text-6xl font-bold text-gray-900 text-center md:translate-x-1  leading-tight"
      style={{ fontFamily: "'Yellowtail', cursive" }}
    >
      Where Your Heart <br /> Can Finally Rest
    </h1>

    {/* 3️⃣ Paragraph (center on mobile, right side on large screens) */}
    <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left w-full md:w-[70%] md:self-end md:translate-x-50 lg:translate-x-80">
      Heartivy is more than a platform — it is a pause. A moment between the
      noise and the stillness where you can finally breathe, feel, and heal at
      your own pace. We created Heartivy for those quiet hours when your mind
      feels heavy and your heart needs softness — a space where empathy
      replaces judgment, and care feels human again. Within our calm,
      connected environment, you will find thoughtful support, honest
      understanding, and gentle reminders that peace is never lost — only
      waiting to be found again.
    </p>

  </div>
</section>


        <hr className="my-12 border-gray-100" />
        <section className="relative max-w-7xl mx-auto py-20 px-6 md:px-20 bg-white">

          {/* Top Title */}
          <h2 className="text-center text-2xl md:text-4xl font-semibold text-black mb-14">
            Healing Is a Journey — and You’re Already On It
          </h2>

          {/* FIRST ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Image 1 */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c"
                alt="family"
                width={300}
                height={250}
                className="w-full h-[190px] object-cover rounded-xl"
              />
            </div>

            {/* Image 2 */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/Rectangle 42000.png"
                alt="reading"
                width={350}
                height={250}
                className="w-full h-[190px] object-cover rounded-xl"
              />
            </div>

            {/* Text Right */}
            <p className="text-gray-800 text-lg  font-semibold leading-relaxed">
              Every smile tells a story of courage — proof that healing isn’t instant,
              but it’s real. Heartivy is where small steps lead to softer days,
              lighter hearts, and genuine connection.
            </p>
          </div>

          {/* SECOND ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-20">

            {/* Quote Text */}
            <div className="relative">
              <span className="text-green-500 text-4xl">“</span>
              <p className="mt-4 text-gray-800 text-lg font-semibold leading-relaxed">
                Every sunrise feels like a quiet victory — proof that even after the
                darkest nights, light always returns.
                Heartivy is where healing grows slowly, where strength is found in
                softness, and where hope learns to breathe again.
              </p>
            </div>

            {/* Image 3 */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/Rectangle 42002.png"
                alt="beach girl"
                width={350}
                height={250}
                className="w-full h-[190px] object-cover rounded-xl"
              />
            </div>

            {/* Image 4 */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/Rectangle 42004.png"
                alt="mountains"
                width={350}
                height={250}
                className="w-full h-[190px] object-cover rounded-xl"
              />
            </div>
          </div>
        </section>


        <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT SIDE CONTENT */}
            <div className="space-y-5">
              <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
                What Are People <br />
                <span className="text-green-700">Saying About Us</span>
              </h2>

              <p className="text-gray-500 max-w-md">
                We are very happy if you are satisfied with our service, let us read
                pure reviews from customers who bought our products.
              </p>

              <div className="flex items-center gap-6 pt-5">
                <span className="text-3xl font-semibold">02</span>
                <span className="text-gray-400">/ 05</span>

                <div className="flex gap-3">
                  <button className="w-10 h-10 flex items-center justify-center bg-[#8F7A9C] hover:bg-gray-300 text-white rounded-lg transition">
                    <ChevronLeft />
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-[#8F7A9C] hover:bg-green-800 text-white rounded-lg transition">
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* CARD 1 - Big Left Card */}
              <div className="bg-gray-200 shadow relative rounded-2xl border border-gray-300 p-6 h-full md:min-h-[350px] flex flex-col justify-between items-start">
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                  <MoreHorizontal size={24} strokeWidth={2.5} />
                </button>
                <div className="bg-green-100  p-3 rounded-full mb-4">
                  <Quote
                    className="text-green-600 rotate-180"
                    size={26}
                    strokeWidth={3}
                  />
                </div>
                <p className="text-gray-600 mt-3">
                  I finally felt safe enough to talk about things I have kept hidden for years.
                  The anonymity is absolute, and that freedom allowed me to be truly honest.
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <Image src="/images/Rectangle 42000.png" alt="user" width={36} height={36} className="rounded-full object-contain" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Ruhi M.K</p>
                    <p className="text-xs text-gray-500">India</p>
                  </div>
                </div>
              </div>

              {/* Right Column Wrapper so Card 2 + 3 stack */}
              <div className="flex flex-col gap-6">

                {/* CARD 2 */}
                <div className="bg-gray-200 shadow relative rounded-2xl border border-gray-300 p-6 ">
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                    <MoreHorizontal size={24} strokeWidth={2.5} />
                  </button>
                  <div className="bg-green-100 inline-flex p-3 rounded-full mb-4">
                    <Quote
                      className="text-green-600 rotate-180"
                      size={26}
                      strokeWidth={3}
                    />
                  </div>
                  <p className="text-gray-600 mt-3">
                    Knowing I can connect with a compassionate listener 24/7 is a massive relief.
                    I didn’t feel alone anymore.
                  </p>

                  <div className="flex items-center gap-3 mt-5 ">
                    <Image src="/images/Rectangle 42002.png" alt="user" width={36} height={36} className="rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Aliz</p>
                      <p className="text-xs text-gray-500">Netherlands</p>
                    </div>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-gray-200 shadow relative rounded-2xl border border-gray-300 p-6">
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                    <MoreHorizontal size={24} strokeWidth={2.5} />
                  </button>
                  <div className="bg-green-100 inline-flex p-3 rounded-full mb-4">
                    <Quote
                      className="text-green-600 rotate-180"
                      size={26}
                      strokeWidth={3}
                    />
                  </div>
                  <p className="text-gray-600 mt-3">
                    The groups are incredible. I found people who truly get it in a supportive,
                    judgment-free community.
                  </p>

                  <div className="flex items-center gap-3 mt-5">
                    <Image src="/images/Rectangle 42004.png" alt="user" width={36} height={36} className="rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Hezz</p>
                      <p className="text-xs text-gray-500">USA</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


      </main>

      {/* 2. Footer Import */}
      <Footer />
    </div>
  );
}