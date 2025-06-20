import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">
        We’d love to talk! Reach out to schedule a free virtual consultation.
      </p>
      <ul className="mt-4 space-y-2 text-lg">
        <li><strong>Email:</strong> yourname@infyniq.com</li>
        <li><strong>LinkedIn:</strong> linkedin.com/in/yourname</li>
        <li><strong>Location:</strong> Based in Chicago, IL</li>
      </ul>
    </Layout>
  );
}
