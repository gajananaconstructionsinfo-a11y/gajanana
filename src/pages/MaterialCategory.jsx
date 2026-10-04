import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import { Shield, ArrowRight } from 'lucide-react';

export default function MaterialCategory() {
  const { category } = useParams();
  const { data, openQuickQuote } = useApp();
  const { materialCategories, heavySKUs } = data;

  const currentCategory = materialCategories.find((c) => c.slug === category);

  if (!currentCategory) {
    return <Navigate to="/materials" replace />;
  }

  // Filter products matching this category slug or show related
  const categoryProducts = heavySKUs.filter(
    (s) => s.catSlug === category || s.category.toLowerCase().includes(currentCategory.name.toLowerCase().split(' ')[0])
  );

  return (
    <div>
      <SEOHead
        title={`${currentCategory.name} Wholesale Supplier Bangalore | Sri Gajanana Constructions`}
        description={`Buy genuine ${currentCategory.name} in Bengaluru with manufacturer test certificates and weighbridge accuracy. Direct stockyard supply with site delivery. Call 8884238688.`}
        keywords={[`${currentCategory.name} Bangalore`, 'wholesale building materials', 'direct yard dispatch', 'Arekere stockyard', 'Sri Gajanana Materials']}
        canonical={`https://www.gajananaconstructions.in/materials/${currentCategory.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `${currentCategory.name} - Wholesale Building Materials`,
          "url": `https://www.gajananaconstructions.in/materials/${currentCategory.slug}`,
          "description": currentCategory.shortDesc,
          "provider": {
            "@type": "WholesaleStore",
            "name": "Sri Gajanana Constructions Materials Depot",
            "telephone": "+918884238688",
            "url": "https://www.gajananaconstructions.in/"
          }
        }}
      />

      <Breadcrumb
        items={[
          { label: 'Materials Depot', link: '/materials' },
          { label: currentCategory.name }
        ]}
      />

      {/* Pricing Policy Notice Banner */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 text-xs font-mono font-bold text-center border-b border-amber-600 shadow-inner">
        <span>📢 For wholesale bulk orders, itemized BOQ estimates, and current market pricing: Contact </span>
        <a href="tel:8884238688" className="underline font-extrabold text-slate-950 hover:text-white ml-1">8884238688</a>
        <span className="mx-1">/</span>
        <a href="tel:9535828286" className="underline font-extrabold text-slate-950 hover:text-white">9535828286</a>
        <span className="mx-1.5">|</span>
        <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline font-extrabold text-slate-950 hover:text-white">gajananaconstructionsinfo@gmail.com</a>
      </div>

      {/* Hero */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider">
                <span>{currentCategory.count}</span>
                <span>•</span>
                <span>Wholesale Yard Available</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
                {currentCategory.name}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-light">
                {currentCategory.shortDesc}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => openQuickQuote(`${currentCategory.name} Bulk Package`)}
                  className="px-6 py-3.5 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
                >
                  REQUEST CATEGORY BULK QUOTE →
                </button>
                <Link
                  to="/materials"
                  className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-200"
                >
                  ALL CATEGORIES
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={currentCategory.image}
                  alt={currentCategory.name}
                  className="w-full aspect-video object-cover"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Products in this category */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
              DEPOT INVENTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
              Certified Technical Specifications &amp; Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(categoryProducts.length ? categoryProducts : heavySKUs.slice(0, 3)).map((sku) => (
              <div
                key={sku.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={sku.image}
                      alt={sku.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-mono font-bold">
                      {sku.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-slate-950 text-base font-heading mb-2 group-hover:text-amber-600 transition-colors">
                      {sku.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mb-4">
                      {sku.specSummary}
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate-500 uppercase font-bold">Pricing Policy</span>
                        <span className="text-xs font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Price on Enquiry</span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Call: <a href="tel:8884238688" className="font-bold text-slate-900 hover:text-amber-600 font-mono">8884238688</a> / <a href="tel:9535828286" className="font-bold text-slate-900 hover:text-amber-600 font-mono">9535828286</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => openQuickQuote(sku.name)}
                    className="w-full py-3 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                  >
                    REQUEST BATCH QUOTE
                  </button>
                  <Link
                    to={`/materials/product/${sku.id}`}
                    className="block text-center py-2 text-xs font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider font-mono"
                  >
                    View Lab Test Sheet →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
