import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1729547846218-bd20bc595fd2?q=80&w=2012&auto=format&fit=crop')] bg-cover bg-fixed bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-0"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          {/* Left side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-emerald-400">Me</span>
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              I’m Priyanka, a passionate frontend developer who enjoys building
              clean, responsive, and user-focused web applications. I love
              turning ideas into interactive experiences using modern tools.
            </p>

            <p className="mt-4 text-zinc-400">
              Currently focused on React, Bootstrap, and improving my overall
              UI/UX thinking while working on real-world projects.
            </p>
          </div>

          {/* Right side */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">Skills & Focus</h3>

            <ul className="space-y-3 text-zinc-300">
              <li>⚡ React & JavaScript (ES6+)</li>
              <li>🎨 Tailwind CSS & Responsive Design</li>
              <li>🧩 Component-Based UI Development</li>
              <li>🚀 Performance & Clean Code</li>
              <li>📱 Mobile-First Approach</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
