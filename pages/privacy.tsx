import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <section className="text-white bg-black py-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          We collect minimal personal data to provide services effectively. This may include contact information and usage analytics.
        </p>
        <p className="text-gray-300 mb-4">
          We do not share your data with third parties without your consent, except when required by law. We use industry-standard measures to protect your information.
        </p>
        <p className="text-gray-300">
          You may contact us at{' '}
          <a href="mailto:InfynIQ@outlook.com" className="text-blue-400 hover:underline">
            InfynIQ@outlook.com
          </a>{' '}
          for questions or to request data deletion.
        </p>
      </section>
    </Layout>
  );
}

