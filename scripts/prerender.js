import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const docsDir = path.join(projectRoot, 'docs');
const publicDir = path.join(projectRoot, 'public');

// Import areasData
const areasModule = await import('../src/data/areasData.js');
const AREAS = areasModule.AREAS;

const cnameContent = 'www.gajananaconstructions.in';

// 1. Base index.html from dist
const baseIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Helper to customize HTML for a route
function customizeHtml({ title, description, keywords, canonical, slug, depth = 2, faqs = [], geo = null }) {
  let html = baseIndexHtml;

  if (title) {
    html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  }

  if (description) {
    html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`);
  }

  if (keywords) {
    html = html.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${keywords.replace(/"/g, '&quot;')}" />`);
  }

  if (canonical) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonical}" />`);
  }

  // Adjust relative asset paths based on directory nesting depth
  const prefix = depth === 2 ? '../../' : depth === 1 ? '../' : './';
  html = html.replace(/src="\.\/assets\//g, `src="${prefix}assets/`);
  html = html.replace(/href="\.\/assets\//g, `href="${prefix}assets/`);

  // Build JSON-LD structured data for this area
  let structuredDataJson = '';
  if (slug && geo) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "GeneralContractor",
          "@id": `${canonical}#contractor`,
          "name": `Sri Gajanana Constructions - ${slug}`,
          "description": description,
          "url": canonical,
          "telephone": "+918884238688",
          "priceRange": "₹₹",
          "image": "https://www.gajananaconstructions.in/images/products/tata-tiscon-tmt.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Samrat Layout, Sarvobhogam Nagar, Arekere",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "postalCode": "560076",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": geo.lat,
            "longitude": geo.lng
          }
        },
        {
          "@type": "FAQPage",
          "@id": `${canonical}#faq`,
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        }
      ]
    };
    structuredDataJson = `\n    <script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n    </script>`;
  }

  // Prepend redirect script so human visitors on clean URLs seamlessly transition into the React router
  const redirectScript = slug 
    ? `<script>if(!window.location.hash){window.location.replace('/#/areas/${slug}');}</script>`
    : depth === 1
      ? `<script>if(!window.location.hash){window.location.replace('/#/areas');}</script>`
      : '';

  html = html.replace('</head>', `${structuredDataJson}\n    ${redirectScript}\n  </head>`);

  return html;
}

// 2. Pre-render in target directories (both dist and docs)
const targets = [distDir, docsDir];

for (const targetDir of targets) {
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  // CNAME
  fs.writeFileSync(path.join(targetDir, 'CNAME'), cnameContent + '\n', 'utf8');

  // .nojekyll
  fs.writeFileSync(path.join(targetDir, '.nojekyll'), '', 'utf8');

  // 404.html (copy baseIndexHtml with hash fallback)
  const fallback404 = baseIndexHtml.replace(
    '</head>',
    `    <script>
      var path = window.location.pathname.replace(/^\//, '');
      if (path && !window.location.hash) {
        window.location.replace('/#/' + path + window.location.search);
      }
    </script>\n  </head>`
  );
  fs.writeFileSync(path.join(targetDir, '404.html'), fallback404, 'utf8');

  // /areas hub
  const areasHubDir = path.join(targetDir, 'areas');
  if (!fs.existsSync(areasHubDir)) fs.mkdirSync(areasHubDir, { recursive: true });

  const areasHubHtml = customizeHtml({
    title: 'Areas We Serve in South Bengaluru | Sri Gajanana Constructions',
    description: 'Turnkey residential house construction, JCB earthmoving fleet rental & wholesale building materials depot across 17 South & Southeast Bengaluru localities.',
    keywords: 'Construction company Bangalore, house builders South Bengaluru, building materials depot Arekere, civil contractors JP Nagar, BTM, HSR Layout, Electronic City',
    canonical: 'https://www.gajananaconstructions.in/areas',
    slug: null,
    depth: 1
  });
  fs.writeFileSync(path.join(areasHubDir, 'index.html'), areasHubHtml, 'utf8');

  // 17 areas
  for (const area of AREAS) {
    const areaDir = path.join(areasHubDir, area.slug);
    if (!fs.existsSync(areaDir)) fs.mkdirSync(areaDir, { recursive: true });

    const areaHtml = customizeHtml({
      title: area.metaTitle,
      description: area.metaDescription,
      keywords: area.seoKeywords.join(', '),
      canonical: `https://www.gajananaconstructions.in/areas/${area.slug}`,
      slug: area.slug,
      depth: 2,
      faqs: area.faqs,
      geo: area.geo
    });
    fs.writeFileSync(path.join(areaDir, 'index.html'), areaHtml, 'utf8');
  }

  // Top level pages
  const topRoutes = [
    { path: 'services', title: 'Construction & Fleet Services | Sri Gajanana Constructions' },
    { path: 'materials', title: 'Wholesale Building Materials Depot | Sri Gajanana Constructions' },
    { path: 'about', title: 'About Us & Leadership | Sri Gajanana Constructions' },
    { path: 'projects', title: 'Projects Portfolio | Sri Gajanana Constructions' },
    { path: 'why-us', title: 'Why Choose Us | Sri Gajanana Constructions' },
    { path: 'contact', title: 'Contact Us & Stockyard Location | Sri Gajanana Constructions' },
    { path: 'get-a-quote', title: 'Get a Construction Quote | Sri Gajanana Constructions' }
  ];

  for (const r of topRoutes) {
    const dir = path.join(targetDir, r.path);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const html = baseIndexHtml
      .replace(/<title>.*?<\/title>/i, `<title>${r.title}</title>`)
      .replace(/src="\.\/assets\//g, 'src="../assets/')
      .replace(/href="\.\/assets\//g, 'href="../assets/')
      .replace('</head>', `    <script>if(!window.location.hash){window.location.replace('/#/${r.path}');}</script>\n  </head>`);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  }
}

// 3. Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Core Website Pages -->
  <url>
    <loc>https://www.gajananaconstructions.in/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.gajananaconstructions.in/areas</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
`;

for (const area of AREAS) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/areas/${area.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
}

const standardPages = ['services', 'materials', 'projects', 'about', 'contact', 'why-us', 'get-a-quote'];
for (const page of standardPages) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

sitemapXml += `</urlset>\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(docsDir, 'sitemap.xml'), sitemapXml, 'utf8');

// Replace public/404.html with clean fallback
fs.writeFileSync(path.join(publicDir, '404.html'), fs.readFileSync(path.join(distDir, '404.html'), 'utf8'), 'utf8');

console.log('Static pre-rendering and sitemap generation completed successfully in dist and docs!');
