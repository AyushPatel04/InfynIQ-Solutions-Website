import Head from 'next/head';
import Layout from '../components/Layout';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use | InfynIQ Solutions</title>
        <meta
          name="description"
          content="Review the terms and conditions for using InfynIQ Solutions’ website and AI services. Understand our policies on use, liability, and content protection."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://infyniqsolutions.com/terms" />
        <meta property="og:title" content="Terms of Use | InfynIQ Solutions" />
        <meta
          property="og:description"
          content="Review the terms and conditions for using InfynIQ Solutions’ website and AI services. Understand our policies on use, liability, and content protection."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infyniqsolutions.com/terms" />
      </Head>

      <Layout>
        <section className="text-white bg-black py-20 px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
          <p className="text-gray-300 mb-4">
            By using InfynIQ Solutions’ website and services, you agree to the following terms. Our services are provided “as is” without warranties of any kind. We are not liable for any damages resulting from use or inability to use our site or tools.
          </p>
          <p className="text-gray-300 mb-4">
            All content and software associated with InfynIQ Solutions is protected by intellectual property laws. Unauthorized use or distribution is prohibited.
          </p>
          <p className="text-gray-300">
            These terms may be updated from time to time. Continued use after changes indicates acceptance.
          </p>
        </section>
      </Layout>
    </>
  );
}
