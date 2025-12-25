import Image from "next/image";

import Header from "../../../components/ui/NavBar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const switzer = localFont({
  src: "../../../../public/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
});

export default function AboutPage() {
  return (
    <div
      className={`${switzer.className} min-h-screen bg-white font-sans text-gray-800 pt-24`}
    >
      {/* --- Navbar --- */}
      <Header></Header>

      <main className="max-w-6xl mx-auto py-12">
        {/* --- Hero Section --- */}
        <div className="text-center mb-12 md:mb-24 px-4">
          <div className="flex justify-center mb-4">
            <div className="relative inline-block px-2  py-0 mb-8 lg:mb-0">
              {/* Top-left corner crosshair */}
              <div className="absolute top-0 left-0">
                <div className="absolute top-[-5px] left-0 w-[1.5px] h-[20px] bg-black"></div>
                <div className="absolute top-0 left-[-5px] w-[20px] h-[1.5px] bg-black"></div>
              </div>
              {/* Bottom-right corner crosshair */}
              <div className="absolute bottom-0 right-0">
                <div className="absolute bottom-[-5px] right-0 w-[1.5px] h-[20px] bg-black"></div>
                <div className="absolute bottom-0 right-[-5px] w-[20px] h-[1.5px] bg-black"></div>
              </div>
              <span className="text-lg md:text-xl font-medium">About Ous</span>
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-medium mb-1 lg:mb-4 text-gray-900">
            Because no one deserves to feel alone in their pain.
          </h1>
          <p className="text-gray-900 max-w-2xl mx-auto text-sm md:text-lg px-4 md:px-0">
            Heartivy was created to make emotional support safe, gentle, and
            human again. A place where healing begins with understanding, and
            connection grows through compassion.
          </p>
        </div>

        {/* --- Hero Grid Images --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 h-auto md:h-[650px] px-4 md:px-20">
          {/* Left Large Image */}
          <div className="relative w-full aspect-3/4 sm:h-64 md:h-full rounded-2xl overflow-hidden">
            <Image
              src="/images/Rectangle 42030.png"
              alt="Portrait of a man"
              fill
              className="object-cover"
            />
          </div>
          {/* Right Column Stacked Images */}
          <div className="flex flex-col gap-4 h-auto md:h-full">
            <div className="relative w-full aspect-2620/1604 sm:h-1/2 rounded-2xl overflow-hidden">
              <Image
                src="/images/Rectangle 42031.png"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-2440/1500 sm:h-1/2 rounded-2xl overflow-hidden">
              <Image
                src="/images/Rectangle 42032.png"
                alt="People working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm md:text-[20px] font-semibold text-center mb-12 md:mb-20 xl:mb-70">
          Trusted by many
        </p>

        {/* --- Our Story Section --- */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-12 xl:mb-24 px-4">
          <div className="w-full md:w-1/2 relative h-auto aspect-2440/1500  md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/Rectangle 42033.png"
              alt="Our story team"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl text-center md:text-left font-semibold mb-4 text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-900 text-base md:text-xl text-center md:text-left font-light mb-0 md:mb-4">
              Heartivy began with a simple truth: in a world more connected than
              ever, loneliness and emotional pain often go unspoken. We saw
              people struggling in silence, carrying burdens they felt they had
              to bear alone.
            </p>
            <p className="text-gray-900 text-base md:text-xl text-center md:text-left font-light">
              Our founders experienced firsthand the isolation that comes with
              mental health challenges. They understood that sometimes, what we
              need most isn't clinical intervention—it's human connection,
              empathy, and the reassurance that we're not alone.
            </p>
          </div>
        </div>

        <div className="sm:flex justify-center items-center mb-12 md:mb-20 xl:mb-52 hidden ">
          <span className="bg-gray-400 w-32 md:w-45 h-1.5 rounded-full opacity-50"></span>
        </div>

        {/* --- What We Do (Features) --- */}
        <div className="mb-12 md:mb-24 px-4">
          <div className="text-center mb-8 md:mb-22">
            <h2 className="text-xl text-gray-800 md:text-2xl">What We Do</h2>
            <p className="text-neutral-700  text-base md:text-xl font-light mt-2">
              We provide tools and spaces designed to support your emotional
              well-being, wherever you are in your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 sm:gap-6">
            <div className="w-[75%] sm:w-full justify-self-start">
              <FeatureCard
                img="/icons/Vector (5).png"
                title="Safe Spaces"
                desc="A place where you can express freely — anonymously or openly — without judgment."
              />
            </div>
            <div className="w-[75%] sm:w-full justify-self-end">
              <FeatureCard
                img="/icons/Vector (4).png"
                title="Guided Journaling"
                desc="Daily prompts that help you reflect, release stress, and understand your emotions better."
              />
            </div>
            <div className="w-[75%] sm:w-full justify-self-start">
              <FeatureCard
                img="/icons/Vector (3).png"
                title="Mood Check-Ins"
                desc="Quick check-ins to track how you're feeling and see your emotional patterns over time."
              />
            </div>
            <div className="w-[75%] sm:w-full justify-self-end">
              <FeatureCard
                img="/icons/Vector (2).png"
                title="Calming Tools"
                desc="Breathing exercises, grounding techniques, and micro-activities to help you feel better."
              />
            </div>
            <div className="w-[75%] sm:w-full justify-self-start">
              <FeatureCard
                img="/icons/Vector (1).png"
                title="Community Stories"
                desc="Real stories from people who've walked similar paths — reminders that you're not alone."
              />
            </div>
            <div className="w-[75%] sm:w-full justify-self-end">
              <FeatureCard
                img="/icons/Vector.png"
                title="Resource Library"
                desc="Curated articles, mental-health insights, and self-care guides for everyday support."
              />
            </div>
          </div>
          <p className="text-gray-900 text-center text-sm md:text-md font-light m-6 md:m-10 hidden md:block">
            "Healing isn't linear — but it's real."
          </p>
        </div>

        {/* --- Our Mission --- */}
        <div className="text-center my-12 md:my-24 px-4 md:px-43">
          <h2 className="text-xl font-medium mb-4 md:text-2xl">Our Mission</h2>
          <p className="text-neutral-700  text-base md:text-xl mb-8 font-light">
            To create a world where emotional support is accessible to everyone,
            where vulnerability is met with compassion, and where no one has to
            navigate their mental health journey alone. We believe in the power
            of human connection to heal, uplift, and transform lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Badge
              color="bg-[#FFE1E1] text-neutral-700  font-medium"
              text="Join the Community"
            />
            <Badge
              color="bg-[#D9FFF9] text-neutral-700  font-medium"
              text="Explore Tools"
            />
            <Badge
              color="bg-[#D7D8FF] text-neutral-700  font-medium"
              text="Read Stories"
            />
            <Badge
              color="bg-[#FFFFD5] text-neutral-700  font-medium"
              text="Get Support"
            />
          </div>
        </div>

        <div className="text-center mt-20 md:mt-24 lg:mt-56 px-4 md:px-43">
          <h2 className="text-xl font-medium mb-4 md:text-2xl">
            The Hearts Behind Heartivy
          </h2>
          <p className="text-neutral-700  text-base md:text-xl font-light mb-8">
            We're a team of empaths, listeners, and advocates who believe in the
            healing power of connection.
          </p>
        </div>

        {/* --- Team Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mb-20 md:mb-48 mt-12 md:mt-22 px-4">
          <TeamMember img="/images/Rectangle 42030.png" />
          <TeamMember img="/images/Rectangle 42046.png" />
          <TeamMember img="/images/Rectangle 42047.png" />
        </div>

        <div className="text-center mt-20 md:mt-24 lg:mt-56 px-4 md:px-43">
          <h2 className="text-xl font-medium mb-4 md:text-2xl">Stories of Hope</h2>
          <p className="text-neutral-700 text-base md:text-xl font-light mb-8">
            Real voices from our community sharing their experiences of healing
            and connection
          </p>
        </div>
      </main>

      {/* --- Stories Section --- */}
      <section className="mt-8 md:mt-16 px-4 md:px-6 lg:mb-40 xl:mb-70 mb-20">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 lg:gap-x-45 md:gap-y-20 px-2 xl:px-30">
            <div className="w-[85%] md:w-full justify-self-start">
              <blockquote className="bg-[#F5F5F7] rounded-[2.5rem] px-6 md:px-4 lg:px-12 py-4 lg:py-10 w-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100/50">
                <p className="text-base sm:text-base lg:text-xl font-medium leading-relaxed text-neutral-700  text-center">
                  "Heartivy helped me open up for the first time. I never
                  thought I could share my feelings so freely, but the community
                  here made me feel safe and understood."
                </p>
              </blockquote>
            </div>

            <div className="w-[85%] md:w-full justify-self-end">
              <blockquote className="bg-[#F5F5F7] rounded-[2.5rem] px-6 md:px-4 lg:px-12 py-4 lg:py-10 w-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100/50">
                <p className="text-base sm:text-base lg:text-xl font-medium leading-relaxed text-neutral-700  text-center">
                  "It's not therapy — it's comfort from someone who just
                  understands. Sometimes that's exactly what you need to get
                  through a tough day."
                </p>
              </blockquote>
            </div>

            <div className="w-[85%] md:w-full justify-self-start">
              <blockquote className="bg-[#F5F5F7] rounded-[2.5rem] px-6 md:px-4 lg:px-12 py-4 lg:py-10 w-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100/50">
                <p className="text-base sm:text-base lg:text-xl font-medium leading-relaxed text-neutral-700  text-center">
                  "The anonymous chats gave me courage to speak about things I'd
                  been holding in for years. I finally feel like I'm not
                  carrying this weight alone."
                </p>
              </blockquote>
            </div>

            <div className="w-[85%] md:w-full justify-self-end">
              <blockquote className="bg-[#F5F5F7] rounded-[2.5rem] px-6 md:px-4 lg:px-12 py-4 lg:py-10 w-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-gray-100/50">
                <p className="text-base sm:text-base lg:text-xl font-medium leading-relaxed text-neutral-700  text-center">
                  "Heartivy reminded me that vulnerability is not weakness. It's
                  the first step toward healing, and I'm grateful for this
                  community every day."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <Footer></Footer>
    </div>
  );
}

// --- Helper Components for Clean Code ---

type FeatureCardProps = {
  img: string;
  title: string;
  desc: string;
};

function FeatureCard({ img, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-[#EDEDED] rounded-3xl pt-8 md:pt-10 px-4 md:px-8 pb-8 flex flex-col items-center text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] transition hover:shadow-[0_15px_45px_-12px_rgba(0,0,0,0.25)] border border-gray-100/50">
      <div className="mb-4 text-neutral-700 ">
        <Image
          src={img}
          alt="Feature icon"
          width={50}
          height={50}
          className="md:w-[60px] md:h-[60px] object-contain"
        />
      </div>
      <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-500 text-[13px] md:text-[14px] font-light leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

type BadgeProps = {
  color: string;
  text: string;
};

function Badge({ color, text }: BadgeProps) {
  return (
    <span
      className={`${color} px-4 md:px-6 py-2 rounded-full text-[12px] md:text-[14px] font-bold shadow-[inset_0_0_18px_rgba(255,255,255,0.4),inset_0_0_6px_rgba(0,0,0,0.1)]`}
    >
      {text}
    </span>
  );
}

type TeamMemberProps = {
  img: string;
};

function TeamMember({ img }: TeamMemberProps) {
  return (
    <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-sm">
      <Image src={img} alt="Team member" fill className="object-cover" />
    </div>
  );
}
