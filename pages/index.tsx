import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Body Metrics Explainer - Free BMI Calculator, Blood Pressure Guide & Health Tools</title>
        <meta name="description" content="Free online health calculators including BMI calculator, blood pressure checker, and waist-to-hip ratio tool. Get instant results with detailed explanations based on established medical standards." />
        <meta name="keywords" content="BMI calculator, blood pressure checker, health metrics, body mass index, waist-to-hip ratio, health assessment tools, free health calculators" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Body Metrics Explainer - Free Health Calculators & Tools" />
        <meta property="og:description" content="Calculate and understand your BMI, blood pressure, and other health metrics with our free, science-based tools." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://metrics.tekohub.com" />
      </Head>
      <Layout>
        <div className="space-y-16">
          {/* Hero Section */}
          <section className="text-center py-16 md:py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl shadow-md border border-blue-100">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
              Body Metrics Explainer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-semibold max-w-3xl mx-auto px-4">
              Free Health Calculators & Educational Tools
            </p>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto px-4">
              Calculate your BMI, understand blood pressure readings, and assess body composition with our science-based tools. Get instant results with detailed explanations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
              <Link href="/body-metrics" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-lg">
                Try Our Calculators
              </Link>
              <Link href="/about" aria-label="Learn more about our BMI and health metrics platform" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg border-2 border-blue-600">
                <span className="sr-only">Learn more about our BMI and health metrics platform</span>
                Learn More
              </Link>
            </div>
            <p className="text-gray-500 italic text-sm px-4">Educational purposes only. Not a substitute for professional medical advice.</p>
          </section>

          {/* Ad Placement Zone 1 - After Hero
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Tools Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Free Health Metrics Tools</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our calculators use standard medical formulas and established health classifications recognized by healthcare professionals worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {/* BMI Calculator */}
              <Link href="/body-metrics#bmi">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition cursor-pointer hover:-translate-y-2 transform border-t-4 border-blue-500 group h-full">
                  <div className="text-5xl lg:text-6xl mb-4 group-hover:scale-110 transition">📊</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-700 mb-3 group-hover:text-blue-500 transition">BMI Calculator</h3>
                  <p className="text-gray-600 mb-4">Calculate your Body Mass Index and understand what it means for your health. Get personalized weight category classifications.</p>
                  <ul className="text-sm text-gray-500 mb-6 space-y-1">
                    <li>- Metric & Imperial units</li>
                    <li>- Standard medical categories</li>
                    <li>- Instant detailed results</li>
                  </ul>
                  <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                    Calculate BMI
                  </div>
                </div>
              </Link>

              {/* Blood Pressure Tool */}
              <Link href="/body-metrics#bp">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition cursor-pointer hover:-translate-y-2 transform border-t-4 border-red-500 group h-full">
                  <div className="text-5xl lg:text-6xl mb-4 group-hover:scale-110 transition">❤️</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-red-700 mb-3 group-hover:text-red-500 transition">Blood Pressure Guide</h3>
                  <p className="text-gray-600 mb-4">Understand your blood pressure readings with our comprehensive guide. Learn about systolic and diastolic values.</p>
                  <ul className="text-sm text-gray-500 mb-6 space-y-1">
                    <li>- Standard medical guidelines</li>
                    <li>- Risk level assessment</li>
                    <li>- Educational information</li>
                  </ul>
                  <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition">
                    Check Blood Pressure
                  </div>
                </div>
              </Link>

              {/* Waist-to-Hip Ratio Tool */}
              <Link href="/body-metrics#whr">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition cursor-pointer hover:-translate-y-2 transform border-t-4 border-purple-500 group h-full">
                  <div className="text-5xl lg:text-6xl mb-4 group-hover:scale-110 transition">📏</div>
                  <h3 className="text-xl lg:text-2xl font-bold text-purple-700 mb-3 group-hover:text-purple-500 transition">Waist-to-Hip Ratio</h3>
                  <p className="text-gray-600 mb-4">Assess your body fat distribution and understand associated health risks. A key indicator of cardiovascular health.</p>
                  <ul className="text-sm text-gray-500 mb-6 space-y-1">
                    <li>- Gender-specific analysis</li>
                    <li>- Health risk categories</li>
                    <li>- Body shape assessment</li>
                  </ul>
                  <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-purple-700 transition">
                    Calculate Ratio
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Educational Content Section - What is BMI */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Understanding Body Mass Index (BMI)</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Body Mass Index (BMI)</strong> is a widely used measurement that helps assess whether a person has a healthy body weight relative to their height. Developed in the 19th century by Belgian mathematician Adolphe Quetelet, BMI remains one of the most common screening tools used by healthcare professionals worldwide.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The formula for calculating BMI is simple: divide your weight in kilograms by your height in meters squared (kg/m²). For those using imperial measurements, the formula is: (weight in pounds × 703) ÷ (height in inches)².
                </p>
                <p className="text-gray-700 leading-relaxed">
                  While BMI is a useful screening tool, it has limitations. It does not directly measure body fat or account for factors like muscle mass, bone density, age, sex, or ethnicity. Athletes, for example, may have a high BMI due to increased muscle mass rather than excess fat.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">BMI Categories (Standard Classification)</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <span className="font-bold text-blue-700 w-32">Under 18.5</span>
                    <span className="text-gray-700">Underweight</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <span className="font-bold text-green-700 w-32">18.5 - 24.9</span>
                    <span className="text-gray-700">Normal weight</span>
                  </div>
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <span className="font-bold text-yellow-700 w-32">25.0 - 29.9</span>
                    <span className="text-gray-700">Overweight</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <span className="font-bold text-orange-700 w-32">30.0 - 34.9</span>
                    <span className="text-gray-700">Obese Class I</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <span className="font-bold text-red-700 w-32">35.0+</span>
                    <span className="text-gray-700">Obese Class II/III</span>
                  </div>
                </div>
                <Link href="/body-metrics#bmi" className="inline-block mt-6 text-blue-600 font-semibold hover:text-blue-800 transition">
                  Calculate Your BMI Now →
                </Link>
              </div>
            </div>
          </section>

          {/* Ad Placement Zone 2 - Mid Content
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Blood Pressure Educational Content */}
          <section className="bg-gradient-to-r from-red-50 via-white to-red-50 rounded-2xl p-8 lg:p-12 border border-red-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Understanding Blood Pressure Readings</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Do the Numbers Mean?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Blood pressure is measured in millimeters of mercury (mmHg) and consists of two numbers. The <strong>systolic pressure</strong> (top number) measures the pressure in your arteries when your heart beats. The <strong>diastolic pressure</strong> (bottom number) measures the pressure when your heart rests between beats.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A reading of 120/80 mmHg is often cited as "normal" blood pressure. However, optimal blood pressure is typically considered to be below 120/80 mmHg. High blood pressure, or hypertension, is a major risk factor for heart disease, stroke, and kidney disease.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Many factors can affect blood pressure, including stress, physical activity, caffeine, medications, and time of day. For accurate readings, it's recommended to measure blood pressure at the same time each day while relaxed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Blood Pressure Categories</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-bold text-green-700">Normal</div>
                    <div className="text-gray-600 text-sm">Less than 120/80 mmHg</div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="font-bold text-yellow-700">Elevated</div>
                    <div className="text-gray-600 text-sm">120-129 / Less than 80 mmHg</div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="font-bold text-orange-700">High Blood Pressure Stage 1</div>
                    <div className="text-gray-600 text-sm">130-139 / 80-89 mmHg</div>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="font-bold text-red-700">High Blood Pressure Stage 2</div>
                    <div className="text-gray-600 text-sm">140+ / 90+ mmHg</div>
                  </div>
                  <div className="p-4 bg-red-100 rounded-lg border border-red-300">
                    <div className="font-bold text-red-800">Hypertensive Crisis</div>
                    <div className="text-gray-600 text-sm">Higher than 180/120 mmHg - Seek medical attention</div>
                  </div>
                </div>
                <Link href="/body-metrics#bp" className="inline-block mt-6 text-red-600 font-semibold hover:text-red-800 transition">
                  Check Your Blood Pressure Category →
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-8 lg:p-12 border-2 border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Why Use Body Metrics Explainer?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Trusted by thousands of users for accurate, educational health information.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Evidence-Based Information</h3>
                <p className="text-gray-700">All our calculations and explanations are based on established medical standards and recognized health guidelines.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">100% Privacy Focused</h3>
                <p className="text-gray-700">Your health data is never stored or shared. All calculations happen locally in your browser for complete privacy.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Instant Results</h3>
                <p className="text-gray-700">Get immediate, detailed analysis with color-coded results and comprehensive educational information.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Mobile Friendly</h3>
                <p className="text-gray-700">Access our tools from any device. Our responsive design works perfectly on phones, tablets, and desktops.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Free to Use</h3>
                <p className="text-gray-700">All our health calculators and educational content are completely free. No registration or payment required.</p>
              </div>
              <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">Educational Focus</h3>
                <p className="text-gray-700">We don't just give you numbers—we help you understand what they mean and why they matter for your health.</p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-md border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">How It Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Get your health metrics in three simple steps
            </p>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-xl">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Choose Your Calculator</h3>
                    <p className="text-gray-700 mt-2">Select from BMI Calculator, Blood Pressure Guide, or Waist-to-Hip Ratio tool based on what you want to measure.</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white font-bold text-xl">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Enter Your Measurements</h3>
                    <p className="text-gray-700 mt-2">Input your data using our user-friendly forms. Choose between metric (kg, cm) or imperial (lbs, inches) units.</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-600">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-600 text-white font-bold text-xl">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Get Results & Learn</h3>
                    <p className="text-gray-700 mt-2">Receive instant, color-coded results with detailed explanations about what your numbers mean and health recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/body-metrics" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg shadow-lg">
                Start Using Our Tools
              </Link>
            </div>
          </section>

          {/* Ad Placement Zone 3 - Before FAQ
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* FAQ Section */}
          <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Common questions about our health calculators and body metrics
            </p>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is BMI and why is it important?</h3>
                <p className="text-gray-700">BMI (Body Mass Index) is a numerical value calculated from your height and weight. It's used as a screening tool to identify potential weight-related health issues. While not a direct measure of body fat, BMI can indicate whether you're underweight, normal weight, overweight, or obese according to standard medical classifications.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How accurate are online BMI calculators?</h3>
                <p className="text-gray-700">Online BMI calculators, including ours, use the standard BMI formula and provide mathematically accurate results. However, BMI as a measurement has limitations—it doesn't distinguish between muscle and fat mass. For a complete health assessment, consult a healthcare professional who can consider additional factors.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What is a healthy blood pressure reading?</h3>
                <p className="text-gray-700">According to standard medical guidelines, normal blood pressure is less than 120/80 mmHg. Elevated blood pressure is 120-129 systolic and less than 80 diastolic. High blood pressure Stage 1 is 130-139/80-89, and Stage 2 is 140/90 or higher. Readings above 180/120 require immediate medical attention.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why should I know my waist-to-hip ratio?</h3>
                <p className="text-gray-700">Waist-to-hip ratio (WHR) is an indicator of body fat distribution. Carrying more weight around your waist (apple-shaped) is associated with higher risks of heart disease and type 2 diabetes compared to carrying weight around your hips (pear-shaped). Medical professionals consider WHR an important health indicator alongside BMI.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is my personal health data safe on this website?</h3>
                <p className="text-gray-700">Yes, absolutely. All calculations are performed locally in your browser. We do not store, collect, or transmit any of your health measurements to our servers. Your privacy is our priority. You can use our tools with complete confidence that your data remains private.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can these tools replace medical advice?</h3>
                <p className="text-gray-700">No. Our calculators are educational tools designed to help you understand health metrics. They are not intended to diagnose, treat, or replace professional medical advice. Always consult with a qualified healthcare provider for medical concerns, health decisions, or before starting any health program.</p>
              </div>
            </div>
          </section>

          {/* Quick Examples Section */}
          <section className="bg-gradient-to-r from-white via-blue-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Sample Results</h2>
            <p className="text-gray-600 mb-8 text-lg">See what different BMI values mean with these examples:</p>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/values/bmi/18.5">
                <div className="bg-green-50 rounded-lg shadow p-6 hover:shadow-lg transform hover:scale-105 transition cursor-pointer border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">BMI 18.5</div>
                  <p className="text-gray-700 font-semibold">Normal Weight</p>
                  <p className="text-gray-600 text-sm">Lower end of healthy range</p>
                </div>
              </Link>
              <Link href="/values/bmi/22">
                <div className="bg-green-50 rounded-lg shadow p-6 hover:shadow-lg transform hover:scale-105 transition cursor-pointer border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">BMI 22</div>
                  <p className="text-gray-700 font-semibold">Ideal Weight</p>
                  <p className="text-gray-600 text-sm">Middle of healthy range</p>
                </div>
              </Link>
              <Link href="/values/bmi/25">
                <div className="bg-yellow-50 rounded-lg shadow p-6 hover:shadow-lg transform hover:scale-105 transition cursor-pointer border border-yellow-200">
                  <div className="text-2xl font-bold text-amber-600 mb-2">BMI 25</div>
                  <p className="text-gray-700 font-semibold">Overweight</p>
                  <p className="text-gray-600 text-sm">Above healthy range</p>
                </div>
              </Link>
              <Link href="/values/bmi/30">
                <div className="bg-red-50 rounded-lg shadow p-6 hover:shadow-lg transform hover:scale-105 transition cursor-pointer border border-red-200">
                  <div className="text-2xl font-bold text-red-600 mb-2">BMI 30</div>
                  <p className="text-gray-700 font-semibold">Obese</p>
                  <p className="text-gray-600 text-sm">Requires attention</p>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 lg:p-12 shadow-xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn About Your Health Metrics?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Use our free, science-based calculators to understand your BMI, blood pressure, and more. Get instant results with detailed explanations.
            </p>
            <Link href="/body-metrics" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg shadow-lg">
              Get Started Now - It's Free
            </Link>
          </section>

          {/* Trust Signals */}
          <section className="text-center py-8">
            <p className="text-gray-700 mb-6">Our tools are built on:</p>
            <div className="flex flex-wrap justify-center gap-8 items-center text-gray-600 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">📊</span>
                <span className="text-sm">Standard Medical Formulas</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">📚</span>
                <span className="text-sm">Established Health Guidelines</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">🔬</span>
                <span className="text-sm">Evidence-Based Classifications</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 max-w-2xl mx-auto">
              For educational purposes only. Always consult healthcare professionals for medical advice.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
}
