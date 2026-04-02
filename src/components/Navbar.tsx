import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-light tracking-wide border px-2 py-1 border-black/80">
            Elementum
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-black/80 hover:text-black transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Desktop Hamburger (Visual only as per design) */}
          <div className="hidden md:flex items-center">
             <Menu className="w-6 h-6 text-black cursor-pointer hidden md:block stroke-[1.5]" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 bg-white/95 backdrop-blur-lg">
          <button
            className="absolute top-6 right-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8 text-black" />
          </button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-light hover:text-black/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;