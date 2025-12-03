import Image from 'next/image';
import { Heart, BookOpen, Activity, Users, ScanFace, Folder } from 'lucide-react';
import Header from '../../../components/Hearder';
import Footer from '@/components/Footer';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 mt-6">
      {/* --- Navbar --- */}
    <Header></Header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* --- Hero Section --- */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
             {/* Small decorative squiggle/logo */}
             <span className="text-2xl">✨</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Because no one deserves to feel alone in their pain.
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Mental health affects how we think, feel, and act. It determines how we handle stress, relate to others, and make choices.
          </p>
        </div>

        {/* --- Hero Grid Images --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 h-[500px]">
          {/* Left Large Image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
              alt="Portrait of a man"
              fill
              className="object-cover"
            />
          </div>
          {/* Right Column Stacked Images */}
          <div className="flex flex-col gap-4 h-full">
            <div className="relative w-full h-1/2 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-1/2 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop" 
                alt="People working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- Our Story Section --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden">
             <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                alt="Our story team"
                fill
                className="object-cover"
              />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 font-serif italic">Our Story</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              We started with a simple idea: that everyone deserves a safe space to grow, heal, and connect. What began as a small community has grown into a global movement.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our commitment to privacy, empathy, and accessibility drives everything we do. We believe that mental health is just as important as physical health, and we are here to bridge the gap.
            </p>
          </div>
        </div>

        {/* --- What We Do (Features) --- */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800">What We Do</h2>
            <p className="text-gray-400 text-xs mt-2">Comprehensive support tailored for your needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FeatureCard icon={<Heart size={24}/>} title="Support" desc="Emotional support whenever you need it most." />
            <FeatureCard icon={<BookOpen size={24}/>} title="Self Learning" desc="Resources to help you understand yourself better." />
            <FeatureCard icon={<Activity size={24}/>} title="Monitoring" desc="Track your progress and daily habits easily." />
            <FeatureCard icon={<Users size={24}/>} title="Community" desc="Connect with people who share your journey." />
            <FeatureCard icon={<ScanFace size={24}/>} title="Privacy Focus" desc="Your data is secure and private with us." />
            <FeatureCard icon={<Folder size={24}/>} title="Resources" desc="A vast library of helpful articles and guides." />
          </div>
        </div>

        {/* --- Our Mission --- */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-500 text-sm mb-8">
            To make mental health support accessible, affordable, and stigma-free for everyone, everywhere. We envision a world where seeking help is seen as a strength.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge color="bg-red-100 text-red-600" text="Accessibility" />
            <Badge color="bg-blue-100 text-blue-600" text="Community" />
            <Badge color="bg-purple-100 text-purple-600" text="Innovation" />
            <Badge color="bg-yellow-100 text-yellow-700" text="Empathy" />
          </div>
        </div>

        {/* --- Team Section --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
           <TeamMember 
             img="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop" 
           />
           <TeamMember 
             img="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" 
           />
           <TeamMember 
             img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
           />
        </div>

      </main>

      {/* --- Footer --- */}
      <Footer></Footer>

    </div>
  );
}

// --- Helper Components for Clean Code ---

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center text-center hover:shadow-md transition">
      <div className="mb-4 text-gray-700">{icon}</div>
      <h3 className="font-bold text-sm mb-2">{title}</h3>
      <p className="text-gray-500 text-xs">{desc}</p>
    </div>
  );
}

type BadgeProps = {
  color: string;
  text: string;
};

function Badge({ color, text }: BadgeProps) {
  return (
    <span className={`${color} px-4 py-1.5 rounded-full text-xs font-semibold`}>
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
             <Image 
                src={img} 
                alt="Team member"
                fill
                className="object-cover"
                
              />
        </div>
    )
}