import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Server Status Monitor",
  description: "Monitor the status of your servers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <div className="text-center pt-8 sm:pb-10 sm:pt-20 bg-white-300">
            <h1 className="text-3xl sm:text-5xl font-light">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Server Status Monitor
              </span>
            </h1>
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
