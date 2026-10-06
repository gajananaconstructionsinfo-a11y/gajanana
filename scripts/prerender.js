import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const docsDir = path.join(projectRoot, 'docs');
const publicDir = path.join(projectRoot, 'public');

// Imports
const areasModule = await import('../src/data/areasData.js');
const AREAS = areasModule.AREAS;

const metaModule = await import('./siteMetadata.js');
const { SERVICES_META, MATERIAL_CATEGORIES_META, PRODUCTS_SKUS_META, PROJECTS_META, GUIDES_META } = metaModule;

const cnameContent = 'www.gajananaconstructions.in';

// Base index.html from dist
const baseIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Helper to customize HTML for a pre-rendered route
function generatePageHtml({
  title,
  description,
  keywords,
  canonical,
  hashRoute,
  depth = 1,
  schema = null
}) {
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

  // OpenGraph updates
  if (title) {
    html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />`);
  }
  if (description) {
    html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />`);
  }
  if (canonical) {
    html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonical}" />`);
  }

  // Adjust relative asset paths based on directory nesting depth
  const prefix = depth === 3 ? '../../../' : depth === 2 ? '../../' : depth === 1 ? '../' : './';
  html = html.replace(/src="\.\/assets\//g, `src="${prefix}assets/`);
  html = html.replace(/href="\.\/assets\//g, `href="${prefix}assets/`);

  // Add JSON-LD Structured Data
  let structuredDataJson = '';
  if (schema) {
    structuredDataJson = `\n    <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`;
  }

  // Clean URL to Hash fallback for client-side routing on GitHub Pages
  const redirectScript = hashRoute
    ? `<script>if(!window.location.hash){window.location.replace('/#/${hashRoute.replace(/^\//, '')}');}</script>`
    : '';

  html = html.replace('</head>', `${structuredDataJson}\n    ${redirectScript}\n  </head>`);

  return html;
}

// Target directories (both dist and docs)
const targets = [distDir, docsDir];

