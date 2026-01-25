import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getBMICategory } from '../../../lib/calculations';

export async function getStaticPaths() {
  const paths = [];
  for (let i = 15; i <= 45; i += 0.5) {
    paths.push({ params: { value: i.toFixed(1) }});
  }
  return { paths, fallback: 'blocking' };
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
  return colors[color] || colors.green;
};

export default function BMI({ value, bmi, category }) {
  const colors = getColorClasses(category.color);

  return (
    <>
      <Head>
        <title>BMI {value} Explained - {category.category} | Body Mass Index Guide</title>
        <meta name="description" content={`BMI ${value} is classified as ${category.category}. Learn what a BMI of ${value} means for your health, associated risks, and recommendations based on standard medical guidelines.`} />
        <meta name="keywords" content={`BMI ${value}, ${category.category}, body mass index ${value}, BMI category, BMI meaning, healthy weight`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://metrics.tekohub.com/values/bmi/${value}`} />
      </Head>
      <Layout>
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/body-metrics" className="text-blue-600 hover:underline mb-4 inline-block">
              ← Back to Calculator
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">BMI {value} Explained</h1>
            <p className="text-xl text-gray-600">Understanding what a BMI of {value} means for your health</p>
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
              <p className="text-sm font-semibold uppercase tracking-wide mb-2">Your BMI Value</p>
              <div className="text-7xl md:text-8xl font-bold mb-4">{value}</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Does a BMI of {value} Mean?</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                A Body Mass Index (BMI) of <strong>{value}</strong> places you in the <strong>{category.category}</strong> category 
                according to the standard medical classification system. BMI is calculated by dividing your weight 
                in kilograms by your height in meters squared.
              </p>
              {bmi < 18.5 && (
                <p className="text-gray-700 leading-relaxed">
                  Being underweight may indicate insufficient caloric intake, nutritional deficiencies, or underlying health conditions. 
                  It's associated with weakened immune function, bone loss, and other health concerns. Consider consulting a healthcare 
                  provider or registered dietitian for personalized guidance.
                </p>
              )}
              {bmi >= 18.5 && bmi < 25 && (
                <p className="text-gray-700 leading-relaxed">
                  A BMI in the normal range suggests that your weight is appropriate for your height. This is associated with lower 
                  risks of weight-related health conditions. Maintaining this range through balanced nutrition and regular physical 
                  activity is recommended.
                </p>
              )}
              {bmi >= 25 && bmi < 30 && (
                <p className="text-gray-700 leading-relaxed">
                  Being overweight increases the risk of developing various health conditions including type 2 diabetes, cardiovascular 
                  disease, and certain cancers. Lifestyle modifications such as dietary changes and increased physical activity can help 
                  achieve a healthier weight.
                </p>
              )}
              {bmi >= 30 && (
                <p className="text-gray-700 leading-relaxed">
                  Obesity significantly increases health risks including heart disease, stroke, type 2 diabetes, certain cancers, and 
                  joint problems. It's recommended to work with healthcare professionals to develop a comprehensive weight management 
                  plan that includes nutrition, physical activity, and possibly medical interventions.
                </p>
              )}
            </div>
          </section>

          {/* BMI Categories Reference */}
          <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">BMI Categories (Standard Classification)</h2>
            <p className="text-gray-600 mb-6">See where a BMI of {value} falls on the standard BMI scale:</p>
            <div className="space-y-3">
              <div className={`border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg ${bmi < 18.5 ? 'bg-blue-100 ring-2 ring-blue-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900">Underweight</h3>
                    <p className="text-gray-600 text-sm">May need nutritional support</p>
                  </div>
                  <span className="font-mono font-bold text-blue-700">&lt; 18.5</span>
                </div>
              </div>
              <div className={`border-l-4 border-green-500 pl-4 py-3 rounded-r-lg ${bmi >= 18.5 && bmi < 25 ? 'bg-green-100 ring-2 ring-green-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900">Normal Weight</h3>
                    <p className="text-gray-600 text-sm">Healthy weight range</p>
                  </div>
                  <span className="font-mono font-bold text-green-700">18.5 - 24.9</span>
                </div>
              </div>
              <div className={`border-l-4 border-yellow-500 pl-4 py-3 rounded-r-lg ${bmi >= 25 && bmi < 30 ? 'bg-yellow-100 ring-2 ring-yellow-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900">Overweight</h3>
                    <p className="text-gray-600 text-sm">Increased health risks</p>
                  </div>
                  <span className="font-mono font-bold text-yellow-700">25.0 - 29.9</span>
                </div>
              </div>
              <div className={`border-l-4 border-orange-500 pl-4 py-3 rounded-r-lg ${bmi >= 30 && bmi < 35 ? 'bg-orange-100 ring-2 ring-orange-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900">Obese Class I</h3>
                    <p className="text-gray-600 text-sm">High health risks</p>
                  </div>
                  <span className="font-mono font-bold text-orange-700">30.0 - 34.9</span>
                </div>
              </div>
              <div className={`border-l-4 border-orange-600 pl-4 py-3 rounded-r-lg ${bmi >= 35 && bmi < 40 ? 'bg-orange-100 ring-2 ring-orange-500' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900">Obese Class II</h3>
                    <p className="text-gray-600 text-sm">Very high health risks</p>
                  </div>
                  <span className="font-mono font-bold text-orange-700">35.0 - 39.9</span>
                </div>
              </div>
              <div className={`border-l-4 border-red-600 pl-4 py-3 rounded-r-lg ${bmi >= 40 ? 'bg-red-100 ring-2 ring-red-400' : 'bg-white'}`}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900">Obese Class III (Severe)</h3>
                    <p className="text-gray-600 text-sm">Extremely high health risks</p>
                  </div>
                  <span className="font-mono font-bold text-red-700">≥ 40</span>
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

          {/* What is BMI Section */}
          <section className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is BMI?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  <strong>Body Mass Index (BMI)</strong> is a numerical value calculated from your weight and height. 
                  It was developed by Belgian mathematician Adolphe Quetelet in the 1830s and remains one of the most 
                  widely used screening tools for weight categories.
                </p>
                <p className="text-gray-700">
                  Healthcare professionals use BMI as a quick assessment tool, but it should be considered alongside 
                  other health indicators such as waist circumference, body composition, blood pressure, and cholesterol levels.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3">BMI Formula</h3>
                <div className="bg-blue-100 rounded-lg p-4 mb-4">
                  <p className="font-mono text-center text-lg">BMI = Weight (kg) ÷ Height (m)²</p>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> A person who is 1.75m tall and weighs 70kg would have a BMI of: 
                  70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 = <strong>22.86</strong>
                </p>
              </div>
            </div>
          </section>

          {/* BMI Limitations */}
          <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitations of BMI</h2>
            <p className="text-gray-700 mb-6">
              While BMI is a useful screening tool, it has important limitations to consider:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-gray-900 mb-2">Doesn't Measure Fat Directly</h3>
                <p className="text-gray-600 text-sm">BMI uses weight, which includes muscle, bone, fat, and water. It cannot distinguish between fat mass and lean mass.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-gray-900 mb-2">Athletes May Score High</h3>
                <p className="text-gray-600 text-sm">Muscular athletes often have high BMIs despite having low body fat percentages and excellent health.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-gray-900 mb-2">Age & Sex Variations</h3>
                <p className="text-gray-600 text-sm">BMI doesn't account for body composition changes with aging or differences between males and females.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-gray-900 mb-2">Ethnic Differences</h3>
                <p className="text-gray-600 text-sm">Some ethnic groups may have different health risks at the same BMI levels. Different populations may have adjusted cutoff points.</p>
              </div>
            </div>
          </section>

          {/* Related BMI Values */}
          <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other BMI Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[18.5, 22, 25, 30].filter(v => v.toString() !== value).slice(0, 4).map((v) => (
                <Link href={`/values/bmi/${v}`} key={v}>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">BMI {v}</div>
                    <p className="text-gray-600 text-sm">
                      {v < 18.5 ? 'Underweight' : v < 25 ? 'Normal' : v < 30 ? 'Overweight' : 'Obese'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Important Notes */}
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <h3 className="font-bold text-yellow-900 mb-3">Important Medical Disclaimer</h3>
            <ul className="space-y-2 text-yellow-800 text-sm">
              <li>• BMI is a screening tool and does not diagnose health conditions</li>
              <li>• Individual health depends on many factors beyond BMI</li>
              <li>• This information is for educational purposes only</li>
              <li>• Always consult healthcare professionals for personalized advice</li>
              <li>• If you have health concerns, please see a qualified medical provider</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center space-y-4">
            <Link href="/body-metrics" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
              Calculate Your BMI
            </Link>
            <p className="text-gray-500 text-sm">Free, instant results with no data storage</p>
          </div>
        </div>
      </Layout>
    </>
  );
}
