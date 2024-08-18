import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main>
          <div className="text-center pt-8 sm:pb-10 sm:pt-20 bg-white-300">
            <h1 className="text-2xl sm:text-4xl font-bold">Server Status Monitor</h1>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
