import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b-2 border-blue-500">
      <nav className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-3xl font-black text-blue-400 group-hover:text-blue-300 transition">
              💪
            </div>
            <div>
              <div className="text-xl font-bold text-blue-300">
                Body Metrics
              </div>
              <div className="text-xs text-blue-400">Explainer</div>
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-300 hover:text-blue-300 transition font-semibold">
              Home
            </Link>
            <Link href="/body-metrics" className="text-gray-300 hover:text-blue-300 transition font-semibold">
              Tools
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-300 transition font-semibold">
              About Us
            </Link>
            <Link href="/disclaimer" className="text-gray-300 hover:text-blue-300 transition font-semibold">
              Disclaimer
            </Link>
          </div>
          <div className="md:hidden">
            <Link href="/body-metrics" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition shadow-lg">
              Tools
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
