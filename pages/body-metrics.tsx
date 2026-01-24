import Head from 'next/head';
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
        <title>Body Metrics Calculator - BMI, Blood Pressure & More</title>
        <meta name="description" content="Calculate and understand your BMI, blood pressure, and waist-to-hip ratio with instant results and detailed explanations." />
      </Head>
      <Layout>
        <div className="space-y-8 animate-fadeIn">
          <div className="text-center mb-12 py-8">
            <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Health Metrics Calculator</h1>
            <p className="text-xl text-gray-600 font-semibold">Calculate and understand your body metrics with instant results</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 border-b-2 border-gray-300 bg-white rounded-t-2xl p-2 shadow-lg sticky top-20 z-40 overflow-x-auto" id="bmi">
            {[
              { id: 'bmi', label: 'BMI Calculator' },
              { id: 'bp', label: 'Blood Pressure' },
              { id: 'whr', label: 'Waist-to-Hip Ratio' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-bold text-lg transition rounded-lg whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* BMI Calculator */}
          {activeTab === 'bmi' && (
            <div className="card-gradient shadow-2xl rounded-b-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">📊 BMI Calculator</h2>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-1">Current: {weight} kg</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-1">Current: {height} cm</p>
                    </div>

                    <button
                      onClick={handleBMICalculate}
                      className="w-full btn-primary bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    >
                      📊 Calculate BMI
                    </button>
                  </div>
                </div>

                {bmiResult && (
                  <div className={`rounded-lg p-6 border-2 ${getColorTailwind(bmiResult.color)}`}>
                    <div className="text-5xl font-bold mb-4">{bmiResult.bmi}</div>
                    <div className="text-2xl font-bold mb-2">{bmiResult.category}</div>
                    <p className="text-sm leading-relaxed mb-6">{bmiResult.description}</p>

                    <div className="bg-white bg-opacity-50 rounded p-4 space-y-2">
                      <h4 className="font-bold">BMI Ranges:</h4>
                      <div className="text-sm space-y-1">
                        <p>Underweight: &lt; 18.5</p>
                        <p>Normal: 18.5 - 24.9</p>
                        <p>Overweight: 25 - 29.9</p>
                        <p>Obese Class I: 30 - 34.9</p>
                        <p>Obese Class II: 35 - 39.9</p>
                        <p>Severe Obesity: ≥ 40</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Blood Pressure Calculator */}
          {activeTab === 'bp' && (
            <div className="card-gradient shadow-2xl rounded-b-2xl" id="bp">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-700">❤️ Blood Pressure Calculator</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Systolic (mmHg)
                      </label>
                      <input
                        type="number"
                        value={systolic}
                        onChange={(e) => setSystolic(parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-1">Current: {systolic} mmHg</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Diastolic (mmHg)
                      </label>
                      <input
                        type="number"
                        value={diastolic}
                        onChange={(e) => setDiastolic(parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-1">Current: {diastolic} mmHg</p>
                    </div>

                    <button
                      onClick={handleBPCalculate}
                      className="w-full btn-red bg-gradient-to-r from-red-600 to-red-700 text-white"
                    >
                      ❤️ Analyze Blood Pressure
                    </button>
                  </div>
                </div>

                {bpResult && (
                  <div className={`rounded-lg p-6 border-2 ${getColorTailwind(bpResult.color)}`}>
                    <div className="text-5xl font-bold mb-4">{bpResult.systolic}/{bpResult.diastolic}</div>
                    <div className="text-2xl font-bold mb-2">{bpResult.category}</div>
                    <p className="text-sm leading-relaxed mb-6">{bpResult.description}</p>

                    <div className="bg-white bg-opacity-50 rounded p-4 space-y-2">
                      <h4 className="font-bold">BP Categories:</h4>
                      <div className="text-sm space-y-1">
                        <p>Normal: &lt;120/&lt;80</p>
                        <p>Elevated: 120-129 &amp; &lt;80</p>
                        <p>Stage 1: 130-139 or 80-89</p>
                        <p>Stage 2: ≥140 or ≥90</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* WHR Calculator */}
          {activeTab === 'whr' && (
            <div className="card-gradient shadow-2xl rounded-b-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700">📏 Waist-to-Hip Ratio Calculator</h2>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Waist (cm)
                      </label>
                      <input
                        type="number"
                        value={waist}
                        onChange={(e) => setWaist(parseFloat(e.target.value) || 0)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-1">Current: {waist} cm</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Hip (cm)
                      </label>
                      <input
                        type="number"
                        value={hip}
                        onChange={(e) => setHip(parseFloat(e.target.value) || 0)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <p className="text-sm text-gray-500 mt-1">Current: {hip} cm</p>
                    </div>

                    <button
                      onClick={handleWHRCalculate}
                      className="w-full btn-secondary bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                    >
                      📏 Calculate WHR
                    </button>
                  </div>
                </div>

                {whrResult && (
                  <div className={`rounded-lg p-6 border-2 ${getColorTailwind(whrResult.color)}`}>
                    <div className="text-5xl font-bold mb-4">{whrResult.whr}</div>
                    <div className="text-2xl font-bold mb-2">{whrResult.category}</div>
                    <p className="text-sm leading-relaxed mb-6">{whrResult.description}</p>

                    <div className="bg-white bg-opacity-50 rounded p-4 space-y-2">
                      <h4 className="font-bold">WHR Ranges ({gender === 'male' ? 'Male' : 'Female'}):</h4>
                      <div className="text-sm space-y-1">
                        {gender === 'male' ? (
                          <>
                            <p>Low Risk: &lt; 0.90</p>
                            <p>Moderate Risk: 0.90 - 0.94</p>
                            <p>High Risk: ≥ 0.95</p>
                          </>
                        ) : (
                          <>
                            <p>Low Risk: &lt; 0.80</p>
                            <p>Moderate Risk: 0.80 - 0.84</p>
                            <p>High Risk: ≥ 0.85</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ Medical Disclaimer</h3>
            <p className="text-yellow-700 text-sm">
              These calculations are for educational purposes only and should not be considered medical advice. 
              Always consult with a qualified healthcare professional for personalized health assessments and recommendations.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