for (const targetDir of targets) {
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  // 1. CNAME & .nojekyll
  fs.writeFileSync(path.join(targetDir, 'CNAME'), cnameContent + '\n', 'utf8');
  fs.writeFileSync(path.join(targetDir, '.nojekyll'), '', 'utf8');

  // 2. 404.html fallback
  const fallback404 = baseIndexHtml.replace(
    '</head>',
    `    <script>
      var path = window.location.pathname.replace(/^\\//, '');
      if (path && !window.location.hash) {
        window.location.replace('/#/' + path + window.location.search);
      }
    </script>\n  </head>`
  );
  fs.writeFileSync(path.join(targetDir, '404.html'), fallback404, 'utf8');

  // Helper to ensure directory and write index.html
  const writeRouteHtml = (routeRelativeDir, options) => {
    const fullDir = path.join(targetDir, routeRelativeDir);
    if (!fs.existsSync(fullDir)) fs.mkdirSync(fullDir, { recursive: true });
    const html = generatePageHtml(options);
    fs.writeFileSync(path.join(fullDir, 'index.html'), html, 'utf8');
  };

  // 3. Core Top-Level Pages
  const topPages = [
    {
      path: 'services',
      title: 'Construction Services & Heavy Machinery Rental in Bengaluru | Gajanana Constructions',
      description: 'Complete construction services in Bangalore: turnkey residential villa construction, commercial civil works, JCB 3DX & excavator rental, architectural planning, and structural renovation. Call 8884238688.',
      keywords: 'construction services Bangalore, turnkey house construction, JCB hire Bangalore, civil contractors Arekere, structural engineering Bengaluru, renovation contractors',
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Construction & Fleet Services in Bengaluru",
        "url": "https://www.gajananaconstructions.in/services"
      }
    },
    {
      path: 'materials',
      title: 'Wholesale Building Materials Depot Bengaluru | TMT Steel, Cement, M-Sand | Gajanana',
      description: 'Direct primary wholesale building materials depot in Bangalore. 15,000 MT capacity stockyard for Tata Tiscon Fe 550D, UltraTech Cement, VSI M-Sand, AAC Blocks, and aggregates. Call 8884238688.',
      keywords: 'building materials depot Bangalore, Tata Tiscon wholesale dealer, UltraTech cement supplier, M-sand price Bangalore, AAC blocks Arekere, construction materials stockyard',
      schema: {
        "@context": "https://schema.org",
        "@type": "WholesaleStore",
        "name": "Gajanana Wholesale Building Materials Depot",
        "url": "https://www.gajananaconstructions.in/materials",
        "telephone": "+918884238688"
      }
    },
    {
      path: 'projects',
      title: 'Ongoing & Completed Construction Projects in Bengaluru | Gajanana Constructions',
      description: 'Explore authentic on-site photos of individual residential houses, standalone villas, and commercial builds in Bangalore at foundation, masonry, shuttering, and slab stages.',
      keywords: 'construction projects Bangalore, house construction photos, villa construction stage, residential civil works Bengaluru, Gajanana Projects',
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Construction Projects Portfolio - Gajanana Constructions",
        "url": "https://www.gajananaconstructions.in/projects"
      }
    },
    {
      path: 'about',
      title: 'About Gajanana Constructions | 20+ Years Civil Engineering Legacy in Bangalore',
      description: 'Learn about Gajanana Constructions (GTCM) founded by Mr. Gajanana in 2005. Over 20 years of trusted civil engineering, turnkey house builds, and 15,000 MT primary stockyard in Bengaluru.',
      keywords: 'about Gajanana Constructions, civil contractors Bangalore history, Mr Gajanana CEO, building contractors Arekere, trusted builders South Bangalore',
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Gajanana Constructions",
        "url": "https://www.gajananaconstructions.in/about"
      }
    },
    {
      path: 'why-us',
      title: 'Why Choose Gajanana Constructions | Single-Source Construction Advantage',
      description: 'Discover the Gajanana advantage: Turnkey civil engineering backed by our own 15,000 MT primary materials stockyard and JCB fleet. Zero broker markups, 100% IS grade compliance.',
      keywords: 'why choose Gajanana Constructions, best builders Bangalore, direct material depot builders, trusted contractor Arekere',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Why Choose Gajanana Constructions",
        "url": "https://www.gajananaconstructions.in/why-us"
      }
    },
    {
      path: 'contact',
      title: 'Contact Gajanana Constructions | Yard Location & Phone Numbers Bangalore',
      description: 'Contact Gajanana Constructions. Call +91 88842 38688 / +91 95358 28286 or visit our central office and stockyard at Samrat Layout, Arekere, Bengaluru 560076.',
      keywords: 'contact Gajanana Constructions, construction company Arekere contact, building materials Bangalore phone number, Sarvobhogam Nagar contractor',
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Gajanana Constructions",
        "url": "https://www.gajananaconstructions.in/contact",
        "telephone": ["+918884238688", "+919535828286"]
      }
    },
    {
      path: 'get-a-quote',
      title: 'Get Free Construction Quote & BOQ Estimate Bangalore | Gajanana Constructions',
      description: 'Get an instant itemized construction cost estimate and BOQ quote for your residential house, commercial build, JCB rental, or bulk material supply in Bangalore. Call 8884238688.',
      keywords: 'construction quote Bangalore, house construction cost estimator Bengaluru, BOQ estimate, turnkey building quotation, Gajanana Quote',
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Get a Construction Quote & BOQ Estimate",
        "url": "https://www.gajananaconstructions.in/get-a-quote"
      }
    },
    {
      path: 'areas',
      title: 'Areas We Serve in South Bengaluru | Gajanana Constructions',
      description: 'Turnkey residential house construction, JCB earthmoving fleet rental & wholesale building materials depot across 17 South & Southeast Bengaluru localities.',
      keywords: 'Construction company Bangalore, house builders South Bengaluru, building materials depot Arekere, civil contractors JP Nagar, BTM, HSR Layout, Electronic City',
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Areas We Serve in South Bengaluru",
        "url": "https://www.gajananaconstructions.in/areas"
      }
    }
  ];

  for (const page of topPages) {
    writeRouteHtml(page.path, {
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      canonical: `https://www.gajananaconstructions.in/${page.path}`,
      hashRoute: page.path,
      depth: 1,
      schema: page.schema
    });
  }

  // 4. All 17 Area Pages (/areas/:slug)
  for (const area of AREAS) {
    writeRouteHtml(path.join('areas', area.slug), {
      title: area.metaTitle,
      description: area.metaDescription,
      keywords: area.seoKeywords.join(', '),
      canonical: `https://www.gajananaconstructions.in/areas/${area.slug}`,
      hashRoute: `areas/${area.slug}`,
      depth: 2,
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "GeneralContractor",
            "@id": `https://www.gajananaconstructions.in/areas/${area.slug}#contractor`,
            "name": `Gajanana Constructions - ${area.name}`,
            "description": area.metaDescription,
            "url": `https://www.gajananaconstructions.in/areas/${area.slug}`,
            "telephone": "+918884238688",
            "priceRange": "₹₹",
            "sameAs": [
              "https://www.quora.com/profile/Gajananaconstructions/Central-Bannerghatta-Road-Sector-South-Bengaluru-Construction-Company-Building-Contractor-in-Bilekahalli-Bengaluru"
            ],
            "image": "https://www.gajananaconstructions.in/images/og-logo-preview.png",
            "logo": "https://www.gajananaconstructions.in/logo.png",
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
              "latitude": area.geo.lat,
              "longitude": area.geo.lng
            }
          },
          {
            "@type": "FAQPage",
            "@id": `https://www.gajananaconstructions.in/areas/${area.slug}#faq`,
            "mainEntity": area.faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
              }
            }))
          }
        ]
      }
    });
  }

  // 5. All 12 Services (/services/:slug)
  for (const s of SERVICES_META) {
    writeRouteHtml(path.join('services', s.slug), {
      title: s.title,
      description: s.description,
      keywords: s.keywords,
      canonical: `https://www.gajananaconstructions.in/services/${s.slug}`,
      hashRoute: `services/${s.slug}`,
      depth: 2,
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": s.title,
        "description": s.description,
        "provider": {
          "@type": "GeneralContractor",
          "name": "Gajanana Constructions",
          "telephone": "+918884238688",
          "url": "https://www.gajananaconstructions.in/"
        },
        "areaServed": "Bengaluru, Karnataka",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "Price on Enquiry",
          "priceCurrency": "INR"
        }
      }
    });
  }

  // 6. All 16 Material Categories (/materials/:category)
  for (const c of MATERIAL_CATEGORIES_META) {
    writeRouteHtml(path.join('materials', c.slug), {
      title: `${c.name} in Bengaluru | Gajanana Constructions`,
      description: `${c.shortDesc} Direct wholesale supply with weighbridge accuracy. Call 8884238688.`,
      keywords: c.keywords,
      canonical: `https://www.gajananaconstructions.in/materials/${c.slug}`,
      hashRoute: `materials/${c.slug}`,
      depth: 2,
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": c.name,
        "description": c.shortDesc,
        "url": `https://www.gajananaconstructions.in/materials/${c.slug}`
      }
    });
  }

  // 7. All 14 Product SKUs (/materials/product/:skuId)
  for (const p of PRODUCTS_SKUS_META) {
    writeRouteHtml(path.join('materials', 'product', p.id), {
      title: `${p.name} | Bangalore Depot | Gajanana Constructions`,
      description: `Procure ${p.name} in Bengaluru. ${p.specSummary}. Call 8884238688 / 9535828286 for immediate yard delivery.`,
      keywords: p.keywords,
      canonical: `https://www.gajananaconstructions.in/materials/product/${p.id}`,
      hashRoute: `materials/product/${p.id}`,
      depth: 3,
      schema: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": p.name,
        "description": p.specSummary,
        "brand": {
          "@type": "Brand",
          "name": "Gajanana Constructions Depot"
        },
        "offers": {
          "@type": "Offer",
          "price": "Price on Enquiry",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    });
  }

  
  // 9. Guides Hub (/guides)
  writeRouteHtml('guides', {
    title: 'Bengaluru House Construction Guides & Knowledge Hub | Gajanana Constructions',
    description: 'Authoritative homeowner guides on building a house in Bangalore. Civil engineering insights, construction cost breakdowns, structural RCC tips, timelines, and BBMP bylaws.',
    keywords: 'Bangalore house construction guide, house construction cost Bangalore, building stages foundation to finishing, civil contractors advice',
    canonical: 'https://www.gajananaconstructions.in/guides',
    hashRoute: 'guides',
    depth: 1,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Bengaluru House Construction Guides & Knowledge Hub",
      "url": "https://www.gajananaconstructions.in/guides"
    }
  });

  // 10. All 11 Guides (/guides/:slug)
  for (const g of GUIDES_META) {
    writeRouteHtml(path.join('guides', g.slug), {
      title: g.title,
      description: g.description,
      keywords: g.tags.join(', '),
      canonical: `https://www.gajananaconstructions.in/guides/${g.slug}`,
      hashRoute: `guides/${g.slug}`,
      depth: 2,
      schema: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": g.title,
        "description": g.description,
        "datePublished": g.publishedDate,
        "dateModified": g.lastUpdated,
        "author": {
          "@type": "Person",
          "name": g.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Gajanana Constructions",
          "url": "https://www.gajananaconstructions.in/"
        }
      }
    });
  }

  // 8. All 6 Projects (/projects/:id)
  for (const proj of PROJECTS_META) {
    writeRouteHtml(path.join('projects', proj.id), {
      title: `${proj.title} | Gajanana Constructions`,
      description: proj.description,
      keywords: `${proj.title}, ${proj.type}, ${proj.stage}, construction progress Bangalore`,
      canonical: `https://www.gajananaconstructions.in/projects/${proj.id}`,
      hashRoute: `projects/${proj.id}`,
      depth: 2,
      schema: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": proj.title,
        "description": proj.description
      }
    });
  }
}

