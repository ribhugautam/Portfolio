"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import user from "../../../public/user.jpg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { SiInformatica } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", icon: <MdHome /> },
  { href: "/about", label: "About", icon: <SiInformatica /> },
  { href: "/projects", label: "Projects", icon: <GrProjects /> },
  { href: "/contact", label: "Contact", icon: <IoMdMail /> },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ribhu-gautam-9b5b6b1b7/",
    icon: <FaLinkedin />,
  },
  { href: "https://www.instagram.com/ribhugautam/", icon: <FaInstagram /> },
];

export default function NavBar() {
  const [top, setTop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expand, setExpand] = useState(true);

  const currentPath = usePathname();

  useEffect(() => {
    const pathIndex = navLinks.findIndex((link) => link.href === currentPath);
    setActiveIndex(pathIndex !== -1 ? pathIndex : 0);
  }, [currentPath]);

  useEffect(() => {
    const handleScroll = () => setTop(window.scrollY >= 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -80, scale: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={`flex fixed z-40 left-0 right-0 p-0 md:p-4 justify-between items-center mx-auto mt-8 ${
        !expand ? "p-4" : "px-8"
      } rounded-full w-[80%] transition-all duration-500 ease-in-out font-Caveat ${
        top || !expand
          ? "bg-black/25 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <Link href="/">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-full overflow-hidden w-[1.8rem] ring-2 ring-violet-600"
        >
          <Image src={user} alt="logo" className="object-cover" />
        </motion.div>
      </Link>

      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link, idx) => (
          <li
            key={link.href}
            className={`font-bold text-xl md:text-2xl ${
              activeIndex === idx ? "underline decoration-violet-600" : ""
            } underline-offset-4`}
          >
            <Link
              href={link.href}
              className="hover:text-violet-600 transition duration-200 ease-linear"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex md:hidden flex-col gap-4 sm:gap-8 justify-center items-center relative">
        <div
          className={`flex justify-center items-center gap-8 sm:gap-16 ${
            expand ? "mt-4 sm:mt-8" : "mt-0"
          } transition-all duration-500 ease-in-out `}
        >
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <Link href={link.href}>
                {React.cloneElement(link.icon, {
                  className: `${
                    activeIndex === idx ? "text-violet-600" : "text-black/50"
                  } ${link.label === "Projects" ? "text-xl" : "text-2xl"}`,
                })}
              </Link>
            </li>
          ))}
        </div>

        <div
          className={`flex justify-center items-center gap-8 sm:gap-16 overflow-hidden transition-all duration-500 ease-in-out ${
            !expand
              ? "opacity-100 scale-100 h-8"
              : "opacity-0 scale-90 h-0 pointer-events-none"
          }`}
        >
          {socialLinks.map((social) => (
            <li key={social.href}>
              <Link href={social.href} target="_blank">
                {React.cloneElement(social.icon, {
                  className: `hover:text-violet-600 transition duration-300 ease-in-out text-2xl`,
                })}
              </Link>
            </li>
          ))}
        </div>
      </ul>

      <div className={`hidden md:flex gap-4`}>
        {socialLinks.map((social) => (
          <Link key={social.href} href={social.href} target="_blank">
            {React.cloneElement(social.icon, {
              className:
                "hover:text-violet-600 transition duration-200 ease-linear text-2xl",
            })}
          </Link>
        ))}
      </div>

      <div
        onClick={() => setExpand(!expand)}
        className={`md:hidden cursor-pointer flex flex-col gap-1 transition-all duration-500 ease-in-out ${
          expand ? "rotate-0" : "rotate-90"
        }`}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full ${
              !expand ? "bg-violet-600" : "bg-black"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
