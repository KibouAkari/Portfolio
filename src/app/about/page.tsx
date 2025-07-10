"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4 py-24">
      <div className="max-w-3xl w-full text-center space-y-6">
        {/* Profilbild */}
        <div className="flex justify-center">
          <Image
            src="/kibouakari.png" // Falls du ein anderes Bild für About willst, hier anpassen
            alt="Kibou"
            width={160}
            height={160}
            className="rounded-full shadow-lg object-cover border-4 border-indigo-600"
          />
        </div>

        {/* Überschrift */}
        <h1 className="text-4xl font-bold tracking-tight">
          Kibou – Aspiring IT Specialist
        </h1>

        {/* Text */}
        <p className="text-lg text-gray-300 leading-relaxed">
          Hey there, I’m Kibou. I’m a passionate tech enthusiast based in
          Switzerland with a strong interest in IT, cybersecurity, and creative
          problem solving. Whether I’m piloting drones, building hardware
          setups, or diving into digital security, I love bringing ideas to life
          through technology.
        </p>

        <p className="text-md text-gray-400">
          Currently working and growing in the IT field, I plan to deepen my
          skills by pursuing further education in cybersecurity. My goal is to
          combine creativity and technical expertise to contribute to a safer,
          smarter digital world.
        </p>

        {/* Optional: Weitere Bilder */}
        <div className="flex justify-center gap-4 pt-6 flex-wrap">
          <Image
            src="/drone.jpg"
            alt="Drone Flying"
            width={240}
            height={160}
            className="rounded-lg shadow-md object-cover"
          />
          <Image
            src="/workspace.jpg"
            alt="Workspace"
            width={240}
            height={160}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
