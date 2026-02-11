import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1610372537236-0147e2a5fad3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-0"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-6xl w-full text-white">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-yellow-400">Services</span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              I focus on building clean, scalable, and user-friendly web
              interfaces using modern frontend technologies.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur hover:scale-105 transition">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="text-zinc-400">
                Building responsive and interactive UIs using React, JavaScript,
                and modern best practices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur hover:scale-105 transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">UI Design</h3>
              <p className="text-zinc-400">
                Creating clean, accessible, and visually appealing interfaces
                with Tailwind CSS.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur hover:scale-105 transition">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">
                Performance & Optimization
              </h3>
              <p className="text-zinc-400">
                Optimizing components for speed, scalability, and smooth user
                experience.
              </p>
            </div>

            {/* Card 4 (optional) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur hover:scale-105 transition">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">API Integration</h3>
              <p className="text-zinc-400">
                Integrating REST APIs and handling data efficiently in frontend
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
