export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-10 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">InfynIQ Solutions</h1>
          <p className="text-blue-400">Empowering Dental Practices with AI</p>
          <p className="mt-4">
            📞 <a href="tel:+13313217442" className="text-white hover:text-blue-400 underline">(331) 321-7442</a>
          </p>
          <p>
            ✉️ <a href="mailto:InfynIQ@outlook.com" className="text-white hover:text-blue-400 underline">InfynIQ@outlook.com</a>
          </p>
          <p>📍 Chicago, IL</p>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-400">🔗</a>
            <a href="mailto:InfynIQ@outlook.com" aria-label="Email" className="text-white hover:text-blue-400">✉️</a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-blue-400">📘</a>
          </div>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Industries</h3>
          <ul className="space-y-1">
            <li><a href="/services" className="text-white hover:text-blue-400">Dental</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Products</h3>
          <ul className="space-y-1">
            <li><a href="/services" className="text-white hover:text-blue-400">AI Chatbots</a></li>
            <li><a href="/services" className="text-white hover:text-blue-400">Web Design</a></li>
            <li><a href="/services" className="text-white hover:text-blue-400">Custom Solutions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="/about" className="text-white hover:text-blue-400">About</a></li>
            <li><a href="/about" className="text-white hover:text-blue-400">Team</a></li>
            <li><a href="/about" className="text-white hover:text-blue-400">Careers</a></li>
            <li><a href="/about" className="text-white hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li><a href="/contact" className="text-white hover:text-blue-400">Contact</a></li>
            <li><a href="/contact" className="text-white hover:text-blue-400">FAQ</a></li>
            <li><a href="/terms" className="text-white hover:text-blue-400">Terms of Use</a></li>
            <li><a href="/privacy" className="text-white hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © 2025 InfynIQ Solutions. All Rights Reserved. | <a href="/hipaa" className="text-white hover:text-blue-400 underline">HIPAA Compliant</a> |{' '}
        <a href="/terms" className="text-white hover:text-blue-400 underline">Terms</a> |{' '}
        <a href="/privacy" className="text-white hover:text-blue-400 underline">Privacy</a>
      </div>
    </footer>
  );
}