// 9. Generate Comprehensive sitemap.xml
const today = new Date().toISOString().split('T')[0];
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- Homepage -->
  <url>
    <loc>https://www.gajananaconstructions.in/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Areas Hub -->
  <url>
    <loc>https://www.gajananaconstructions.in/areas</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
`;

// 17 Areas
for (const area of AREAS) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/areas/${area.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>
`;
}

// Core Top Pages
const standardPages = ['services', 'materials', 'projects', 'about', 'contact', 'why-us', 'get-a-quote'];
for (const page of standardPages) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// 12 Services
for (const s of SERVICES_META) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/services/${s.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

// 16 Material Categories
for (const c of MATERIAL_CATEGORIES_META) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/materials/${c.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
}

// 14 Product SKUs
for (const p of PRODUCTS_SKUS_META) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/materials/product/${p.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
`;
}

// 6 Projects
for (const proj of PROJECTS_META) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/projects/${proj.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
`;
}


// Guides Hub
sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/guides</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.90</priority>
  </url>
`;

// 11 Guides
for (const g of GUIDES_META) {
  sitemapXml += `  <url>
    <loc>https://www.gajananaconstructions.in/guides/${g.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
}

sitemapXml += `</urlset>\n`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(docsDir, 'sitemap.xml'), sitemapXml, 'utf8');

