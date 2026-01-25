import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import { calculateBMI, getBMICategory, getBloodPressureCategory, calculateWHR, getWHRCategory } from '../lib/calculations';

const getColorTailwind = (color: string) => {
  const colors: { [key: string]: string } = {
    green: 'bg-green-100 text-green-800 border-green-300',
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    orange: 'bg-orange-100 text-orange-800 border-orange-300',
    red: 'bg-red-100 text-red-800 border-red-300',
    gray: 'bg-gray-100 text-gray-800 border-gray-300',
  };
  return colors[color] || colors.gray;
};

export default function Tool() {
  const [activeTab, setActiveTab] = useState('bmi');

  // BMI State
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [bmiResult, setBmiResult] = useState<any>(null);

  // BP State
  const [systolic, setSystolic] = useState(120);
  const [diastolic, setDiastolic] = useState(80);
  const [bpResult, setBpResult] = useState<any>(null);

  // WHR State
  const [waist, setWaist] = useState(80);
  const [hip, setHip] = useState(100);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [whrResult, setWhrResult] = useState<any>(null);

  const handleBMICalculate = () => {
    if (weight > 0 && height > 0) {
      const bmi = calculateBMI(weight, height);
      const category = getBMICategory(bmi);
      setBmiResult({ bmi, ...category });
    }
  };

  const handleBPCalculate = () => {
    if (systolic >= 0 && diastolic >= 0) {
      const category = getBloodPressureCategory(systolic, diastolic);
      setBpResult({ systolic, diastolic, ...category });
    }
  };

  const handleWHRCalculate = () => {
    if (waist > 0 && hip > 0) {
      const whr = calculateWHR(waist, hip);
      const category = getWHRCategory(whr, gender);
      setWhrResult({ whr, ...category });
    }
  };

  return (
    <>
      <Head>
        <title>Free Health Calculators - BMI, Blood Pressure & Waist-to-Hip Ratio | Body Metrics</title>
        <meta name="description" content="Free online health calculators. Calculate your BMI, check blood pressure category, and assess waist-to-hip ratio. Get instant results with detailed explanations based on established medical standards." />
        <meta name="keywords" content="BMI calculator, blood pressure calculator, waist to hip ratio, health calculator, body mass index, free health tools" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://metrics.tekohub.com/body-metrics" />
      </Head>
      <Layout>
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center mb-8 py-6">
            <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Health Metrics Calculator</h1>
            <p className="text-xl text-gray-600 font-semibold max-w-2xl mx-auto">
              Calculate and understand your body metrics with instant results based on established medical standards
            </p>
          </div>

          {/* Ad Placement Zone - Top
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Tab Navigation */}
          <div className="flex gap-2 border-b-2 border-gray-300 bg-white rounded-t-2xl p-2 shadow-lg sticky top-20 z-40 overflow-x-auto" id="bmi">
            {[
              { id: 'bmi', label: '📊 BMI Calculator', color: 'blue' },
              { id: 'bp', label: '❤️ Blood Pressure', color: 'red' },
              { id: 'whr', label: '📏 Waist-to-Hip', color: 'purple' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-bold text-base md:text-lg transition rounded-lg whitespace-nowrap ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r from-${tab.color}-600 to-${tab.color}-700 text-white shadow-lg`
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* BMI Calculator */}
          {activeTab === 'bmi' && (
            <div className="space-y-8">
              <div className="card-gradient shadow-2xl rounded-b-2xl" id="bmi-calc">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">📊 BMI Calculator</h2>
                <p className="text-gray-600 mb-8">Calculate your Body Mass Index based on standard medical classifications</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          value={weight}
                          onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                          placeholder="Enter your weight"
                        />
                        <p className="text-sm text-gray-500 mt-1">Current: {weight} kg ({(weight * 2.205).toFixed(1)} lbs)</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Height (cm)
                        </label>
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                          placeholder="Enter your height"
                        />
                        <p className="text-sm text-gray-500 mt-1">Current: {height} cm ({Math.floor(height/2.54/12)}'{Math.round(height/2.54%12)}")</p>
                      </div>

                      <button
                        onClick={handleBMICalculate}
                        className="w-full btn-primary bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 text-lg"
                      >
                        📊 Calculate My BMI
                      </button>
                    </div>
                  </div>

                  {bmiResult && (
                    <div className={`rounded-xl p-6 border-2 ${getColorTailwind(bmiResult.color)}`}>
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold mb-2">{bmiResult.bmi}</div>
                        <div className="text-2xl font-bold">{bmiResult.category}</div>
                      </div>
                      <p className="text-sm leading-relaxed mb-6">{bmiResult.description}</p>

                      <div className="bg-white bg-opacity-60 rounded-lg p-4 space-y-2">
                        <h4 className="font-bold text-gray-800">BMI Categories:</h4>
                        <div className="text-sm space-y-1">
                          <p className="flex justify-between"><span>Underweight:</span> <span>&lt; 18.5</span></p>
                          <p className="flex justify-between"><span>Normal:</span> <span>18.5 - 24.9</span></p>
                          <p className="flex justify-between"><span>Overweight:</span> <span>25 - 29.9</span></p>
                          <p className="flex justify-between"><span>Obese Class I:</span> <span>30 - 34.9</span></p>
                          <p className="flex justify-between"><span>Obese Class II:</span> <span>35 - 39.9</span></p>
                          <p className="flex justify-between"><span>Severe Obesity:</span> <span>≥ 40</span></p>
                        </div>
                      </div>

                      <Link href={`/values/bmi/${bmiResult.bmi}`} className="block mt-4 text-center text-blue-600 font-semibold hover:underline">
                        Learn more about BMI {bmiResult.bmi} →
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* BMI Educational Content */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding BMI</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      <strong>Body Mass Index (BMI)</strong> is a simple calculation using your height and weight. 
                      The formula is: BMI = weight (kg) / height (m)². It's used as a screening tool to indicate 
                      whether a person has a healthy body weight.
                    </p>
                    <p className="text-gray-700">
                      While BMI is useful for population-level assessments, it has limitations for individuals. 
                      It doesn't distinguish between muscle and fat mass, so athletes may have a high BMI without excess body fat.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3">BMI Limitations</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Does not measure body fat directly</li>
                      <li>• May overestimate fat in muscular individuals</li>
                      <li>• May underestimate fat in elderly</li>
                      <li>• Does not account for fat distribution</li>
                      <li>• Different standards may apply for different ethnicities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blood Pressure Calculator */}
          {activeTab === 'bp' && (
            <div className="space-y-8">
              <div className="card-gradient shadow-2xl rounded-b-2xl" id="bp">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">❤️ Blood Pressure Checker</h2>
                <p className="text-gray-600 mb-8">Check your blood pressure category based on standard medical guidelines</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Systolic Pressure (mmHg) - Top Number
                        </label>
                        <input
                          type="number"
                          value={systolic}
                          onChange={(e) => setSystolic(parseInt(e.target.value) || 0)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                          placeholder="Enter systolic pressure"
                        />
                        <p className="text-sm text-gray-500 mt-1">Pressure when heart beats</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Diastolic Pressure (mmHg) - Bottom Number
                        </label>
                        <input
                          type="number"
                          value={diastolic}
                          onChange={(e) => setDiastolic(parseInt(e.target.value) || 0)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
                          placeholder="Enter diastolic pressure"
                        />
                        <p className="text-sm text-gray-500 mt-1">Pressure when heart rests</p>
                      </div>

                      <button
                        onClick={handleBPCalculate}
                        className="w-full btn-red bg-gradient-to-r from-red-600 to-red-700 text-white py-4 text-lg"
                      >
                        ❤️ Check Blood Pressure Category
                      </button>
                    </div>
                  </div>

                  {bpResult && (
                    <div className={`rounded-xl p-6 border-2 ${getColorTailwind(bpResult.color)}`}>
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold mb-2">{bpResult.systolic}/{bpResult.diastolic}</div>
                        <p className="text-sm text-gray-600 mb-2">mmHg</p>
                        <div className="text-2xl font-bold">{bpResult.category}</div>
                      </div>
                      <p className="text-sm leading-relaxed mb-6">{bpResult.description}</p>

                      <div className="bg-white bg-opacity-60 rounded-lg p-4 space-y-2">
                        <h4 className="font-bold text-gray-800">BP Categories:</h4>
                        <div className="text-sm space-y-1">
                          <p className="flex justify-between"><span>Normal:</span> <span>&lt;120/&lt;80</span></p>
                          <p className="flex justify-between"><span>Elevated:</span> <span>120-129/&lt;80</span></p>
                          <p className="flex justify-between"><span>Stage 1:</span> <span>130-139/80-89</span></p>
                          <p className="flex justify-between"><span>Stage 2:</span> <span>≥140/≥90</span></p>
                          <p className="flex justify-between text-red-700"><span>Crisis:</span> <span>&gt;180/&gt;120</span></p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* BP Educational Content */}
              <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Blood Pressure</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      <strong>Blood pressure</strong> is the force of blood pushing against the walls of your arteries. 
                      It's measured in millimeters of mercury (mmHg) with two numbers: systolic (pressure during heartbeat) 
                      over diastolic (pressure between beats).
                    </p>
                    <p className="text-gray-700">
                      High blood pressure (hypertension) is a major risk factor for heart disease, stroke, and kidney disease. 
                      Regular monitoring and lifestyle changes can help maintain healthy blood pressure levels.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <h4 className="font-bold text-gray-900 mb-3">Tips for Accurate Reading</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Rest for 5 minutes before measuring</li>
                      <li>• Avoid caffeine 30 minutes before</li>
                      <li>• Sit with back supported, feet flat</li>
                      <li>• Arm at heart level on a flat surface</li>
                      <li>• Take multiple readings at same time daily</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* WHR Calculator */}
          {activeTab === 'whr' && (
            <div className="space-y-8">
              <div className="card-gradient shadow-2xl rounded-b-2xl" id="whr">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700">📏 Waist-to-Hip Ratio Calculator</h2>
                <p className="text-gray-600 mb-8">Assess your body fat distribution and health risk</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Gender
                        </label>
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        <p className="text-sm text-gray-500 mt-1">WHR thresholds differ by gender</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Waist Circumference (cm)
                        </label>
                        <input
                          type="number"
                          value={waist}
                          onChange={(e) => setWaist(parseFloat(e.target.value) || 0)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
                          placeholder="Measure at narrowest point"
                        />
                        <p className="text-sm text-gray-500 mt-1">Measure at your natural waistline</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Hip Circumference (cm)
                        </label>
                        <input
                          type="number"
                          value={hip}
                          onChange={(e) => setHip(parseFloat(e.target.value) || 0)}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
                          placeholder="Measure at widest point"
                        />
                        <p className="text-sm text-gray-500 mt-1">Measure at the widest part of your hips</p>
                      </div>

                      <button
                        onClick={handleWHRCalculate}
                        className="w-full btn-secondary bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 text-lg"
                      >
                        📏 Calculate Waist-to-Hip Ratio
                      </button>
                    </div>
                  </div>

                  {whrResult && (
                    <div className={`rounded-xl p-6 border-2 ${getColorTailwind(whrResult.color)}`}>
                      <div className="text-center mb-4">
                        <div className="text-6xl font-bold mb-2">{whrResult.whr}</div>
                        <div className="text-2xl font-bold">{whrResult.category}</div>
                      </div>
                      <p className="text-sm leading-relaxed mb-6">{whrResult.description}</p>

                      <div className="bg-white bg-opacity-60 rounded-lg p-4 space-y-2">
                        <h4 className="font-bold text-gray-800">WHR Ranges ({gender === 'male' ? 'Male' : 'Female'}):</h4>
                        <div className="text-sm space-y-1">
                          {gender === 'male' ? (
                            <>
                              <p className="flex justify-between"><span>Low Risk:</span> <span>&lt; 0.90</span></p>
                              <p className="flex justify-between"><span>Moderate Risk:</span> <span>0.90 - 0.94</span></p>
                              <p className="flex justify-between"><span>High Risk:</span> <span>≥ 0.95</span></p>
                            </>
                          ) : (
                            <>
                              <p className="flex justify-between"><span>Low Risk:</span> <span>&lt; 0.80</span></p>
                              <p className="flex justify-between"><span>Moderate Risk:</span> <span>0.80 - 0.84</span></p>
                              <p className="flex justify-between"><span>High Risk:</span> <span>≥ 0.85</span></p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* WHR Educational Content */}
              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Waist-to-Hip Ratio</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      <strong>Waist-to-Hip Ratio (WHR)</strong> is calculated by dividing your waist circumference by 
                      your hip circumference. It's an indicator of body fat distribution and can help assess health risks 
                      associated with carrying excess weight around the midsection.
                    </p>
                    <p className="text-gray-700">
                      People who carry more weight around their waist ("apple-shaped") are at higher risk for heart disease 
                      and type 2 diabetes compared to those who carry weight around their hips ("pear-shaped").
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-bold text-gray-900 mb-3">How to Measure</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li><strong>Waist:</strong> Measure at your natural waistline, usually at the level of the navel or the narrowest point</li>
                      <li><strong>Hip:</strong> Measure at the widest part of your hips/buttocks</li>
                      <li>• Stand relaxed, don't hold your breath</li>
                      <li>• Use a flexible measuring tape</li>
                      <li>• Keep tape snug but not tight</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ad Placement Zone - Middle
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Why These Metrics Matter */}
          <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Health Metrics Matter</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-gray-900 mb-2">Early Detection</h3>
                <p className="text-gray-600 text-sm">
                  Regular monitoring of health metrics can help identify potential health issues before they become serious problems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">Track Progress</h3>
                <p className="text-gray-600 text-sm">
                  Understanding your baseline metrics allows you to track improvements when making lifestyle changes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold text-gray-900 mb-2">Informed Discussions</h3>
                <p className="text-gray-600 text-sm">
                  Knowing your metrics helps you have more informed conversations with healthcare providers.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ Medical Disclaimer</h3>
            <p className="text-yellow-700 text-sm mb-4">
              These calculators are for educational purposes only and should not be considered medical advice, diagnosis, or treatment. 
              The results are based on standard medical formulas and established health guidelines, but individual health needs vary.
            </p>
            <p className="text-yellow-700 text-sm">
              <strong>Always consult with a qualified healthcare professional</strong> for personalized health assessments, 
              medical diagnoses, and treatment recommendations. If you have concerning symptoms or readings, please seek 
              medical attention promptly.
            </p>
            <Link href="/disclaimer" className="inline-block mt-4 text-yellow-800 font-semibold hover:underline">
              Read Full Disclaimer →
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
