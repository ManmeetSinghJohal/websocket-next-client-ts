import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center pb-5 sm:pb-10 sm:pt-10 bg-white-300">
      <div className="text-sm sm:text-lg font-light">
        © 2024 Manmeet Johal. All rights reserved.
      </div>
      <div className="space-x-9 flex justify-center mt-2">
        {socialLinks.map((social, index) => (
          <Link
            href={social.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative size-6 lg:size-8">
              <Image src={social.src} alt={social.alt} fill />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
