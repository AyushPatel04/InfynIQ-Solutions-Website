import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black p-4 shadow">
      <ul className="flex gap-6 font-medium text-lg text-white">
        <li>
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
