import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-white/70 text-xl mb-8">Page not found</p>
        <Link 
          to="/" 
          className="glass glass-hover px-6 py-3 rounded-lg text-white inline-block"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}