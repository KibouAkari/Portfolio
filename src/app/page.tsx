"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 flex-wrap">
          {/* Image */}
          <motion.div
            layoutId="profile-pic"
            className="w-64 h-64 rounded-full shadow-lg overflow-visible mt-8"
          >
            <motion.img
              src="/kibouakari.png"
              alt="Kibou"
              className="w-full h-full object-cover"
              initial={{ y: 0 }}
              animate={{ y: [0, -40, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1], // smoother easeInOut cubic bezier
              }}
            />
          </motion.div>

          {/* Text */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !font-extrabold leading-tight">
              Hi, I’m <span className="text-indigo-400">Kibou</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-normal">
              Aspiring IT Specialist · Cybersecurity Enthusiast · Drone Pilot
              <br />
              Creative Mind
            </p>

            <a href="/about">
              <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold text-sm sm:text-base transition">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
