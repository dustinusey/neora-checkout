import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreadCrumbs from "./BreadCrumbs";

const Checkout = () => {
  return (
    <div className="min-w-[500px] min-h-[50vh] w-full p-8 lg:w-full">
      <Link href="/">
        <Image
          className="m-auto"
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>
      <BreadCrumbs />
    </div>
  );
};

export default Checkout;
