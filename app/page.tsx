export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex items-center justify-center">
      <div className="text-center max-w-xl p-6">
        <h1 className="text-4xl font-bold mb-4">
          AI Interview Coach for Students
        </h1>

        <p className="text-gray-200 mb-6">
          Practice technical and HR interviews with AI.  
          Get instant feedback, scoring, and personalized improvement tips.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Login
          </a>

          <a
            href="/register"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Register
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-300">
          Built with Next.js, TypeScript & AI for smarter interview preparation
        </p>
      </div>
    </main>
  );
}
