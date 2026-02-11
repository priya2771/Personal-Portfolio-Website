import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4 relative  h-screen w-full bg-[url('https://images.unsplash.com/photo-1729552048052-24a21a7821ef?q=80&w=2070&auto=format&fit=crop')] bg-cover  bg-fixed bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  leading-tight">
            Hi, I’m <span className="text-amber-400">Priyanka</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-zinc-300">
            Frontend Developer • React • UI Enthusiast
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mx-auto">
            I build responsive, user-friendly web interfaces with modern
            technologies, focusing on clean design and smooth user experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-amber-500 px-6 py-3 font-medium text-black hover:bg-amber-400 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/40 px-6 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
