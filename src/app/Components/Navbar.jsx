import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-zinc-100 w-full relative">
      <div className="w-full max-w-[1600px] m-auto  px-8 py-4">
        <button className="bg-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-zinc-200 transition-all duration-200 hover:gap-4">
          <FaChevronLeft />
          Continue Shopping
        </button>
        <Link href="/">
          <Image
            className="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2"
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
