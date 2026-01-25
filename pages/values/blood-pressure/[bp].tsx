import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getBloodPressureCategory } from '../../../lib/calculations';

export async function getStaticPaths() {
  const paths = [];
  for (let s = 90; s <= 200; s += 10) {
    for (let d = 60; d <= 130; d += 10) {
      paths.push({ params: { bp: `${s}-${d}` }});
    }
  }
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const [systolic, diastolic] = params.bp.split('-').map(Number);
  const category = getBloodPressureCategory(systolic, diastolic);
  return { 
    props: { 
      bp: params.bp,
      systolic,
      diastolic,
      category
    }
  };
}

const getColorClasses = (color: string) => {
  const colors: { [key: string]: { bg: string; text: string; border: string } } = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-300' },
    green: { bg: 'bg-green-50', text: 'text-green-900', border: 'border-green-300' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-900', border: 'border-yellow-300' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-900', border: 'border-orange-300' },
    red: { bg: 'bg-red-50', text: 'text-red-900', border: 'border-red-300' },
  };
  return colors[color] || colors.green;
};

export default function BP({ bp, systolic, diastolic, category }) {
  const colors = getColorClasses(category.color);

  return (
    <>
      <Head>
        <title>Blood Pressure {systolic}/{diastolic} Explained - {category.category} | BP Guide</title>
        <meta name="description" content={`Blood pressure ${systolic}/${diastolic} mmHg is classified as ${category.category}. Learn what this reading means, associated health risks, and recommendations based on standard medical guidelines.`} />
        <meta name="keywords" content={`blood pressure ${systolic}/${diastolic}, ${category.category}, BP ${bp}, hypertension, blood pressure meaning, healthy blood pressure`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://metrics.tekohub.com/values/blood-pressure/${bp}`} />
      </Head>
      <Layout>
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/body-metrics#bp" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Calculator
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Blood Pressure {systolic}/{diastolic} Explained</h1>
            <p className="text-xl text-gray-600">Understanding what a reading of {systolic}/{diastolic} mmHg means for your health</p>
          </div>

          {/* Ad Placement Zone - Top
          <div className="ad-container text-center py-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="min-h-[100px] flex items-center justify-center text-gray-400 text-sm">
              Advertisement
            </div>
          </div>
          */}

          {/* Main Result Card */}
          <div className={`rounded-2xl p-8 md:p-12 border-2 ${colors.bg} ${colors.text} border-${category.color}-300 shadow-lg`}>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide mb-2">Your Blood Pressure Reading</p>
              <div className="text-7xl md:text-8xl font-bold mb-2">{systolic}/{diastolic}</div>
              <p className="text-lg text-gray-600 mb-4">mmHg (millimeters of mercury)</p>
              <div className="inline-block px-6 py-2 rounded-full bg-white bg-opacity-50 mb-6">
                <span className="text-2xl md:text-3xl font-bold">{category.category}</span>
              </div>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
          </div>

          {/* What Does This Mean */}
          <section className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Does {systolic}/{diastolic} Mean?</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                A blood pressure reading of <strong>{systolic}/{diastolic} mmHg</strong> is classified as <strong>{category.category}</strong> 
                according to standard medical guidelines. Blood pressure is measured in millimeters of mercury (mmHg) 
                and consists of two numbers representing different phases of your heartbeat.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-2">Systolic: {systolic} mmHg</h3>
                  <p className="text-gray-700 text-sm">
                    The <strong>top number</strong> measures the pressure in your arteries when your heart beats and pumps blood. 
                    This is the higher of the two numbers and represents the maximum pressure.
                  </p>
                </div>
                <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Diastolic: {diastolic} mmHg</h3>
                  <p className="text-gray-700 text-sm">
                    The <strong>bottom number</strong> measures the pressure in your arteries when your heart rests between beats. 
                    This is the lower of the two numbers and represents the minimum pressure.
                  </p>
                </div>
              </div>
              {systolic < 120 && diastolic < 80 && (
                <p className="text-gray-700 leading-relaxed">
                  Your blood pressure is in the <strong>normal range</strong>. This is the ideal blood pressure level and is associated 
                  with the lowest risk of heart disease and stroke. Continue maintaining a healthy lifestyle with regular exercise, 
                  balanced diet, and stress management.
                </p>
              )}
              {systolic >= 120 && systolic < 130 && diastolic < 80 && (
                <p className="text-gray-700 leading-relaxed">
                  Your blood pressure is <strong>elevated</strong>. While not yet hypertension, this reading indicates your blood pressure 
                  is trending higher than optimal. Without lifestyle changes, elevated blood pressure is likely to develop into high 
                  blood pressure over time.
                </p>
              )}
              {((systolic >= 130 && systolic < 140) || (diastolic >= 80 && diastolic < 90)) && (
                <p className="text-gray-700 leading-relaxed">
                  Your blood pressure falls into <strong>Stage 1 Hypertension</strong>. At this stage, doctors are likely to recommend 
                  lifestyle changes and may consider medication depending on your cardiovascular risk factors. Regular monitoring 
                  and consultation with a healthcare provider is important.
                </p>
              )}
              {(systolic >= 140 || diastolic >= 90) && systolic < 180 && diastolic < 120 && (
                <p className="text-gray-700 leading-relaxed">
                  Your blood pressure indicates <strong>Stage 2 Hypertension</strong>. At this level, doctors typically prescribe 
                  blood pressure medication along with lifestyle modifications. Consistent treatment and monitoring is essential 
                  to reduce the risk of serious health complications.
                </p>
              )}
              {(systolic >= 180 || diastolic >= 120) && (
                <div className="bg-red-100 border-2 border-red-400 p-4 rounded-xl mt-4">
                  <p className="text-red-900 font-bold">
                    ⚠️ WARNING: This reading indicates a <strong>Hypertensive Crisis</strong>. If you are experiencing symptoms such as 
                    chest pain, shortness of breath, back pain, numbness, weakness, change in vision, or difficulty speaking, 
                    call 911 immediately. Even without symptoms, contact your doctor right away.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* BP Categories Reference */}
          <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Blood Pressure Categories (Standard Classification)</h2>
            <p className="text-gray-600 mb-6">See where {systolic}/{diastolic} mmHg falls on the blood pressure scale:</p>
            <div className="space-y-3">
              <div className={`border-l-4 border-green-500 pl-4 py-3 rounded-r-lg ${systolic < 120 && diastolic < 80 ? 'bg-green-100 ring-2 ring-green-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900">Normal</h3>
                    <p className="text-gray-600 text-sm">Maintain healthy lifestyle</p>
                  </div>
                  <span className="font-mono font-bold text-green-700">&lt;120 / &lt;80</span>
                </div>
              </div>
              <div className={`border-l-4 border-yellow-500 pl-4 py-3 rounded-r-lg ${systolic >= 120 && systolic < 130 && diastolic < 80 ? 'bg-yellow-100 ring-2 ring-yellow-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900">Elevated</h3>
                    <p className="text-gray-600 text-sm">Focus on lifestyle changes</p>
                  </div>
                  <span className="font-mono font-bold text-yellow-700">120-129 / &lt;80</span>
                </div>
              </div>
              <div className={`border-l-4 border-orange-500 pl-4 py-3 rounded-r-lg ${((systolic >= 130 && systolic < 140) || (diastolic >= 80 && diastolic < 90)) && !(systolic >= 140 || diastolic >= 90) ? 'bg-orange-100 ring-2 ring-orange-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900">High BP Stage 1</h3>
                    <p className="text-gray-600 text-sm">Consult healthcare provider</p>
                  </div>
                  <span className="font-mono font-bold text-orange-700">130-139 / 80-89</span>
                </div>
              </div>
              <div className={`border-l-4 border-red-500 pl-4 py-3 rounded-r-lg ${(systolic >= 140 || diastolic >= 90) && systolic < 180 && diastolic < 120 ? 'bg-red-100 ring-2 ring-red-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900">High BP Stage 2</h3>
                    <p className="text-gray-600 text-sm">Medication likely needed</p>
                  </div>
                  <span className="font-mono font-bold text-red-700">≥140 / ≥90</span>
                </div>
              </div>
              <div className={`border-l-4 border-red-700 pl-4 py-3 rounded-r-lg ${systolic >= 180 || diastolic >= 120 ? 'bg-red-200 ring-2 ring-red-500' : 'bg-white'}`}>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900">Hypertensive Crisis</h3>
                    <p className="text-gray-600 text-sm">Seek immediate medical care</p>
                  </div>
                  <span className="font-mono font-bold text-red-800">&gt;180 / &gt;120</span>
                </div>
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

          {/* Risk Factors Section */}
          <section className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Factors for High Blood Pressure</h2>
            <p className="text-gray-700 mb-6">
              Understanding what influences blood pressure can help you make informed decisions about your health:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Non-Modifiable Factors</h3>
                <p className="text-gray-600 text-sm mb-3">These factors cannot be changed but knowing them helps assess risk:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Age:</strong> Risk increases as you get older</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Family history:</strong> Genetic predisposition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Race/Ethnicity:</strong> Higher rates in some groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Sex:</strong> Risk patterns differ by gender</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Modifiable Factors</h3>
                <p className="text-gray-600 text-sm mb-3">These factors can be improved through lifestyle changes:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Diet:</strong> High sodium, low potassium intake</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Weight:</strong> Being overweight or obese</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Activity:</strong> Sedentary lifestyle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Habits:</strong> Smoking, excessive alcohol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Stress:</strong> Chronic stress levels</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips for Healthy BP */}
          <section className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips to Maintain Healthy Blood Pressure</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">🏃</div>
                <h3 className="font-bold text-gray-900 mb-2">Exercise Regularly</h3>
                <p className="text-sm text-gray-600">Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">🧂</div>
                <h3 className="font-bold text-gray-900 mb-2">Reduce Sodium</h3>
                <p className="text-sm text-gray-600">Limit salt intake to less than 2,300 mg per day. Ideal is 1,500 mg for most adults.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">⚖️</div>
                <h3 className="font-bold text-gray-900 mb-2">Maintain Healthy Weight</h3>
                <p className="text-sm text-gray-600">Losing even a small amount of weight can help reduce blood pressure significantly.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">🧘</div>
                <h3 className="font-bold text-gray-900 mb-2">Manage Stress</h3>
                <p className="text-sm text-gray-600">Practice relaxation techniques like deep breathing, meditation, or yoga regularly.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">🍷</div>
                <h3 className="font-bold text-gray-900 mb-2">Limit Alcohol</h3>
                <p className="text-sm text-gray-600">Men should have no more than 2 drinks/day; women no more than 1 drink/day.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">🚭</div>
                <h3 className="font-bold text-gray-900 mb-2">Don't Smoke</h3>
                <p className="text-sm text-gray-600">Each cigarette raises blood pressure for several minutes. Quitting improves overall heart health.</p>
              </div>
            </div>
          </section>

          {/* How to Measure */}
          <section className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get Accurate Blood Pressure Readings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Before Measuring</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Avoid caffeine, exercise, and smoking 30 minutes before</li>
                  <li>• Empty your bladder before measuring</li>
                  <li>• Rest quietly for 5 minutes before taking a reading</li>
                  <li>• Don't talk during the measurement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">During Measurement</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Sit with back supported and feet flat on floor</li>
                  <li>• Rest arm on a flat surface at heart level</li>
                  <li>• Place cuff on bare arm, not over clothing</li>
                  <li>• Take 2-3 readings, 1 minute apart, and average them</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related BP Values */}
          <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Blood Pressure Readings</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { s: 120, d: 80, label: 'Normal' },
                { s: 130, d: 85, label: 'Stage 1' },
                { s: 140, d: 90, label: 'Stage 2' },
                { s: 150, d: 95, label: 'Stage 2' }
              ].filter(v => `${v.s}-${v.d}` !== bp).slice(0, 4).map((v) => (
                <Link href={`/values/blood-pressure/${v.s}-${v.d}`} key={`${v.s}-${v.d}`}>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer text-center">
                    <div className="text-xl font-bold text-red-600 mb-1">{v.s}/{v.d}</div>
                    <p className="text-gray-600 text-sm">{v.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <h3 className="font-bold text-yellow-900 mb-3">Important Medical Disclaimer</h3>
            <ul className="space-y-2 text-yellow-800 text-sm">
              <li>• Blood pressure naturally varies throughout the day</li>
              <li>• A single reading should not be used for diagnosis</li>
              <li>• "White coat syndrome" can cause temporarily elevated readings</li>
              <li>• Multiple readings over days or weeks are needed for accurate assessment</li>
              <li>• This information is educational and not a substitute for medical advice</li>
              <li>• Always consult a healthcare professional for diagnosis and treatment</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center space-y-4">
            <Link href="/body-metrics#bp" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition shadow-lg">
              Check Your Blood Pressure
            </Link>
            <p className="text-gray-500 text-sm">Free, instant results with no data storage</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
