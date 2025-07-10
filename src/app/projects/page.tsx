"use client";

export default function ProjectsPage() {
  const categories = [
    {
      title: "Programming Projects",
      description:
        "Dive into my programming work including full-stack web apps, tools, and experiments with TypeScript, React, Python, and more. Clean code, modern frameworks, and creative problem-solving.",
      link: "/projects/programming",
    },
    {
      title: "Drone Projects",
      description:
        "Explore cinematic drone footage, FPV freestyle videos, and flight controller setups. Capturing unique aerial perspectives and pushing boundaries with tech & creativity.",
      link: "/projects/drone",
    },
    {
      title: "Media / Creative",
      description:
        "From short film edits to design experiments – discover my visual storytelling, motion graphics, and creative work in digital media. Always curious, always evolving.",
      link: "/projects/media",
    },
  ];

  return (
    <div className="min-h-screen
     flex flex-col items-center justify-center px-4 pt-12 pb-24 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="!text-6xl !font-bold !text-center !mb-10">My Projects</h1>

      <div className="w-full max-w-3xl flex flex-col items-center gap-10">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="!w-full !bg-[#141414] !border !border-[#2c2c2c] !text-[var(--foreground)] !px-8 !py-4 !rounded-xl !shadow-md transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_6px_30px_rgba(255,255,255,0.05)]"
          >
            <h2 className="!text-2xl !font-semibold !mb-1">{category.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed text-left">
              {category.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
