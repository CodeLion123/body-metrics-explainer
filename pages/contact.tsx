import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Body Metrics Explainer</title>
        <meta
          name="description"
          content="Get in touch with us. Have questions or feedback? Contact the Body Metrics Explainer team."
        />
      </Head>
      <Layout>
        <div className="space-y-12 max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg p-12 border-2 border-blue-200">
            <div className="text-center space-y-6">
              <div className="text-6xl">📧</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h2>
                <p className="text-gray-600 mb-6">Email us with your questions, feedback, or suggestions</p>
              </div>
              
              <a 
                href="mailto:support@tekohub.com?subject=Body Metrics Inquiry&body=Hello,%0A%0AI have a question about Body Metrics Explainer.%0A%0A"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg"
              >
                Send Email
              </a>
              
              <p className="text-gray-600 text-sm">
                or email directly: <span className="font-semibold text-gray-900">support@tekohub.com</span>
              </p>
            </div>
          </div>

          {/* Response Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⏱️ Response Time</h3>
              <p className="text-gray-600">
                We typically respond to inquiries within 24-48 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 What To Include</h3>
              <p className="text-gray-600">
                Please mention your question or feedback so we can better assist you.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
