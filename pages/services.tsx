import Layout from '../components/Layout';

export default function ServicesPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <h2 className="text-2xl font-semibold mt-4 mb-2">🦷 Dental AI Chatbot – Feature Overview</h2>

      <ul className="space-y-4 text-lg list-none">
        <li>
          💬 <strong>1. 24/7 Automated Patient Support:</strong><br />
          Instantly answers common questions about dental procedures, insurance, billing, office hours, and more.<br />
          Reduces call volume and frees up front desk staff.
        </li>

        <li>
          📅 <strong>2. Appointment Scheduling & Reminders:</strong><br />
          Patients can book, reschedule, or cancel appointments via chat.<br />
          Sends automated reminders to reduce no-shows.
        </li>

        <li>
          🪥 <strong>3. Post-Procedure Care Instructions:</strong><br />
          Provides step-by-step aftercare based on selected procedures.<br />
          Reduces follow-up calls and improves patient compliance.
        </li>

        <li>
          📈 <strong>4. Smart FAQs with Learning Capabilities:</strong><br />
          Continuously learns from patient interactions.<br />
          Improves accuracy and response quality over time.
        </li>

        <li>
          📸 <strong>5. Image Upload:</strong><br />
          Patients can upload photos (e.g., of a chipped tooth or gum issue).<br />
          Helps prioritize urgency before a visit.
        </li>

        <li>
          🔐 <strong>6. HIPAA-Compliant Design:</strong><br />
          All patient interactions are encrypted.<br />
          Ensures compliance with healthcare privacy laws.
        </li>

        <li>
          🛠️ <strong>7. Easy Integration:</strong><br />
          Embeddable widget for dental websites.<br />
          Integrates with patient management systems (PMS) via API.
        </li>

        <li>
          👨‍⚕️ <strong>8. Human Handoff Option:</strong><br />
          Escalates complex or emergency cases to front desk or on-call staff.<br />
          Seamless transition from bot to human.
        </li>

        <li>
          📄 <strong>9. Export & Transcript Option:</strong><br />
          Patients receive a transcript of their conversation.<br />
          Optionally email summaries to clinic inbox for documentation.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-2">🎨 Website Redesign</h2>
      <p className="text-lg">
        We also specialize in redesigning dental office websites to be fast, responsive, mobile-friendly, and SEO-optimized — built with a modern tech stack and customized to your brand.
      </p>
    </Layout>
  );
}
