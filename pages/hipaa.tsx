import Head from 'next/head';
import Layout from '../components/Layout';

export default function HIPAA() {
  return (
    <>
      <Head>
        <title>HIPAA Compliance | InfynIQ Solutions</title>
        <meta name="description" content="Learn how InfynIQ Solutions ensures HIPAA compliance to protect your health information with top-tier data security and privacy practices." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://infyniqsolutions.com/hipaa" />
        <meta property="og:title" content="HIPAA Compliance | InfynIQ Solutions" />
        <meta property="og:description" content="Learn how InfynIQ Solutions ensures HIPAA compliance to protect your health information with top-tier data security and privacy practices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infyniqsolutions.com/hipaa" />
      </Head>

      <Layout>
        <section className="text-white bg-black py-20 px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">HIPAA Compliance</h1>

          <p className="text-gray-300 mb-4">
            At InfynIQ Solutions, we are committed to safeguarding the privacy and security of your health information. We follow the standards set by the Health Insurance Portability and Accountability Act (HIPAA) to ensure that all protected health information (PHI) is handled with the utmost care.
          </p>

          <h2 className="text-2xl font-semibold text-blue-400 mb-2">How We Stay Compliant</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>We implement strong encryption and access controls for data storage and transmission.</li>
            <li>All systems are regularly audited for security vulnerabilities and compliance checks.</li>
            <li>We ensure all team members are trained on HIPAA regulations and data privacy.</li>
            <li>Only authorized personnel have access to PHI and related client data.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-400 mb-2">What This Means for You</h2>
          <p className="text-gray-300 mb-4">
            Whether you&apos;re using our AI chatbots, web platforms, or custom solutions, you can trust that any data you share with us is treated with strict confidentiality and legal compliance. We do not sell or share health data, and we are transparent in how it&apos;s used.
          </p>

          <p className="text-gray-300">
            If you have any questions or require documentation related to our HIPAA compliance, please contact us at{' '}
            <a href="mailto:InfynIQ@outlook.com" className="text-blue-400 hover:underline">InfynIQ@outlook.com</a>.
          </p>
        </section>
      </Layout>
    </>
  );
}
