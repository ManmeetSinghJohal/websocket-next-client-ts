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
        <div className="mx-auto max-w-[1440px] pb-12">
          <div className="text-center pt-8 pb-10">
            <h1 className="text-2xl sm:text-4xl">Server Status Monitor</h1>
          </div>
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
