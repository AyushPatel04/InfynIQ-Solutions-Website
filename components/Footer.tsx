import Link from 'next/link';

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
            <li>
              <Link href="/services" className="text-white hover:text-blue-400">Dental</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Products</h3>
          <ul className="space-y-1">
            <li><Link href="/services" className="text-white hover:text-blue-400">AI Chatbots</Link></li>
            <li><Link href="/services" className="text-white hover:text-blue-400">Web Design</Link></li>
            <li><Link href="/services" className="text-white hover:text-blue-400">Custom Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="text-white hover:text-blue-400">About</Link></li>
            <li><Link href="/about" className="text-white hover:text-blue-400">Team</Link></li>
            <li><Link href="/about" className="text-white hover:text-blue-400">Careers</Link></li>
            <li><Link href="/about" className="text-white hover:text-blue-400">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-blue-400 font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li><Link href="/contact" className="text-white hover:text-blue-400">Contact</Link></li>
            <li><Link href="/contact" className="text-white hover:text-blue-400">FAQ</Link></li>
            <li><Link href="/terms" className="text-white hover:text-blue-400">Terms of Use</Link></li>
            <li><Link href="/privacy" className="text-white hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © 2025 InfynIQ Solutions. All Rights Reserved. |{' '}
        <Link href="/hipaa" className="text-white hover:text-blue-400 underline">HIPAA Compliant</Link> |{' '}
        <Link href="/terms" className="text-white hover:text-blue-400 underline">Terms</Link> |{' '}
        <Link href="/privacy" className="text-white hover:text-blue-400 underline">Privacy</Link>
      </div>
    </footer>
  );
}
