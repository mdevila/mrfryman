"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  Menu,
  Search,
  ShoppingCart,
  X,
  Phone,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <header className="z-50 w-full">
      {/* Top bar — warm dark golden brown */}
      <div className="bg-[#8B6914] text-[#FFF8E7]">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>0927 132 2115</span>
          </div>
          <div className="hidden sm:block text-[#FFF8E7]/80">Open Daily: 7 AM - 7 PM</div>
          <div className="hidden sm:block text-[#FFF8E7]/80">Order Now!</div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-[#F5B820] backdrop-blur-md border-b border-[#8B6914]/30 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Mr. Fryman Ka Negosyo"
              width={140}
              height={60}
              className="group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-[#8B6914] hover:text-[#8B6914] rounded-md hover:bg-[#8B6914]/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center gap-2 animate-in slide-in-from-right-5">
                <Input
                  placeholder="Search menu..."
                  className="w-40 sm:w-56 h-9 bg-white/80 border-[#8B6914]/20"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-[#8B6914] hover:bg-[#8B6914]/10"
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-[#8B6914] hover:bg-[#8B6914]/10"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
            )}

            {/* Cart */}
            <Button variant="ghost" size="icon" className="h-9 w-9 relative text-[#8B6914] hover:bg-[#8B6914]/10">
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8B6914] text-brand text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 text-[#8B6914] hover:bg-[#8B6914]/10" />
                }
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-base font-medium text-foreground hover:text-brand-dark hover:bg-brand/10 rounded-lg transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
