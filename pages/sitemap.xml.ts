import { GetServerSideProps } from "next";

const SITE_URL = "https://metrics.tekohub.com"; // change later

function generateSiteMap(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${SITE_URL}${url}</loc>
      </url>
    `
      )
      .join("")}
  </urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls: string[] = [];

  // STATIC PAGES
  urls.push("/");
  urls.push("/about");
  urls.push("/body-metrics");
  urls.push("/contact");
  urls.push("/privacy-policy");
  urls.push("/disclaimer");

  // BMI PAGES
  for (let i = 18; i <= 40; i += 0.2) {
    urls.push(`/values/bmi/${i.toFixed(1)}`);
  }

  // BLOOD PRESSURE PAGES
  for (let s = 110; s <= 160; s += 10) {
    for (let d = 70; d <= 100; d += 10) {
      urls.push(`/values/blood-pressure/${s}-${d}`);
    }
  }

  const sitemap = generateSiteMap(urls);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
