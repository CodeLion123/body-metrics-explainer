# Body Metrics Explainer

A modern Next.js app for understanding health metrics like BMI and blood pressure, with interactive calculators and educational content. Styled with Tailwind CSS.

## Features
- BMI, Blood Pressure, and Waist-to-Hip Ratio calculators
- Dynamic educational pages for each metric
- Responsive, visually appealing UI using Tailwind CSS
- SEO-optimized static pages
- Privacy-focused: no data storage

## Tech Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS 3
- PostCSS

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
3. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

## Project Structure
```
body-metrics-explainer/
├── components/        # Reusable UI components (Header, Footer, Layout)
├── lib/               # Calculation utilities
├── pages/             # Next.js pages (home, calculators, info, dynamic routes)
├── styles/            # Tailwind and custom CSS
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
├── package.json       # Project metadata and scripts
```

## Customization
- Update Tailwind styles in `styles/globals.css` and `styles/components.css`
- Add new calculators or info pages in `pages/`
- Extend calculation logic in `lib/calculations.ts`

## License
MIT
