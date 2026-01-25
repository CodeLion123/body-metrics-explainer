import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Body Metrics Explainer | Get in Touch</title>
        <meta
          name="description"
          content="Contact the Body Metrics Explainer team. Have questions about BMI, blood pressure, or our health calculators? We're here to help with your feedback and inquiries."
        />
        <meta name="keywords" content="contact body metrics, health calculator support, BMI calculator help, feedback" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://metrics.tekohub.com/contact" />
      </Head>
      <Layout>
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions, feedback, or suggestions? We'd love to hear from you and help improve your experience.
            </p>
          </div>

          {/* Ad Placement Zone - Top
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Main Contact Card */}
          <div className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl shadow-lg p-8 lg:p-12 border-2 border-blue-200">
            <div className="text-center space-y-6">
              <div className="text-6xl">📧</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Whether you have a question about our calculators, need clarification on health metrics, or want to provide feedback, we're here to help.
                </p>
              </div>
              
              <a 
                href="mailto:support@tekohub.com?subject=Body Metrics Inquiry&body=Hello,%0A%0AI have a question about Body Metrics Explainer.%0A%0A"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-lg"
              >
                Send Us an Email
              </a>
              
              <p className="text-gray-600">
                or email directly: <span className="font-semibold text-gray-900">support@tekohub.com</span>
              </p>
            </div>
          </div>

          {/* Response Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Response Time</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate so in your subject line.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-500">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What To Include</h3>
              <p className="text-gray-600">
                To help us assist you better, please include specific details about your question or the calculator/tool you're asking about.
              </p>
            </div>
          </div>

          {/* What We Can Help With */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Can Help With</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl mb-3">❓</div>
                <h3 className="font-bold text-gray-900 mb-2">General Questions</h3>
                <p className="text-gray-600 text-sm">Questions about how to use our calculators or interpret results</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-bold text-gray-900 mb-2">Feedback & Suggestions</h3>
                <p className="text-gray-600 text-sm">Ideas for new features, improvements, or additional health metrics</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-xl">
                <div className="text-3xl mb-3">🐛</div>
                <h3 className="font-bold text-gray-900 mb-2">Report Issues</h3>
                <p className="text-gray-600 text-sm">Found a bug or error? Let us know so we can fix it quickly</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-gray-900 mb-2">Content Inquiries</h3>
                <p className="text-gray-600 text-sm">Questions about the medical information or sources we cite</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2">Partnerships</h3>
                <p className="text-gray-600 text-sm">Interested in collaborating or featuring our tools?</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-gray-900 mb-2">Privacy Concerns</h3>
                <p className="text-gray-600 text-sm">Questions about how we handle your data and privacy</p>
              </div>
            </div>
          </section>

          {/* Important Note */}
          <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-yellow-900 mb-3">Important Notice</h3>
            <p className="text-yellow-800 text-sm leading-relaxed">
              <strong>Please note:</strong> We cannot provide personal medical advice, diagnoses, or treatment recommendations. Our tools are for educational purposes only. If you have health concerns, please consult with a qualified healthcare professional in your area.
            </p>
          </section>

          {/* Quick Links */}
          <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/body-metrics" className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition">
                Health Calculators
              </Link>
              <Link href="/about" className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition">
                About Us
              </Link>
              <Link href="/privacy-policy" className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-semibold hover:bg-green-200 transition">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="px-6 py-3 bg-yellow-100 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-200 transition">
                Disclaimer
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
