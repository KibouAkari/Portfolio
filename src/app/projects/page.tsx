"use client";

export default function ProjectsPage() {
  const categories = [
    {
      title: "Programming Projects",
      description:
        "JavaScript, TypeScript, Python & more – all my coding experiments and builds.",
      link: "/projects/programming",
    },
    {
      title: "Drone Projects",
      description:
        "Aerial footage, FPV adventures, and flight controller tweaks.",
      link: "/projects/drone",
    },
    {
      title: "Media / Creative",
      description:
        "Video editing, photography, motion graphics and design work.",
      link: "/projects/media",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-16">My Projects</h1>

        <div className="flex flex-col items-center gap-10">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="w-full bg-[#141414] border border-[#2c2c2c] text-[var(--foreground)] p-8 rounded-xl shadow-md transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_6px_30px_rgba(255,255,255,0.05)]"
            >
              <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-400 text-lg">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
