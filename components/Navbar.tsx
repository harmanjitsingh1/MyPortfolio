import React, { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import Button from "./Button";
import { useModal } from "../context/ModalContext";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className="fixed top-3 md:top-8 left-0 right-0 z-50 flex justify-center px-4 ">
        <div className="w-full max-w-[900px] bg-brand-dark/50 backdrop-blur-xl border border-brand-border/50 rounded-full shadow-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 shadow-[0_0_40px_rgba(182,248,41,0.1)] hover:border-brand-primary/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer shrink-0">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-brand-dark group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 font-bold" />
            </div>
            <span className="font-bold text-md md:text-lg tracking-tight text-white">
              Hex.Dev
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="default"
                className="py-2 px-5 text-sm h-10"
                onClick={openModal}
              >
                Contact Me
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl md:hidden flex items-center justify-center">
          <div className="flex flex-col items-center gap-8 p-6 w-full max-w-sm animate-fade-in-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-brand-muted hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
