import { useState } from "react";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-6 font-montserrat font-regular`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          <Image
            alt="logo"
            src={logo}
            width={80}
            height={80}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-montserrat font-semibold my-4"
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home 111
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/search"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Search 2222
        </Link>
        <Link
          className="text-xl font-medium my-4"
          href="/saved"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Saved Ideas
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 flex filter drop-shadow-md bg-white px-2 py-2 h-20 items-center z-50">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <Link className="text-2xl font-semibold" href="/">
          <Image
            alt="logo"
            src={logo}
            width={80}
            height={80}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink class="font-montserrat font-semibold" to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/saved">Saved Ideas</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
}
