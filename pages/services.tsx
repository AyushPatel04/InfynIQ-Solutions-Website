import Layout from '../components/Layout';

export default function ServicesPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Our Services</h1>
      <ul className="mt-4 space-y-3 list-disc list-inside text-lg">
        <li>Custom AI Chatbot Development (24/7 patient support)</li>
        <li>Responsive Website Redesign for Dental Clinics</li>
        <li>Search Engine Optimization (SEO) Setup</li>
        <li>Analytics & Performance Monitoring</li>
        <li>Ongoing Support & Maintenance</li>
      </ul>
    </Layout>
  );
}
