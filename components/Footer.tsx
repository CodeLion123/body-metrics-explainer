export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white mt-20 border-t-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4 text-blue-300">💪 Body Metrics</h3>
            <p className="text-gray-400 leading-relaxed">
              Educational health metrics explained clearly and accurately for better understanding.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-blue-300 transition font-medium">Home</a></li>
              <li><a href="/body-metrics" className="hover:text-blue-300 transition font-medium">Tools</a></li>
              <li><a href="/about" className="hover:text-blue-300 transition font-medium">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-300">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/disclaimer" className="hover:text-blue-300 transition font-medium">Disclaimer</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-300 transition font-medium">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-blue-300">Connect</h3>
            <div className="space-y-3">
              <p className="text-gray-400">Have questions? Reach out to us anytime.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Body Metrics Explainer. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm italic">
              Educational purposes only. Not medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
