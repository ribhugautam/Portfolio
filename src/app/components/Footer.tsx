import React from "react";
import Image from "next/image";
import user from "../../../public/user.jpg";
import Link from "next/link";

function Footer() {
  return (
    <div className="border-t-2 py-8 pattern font-Caveat w-full border-black" >    
      <div className="flex flex-col sm:flex-row justify-between w-11/12 max-w-[80%] mx-auto items-center gap-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <Link href="/">
            <div className="rounded-full aspect-square overflow-hidden w-[1.8rem] ring-violet-600 ring-2 ">
              <Image src={user} alt="logo" className="object-cover" />
            </div>
          </Link>
          <h3 className="text-2xl font-bold">Ribhu Gautam</h3>
        </div>

        <ul className="flex flex-col justify-center items-center sm:flex-row gap-4">
          <li>
            <Link target="_blank" href="https://linkedin.com/in/ribhugautam" className="text-2xl font-semibold">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://instagram.com/ribhugautam" className="text-2xl font-semibold">
              Instagram
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/ribhuGautam" className="text-2xl font-semibold">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
