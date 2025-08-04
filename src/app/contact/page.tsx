"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      <div className="w-full max-w-xl text-center space-y-8">
        <h1 className="!text-5xl !font-bold">Let&apos;s Talk</h1>
        <p className="text-gray-400 text-lg">
          Whether it&apos;s a job opportunity, a collaboration, or just a quick hello
          — I&apos;m always open to chat. You can reach me via the form below or
          directly at{" "}
          <a
            href="mailto:kibouakari@proton.me"
            className="!text-indigo-400 underline !hover:text-indigo-300 transition"
          >
            kibouakari@proton.me
          </a>
          .
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-[#141414] border border-[#2c2c2c] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-[#141414] border border-[#2c2c2c] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Your Message
            </label>
            <textarea
              required
              className="w-full px-4 py-3 h-32 resize-none bg-[#141414] border border-[#2c2c2c] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Say hello!"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300 transform hover:scale-[1.02]"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
