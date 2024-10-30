"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import user from "../../../public/user.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdHome } from "react-icons/md";
import { SiInformatica } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";

export default function NavBar() {
  const [top, setTop] = useState(false);
  const [index, setIndex] = useState(0);
  const [expand, setExpand] = useState(true);

  const currentPath = usePathname();

  const handleIndex = () => {
    const path = currentPath;
    if (path === "/") {
      setIndex(0);
    } else if (path === "/about") {
      setIndex(1);
    } else if (path === "/projects") {
      setIndex(2);
    } else if (path === "/contact") {
      setIndex(3);
    }
  };

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setTop(false);
    } else {
      setTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleIndex();
  }, [currentPath]);

  return (
    <div
      className={`flex fixed left-0 right-0 flex-row justify-between transition-all duration-0.5 ease-in-out font-Caveat items-center mx-auto mt-8 p-4 rounded-full ${
        top || !expand
          ? "bg-black/25 backdrop-blur-md shadow-xl"
          : "bg-transparent backdrop-blur-0 shadow-none"
      } w-[80%]`}
    >
      <div className="flex flex-row justify-between items-center gap-2">
        <Link href="/">
          <div className="rounded-full aspect-square overflow-hidden w-[1.8rem] ring-2 ring-violet-600 ">
            <Image src={user} alt="logo" className="object-cover" />
          </div>
        </Link>
        <h3 className="text-2xl hidden lg:flex font-bold">Ribhu Gautam</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-row justify-between gap-8 items-center">
          <li
            className={`font-bold text-xl active:text-violet-600 transition-all duration-500 ease-in-out  md:text-2xl ${
              index === 0 ? "underline decoration-violet-600" : ""
            } underline-offset-4`}
          >
            <Link href="/" className="hover:text-violet-600 transition-all duration-200 ease-linear " >Home</Link>
          </li>
          <li
            className={`font-bold text-xl active:text-violet-600 transition-all duration-500 ease-in-out  md:text-2xl ${
              index === 1 ? "underline decoration-violet-600 " : ""
            } underline-offset-4`}
          >
            <Link href={"/about"} className="hover:text-violet-600 transition-all duration-200 ease-linear " >About</Link>
          </li>
          <li
            className={`font-bold text-xl active:text-violet-600 transition-all duration-500 ease-in-out  md:text-2xl ${
              index === 2 ? "underline decoration-violet-600 " : ""
            } underline-offset-4`}
          >
            <Link href="/projects" className="hover:text-violet-600 transition-all duration-200 ease-linear " >Projects</Link>
          </li>
          <li
            className={`font-bold text-xl active:text-violet-600 transition-all duration-500 ease-in-out  md:text-2xl ${
              index === 3 ? "underline decoration-violet-600 " : ""
            } underline-offset-4`}
          >
            <Link href="/contact" className="hover:text-violet-600 transition-all duration-200 ease-linear " >Contact</Link>
          </li>
        </ul>
        {/* Mobile Nav */}
        <ul className="flex md:hidden flex-row justify-between gap-8 items-center">
          <li>
            <Link href="/">
              <MdHome
                className={`text-2xl active:text-violet-600 transition-all duration-500 ease-in-out ${
                  index === 0 ? "" : "text-black/50"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <SiInformatica
                className={` text-2xl active:text-violet-600 transition-all duration-500 ease-in-out  ${
                  index === 1 ? "" : "text-black/50"
                } `}
              />
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <GrProjects
                className={`text-xl active:text-violet-600 transition-all duration-500 ease-in-out  ${
                  index === 2 ? "" : "text-black/50"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <IoMdMail
                className={`text-2xl active:text-violet-600 transition-all duration-500 ease-in-out  ${
                  index === 3 ? "" : "text-black/50"
                }`}
              />
            </Link>
          </li>
        </ul>

        {/* <div
          className={`w-full bg-black/50 h-[2px] flex md:hidden ${
            expand ? "invisible hidden" : "visible flex"
          } `}
        /> */}
        {/* Social Icons */}
        <div
          className={`flex-row justify-between ${
            expand ? "invisible hidden" : "visible flex"
          } transition-all duration-500 ease-in-out items-center gap-4`}
        >
          <Link
            href="https://www.linkedin.com/in/ribhu-gautam-9b5b6b1b7/ "
            target="_blank"
          >
            <FaLinkedin className="text-2xl active:text-violet-600 " />
          </Link>
          <Link href="https://www.instagram.com/ribhugautam/" target="_blank">
            <FaInstagram className="text-2xl active:text-violet-600 " />
          </Link>
        </div>

        <div
          className={`hidden md:flex flex-row justify-between transition-all duration-500 ease-in-out items-center gap-4`}
        >
          <Link
            href="https://www.linkedin.com/in/ribhu-gautam-9b5b6b1b7/ "
            target="_blank"
          >
            <FaLinkedin className="text-2xl hover:text-violet-600 transition-all duration-200 ease-linear " />
          </Link>
          <Link href="https://www.instagram.com/ribhugautam/" target="_blank">
            <FaInstagram className="text-2xl hover:text-violet-600 transition-all duration-200 ease-linear" />
          </Link>
        </div>
      </div>
      <div
        onClick={() => setExpand(!expand)}
        className={`md:hidden cursor-pointer ml-2 flex flex-col gap-1 transition-all duration-500 ease-in-out ${
          expand ? "rotate-0" : "rotate-90"
        }`}
      >
        <div
          className={`bg-black ${!expand ? "bg-violet-600" : ""} aspect-square w-1 rounded-full`}
        />
        <div
          className={`bg-black ${!expand ? "bg-violet-600" : ""} aspect-square w-1 rounded-full`}
        />
        <div
          className={`bg-black ${!expand ? "bg-violet-600" : ""} aspect-square w-1 rounded-full`}
        />
      </div>
    </div>
  );
}
