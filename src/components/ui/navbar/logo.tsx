import React from "react";
import Image from "next/image";
import Link from "next/link";

const WatchListifyLogo = () => {
  return (
    <>
      <Link href="/" className="hidden md:block">
        <Image
          src="/images/logo.png"
          width={40}
          height={40}
          alt="WatchListify Logo"
        />
      </Link>
      <Link href="/" className="block md:hidden">
        <Image
          src="/images/logo.png"
          width={25}
          height={25}
          alt="WatchListify Logo"
        />
      </Link>
    </>
  );
};

export default WatchListifyLogo;
