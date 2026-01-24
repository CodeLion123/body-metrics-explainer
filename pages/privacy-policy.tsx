import Head from 'next/head';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Body Metrics Explainer</title>
        <meta name="description" content="Privacy policy for Body Metrics Explainer." />
      </Head>
      <Layout>
        <div className="space-y-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Body Metrics Explainer is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Personal Health Information:</strong> Our calculators operate entirely in your browser. 
              No health data you enter (weight, height, blood pressure readings, etc.) is collected, stored, 
              or transmitted to our servers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Usage Information:</strong> We may collect non-personal information such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>IP address (for analytics purposes only)</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Browser type and version</li>
              <li>Device type</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use analytics data only to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Understand how users interact with our website</li>
              <li>Improve our tools and content</li>
              <li>Monitor website performance</li>
              <li>Enhance user experience</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Data Storage and Security</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Client-Side Processing:</strong> All calculations are performed in your browser using JavaScript. 
              No health data is transmitted to any server.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Browser Storage:</strong> We do not use cookies or local storage to collect personal health information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We may use third-party analytics services to understand website usage. These services have their own 
              privacy policies and may collect usage information. We recommend reviewing their privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Know what personal data we hold about you</li>
              <li>Ask us to delete your data</li>
              <li>Opt-out of analytics tracking</li>
              <li>Request corrections to inaccurate data</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon 
              posting to the website. Your continued use of the website constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about our Privacy Policy or our privacy practices, 
              please contact us through the contact information provided on our website.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700">
              <strong>Key Point:</strong> Your health data is never stored or transmitted. We prioritize your privacy 
              and provide tools that work entirely on your device without collecting sensitive information.
            </p>
          </div>

          <div className="border-t pt-8">
            <p className="text-sm text-gray-600">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}