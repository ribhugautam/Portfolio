import React from "react";
import Image from "next/image";
import user from "../../../public/user.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function NavBar() {
  return (
    <div className="flex flex-row justify-between font-Caveat items-center mx-auto mt-8 p-4 rounded-full bg-black/25 backdrop-blur-sm w-[80%]">
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="rounded-full aspect-square w-[1.8rem] ring-2 ">
          <Image src={user} alt="logo" className="rounded-full object-cover" />
        </div>
        <h3 className="text-2xl font-bold">Ribhu Gautam</h3>
      </div>
      <div className="flex flex-row justify-between items-center gap-6">
        <ul className="flex flex-row justify-between gap-8 items-center">
          <li className="font-bold text-2xl underline underline-offset-4">Home</li>
          <li className="font-bold text-2xl">About</li>
          <li className="font-bold text-2xl">Projects</li>
          <li className="font-bold text-2xl">Contact</li>
        </ul>

        <div className="flex flex-row justify-between items-center gap-4">
          <FaLinkedin className="text-2xl" />
          <FaInstagram className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
