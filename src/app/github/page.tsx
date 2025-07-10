"use client";

import { useEffect, useState } from "react";

type Repo = {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
};

export default function GitHubPage() {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kibouakari")
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch("https://api.github.com/users/kibouakari/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[var(--background)] text-[var(--foreground)] !overflow-hidden">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          {user?.avatar_url && (
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full border border-[#2c2c2c] shadow-lg"
            />
          )}
          <h1 className="text-5xl font-bold">GitHub Activity</h1>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            Explore my latest GitHub repositories, contributions, and code
            experiments. Updated live from my GitHub profile.
          </p>
        </div>

        {/* Repositories */}
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-left text-2xl font-semibold mb-2">
            Latest Repositories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#141414] border border-[#2c2c2c] px-6 py-5 rounded-xl shadow-md text-left transform transition duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_6px_30px_rgba(255,255,255,0.05)]"
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-1">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{repo.language || "Unknown"}</span>
                  <span>⭐ {repo.stargazers_count}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Button */}
        <a
          href="https://github.com/kibouakari"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition duration-300 transform hover:-translate-y-0.5 hover:scale-105"
        >
          🚀 Visit My GitHub Profile
        </a>
      </div>
    </div>
  );
}
