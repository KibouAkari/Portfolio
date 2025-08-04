"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="w-full max-w-4xl text-center space-y-10">
        {/* Headline */}
        <h1 className="!text-5xl !sm:text-6xl !font-extrabold !tracking-tight !text-white">
          Hey, I&apos;m Kibou
        </h1>
        <p className="!text-xl !text-gray-300 !max-w-2xl !mx-auto">
          <br />
          Aspiring IT Specialist from Switzerland. Passionate about
          cybersecurity, creative tech, and turning ideas into working digital
          experiences.
        </p>

        {/* Video Container */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-neutral-700 hover:shadow-2xl transition duration-500">
          <video
            controls
            className="!w-full !h-full !object-cover"
            poster="/video-poster.jpg"
          >
            <source src="/about-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Paragraphs */}
        <div className="text-left space-y-4 max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          <p>
            <br />
            I’m always exploring new challenges – whether that’s piloting FPV
            drones, building hardware setups, or diving into cybersecurity
            tools.
          </p>
          <p>
            Currently growing my skills in IT professionally, while
            experimenting creatively on the side. I believe tech should be
            powerful, playful, and human.
          </p>
        </div>
      </div>
    </div>
  );
}
