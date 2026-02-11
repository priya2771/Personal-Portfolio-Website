import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[url('https://images.unsplash.com/photo-1597532198625-e531345e00c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-fixed bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-0"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl w-full bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-10 text-white">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="text-sky-400">Touch</span>
            </h2>
            <p className="mt-4 text-zinc-400">
              Have a project, question, or just want to say hi? Feel free to
              reach out!
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-sky-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-sky-400"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="md:col-span-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-sky-400"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="mt-4 rounded-lg bg-sky-500 px-8 py-3 font-medium text-black hover:bg-sky-400 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Footer Info */}
          <div className="mt-10 text-center text-zinc-400 text-sm">
            <p>Email: priyanka@email.com</p>
            <p>Location: India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
