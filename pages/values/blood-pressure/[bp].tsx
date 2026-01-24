import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getBloodPressureCategory } from '../../../lib/calculations';

export async function getStaticPaths() {
  const paths = [];
  for (let s = 110; s <= 160; s += 10) {
    for (let d = 70; d <= 100; d += 10) {
      paths.push({ params: { bp: `${s}-${d}` }});
    }
  }
  return { paths, fallback: false };
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
  return colors[color] || colors.gray;
};

export default function BP({ bp, systolic, diastolic, category }) {
  const colors = getColorClasses(category.color);

  return (
    <>
      <Head>
        <title>Blood Pressure {bp} - {category.category}</title>
        <meta name="description" content={`Understanding Blood Pressure ${bp}: ${category.category}. ${category.description}`} />
        <meta name="keywords" content={`blood pressure ${bp}, ${category.category}, hypertension`} />
      </Head>
      <Layout>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/body-metrics#bp" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Calculator
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Blood Pressure {bp}</h1>
            <p className="text-xl text-gray-600">{category.category}</p>
          </div>

          {/* Main Result Card */}
          <div className={`rounded-lg p-12 border-2 ${colors.bg} ${colors.text} border-${category.color}-300`}>
            <div className="text-center">
              <div className="text-7xl font-bold mb-4">{systolic}/{diastolic}</div>
              <p className="text-lg text-gray-600 mb-2">mmHg</p>
              <div className="text-3xl font-bold mb-6">{category.category}</div>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
          </div>

          {/* Understanding BP Reading */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Blood Pressure Readings</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Systolic Pressure (Top Number)</h3>
                <p className="text-gray-700">
                  This is the pressure in your arteries when your heart beats. It's the "maximum" pressure 
                  and is typically the larger of the two numbers.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Diastolic Pressure (Bottom Number)</h3>
                <p className="text-gray-700">
                  This is the pressure in your arteries when your heart rests between beats. It's the "minimum" 
                  pressure and is typically the smaller of the two numbers.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Normal (&lt;120/&lt;80 mmHg)</h3>
                <p className="text-gray-600 mt-1">Healthy blood pressure. Maintain current lifestyle with regular exercise and healthy diet.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Elevated (120-129/&lt;80 mmHg)</h3>
                <p className="text-gray-600 mt-1">Not yet high blood pressure, but trending upward. Monitor regularly and focus on lifestyle changes.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Stage 1 Hypertension (130-139/80-89 mmHg)</h3>
                <p className="text-gray-600 mt-1">High blood pressure requiring lifestyle modifications. Consult your healthcare provider.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Stage 2 Hypertension (≥140/≥90 mmHg)</h3>
                <p className="text-gray-600 mt-1">Significantly elevated blood pressure. Immediate medical attention and treatment recommended.</p>
              </div>
            </div>
          </section>

          {/* Risk Factors Section */}
          <section className="bg-orange-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Factors for High Blood Pressure</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Non-Modifiable Risk Factors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Age (risk increases with age)</li>
                  <li>• Family history</li>
                  <li>• Race/ethnicity</li>
                  <li>• Biological sex</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Modifiable Risk Factors</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• High sodium diet</li>
                  <li>• Obesity</li>
                  <li>• Lack of physical activity</li>
                  <li>• Excessive alcohol</li>
                  <li>• Stress</li>
                  <li>• Smoking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips for Healthy BP */}
          <section className="bg-green-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips to Maintain Healthy Blood Pressure</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Exercise Regularly</h3>
                <p className="text-sm text-gray-600">Aim for 150 minutes of moderate aerobic activity per week</p>
              </div>
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Reduce Sodium</h3>
                <p className="text-sm text-gray-600">Limit salt intake to less than 2,300 mg per day</p>
              </div>
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Maintain Healthy Weight</h3>
                <p className="text-sm text-gray-600">Achieve and maintain a BMI in the normal range</p>
              </div>
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Manage Stress</h3>
                <p className="text-sm text-gray-600">Practice relaxation techniques like meditation</p>
              </div>
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Limit Alcohol</h3>
                <p className="text-sm text-gray-600">Men: ≤2 drinks/day, Women: ≤1 drink/day</p>
              </div>
              <div className="bg-white p-4 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">✓ Don't Smoke</h3>
                <p className="text-sm text-gray-600">Smoking raises blood pressure immediately</p>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-bold text-yellow-900 mb-3">📌 Important Notes</h3>
            <ul className="space-y-2 text-yellow-900 text-sm">
              <li>• Blood pressure varies throughout the day - single readings may not be accurate</li>
              <li>• Multiple readings over time are needed for diagnosis</li>
              <li>• "White coat" syndrome can cause elevated readings in medical settings</li>
              <li>• Always consult a healthcare professional for proper diagnosis and treatment</li>
              <li>• This information is educational and not a substitute for medical advice</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link href="/body-metrics#bp" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition">
              Check Your Blood Pressure
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
