import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

import centerImg from "../../../public/images/supportSectionimg.png"; // replace later
import localFont from "next/font/local";

const nunito = Nunito_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const switzer = localFont({
  src: "../../../public/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
});
export default function SupportSection() {
  return (
    <section className="w-full py-24 px-8 lg:px-20 md:px-8 "
    >
      {/* MAIN HEADER */}
      <div className="text-center mb-16 ">
        <h2
          className={`
            ${nunito.className}
            text-[24px] md:text-[24px]
            font-bold 
          `}
        >
          Find Your Way Back to Feeling Seen.
        </h2>

        <p
          className={`
            ${nunito.className}
            md:text-[12.5px] text-sm  text-gray-600 font-semibold mt-1.5
          `}
        >
          Three ways we support your emotional wellbeing
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 md:gap-6 items-center lg:px-12">
        {/* LEFT COLUMN */}
        <div className="md:flex flex-col gap-12 hidden">
          {/* 1 — Personal Progress Tracking */}
          <div className="flex-row gap-3 items-start">
            <svg
              width="33"
              height="24"
              viewBox="0 0 33 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.868 1.2394C32.7007 0.750938 32.3804 0.362774 31.9773 0.159923C31.779 0.0574901 31.566 0.00315845 31.3505 0H23.1029C22.6654 0 22.2458 0.210612 21.9365 0.585504C21.6271 0.960396 21.4533 1.46886 21.4533 1.99903C21.4533 2.52921 21.6271 3.03767 21.9365 3.41256C22.2458 3.78746 22.6654 3.99807 23.1029 3.99807H27.3751L18.1543 15.1727L12.7274 8.57586C12.574 8.38849 12.3916 8.23977 12.1906 8.13828C11.9896 8.0368 11.774 7.98455 11.5562 7.98455C11.3385 7.98455 11.1229 8.0368 10.9218 8.13828C10.7208 8.23977 10.5384 8.38849 10.3851 8.57586L0.487926 20.5701C0.333319 20.7559 0.210604 20.977 0.12686 21.2206C0.0431156 21.4642 0 21.7255 0 21.9894C0 22.2533 0.0431156 22.5146 0.12686 22.7582C0.210604 23.0018 0.333319 23.2229 0.487926 23.4087C0.64127 23.5961 0.823709 23.7448 1.02472 23.8463C1.22573 23.9478 1.44133 24 1.65909 24C1.87684 24 2.09244 23.9478 2.29345 23.8463C2.49446 23.7448 2.6769 23.5961 2.83025 23.4087L11.5562 12.8138L16.9831 19.4106C17.1365 19.598 17.3189 19.7467 17.5199 19.8482C17.7209 19.9497 17.9365 20.0019 18.1543 20.0019C18.3721 20.0019 18.5877 19.9497 18.7887 19.8482C18.9897 19.7467 19.1721 19.598 19.3255 19.4106L29.701 6.81671V11.9942C29.701 12.5244 29.8747 13.0328 30.1841 13.4077C30.4934 13.7826 30.913 13.9932 31.3505 13.9932C31.788 13.9932 32.2075 13.7826 32.5169 13.4077C32.8262 13.0328 33 12.5244 33 11.9942V1.99903C32.9974 1.73781 32.9526 1.47973 32.868 1.2394Z"
                fill="black"
              />
            </svg>
            <div>
              <h3
                className={`
                  ${nunito.className}
                  lg:text-[23px] md:text-[19px] font-bold  
                `}
              >
                Personal Progress Tracking
              </h3>

              <p
                className={`
                  ${nunito.className}
                  text-[16px] lg:font-bold  text-gray-600  tracking-tighter leading-4 mt-1
                `}
              >
                Monitor your emotional well-being with private journaling and
                mood tracking tools. Visualize your journey toward resilience
                and growth.
              </p>
            </div>
          </div>

          {/* 2 — Guided Meditation & Audio */}
          <div className="flex-row gap-3 items-start">
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.896 9.66486L9.32931 0.738469C8.37875 0.252125 7.29985 -0.00265051 6.2022 2.0792e-05C5.10454 0.00269209 4.02724 0.262715 3.07971 0.753678C2.13218 1.24464 1.34818 1.94905 0.807341 2.79537C0.266502 3.64168 -0.0119075 4.59975 0.000390453 5.57225V23.4895C0.000390453 24.951 0.655634 26.3526 1.82197 27.386C2.98832 28.4194 4.57021 29 6.21967 29C7.31157 28.9984 8.38385 28.7428 9.32931 28.2588L26.896 19.3324C27.84 18.8484 28.6236 18.1529 29.1684 17.3158C29.7132 16.4787 30 15.5294 30 14.5631C30 13.5968 29.7132 12.6475 29.1684 11.8104C28.6236 10.9733 27.84 10.2778 26.896 9.79376V9.66486ZM25.0775 16.416L7.51081 25.4713C7.11708 25.669 6.67224 25.773 6.21967 25.773C5.7671 25.773 5.32226 25.669 4.92853 25.4713C4.53591 25.2705 4.20989 24.9816 3.98324 24.6337C3.7566 24.2858 3.63732 23.8912 3.6374 23.4895V5.5078C3.63732 5.10611 3.7566 4.71148 3.98324 4.36358C4.20989 4.01569 4.53591 3.7268 4.92853 3.52595C5.32389 3.33124 5.7674 3.22608 6.21967 3.21981C6.67163 3.22803 7.11462 3.33307 7.51081 3.52595L25.0775 12.5168C25.4703 12.7176 25.7965 13.0064 26.0233 13.3543C26.2501 13.7022 26.3695 14.0969 26.3695 14.4986C26.3695 14.9004 26.2501 15.2951 26.0233 15.643C25.7965 15.9909 25.4703 16.2797 25.0775 16.4805V16.416Z"
                fill="black"
              />
            </svg>

            <div>
              <h3
                className={`
                  ${nunito.className}
                 lg:text-[23px] md:text-[19px] font-bold 
                `}
              >
                Guided Meditation & Audio
              </h3>

              <p
                className={`
                  ${nunito.className}
              text-[16px]  text-gray-600 lg:font-bold tracking-tighter leading-4 mt-1
                `}
              >
                Access a curated library of audio guides for mindfulness, stress
                relief, and better sleep — available anytime, anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
<div className="flex justify-center">
  
  {/* IMAGE BOX (MAIN CONTAINER) */}
  <div className="relative w-[300px] h-[500px] lg:w-[400px] lg:h-[540px] md:w-[450px] rounded-2xl overflow-hidden shadow-md">
    
    {/* IMAGE */}
    <Image
      src={centerImg}
      alt="center"
      width={467}
      height={683}
      className="object-cover w-full h-full"
  />

    {/* 🟢 ALWAYS VISIBLE TOP TEXT */}
<p className={`${switzer.className} absolute right-8 top-4 text-white -tracking-[.9px] font-bold leading-none flex items-end`}>
  <span className="text-[40px]">4K <sup className="font-light -tracking-[160px]">+</sup></span>
  <span className="text-[14px] text-white/70 font-medium">Users</span>
</p>


{/* 🔥 MOBILE ONLY FLOATING FEATURE TAGS */}
<div className="absolute inset-0 md:hidden pointer-events-none flex flex-col gap-2">

  <p className="absolute left-3 top-[67%] -translate-y-1/2 text-xs text-white font-semibold px-1.5 py-2 rounded-full 
    backdrop-blur-lg bg-white/15 border-1 border-white/20  text-center whitespace-nowrap inline-block">
    Personal Progress Tracking
  </p>

  <p className="absolute right-3 top-[72%] text-xs text-white font-semibold px-1.5 py-2 rounded-full 
    backdrop-blur-lg bg-white/15 border border-white/20 text-center whitespace-nowrap inline-block">
    Guided Meditation & Audio
  </p>

  <p className="absolute left-3 top-[80%] text-xs text-white font-semibold px-4 py-2 rounded-full 
    backdrop-blur-lg bg-white/15 border border-white/20 text-center whitespace-nowrap inline-block">
    Community Group Chat
  </p>

  <p className="absolute right-3 top-[88%] text-xs text-white font-semibold px-5 py-2 rounded-full 
    backdrop-blur-lg bg-white/20 border border-white/20 text-center whitespace-nowrap inline-block">
    Trained Peer Listeners
  </p>

</div>


  </div>
</div>


        {/* RIGHT COLUMN */}
        <div className="md:flex flex-col gap-12 hidden">
          {/* 3 — Community Group Chat */}
          <div className="flex flex-col gap-3 items-end text-right justify-end ">
            <svg
              width="31"
              height="25"
              viewBox="0 0 31 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9444 12.8235C16.6973 12.1443 17.3011 11.3042 17.715 10.3603C18.1289 9.41641 18.3431 8.39075 18.3431 7.35294C18.3431 5.40282 17.5998 3.53257 16.2767 2.15363C14.9536 0.774683 13.1592 2.63105e-07 11.2881 2.63105e-07C9.41694 2.63105e-07 7.62247 0.774683 6.29939 2.15363C4.97632 3.53257 4.23302 5.40282 4.23302 7.35294C4.23301 8.39075 4.44721 9.41641 4.8611 10.3603C5.27498 11.3042 5.87885 12.1443 6.63173 12.8235C4.65652 13.7557 2.9807 15.2611 1.80465 17.1596C0.628597 19.0582 0.0020768 21.2696 0 23.5294C0 23.9194 0.148659 24.2935 0.413274 24.5693C0.677889 24.8451 1.03678 25 1.41101 25C1.78523 25 2.14412 24.8451 2.40874 24.5693C2.67335 24.2935 2.82201 23.9194 2.82201 23.5294C2.82201 21.1893 3.71397 18.945 5.30166 17.2902C6.88935 15.6355 9.04272 14.7059 11.2881 14.7059C13.5334 14.7059 15.6868 15.6355 17.2744 17.2902C18.8621 18.945 19.7541 21.1893 19.7541 23.5294C19.7541 23.9194 19.9028 24.2935 20.1674 24.5693C20.432 24.8451 20.7909 25 21.1651 25C21.5393 25 21.8982 24.8451 22.1628 24.5693C22.4275 24.2935 22.5761 23.9194 22.5761 23.5294C22.574 21.2696 21.9475 19.0582 20.7715 17.1596C19.5954 15.2611 17.9196 13.7557 15.9444 12.8235ZM11.2881 11.7647C10.4508 11.7647 9.63243 11.506 8.93631 11.0212C8.2402 10.5364 7.69764 9.8474 7.37725 9.04125C7.05687 8.23511 6.97304 7.34805 7.13637 6.49225C7.2997 5.63645 7.70286 4.85035 8.29486 4.23335C8.88686 3.61636 9.64111 3.19618 10.4622 3.02595C11.2834 2.85572 12.1345 2.94309 12.908 3.277C13.6814 3.61092 14.3426 4.17639 14.8077 4.9019C15.2728 5.62741 15.5211 6.48038 15.5211 7.35294C15.5211 8.52301 15.0751 9.64516 14.2813 10.4725C13.4874 11.2999 12.4107 11.7647 11.2881 11.7647ZM25.0313 12.2353C25.9343 11.1755 26.5241 9.86626 26.7298 8.4652C26.9355 7.06415 26.7484 5.63099 26.1908 4.33824C25.6332 3.04548 24.729 1.94823 23.5871 1.17856C22.4451 0.408897 21.114 -0.000378824 19.7541 2.63105e-07C19.3799 2.63105e-07 19.021 0.154937 18.7564 0.430726C18.4917 0.706514 18.3431 1.08056 18.3431 1.47059C18.3431 1.86061 18.4917 2.23466 18.7564 2.51045C19.021 2.78624 19.3799 2.94118 19.7541 2.94118C20.8768 2.94118 21.9534 3.40599 22.7473 4.23335C23.5411 5.06072 23.9871 6.18287 23.9871 7.35294C23.9851 8.12535 23.7886 8.88368 23.4172 9.55209C23.0457 10.2205 22.5124 10.7756 21.8706 11.1618C21.6614 11.2875 21.4867 11.4672 21.3632 11.6834C21.2396 11.8997 21.1714 12.1454 21.1651 12.3971C21.1592 12.6467 21.2144 12.8938 21.3255 13.1151C21.4366 13.3364 21.5999 13.5245 21.8001 13.6618L22.3503 14.0441L22.5338 14.1471C24.2346 14.9878 25.6695 16.3176 26.6694 17.9799C27.6693 19.6421 28.1927 21.5676 28.1778 23.5294C28.1778 23.9194 28.3265 24.2935 28.5911 24.5693C28.8557 24.8451 29.2146 25 29.5888 25C29.963 25 30.3219 24.8451 30.5865 24.5693C30.8512 24.2935 30.9998 23.9194 30.9998 23.5294C31.0114 21.2727 30.469 19.0504 29.4244 17.0736C28.3797 15.0969 26.8675 13.4313 25.0313 12.2353Z"
                fill="black"
              />
            </svg>{" "}
            <div>
              <h3
                className={`
                  ${nunito.className}
                  lg:text-[23px] md:text-[19px] font-bold  
                `}
              >
                Community Group Chat
              </h3>

              <p
                className={`
                  ${nunito.className}
              text-[16px]  text-gray-600 lg:font-bold tracking-tighter leading-4 mt-1
                `}
              >
                Find true connection in our specialized, moderated support
                rooms. Share experiences with others facing similar challenges.
              </p>
            </div>
          </div>

          {/* 4 — Trained Peer Listeners */}
          <div className="flex flex-col gap-3 items-end text-right justify-end ">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0093 18.6091L17.9657 14L27.0093 9.39087C27.4645 9.15868 27.7965 8.77643 27.9325 8.32818C28.0685 7.87992 27.9972 7.40235 27.7344 7.00045C27.4716 6.59855 27.0388 6.30522 26.531 6.18496C26.0233 6.0647 25.4822 6.12735 25.0268 6.35913L15.9825 10.9686V1.75C15.9825 1.28587 15.7736 0.840752 15.4019 0.512563C15.0301 0.184375 14.5258 0 14 0C13.4742 0 12.9699 0.184375 12.5981 0.512563C12.2264 0.840752 12.0175 1.28587 12.0175 1.75V10.9686L2.97322 6.35908C2.51779 6.1273 1.97673 6.06465 1.46898 6.18491C0.961235 6.30517 0.528374 6.5985 0.265564 7.0004C0.0027528 7.40229 -0.0684949 7.87987 0.0674847 8.32812C0.203464 8.77638 0.535541 9.15862 0.990705 9.39082L10.0343 14L0.990705 18.6091C0.535541 18.8413 0.203464 19.2236 0.0674847 19.6718C-0.0684949 20.1201 0.0027528 20.5977 0.265564 20.9996C0.528374 21.4015 0.961235 21.6948 1.46898 21.815C1.97673 21.9353 2.51779 21.8727 2.97322 21.6409L12.0175 17.0314V26.25C12.0175 26.7141 12.2264 27.1593 12.5981 27.4874C12.9699 27.8156 13.4742 28 14 28C14.5258 28 15.0301 27.8156 15.4019 27.4874C15.7736 27.1593 15.9825 26.7141 15.9825 26.25V17.0314L25.0268 21.6409C25.4822 21.8727 26.0233 21.9353 26.531 21.8151C27.0388 21.6948 27.4716 21.4015 27.7344 20.9996C27.9972 20.5977 28.0685 20.1201 27.9325 19.6719C27.7965 19.2236 27.4645 18.8414 27.0093 18.6092V18.6091Z"
                fill="black"
              />
            </svg>

            <div>
              <h3
                className={`
                  ${nunito.className}
                  lg:text-[23px] md:text-[19px] font-bold
                `}
              >
                Trained Peer Listeners
              </h3>

              <p
                className={`
                  ${nunito.className}
                text-[16px]  text-gray-600 lg:font-bold tracking-tighter leading-4 mt-1
                `}
              >
                Connect one-on-one with a compassionate listener dedicated to
                supporting without judgment. Instant, real-time emotional
                relief.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
