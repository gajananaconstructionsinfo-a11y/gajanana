import React, { useEffect } from 'react';

/**
 * SEOHead Component
 * Dynamically updates document title, meta tags (description, keywords, robots, canonical),
 * OpenGraph, Twitter card tags, and injects Schema.org JSON-LD structured data.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://www.gajananaconstructions.in/images/products/tata-tiscon-tmt.jpg',
  ogType = 'website',
  schema
}) {
  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = title;
    }

    // Helper to set or update a meta tag
    const setMetaTag = (attributeName, attributeValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attributeName, attributeValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    if (description) {
      setMetaTag('name', 'description', description);
    }

    if (keywords) {
      const kwStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      setMetaTag('name', 'keywords', kwStr);
    }

    // 3. Canonical Link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // 4. OpenGraph Meta Tags
    if (title) setMetaTag('property', 'og:title', title);
    if (description) setMetaTag('property', 'og:description', description);
    if (canonical) setMetaTag('property', 'og:url', canonical);
    if (ogImage) setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', ogType);

    // 5. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    if (title) setMetaTag('name', 'twitter:title', title);
    if (description) setMetaTag('name', 'twitter:description', description);
    if (ogImage) setMetaTag('name', 'twitter:image', ogImage);

    // 6. Schema.org JSON-LD Structured Data
    if (schema) {
      let schemaScript = document.getElementById('dynamic-page-schema');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-page-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema, null, 2);
    }

    return () => {
      // Clean up dynamic schema if needed on component switch
      const s = document.getElementById('dynamic-page-schema');
      if (s) {
        s.remove();
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, schema]);

  return null;
}
