import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | InfynIQ Solutions</title>
        <meta
          name="description"
          content="Meet the co-founders of InfynIQ Solutions: Ayush Patel and Aditya Rao. Learn about their backgrounds and mission in AI and software development."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://infyniqsolutions.com/about" />
        <meta property="og:title" content="About Us | InfynIQ Solutions" />
        <meta
          property="og:description"
          content="Meet the co-founders of InfynIQ Solutions: Ayush Patel and Aditya Rao. Learn about their backgrounds and mission in AI and software development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://infyniqsolutions.com/about" />
      </Head>

      <Layout>
        <section className="bg-[#0E1525] text-white py-20 px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Meet the Co-Founders</h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-16 max-w-6xl mx-auto">
            {/* Ayush */}
            <div className="flex flex-col items-center justify-start max-w-md text-center flex-1">
              <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-white">
                <Image
                  src="/Cofounders/Ayush.JPG"
                  alt="Ayush Patel"
                  width={160}
                  height={160}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Ayush Patel</h2>
              <p className="text-gray-300">Co-Founder | Software Developer</p>
              <p className="text-sm text-gray-400 mt-2">
                B.S. in Computer Science (Expected 2026), DePaul University.<br />
                Concentration in Software Development, Minor in Data Science.<br />
                Focused on building scalable web applications and automation tools.
              </p>
            </div>

            {/* Aditya */}
            <div className="flex flex-col items-center justify-start max-w-md text-center flex-1">
              <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-white">
                <Image
                  src="/Cofounders/Aditya.jpg"
                  alt="Aditya Rao"
                  width={160}
                  height={160}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">Aditya Rao</h2>
              <p className="text-gray-300">Co-Founder | AI Engineer</p>
              <p className="text-sm text-gray-400 mt-2">
                B.S. in Computer Science, DePaul University.<br />
                Concentration in Artificial Intelligence.<br />
                Specializes in deploying AI solutions for real-world business problems.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
