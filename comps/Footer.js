import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="flex items-center justify-center flex-col p-4 bg-white border w-full bottom-0 left-0 md:px-6 md:py-8 dark:bg-white-900 shadow-inner"
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <Image
            alt="logo"
            src={logo}
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {" "}
        <a href="/" className="hover:underline">
          GenerDate™
        </a>
         . Plan your dates easier.
      </span>
    </footer>
  );
};

export default Footer;
