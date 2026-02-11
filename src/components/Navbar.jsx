import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        <h1 className="text-xl text-amber-400 font-bold">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#hero" className="hover:text-amber-400">
            Home
          </a>
          <a href="#about" className="hover:text-amber-400">
            About
          </a>
          <a href="#services" className="hover:text-amber-400">
            Services
          </a>
          <a href="#projects" className="hover:text-amber-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-amber-400">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4 text-white">
          <a href="#hero" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
