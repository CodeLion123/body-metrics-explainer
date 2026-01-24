import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Body Metrics Explainer - Understand Your Health Metrics</title>
        <meta name="description" content="Comprehensive explanations of body metrics including BMI, blood pressure, and more. Educational health tool." />
        <meta name="keywords" content="BMI, blood pressure, health metrics, body analysis" />
      </Head>
      <Layout>
        <div className="space-y-16">
          {/* Hero Section */}
          <section className="text-center py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl shadow-md border border-blue-100">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
              Body Metrics Explainer
            </h1>
            <p className="text-2xl text-gray-700 mb-4 font-semibold">Understand your health metrics with clarity</p>
            <p className="text-lg text-gray-600 mb-8">Science-based explanations and interactive calculators</p>
            <p className="text-gray-500 italic font-medium">Educational purposes only. Not a substitute for professional medical advice.</p>
          </section>

          {/* CTA Banner */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-12 shadow-xl text-white text-center border-2 border-blue-700">
            <h2 className="text-4xl font-bold mb-4">Ready to Learn About Your Health?</h2>
            <p className="text-lg mb-8">Use our interactive calculators to understand your body metrics</p>
            <Link href="/body-metrics" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Get Started Now →
            </Link>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Health Metrics Tools</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {/* BMI Calculator */}
              <Link href="/body-metrics#bmi">
                <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition cursor-pointer hover:-translate-y-2 transform border-t-4 border-blue-500 group">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition">📊</div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-3 group-hover:text-blue-500 transition">BMI Calculator</h3>
                  <p className="text-gray-600 mb-6">Calculate and understand your Body Mass Index with detailed health classifications</p>
                  <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Start Calculating
                  </div>
                </div>
              </Link>

              {/* Blood Pressure Tool */}
              <Link href="/body-metrics#bp">
                <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition cursor-pointer hover:-translate-y-2 transform border-t-4 border-red-500 group">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition">❤️</div>
                  <h3 className="text-2xl font-bold text-red-700 mb-3 group-hover:text-red-500 transition">Blood Pressure Guide</h3>
                  <p className="text-gray-600 mb-6">Learn about blood pressure categories and what they mean for your health</p>
                  <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition">
                    Explore Ranges
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-12 border-2 border-blue-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Evidence-Based</h3>
                <p className="text-gray-700">Clear explanations based on medical standards and WHO/CDC guidelines.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Privacy Focused</h3>
                <p className="text-gray-700">Your data is never stored. All calculations happen locally on your device.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Instant Results</h3>
                <p className="text-gray-700">Get immediate analysis with detailed information in real-time.</p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-white rounded-2xl p-12 shadow-md border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Enter Your Measurements</h3>
                    <p className="text-gray-700 mt-1">Input your health data into our simple calculators</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-600 text-white font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Get Instant Results</h3>
                    <p className="text-gray-700 mt-1">Receive calculations with color-coded categories</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-pink-600 text-white font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Learn & Understand</h3>
                    <p className="text-gray-700 mt-1">Access detailed educational information about your metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section className="bg-gradient-to-r from-white via-blue-50 to-white rounded-2xl p-12 shadow-lg border border-blue-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Examples</h2>
            <p className="text-gray-600 mb-8 text-lg">Explore sample calculations to understand different scenarios:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/values/bmi/18.5">
                <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transform hover:scale-105 transition cursor-pointer">
                  <div className="text-2xl font-bold text-blue-600 mb-2">BMI 18.5</div>
                  <p className="text-gray-700 font-semibold">Normal Weight</p>
                  <p className="text-gray-600 text-sm">Healthy weight range</p>
                </div>
              </Link>
              <Link href="/values/bmi/25">
                <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transform hover:scale-105 transition cursor-pointer">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">BMI 25</div>
                  <p className="text-gray-700 font-semibold">Overweight</p>
                  <p className="text-gray-600 text-sm">Above healthy range</p>
                </div>
              </Link>
              <Link href="/values/bmi/30">
                <div className="bg-gray-50 rounded-lg shadow p-6 hover:shadow-lg transform hover:scale-105 transition cursor-pointer">
                  <div className="text-2xl font-bold text-red-600 mb-2">BMI 30</div>
                  <p className="text-gray-700 font-semibold">Obese</p>
                  <p className="text-gray-600 text-sm">Requires attention</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
