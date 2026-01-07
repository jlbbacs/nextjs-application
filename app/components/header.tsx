"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F87B1B] text-white border-b border-white/10 relative">
      <div className="h-[60px] flex items-center justify-between px-5 max-w-7xl mx-auto">
        
        {/* LEFT SIDE: Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={80}
              height={80}
              priority
              className="invert" 
            />
        </Link>

        {/* RIGHT SIDE: Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-sm text-white/80">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link href="/post" className="hover:text-white transition-colors">Post</Link></li>
          <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
        </ul>

        {/* MOBILE: Hamburger Button (Z-index high to stay above drawer) */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU: Sideways Drawer */}
      {/* Background Overlay (Dimmer) */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#EDA35A] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-40 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col gap-6 font-medium text-white p-10 pt-24">
          <li><Link href="/" onClick={() => setIsOpen(false)} className="text-xl hover:opacity-80">Home</Link></li>
          <li><Link href="/post" onClick={() => setIsOpen(false)} className="text-xl hover:opacity-80">Post</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)} className="text-xl hover:opacity-80">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}