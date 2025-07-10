export default function GitHubPage() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <h1 className="text-4xl font-bold mb-4">GitHub</h1>
      <p className="text-lg text-gray-300">
        Check out my GitHub to see what I’ve been coding lately. I share open
        source tools, experiments, and tech demos.
      </p>
      <a
        href="https://github.com/kibouakari" // <- ändere das!
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 underline mt-4 inline-block"
      >
        Visit my GitHub Profile →
      </a>
    </div>
  );
}
