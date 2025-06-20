import Layout from '../components/Layout';

export default function ContactPage() {
  return (
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
  );
}
