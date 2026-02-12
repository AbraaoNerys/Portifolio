"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projetos", href: "/projects" },
    { name: "Sobre", href: "/about" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-slate-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        
        <Link
          href="/"
          className="text-white font-bold text-xl hover:text-blue-400 transition"
        >
          Abraao.dev
        </Link>

        
        <div className="hidden md:flex gap-8">

          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-white transition
                  ${active ? "text-blue-400" : "hover:text-blue-300"}
                `}
              >
                {link.name}

                
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-blue-500/20 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
