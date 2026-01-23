"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import dynamic from "next/dynamic";

const ShoppingCartIcon = dynamic(() => import("./ShoppingCartIcon"), {
  ssr: false,
});

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 px-4 md:px-8 lg:px-12 py-3">
      {/* Left */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Buyza"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          Buyza.
        </p>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-4 md:gap-6">
        <SearchBar />

        <Link href="/" aria-label="Home">
          <Home className="w-4 h-4 text-gray-600 hover:text-black transition" />
        </Link>

        <Bell className="w-4 h-4 text-gray-600 hover:text-black transition" />

        <ShoppingCartIcon />

        <Link
          href="/login"
          className="text-sm font-medium hover:text-black transition"
        >
          Sign in
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
