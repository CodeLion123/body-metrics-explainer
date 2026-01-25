import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer - Body Metrics Explainer | Medical & Legal Information</title>
        <meta name="description" content="Read our medical disclaimer and legal information. Body Metrics Explainer provides educational health calculators - not medical advice. Always consult healthcare professionals." />
        <meta name="keywords" content="medical disclaimer, health calculator disclaimer, BMI disclaimer, legal information" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://metrics.tekohub.com/disclaimer" />
      </Head>
      <Layout>
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Disclaimer</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important information about using Body Metrics Explainer and our health calculators.
            </p>
          </div>

          {/* Medical Disclaimer Banner */}
          <div className="bg-red-50 border-2 border-red-300 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚠️</div>
              <div>
                <p className="text-red-900 font-bold text-2xl mb-3">
                  MEDICAL DISCLAIMER
                </p>
                <p className="text-red-800 text-lg leading-relaxed">
                  The information provided on this website is for <strong>educational purposes only</strong> and should not be 
                  considered medical advice, diagnosis, or treatment. Our calculators are tools for general health awareness 
                  and are not a substitute for professional medical evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Placement Zone - Top
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* General Disclaimer */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Body Metrics Explainer and its creators, operators, and affiliates are not responsible for any adverse effects, 
              consequences, or damages resulting from the use of any information, suggestions, or tools contained on this website. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we strive to provide accurate and up-to-date information based on established medical standards and recognized 
              health guidelines, medical science is constantly evolving. The information on this site may become outdated, and we 
              cannot guarantee its accuracy at all times.
            </p>
          </section>

          {/* Not Medical Advice */}
          <section className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not a Substitute for Professional Medical Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The calculators and health information provided on this website should never be used as a substitute for 
              professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare professionals 
              for any questions regarding medical conditions or health concerns.
            </p>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Consult with qualified professionals such as:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Primary Care Physicians
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Cardiologists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Registered Nurses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Registered Dietitians
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Endocrinologists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Mental Health Professionals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Physical Therapists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">•</span> Other Licensed Healthcare Providers
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitations of Our Tools */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations of Health Calculators</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our health calculators, including BMI, blood pressure, and waist-to-hip ratio tools, have inherent limitations:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-gray-900 mb-2">BMI Limitations</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Does not measure body fat directly</li>
                  <li>• May overestimate fat in muscular individuals</li>
                  <li>• May underestimate fat in elderly individuals</li>
                  <li>• Does not account for fat distribution</li>
                </ul>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-2">Blood Pressure Limitations</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Single readings may not be accurate</li>
                  <li>• Affected by stress, caffeine, activity</li>
                  <li>• "White coat" syndrome effects</li>
                  <li>• Requires multiple readings for diagnosis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Individual Variations */}
          <section className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Individual Variations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Health metrics vary significantly among individuals. Standard ranges and categories may not apply equally 
              to everyone due to various factors:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Biological Factors</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Age</li>
                  <li>• Sex</li>
                  <li>• Ethnicity</li>
                  <li>• Genetics</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Health Factors</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Medical history</li>
                  <li>• Current medications</li>
                  <li>• Existing conditions</li>
                  <li>• Pregnancy status</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Lifestyle Factors</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Physical fitness level</li>
                  <li>• Dietary habits</li>
                  <li>• Activity level</li>
                  <li>• Environmental factors</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6 font-medium">
              What is appropriate or healthy for one person may not be appropriate for another. Always consider 
              your individual circumstances.
            </p>
          </section>

          {/* Ad Placement Zone - Middle
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Special Populations */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Populations & Conditions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you belong to any of the following groups or have specific health conditions, please consult 
              with your healthcare provider before using our tools or making health-related decisions:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Pregnant or breastfeeding women
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Children and adolescents (under 18)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Elderly individuals (over 65)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Individuals with eating disorders
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Those with cardiovascular conditions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Individuals with diabetes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Those taking prescription medications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  Athletes and bodybuilders
                </li>
              </ul>
            </div>
          </section>

          {/* Emergency Banner */}
          <section className="bg-red-100 border-2 border-red-400 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🚨</div>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-3">Medical Emergencies</h2>
                <p className="text-red-800 leading-relaxed mb-4">
                  If you are experiencing a medical emergency, <strong>do not use this website</strong>. Instead:
                </p>
                <ul className="text-red-800 space-y-2 font-medium">
                  <li>• Call emergency services immediately (911 in the United States)</li>
                  <li>• Go to the nearest emergency room</li>
                  <li>• Contact your local emergency medical services</li>
                </ul>
                <p className="text-red-800 leading-relaxed mt-4">
                  Signs of medical emergencies include chest pain, difficulty breathing, severe bleeding, 
                  loss of consciousness, and symptoms of stroke.
                </p>
              </div>
            </div>
          </section>

          {/* Use at Own Risk */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use at Your Own Risk</h2>
            <p className="text-gray-700 leading-relaxed">
              All information and tools provided on this website are used entirely at your own risk. Body Metrics Explainer 
              makes no representation or warranty, express or implied, regarding the accuracy, completeness, timeliness, 
              or suitability of the information for any particular purpose. We do not guarantee that our calculators will 
              meet your requirements or that the results will be error-free.
            </p>
          </section>

          {/* Third-Party Links & Liability */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                This website may contain links to third-party websites for reference or additional information. 
                We are not responsible for the content, accuracy, privacy practices, or opinions of these external sites. 
                Your use of third-party websites is governed by their terms and conditions.
              </p>
            </section>

            <section className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                To the fullest extent permitted by law, Body Metrics Explainer shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or 
                health outcomes arising from your use of or reliance on this website.
              </p>
            </section>
          </div>

          {/* Changes to Disclaimer */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or change this disclaimer at any time without prior notice. 
              Changes will be effective immediately upon posting to the website. Your continued use of the website 
              following the posting of any revised disclaimer constitutes your acceptance of and agreement to the changes. 
              We encourage you to review this page periodically for updates.
            </p>
          </section>

          {/* Acceptance Notice */}
          <div className="bg-yellow-50 border-2 border-yellow-400 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📋</div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>By using this website, you acknowledge that you have read, understood, and agree to be bound 
                  by this disclaimer and our Terms of Service.</strong> If you do not agree with any part of this disclaimer, 
                  please discontinue use of this website immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <section className="text-center">
            <h3 className="font-bold text-gray-900 mb-4">Related Pages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition">
                Privacy Policy
              </Link>
              <Link href="/about" className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-semibold hover:bg-purple-200 transition">
                About Us
              </Link>
              <Link href="/contact" className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-semibold hover:bg-green-200 transition">
                Contact Us
              </Link>
            </div>
          </section>

          {/* Footer */}
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