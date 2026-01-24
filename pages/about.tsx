import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>About Body Metrics Explainer</title>
        <meta name="description" content="Learn about Body Metrics Explainer and our mission to provide clear health metric information." />
      </Head>
      <Layout>
        <div className="space-y-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">About Body Metrics Explainer</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Body Metrics Explainer is dedicated to providing clear, accurate, and accessible explanations 
              of common health metrics. We believe that understanding your health measurements is the first step 
              toward making informed decisions about your well-being.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide interactive calculators and detailed educational information about various body metrics, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Body Mass Index (BMI)</li>
              <li>Blood Pressure Categories</li>
              <li>Waist-to-Hip Ratio</li>
              <li>And more health metrics</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
            <p className="text-gray-700 leading-relaxed">
              We follow evidence-based medical standards and guidelines from reputable health organizations 
              such as the WHO, CDC, and NIH. Our calculators use established formulas and classifications to 
              provide accurate information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Important Note</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-gray-700 leading-relaxed">
                <strong>This tool is for educational purposes only.</strong> The information provided should not be 
                considered medical advice. Always consult with qualified healthcare professionals for personalized 
                health assessments, diagnosis, and treatment recommendations.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Data Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy. All calculations are performed in your browser and no data is collected, 
              stored, or transmitted to our servers. You can use our tools with complete confidence that your 
              information remains private.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Contact & Feedback</h2>
            <p className="text-gray-700 leading-relaxed">
              We value your feedback and suggestions for improvement. If you have questions or concerns about 
              our content, please reach out to us through the contact information provided on our website.
            </p>
          </section>

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