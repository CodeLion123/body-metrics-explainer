import Head from 'next/head';
import Layout from '../components/Layout';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer - Body Metrics Explainer</title>
        <meta name="description" content="Disclaimer and legal information for Body Metrics Explainer." />
      </Head>
      <Layout>
        <div className="space-y-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900">Disclaimer</h1>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <p className="text-red-900 font-bold text-lg">
              MEDICAL DISCLAIMER
            </p>
            <p className="text-red-800 mt-2">
              The information provided on this website is for educational purposes only and should not be 
              considered medical advice, diagnosis, or treatment.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">General Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              Body Metrics Explainer and its creators are not responsible for any adverse effects or consequences 
              resulting from the use of any suggestions or information contained herein. While we strive to provide 
              accurate and up-to-date information, medical science is constantly evolving, and the information on 
              this site may become outdated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Not a Substitute for Professional Medical Advice</h2>
            <p className="text-gray-700 leading-relaxed">
              The calculators and information provided on this website should not be used to make decisions about 
              your health or medical treatment. Always consult with a qualified healthcare professional such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Physicians</li>
              <li>Registered Nurses</li>
              <li>Registered Dietitians</li>
              <li>Mental Health Professionals</li>
              <li>Other Licensed Healthcare Providers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Use at Your Own Risk</h2>
            <p className="text-gray-700 leading-relaxed">
              All information and tools provided on this website are used at your own risk. Body Metrics Explainer 
              makes no representation or warranty, express or implied, regarding the accuracy, completeness, or 
              timeliness of the information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Individual Variations</h2>
            <p className="text-gray-700 leading-relaxed">
              Health metrics vary widely among individuals based on numerous factors including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Age and sex</li>
              <li>Ethnicity and genetic factors</li>
              <li>Medical history</li>
              <li>Medications</li>
              <li>Lifestyle and dietary habits</li>
              <li>Physical fitness level</li>
              <li>Environmental factors</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              What is appropriate for one person may not be appropriate for another.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Specific Health Conditions</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any specific health concerns, existing medical conditions, are pregnant, breastfeeding, 
              taking medications, or have a family history of health issues, please consult with your healthcare 
              provider before using our tools or making any health-related decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Emergency Situations</h2>
            <p className="text-gray-700 leading-relaxed">
              If you are experiencing a medical emergency, please call emergency services (911 in the United States) 
              or go to the nearest emergency room immediately. Do not rely on this website for emergency medical assistance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to third-party websites. We are not responsible for the content, accuracy, 
              or practices of these external sites. Your use of third-party websites is governed by their terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Body Metrics Explainer shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether 
              incurred directly or indirectly, arising from your use of or reliance on this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Changes to This Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately 
              upon posting to the website. Your continued use of the website following the posting of revised 
              disclaimer means that you accept and agree to the changes.
            </p>
          </section>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-8">
            <p className="text-gray-700">
              <strong>By using this website, you acknowledge that you have read, understood, and agree to be bound 
              by this disclaimer.</strong> If you do not agree with any part of this disclaimer, please do not use 
              this website.
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