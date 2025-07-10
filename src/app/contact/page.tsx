export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-gray-300 mb-6">
        Let’s connect! Whether it's a job opportunity, collaboration, or just a
        hello.
      </p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 bg-gray-800 text-white rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
