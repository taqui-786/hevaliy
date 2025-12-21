import "../styles/globals.css";
// import NavBar from "@/components/ui/NavBar";
// import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Heartivy",
  description: "A gentle space for emotional healing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1A1A1A] flex justify-center ">
        <div className=" w-full  overflow-hidden shadow-2xl">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