// Replace public/404.html with clean fallback
fs.writeFileSync(path.join(publicDir, '404.html'), fs.readFileSync(path.join(distDir, '404.html'), 'utf8'), 'utf8');

// Sync root index.html to docs/index.html (critical for GitHub Pages /docs source)
fs.writeFileSync(path.join(docsDir, 'index.html'), fs.readFileSync(path.join(distDir, 'index.html'), 'utf8'), 'utf8');

// Sync branding assets, multi-size favicons, manifest, and robots.txt
[
  'favicon.svg',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon-48x48.png',
  'favicon-96x96.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'logo.png',
  'logo-192.png',
  'logo.svg',
  'site.webmanifest',
  'robots.txt'
].forEach((file) => {
  const src = path.join(publicDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    fs.copyFileSync(src, path.join(docsDir, file));
  }
});

// Sync dist/assets to docs/assets
const copyDirSync = (src, dest) => {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};
copyDirSync(path.join(distDir, 'assets'), path.join(docsDir, 'assets'));
if (fs.existsSync(path.join(publicDir, 'images'))) {
  copyDirSync(path.join(publicDir, 'images'), path.join(distDir, 'images'));
  copyDirSync(path.join(publicDir, 'images'), path.join(docsDir, 'images'));
}

console.log('Complete static pre-rendering (78 routes) and sitemap.xml generated successfully in dist and docs!');
