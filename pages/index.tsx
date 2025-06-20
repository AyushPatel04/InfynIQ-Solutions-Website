import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-white bg-black py-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Empowering Dental Practices with AI</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          InfynIQ Solutions builds custom AI chatbots and modern websites to streamline operations and boost patient engagement.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/services">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">Explore Services</button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded">Contact Us</button>
          </Link>
        </div>
      </section>

      {/* Features Preview */}
      <section className="bg-white text-black py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Key Chatbot Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              title: '24/7 Patient Support',
              desc: 'Answer FAQs, office hours, insurance, billing — all automated.',
              icon: '💬',
            },
            {
              title: 'Appointment Scheduling',
              desc: 'Let patients book, reschedule, or cancel via chat.',
              icon: '📅',
            },
            {
              title: 'HIPAA Compliant',
              desc: 'Secure and privacy-focused conversations and data handling.',
              icon: '🔐',
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why InfynIQ?</h2>
          <p className="text-lg text-gray-300">
            We’re a tech-forward agency founded by Ayush Patel and Aditya Rao, helping dental offices stay competitive with smart automation and custom design. From chatbot development to full website overhauls, we build tools that work.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">Ready to Modernize Your Practice?</h2>
        <p className="text-xl mb-8">Let’s schedule a free consultation and explore what’s possible.</p>
        <Link href="/contact">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200">
            Get in Touch
          </button>
        </Link>
      </section>
    </Layout>
  );
}
