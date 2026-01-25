import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Body Metrics Explainer | Free Health Calculators</title>
        <meta name="description" content="Learn about Body Metrics Explainer - your trusted source for free BMI calculators, blood pressure guides, and health education based on established medical standards." />
        <meta name="keywords" content="about body metrics, health calculators, BMI calculator, blood pressure guide, health education" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://metrics.tekohub.com/about" />
      </Head>
      <Layout>
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Body Metrics Explainer</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted resource for understanding health metrics with free, science-based calculators and educational content.
            </p>
          </div>

          {/* Ad Placement Zone - Top
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Mission Section */}
          <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Body Metrics Explainer is dedicated to making health information accessible, understandable, and actionable for everyone. We believe that understanding your health measurements is the first step toward making informed decisions about your well-being.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our goal is to bridge the gap between complex medical terminology and everyday understanding, empowering individuals to take an active role in monitoring their health through education and easy-to-use tools.
            </p>
          </section>

          {/* What We Offer */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-blue-700 mb-3">BMI Calculator</h3>
                <p className="text-gray-600">Calculate your Body Mass Index with detailed explanations of each weight category based on standard medical classifications.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-red-700 mb-3">Blood Pressure Guide</h3>
                <p className="text-gray-600">Understand your blood pressure readings with comprehensive information about each category and health implications.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <div className="text-4xl mb-4">📏</div>
                <h3 className="text-xl font-bold text-purple-700 mb-3">Waist-to-Hip Ratio</h3>
                <p className="text-gray-600">Assess your body fat distribution and understand the associated health risks with gender-specific analysis.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/body-metrics" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Try Our Calculators
              </Link>
            </div>
          </section>

          {/* Our Approach */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  All our calculators and health information are based on established medical standards, recognized health guidelines, and formulas widely used by healthcare professionals around the world.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accurate Calculations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our tools use the same formulas and classification systems used by healthcare professionals worldwide. We regularly review and update our information to reflect the latest medical guidelines and research findings.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Focus</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't just provide numbers—we explain what they mean. Each result comes with detailed explanations, context, and actionable information to help you understand your health better.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">User-Friendly Design</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our tools are designed to be intuitive and accessible. Whether you're using a desktop computer or a mobile phone, our calculators work seamlessly to provide you with instant, clear results.
                </p>
              </div>
            </div>
          </section>

          {/* Ad Placement Zone - Middle
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Privacy & Trust */}
          <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-green-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">100% Private Calculations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We respect your privacy completely. All calculations are performed locally in your web browser using JavaScript. This means:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    No health data is ever sent to our servers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    No personal information is collected or stored
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    No registration or account required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Your measurements remain completely private
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Built on Trust</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We're committed to providing accurate, reliable health information. Our commitment includes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    Transparent methodology and formulas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    Clear citations of medical guidelines
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    Regular content updates and reviews
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    Honest disclaimers about limitations
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important Note */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Note</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>Body Metrics Explainer is for educational purposes only.</strong> The information and calculators provided on this website are designed to help you understand health metrics and should not be considered as medical advice, diagnosis, or treatment recommendations. Always consult with qualified healthcare professionals for personalized health assessments, medical diagnoses, and treatment plans.
            </p>
          </section>

          {/* Our Standards */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Standards</h2>
            <p className="text-gray-700 mb-8">
              Our calculators and health information are built on:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-bold text-gray-700 mb-2">Standard Formulas</div>
                <p className="text-sm text-gray-600">Using established medical calculation methods</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-bold text-gray-700 mb-2">Medical Guidelines</div>
                <p className="text-sm text-gray-600">Based on recognized health classifications</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-2">🔬</div>
                <div className="font-bold text-gray-700 mb-2">Evidence-Based</div>
                <p className="text-sm text-gray-600">Grounded in scientific research</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-600 text-center">
                <strong>Note:</strong> Our tools are for educational purposes only. Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We value your feedback, suggestions, and questions. If you have any concerns about our content, found an error, or want to suggest improvements, we'd love to hear from you.
            </p>
            <Link href="/contact" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition">
              Contact Us
            </Link>
          </section>

          {/* Footer Info */}
          <div className="border-t pt-8 text-center">
            <p className="text-sm text-gray-600">
              Last updated: {new Date().getFullYear()} | Body Metrics Explainer
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}