import Head from 'next/head';
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | InfynIQ Solutions</title>
        <meta name="description" content="Get in touch with InfynIQ Solutions. Schedule a free virtual consultation or contact us by email or phone." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://infyniqsolutions.com/contact" />
        <meta property="og:title" content="Contact Us | InfynIQ Solutions" />
        <meta property="og:description" content="Get in touch with InfynIQ Solutions. Schedule a free virtual consultation or contact us by email or phone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infyniqsolutions.com/contact" />
      </Head>

      <Layout>
        <section className="bg-black text-white px-6 py-16 flex justify-center">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 w-full max-w-2xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg mb-8">
              We’d love to talk! Reach out to schedule a free virtual consultation.
            </p>

            <div className="space-y-5 text-lg">
              <div>
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:InfynIQ@outlook.com"
                  className="text-blue-400 hover:underline"
                >
                  InfynIQ@outlook.com
                </a>
              </div>

              <div>
                <span className="font-semibold">Phone:</span>{' '}
                <a
                  href="tel:3313217442"
                  className="text-blue-400 hover:underline"
                >
                  (331) 321-7442
                </a>
              </div>

              <div>
                <span className="font-semibold">Location:</span> Based in Chicago, IL
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
