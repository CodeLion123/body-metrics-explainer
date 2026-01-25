# Body Metrics Explainer

A modern Next.js app for understanding health metrics like BMI, Blood Pressure, and Waist-to-Hip Ratio, with interactive calculators and educational content. Styled with Tailwind CSS.

## Features
- **BMI Calculator** - Calculate and understand your Body Mass Index with detailed health classifications
- **Blood Pressure Guide** - Learn about blood pressure categories and what they mean for your health
- **Waist-to-Hip Ratio** - Assess body fat distribution and health risks through waist-to-hip measurements
- Dynamic educational pages for each metric value
- Responsive, visually appealing UI using Tailwind CSS
- SEO-optimized static pages with fallback rendering
- Privacy-focused: all calculations happen locally, no data storage
- Contact Us page for user inquiries
- Google Site Verification support
- Custom favicon

## Features & Pages
- **Home Page** - Hero section with CTA, health metrics tools, features, how it works, and quick examples
- **Body Metrics Page** - Interactive calculators for BMI, Blood Pressure, and Waist-to-Hip Ratio
- **Dynamic Value Pages** - Educational pages for each calculated metric value
- **About Us** - Information about the project and its purpose
- **Contact Us** - Simple contact page with email link
- **Disclaimer** - Important legal and health disclaimers
- **Privacy Policy** - Data privacy information

## Tech Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS 3
- PostCSS

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd body-metrics-explainer
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

## Project Structure
```
body-metrics-explainer/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links
│   └── Layout.tsx          # Main layout wrapper
├── lib/
│   └── calculations.ts     # BMI, Blood Pressure, WHR calculation utilities
├── pages/
│   ├── index.tsx           # Home page
│   ├── body-metrics.tsx    # Calculator page
│   ├── about.tsx           # About Us page
│   ├── contact.tsx         # Contact Us page
│   ├── disclaimer.tsx      # Disclaimer page
│   ├── privacy-policy.tsx  # Privacy Policy page
│   ├── _app.tsx            # Next.js App component
│   ├── _document.tsx       # Next.js Document with favicon and meta tags
│   ├── api/
│   │   └── contact.ts      # (Optional) Contact form API endpoint
│   └── values/
│       ├── blood-pressure/
│       │   └── [bp].tsx    # Dynamic BP value pages
│       └── bmi/
│           └── [value].tsx # Dynamic BMI value pages
├── public/
│   └── favicon.svg         # Website favicon
├── styles/
│   ├── globals.css         # Global styles
│   └── components.css      # Component-specific styles
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project metadata and scripts
```

## Configuration

### Google Site Verification
To enable Google Search Console verification, the meta tag is included in `pages/_document.tsx`:
```html
<meta name="google-site-verification" content="ntHg3JX_nomhfDiAnWi23F5dofDB5jEu8hWXjQ8t3TM" />
```

## Customization
- Update Tailwind styles in `styles/globals.css` and `styles/components.css`
- Add new calculators or info pages in `pages/`
- Extend calculation logic in `lib/calculations.ts`
- Modify colors and styling in `tailwind.config.js`

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Disclaimer
This tool is for educational purposes only and is not a substitute for professional medical advice. Always consult with a healthcare provider for personalized health recommendations.

## License
MIT

## Support
For questions or feedback, visit the Contact Us page or email support@tekohub.com.
