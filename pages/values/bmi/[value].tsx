
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getBMICategory } from '../../../lib/calculations';

export async function getStaticPaths() {
  const paths = [];
  for (let i = 18; i <= 40; i += 0.5) {
    paths.push({ params: { value: i.toFixed(1) }});
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const bmi = parseFloat(params.value);
  const category = getBMICategory(bmi);
  return { 
    props: { 
      value: params.value,
      bmi,
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

export default function BMI({ value, bmi, category }) {
  const colors = getColorClasses(category.color);

  return (
    <>
      <Head>
        <title>BMI {value} - {category.category}</title>
        <meta name="description" content={`Understanding BMI ${value}: ${category.category}. ${category.description}`} />
        <meta name="keywords" content={`BMI ${value}, ${category.category}, body mass index`} />
      </Head>
      <Layout>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/body-metrics" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Calculator
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">BMI {value}</h1>
            <p className="text-xl text-gray-600">{category.category}</p>
          </div>

          {/* Main Result Card */}
          <div className={`rounded-lg p-12 border-2 ${colors.bg} ${colors.text} border-${category.color}-300`}>
            <div className="text-center">
              <div className="text-7xl font-bold mb-4">{value}</div>
              <div className="text-3xl font-bold mb-6">{category.category}</div>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
          </div>

          {/* BMI Information */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">BMI Categories Explained</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Underweight (BMI &lt; 18.5)</h3>
                <p className="text-gray-600 mt-1">Below the healthy weight range. May indicate nutritional deficiency or other health concerns. Consult a healthcare provider.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Normal Weight (BMI 18.5 - 24.9)</h3>
                <p className="text-gray-600 mt-1">Within the healthy weight range. Maintain current lifestyle and regular health check-ups.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Overweight (BMI 25 - 29.9)</h3>
                <p className="text-gray-600 mt-1">Above the healthy weight range. Consider lifestyle modifications including balanced diet and regular exercise.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Obese Class I (BMI 30 - 34.9)</h3>
                <p className="text-gray-600 mt-1">Significant obesity. Medical consultation recommended for weight management strategies.</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Obese Class II (BMI 35 - 39.9)</h3>
                <p className="text-gray-600 mt-1">High obesity level. Consult healthcare provider for comprehensive health assessment.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <h3 className="font-bold text-gray-900">Severe Obesity (BMI ≥ 40)</h3>
                <p className="text-gray-600 mt-1">Very high obesity level. Immediate medical consultation strongly recommended.</p>
              </div>
            </div>
          </section>

          {/* What is BMI Section */}
          <section className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is BMI?</h2>
            <p className="text-gray-700 mb-4">
              BMI (Body Mass Index) is a measure of body fat based on height and weight. It's calculated by dividing 
              weight in kilograms by height in meters squared (kg/m²).
            </p>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <p className="font-mono text-sm mb-2"><strong>Formula:</strong> BMI = Weight (kg) / Height (m)²</p>
              <p className="text-sm text-gray-600">For example, a person who is 1.75m tall and weighs 70kg would have a BMI of 22.86</p>
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <h3 className="font-bold text-yellow-900 mb-3">📌 Important Notes</h3>
            <ul className="space-y-2 text-yellow-900 text-sm">
              <li>• BMI is a screening tool and doesn't directly measure body fat percentage</li>
              <li>• Athletes and muscular individuals may have higher BMI without excess body fat</li>
              <li>• BMI varies by age, sex, and ethnicity</li>
              <li>• This calculation is for adults. Children have different BMI classifications</li>
              <li>• Always consult with healthcare professionals for personalized advice</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link href="/body-metrics" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Try the Calculator
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
