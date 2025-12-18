import { Yellowtail, Nunito_Sans } from "next/font/google";

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

const nunito700 = Nunito_Sans({
  weight: "700",
  subsets: ["latin"],
});

const nunito = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function WelcomeSection() {
  return (
    <section
      className="
        w-full
        bg-cover bg-center
        bg-[url('/images/pattern-bg.png')]
        px-4 sm:px-6 md:px-8 lg:px-24
        py-8  lg:py-16 xl:py-36
      "
    >
      {/* Welcome Text - Full Width Stack on Large/Mid */}
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 w-full">
        <p
          className={`
            ${nunito700.className}
            text-xl sm:text-sm md:text-base
            font-extrabold
            tracking-widest
            text-black
            w-full
            text-center md:text-left
            mb-8 sm:mb-10 md:mb-12 lg:mb-16
          `}
        >
          WELCOME
        </p>

        {/* Heading - Staggered on Large/Mid, Centered on Small */}
        <div className="flex flex-col lg:items-start ml-0 lg:ml-35  ">
          {/* First Line - Always Left */}
          <h1
            className={`
              ${yellowtail.className}
              font-normal
              text-5xl lg:text-6xl 2xl:text-8xl
              leading-tight
              text-black
              tracking-wider
              text-left
              mb-2 sm:mb-3 md:mb-4 lg:mb-3
            `}
          >
            Where Your Heart
          </h1>

          {/* Second Line - Offset on Large/Mid, Centered on Small */}
          <h2
            className={`
              ${yellowtail.className}
              font-normal
          text-5xl lg:text-6xl 2xl:text-8xl
              leading-tight
              text-black
              tracking-wider
           
              text-center sm:text-right md:text-left
              sm:ml-0 md:ml-36 lg:ml-48 xl:ml-64
            `}
          >
            Can Finally Rest
          </h2>
        </div>
      </div>

      {/* Paragraph - Centered on Small, Left on Large/Mid */}
      <div className="flex flex-col md:items-end w-full items-center">
        {" "}
        <p
          className={`
          ${nunito.className}
       text-sm
          lg:text-lg
          text-neutral-600
          leading-relaxed sm:leading-6 md:leading-7
          text-justify
          max-w-full md:max-w-[750px]
          mx-auto md:mx-0
          tracking-wide sm:tracking-wider
         
          
        `}
        >
          Heartivy is more than a platform — it's a pause. A moment between the
          noise and the stillness where you can finally breathe, feel, and heal
          at your own pace. We created Heartivy for those quiet hours when your
          mind feels heavy and your heart needs softness — a space where empathy
          replaces judgment, and care feels human again. Within our calm,
          connected environment, you'll find thoughtful support, honest
          understanding, and gentle reminders that peace is never lost — only
          waiting to be found again.
        </p>
      </div>
    </section>
  );
}
