import Layout from '../components/Layout';

export default function PortfolioPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-4 text-lg">
        Here are a few examples of projects we’ve worked on (live demos coming soon!):
      </p>
      <ul className="mt-4 space-y-3 list-disc list-inside text-lg">
        <li>1st Family Dental Chatbot (Demo UI)</li>
        <li>CleanSmile Dentistry Web Redesign (Figma Mockup)</li>
        <li>Mobile-first appointment booking prototype</li>
      </ul>
    </Layout>
  );
}
