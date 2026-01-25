import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Body Metrics Explainer | Your Data Protection</title>
        <meta name="description" content="Learn how Body Metrics Explainer protects your privacy. All health calculations happen locally in your browser - we never collect or store your personal health data." />
        <meta name="keywords" content="privacy policy, data protection, health calculator privacy, GDPR compliance" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://metrics.tekohub.com/privacy-policy" />
      </Head>
      <Layout>
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy matters. Learn how we protect your data and respect your personal information.
            </p>
          </div>

          {/* Privacy Highlight */}
          <div className="bg-green-50 border-2 border-green-300 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔒</div>
              <div>
                <p className="text-green-900 font-bold text-2xl mb-3">
                  Your Health Data Stays Private
                </p>
                <p className="text-green-800 text-lg leading-relaxed">
                  All calculations on Body Metrics Explainer happen <strong>locally in your browser</strong>. 
                  We never collect, store, or transmit your personal health information (weight, height, blood pressure, etc.) 
                  to any server. Your sensitive data never leaves your device.
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

          {/* Introduction */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Body Metrics Explainer ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              (metrics.tekohub.com) and use our health calculators and tools.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              {/* Health Data */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Health Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-green-700">We do NOT collect your health data.</strong> Our calculators 
                  operate entirely within your web browser using JavaScript. The health information you enter 
                  (such as weight, height, blood pressure readings, waist and hip measurements) is:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Processed locally on your device only
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Never transmitted to our servers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Never stored in any database
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    Never shared with third parties
                  </li>
                </ul>
              </div>

              {/* Usage Information */}
              <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Usage Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Like most websites, we may automatically collect certain non-personal information when you visit 
                  our site. This may include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• IP address (anonymized for analytics)</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system</li>
                    <li>• Device type (desktop, mobile, tablet)</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Pages visited on our site</li>
                    <li>• Time and date of visits</li>
                    <li>• Time spent on pages</li>
                    <li>• Referring website (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The non-personal usage information we collect is used solely to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">Website Analytics</h3>
                <p className="text-gray-600 text-sm">Understand how visitors interact with our website and which tools are most popular</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Performance Monitoring</h3>
                <p className="text-gray-600 text-sm">Monitor and improve website speed, reliability, and overall performance</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">Content Improvement</h3>
                <p className="text-gray-600 text-sm">Identify which content is most helpful and where we can improve our tools</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="text-2xl mb-2">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600 text-sm">Detect and prevent security threats, abuse, or technical issues</p>
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

          {/* Cookies & Storage */}
          <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Local Storage</h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 text-sm">
                  We may use essential cookies that are necessary for the website to function properly. 
                  These do not track personal information and are required for basic site functionality.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 text-sm">
                  We may use analytics cookies (such as Google Analytics) to understand website usage patterns. 
                  These cookies collect anonymized data and do not identify individual users.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Advertising Cookies</h3>
                <p className="text-gray-700 text-sm">
                  We may display advertisements through third-party ad networks (such as Google AdSense). 
                  These services may use cookies to show relevant ads based on your browsing history. 
                  You can manage ad preferences through your browser settings or Google's Ad Settings.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">No Health Data Storage</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Important:</strong> We do NOT use cookies or local storage to store any personal health 
                  information you enter into our calculators. Your health data exists only temporarily in your 
                  browser's memory while you use our tools.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may use the following third-party services that have their own privacy policies:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Google Analytics</h3>
                <p className="text-gray-600 text-sm">For website analytics and usage statistics. 
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    View Google Privacy Policy
                  </a>
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Google AdSense</h3>
                <p className="text-gray-600 text-sm">For displaying advertisements on our website. 
                  <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    View Google Ads Policy
                  </a>
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Hosting Provider</h3>
                <p className="text-gray-600 text-sm">Our website is hosted on secure servers that may log standard web server information for security and maintenance purposes.</p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Right to Access</h3>
                <p className="text-gray-600 text-sm">Request information about what personal data we hold about you</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Right to Deletion</h3>
                <p className="text-gray-600 text-sm">Request deletion of any personal data we may have collected</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Right to Opt-Out</h3>
                <p className="text-gray-600 text-sm">Opt-out of analytics tracking and personalized advertising</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Right to Correction</h3>
                <p className="text-gray-600 text-sm">Request corrections to any inaccurate personal data</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect the information we collect. 
              Our website uses HTTPS encryption to secure data transmission between your browser and our servers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your 
              information, we cannot guarantee absolute security of any information transmitted to our website.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is designed for a general audience and is not directed at children under 13 years of age. 
              We do not knowingly collect personal information from children under 13. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us so we can delete 
              such information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
              legal requirements, or other factors. When we make changes, we will update the "Last Updated" date 
              at the bottom of this page. We encourage you to review this Privacy Policy periodically to stay 
              informed about how we protect your information.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:support@tekohub.com" className="text-blue-600 hover:underline">support@tekohub.com</a>
              </p>
              <p className="text-gray-600 text-sm">
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
          </section>

          {/* Key Point Summary */}
          <div className="bg-green-50 border-2 border-green-300 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">Key Privacy Points</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    Your health data (weight, height, BP, etc.) is NEVER collected or stored
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    All calculations happen locally in your browser
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    We only collect anonymous usage data for website improvement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    You can opt-out of analytics and personalized ads
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <section className="text-center">
            <h3 className="font-bold text-gray-900 mb-4">Related Pages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/disclaimer" className="px-6 py-3 bg-yellow-100 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-200 transition">
                Disclaimer
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