"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "The Method", href: "/the-method" },
    { label: "Platform", href: "/platform" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "About", href: "/about" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 relative ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center" data-testid="link-logo">
          <img src="/teee-logo.jpg" alt="TEEE Logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 px-6 py-3 bg-primary text-background hover:bg-white transition-all duration-500 font-bold"
            data-testid="button-nav-cta"
          >
            Book a Call
          </Link>
        </div>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border px-6 py-8 flex flex-col gap-6 h-[calc(100vh-80px)] overflow-y-auto">
          {links.map((link) => {
             const isActive = location === link.href;
             return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
             );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-4 bg-primary text-background text-center mt-8 font-mono text-sm tracking-widest uppercase font-bold"
          >
            Book a Call
          </Link>
        </div>
      )}
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
};
