"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-10 flex-wrap">
          {/* Image */}
          <motion.img
            src="/kibouakari.png"
            alt="Kibou"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
            initial={{ y: -10 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

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

            <a href="#about" >
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
