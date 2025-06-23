import Head from 'next/head';
import Layout from '../components/Layout';

const features = [
  {
    icon: '💬',
    title: '24/7 Automated Patient Support',
    desc: 'Answers FAQs about procedures, insurance, billing, and more — reducing front desk workload.',
  },
  {
    icon: '📅',
    title: 'Appointment Scheduling & Reminders',
    desc: 'Book, reschedule, or cancel appointments via chat with auto-reminders to reduce no-shows.',
  },
  {
    icon: '🪥',
    title: 'Post-Procedure Care Instructions',
    desc: 'Gives step-by-step aftercare based on procedure selected — reducing follow-up calls.',
  },
  {
    icon: '📈',
    title: 'Smart FAQs with Learning',
    desc: 'Improves accuracy over time by learning from patient interactions.',
  },
  {
    icon: '📸',
    title: 'Image Upload',
    desc: 'Patients can send photos (e.g., chipped tooth), helping prioritize urgent cases.',
  },
  {
    icon: '🔐',
    title: 'HIPAA-Compliant Design',
    desc: 'Encrypted patient interactions ensure privacy law compliance.',
  },
  {
    icon: '🛠️',
    title: 'Easy Integration',
    desc: 'Embeds easily in any dental site. Connects with patient management systems (PMS) via API.',
  },
  {
    icon: '👨‍⚕️',
    title: 'Human Handoff',
    desc: 'Escalates complex chats to front desk/on-call staff for seamless support.',
  },
  {
    icon: '📄',
    title: 'Export & Transcripts',
    desc: 'Provides chat transcripts to patients and optionally emails summaries to clinics.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | InfynIQ Solutions</title>
        <meta
          name="description"
          content="Explore the powerful AI chatbot and website design services offered by InfynIQ Solutions for dental practices."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://infyniqsolutions.com/services" />
        <meta property="og:title" content="Services | InfynIQ Solutions" />
        <meta
          property="og:description"
          content="Explore the powerful AI chatbot and website design services offered by InfynIQ Solutions for dental practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infyniqsolutions.com/services" />
      </Head>

      <Layout>
        <section className="text-white bg-black px-6 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

          <h2 className="text-2xl font-semibold mb-6 text-center">🦷 Dental AI Chatbot</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-300">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3">🎨 Website Redesign</h2>
            <p className="text-gray-300 text-lg">
              We also offer full dental website makeovers — optimized for speed, SEO, mobile, and patient trust. Built with modern tech and tailored to your brand.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
