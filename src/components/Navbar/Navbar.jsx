"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import ThemeSwitch from "../ThemeSwitcher";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { id: 1, title: "About", url: "#about" },
  { id: 2, title: "Projects", url: "#projects" },
  { id: 3, title: "Contact", url: "#contact" },
];

function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    if (pathName != "/") {
      setIsHome(false);
    }
  }, [pathName]);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="fixed mx-auto top-0 left-0 right-0 z-[50] bg-slate-200 dark:bg-[#131313fa] bg-opacity-90 dark:bg-opacity-90"
      style={{ backdropFilter: "saturate(180%) blur(20px)" }}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-2xl text-cyan-200 font-semibold"
        >
          <Image
            src="/image/SHV.png"
            style={{ borderRadius: "10px" }}
            alt=""
            width={100}
            height={100}
          />
        </Link>
        <div>
          {isHome && (
            <ul className="hidden sm:flex">
              <ThemeSwitch />
              {links.map((link) => (
                <li key={link.id} className="p-3">
                  <Link
                    className="text-slate-900 dark:text-cyan-200"
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="text-slate-900 dark:text-cyan-200 md:hidden z-10 flex items-center gap-2"
        >
          {menuOpen ? (
            <div className="p-2">
              <AiOutlineClose size={20} />
            </div>
          ) : (
            <div className="flex items-center">
              <div className="mr-2">
                <ThemeSwitch />
              </div>
              <div className="p-2">
                <AiOutlineMenu size={20} />
              </div>
            </div>
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            menuOpen
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-light bg-slate-200 dark:bg-[#131313] text-center ease-in duration-300"
              : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-slate-200 dark:bg-[#131313] text-center ease-in duration-300 z-50"
          }
        >
          <ul>
            {isHome &&
              links.map((link) => (
                <li key={link.id}>
                  <Link
                    className="p-4 font-semibold text-4xl"
                    href={link.url}
                    onClick={handleNav}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
