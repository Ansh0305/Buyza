"use client";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import dynamic from "next/dynamic";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

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
          className="w-8 h-8 md:w-9 md:h-9 object-contain"
          priority
        />
        <span className="hidden md:block text-xl font-bold tracking-wide">
          Buyza<span className="text-orange-500">.</span>
        </span>
      </Link>

      {/* Right */}
      <div className="flex items-center gap-4 md:gap-6">
        <SearchBar />

        <Link href="/" aria-label="Home">
          <Home className="w-4 h-4 text-gray-600 hover:text-black transition" />
        </Link>

        <Bell className="w-4 h-4 text-gray-600 hover:text-black transition" />

        <ShoppingCartIcon />

        <Show when="signed-out">
          <SignInButton />
          {/* <SignUpButton>
            <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton> */}
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
};

export default NavBar;
