import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Calculator, 
  Calendar, 
  HardHat, 
  ArrowRight,
  Clock,
  Sparkles,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { getAreaBySlug, AREAS } from '../data/areasData';
import { useApp } from '../context/AppContext';

export default function AreaDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, openQuoteModal } = useApp();
  const area = getAreaBySlug(slug);

  // If area not found, fallback to areas hub
  useEffect(() => {
    if (!area) {
      navigate('/areas', { replace: true });
    }
  }, [area, navigate]);

  // SEO Meta and Schema Injection
  useEffect(() => {
    if (!area) return;

    // Update title
    document.title = area.metaTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = area.metaDescription;

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = area.seoKeywords.join(', ');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.gajananaconstructions.in/areas/${area.slug}`;

    // Inject Schema.org JSON-LD
    const schemaId = 'area-schema-jsonld';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "GeneralContractor",
          "@id": `https://www.gajananaconstructions.in/areas/${area.slug}#contractor`,
          "name": `Sri Gajanana Constructions - ${area.name}`,
          "description": area.metaDescription,
          "url": `https://www.gajananaconstructions.in/areas/${area.slug}`,
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
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": `${area.name}, Bengaluru`
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
          "mainEntity": area.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://www.gajananaconstructions.in/areas/${area.slug}#breadcrumbs`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.gajananaconstructions.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Service Areas",
              "item": "https://www.gajananaconstructions.in/areas"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": area.name,
              "item": `https://www.gajananaconstructions.in/areas/${area.slug}`
            }
          ]
        }
      ]
    };

    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      // Clean up script tag when navigating away
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [area]);

  // Interactive Cost Estimator State
  const [builtUpArea, setBuiltUpArea] = useState(2400);
  const [packageType, setPackageType] = useState('premium'); // 'standard' | 'premium' | 'luxury'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!area) return null;

  const packageRates = {
    standard: 1750,
    premium: 2050,
    luxury: 2450
  };

  const currentRate = packageRates[packageType];
  const totalCost = builtUpArea * currentRate;
  const materialsCost = Math.round(totalCost * 0.60);
  const laborCost = Math.round(totalCost * 0.25);
  const finishingCost = Math.round(totalCost * 0.15);

  const whatsappMessage = encodeURIComponent(
    `Hi Sri Gajanana Constructions, I am planning a construction project in ${area.name}, Bengaluru. I estimated ${builtUpArea.toLocaleString()} sq.ft with ${packageType.toUpperCase()} package (approx ₹${(totalCost / 100000).toFixed(1)} Lakhs). Please share a detailed quote and schedule a site visit.`
  );

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs */}
      <nav className="bg-slate-50 border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/areas" className="hover:text-amber-600 transition-colors">Areas We Serve</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">{area.name}</span>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-10 pb-16 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-700 text-xs font-bold tracking-wide uppercase mb-4">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{area.badge} • {area.zone}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
                {area.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6">
                {area.subheading}
              </p>

              {/* Quick Specs Pill Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Yard Dispatch</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">{area.deliveryTime}</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Fleet Base</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">In-House JCBs</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Direct Steel</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">Tata Tiscon 550D</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Warranty</div>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">10-Year Structural</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={openQuoteModal}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center space-x-2 text-sm"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Get Estimate for {area.name}</span>
                </button>

                <a
                  href={`https://wa.me/918884238688?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md hover:scale-[1.02] transition-all flex items-center space-x-2 text-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  <span>WhatsApp Consultation</span>
                </a>

                <a
                  href="tel:8884238688"
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center space-x-2 text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call 8884238688</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={area.heroImage}
                  alt={`Construction works in ${area.name}, Bengaluru`}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-1">
                    Locality Verified Contractor
                  </div>
                  <h3 className="text-lg font-bold font-heading">
                    {area.tagline}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Direct stockyard supplies, turnkey civil execution, and in-house heavy machinery for {area.name}.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Competitive Advantage Moat Banner */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider">
              Why We Outperform Other Builders
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 font-heading">
              The Sri Gajanana Dual-Strength Moat in {area.name}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Unlike online contractor aggregators who outsource labor and materials at hefty 15–20% markups, we own our building materials stockyard and JCB fleet right here in South Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center font-bold mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Direct Stockyard Pricing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Save up to 15% on procurement. We supply genuine UltraTech 43G cement, Tata Tiscon TMT rebar, and double-washed M-sand directly from our depot to your {area.name} site without middleman commissions.
              </p>
            </div>

            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center font-bold mb-4">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">In-House JCB 3DX & Excavators</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero waiting time for earthmoving. Our heavy fleet stationed at Arekere handles site clearing, basement digging, trenching, and debris carting in {area.name} with experienced operators.
              </p>
            </div>

            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">10-Year Structural Guarantee</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Earthquake-resistant RCC design, certified ultrasonic concrete compaction, multi-layer waterproofing, and transparent milestone contracts with complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Local Overview & Unique Soil/Engineering Context */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Locality Blueprint</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
                  Comprehensive Construction Solutions in {area.name}
                </h2>
              </div>

              {area.uniqueDescription.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
                <h4 className="text-sm font-extrabold text-slate-900 mb-2 flex items-center space-x-2">
                  <FileCheck className="w-4 h-4 text-amber-600" />
                  <span>BBMP, BDA & Municipal Approval Assistance in {area.name}</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Our liaison architects and civil engineers draft setback-compliant CAD blueprints, calculate maximum permissible FAR/FSI under Bengaluru zoning regulations, and handle all plan sanctions, rainwater harvesting mandates, and BESCOM/BWSSB utility connections.
                </p>
              </div>
            </div>

            {/* Right Soil & Foundation Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm sticky top-28">
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-2">
                  Soil & Foundation Technical Profile
                </h3>
                <p className="text-xs text-amber-700 font-bold uppercase tracking-wider mb-4">
                  Locality Engineering Characteristics
                </p>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {area.soilAndFoundationInfo}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Pincode Covered:</span>
                    <span className="font-mono font-bold text-slate-900">{area.pincode}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Dispatch Speed:</span>
                    <span className="font-bold text-emerald-600">{area.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Direct Steel Rebar:</span>
                    <span className="font-bold text-slate-900">Tata Tiscon Fe 550D</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Certified Cement:</span>
                    <span className="font-bold text-slate-900">UltraTech 43-Grade OPC</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a
                    href="tel:8884238688"
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors flex items-center justify-center space-x-2 text-xs"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Speak with {area.name} Project Engineer</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Core Services Offered in This Locality */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">What We Build</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Turnkey Construction Services in {area.name}
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              From independent family villas and duplex homes to commercial showrooms and structural remodeling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {area.keyServices.map((service, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 font-heading group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Direct Materials Depot Supply Showcase */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Wholesale Supply</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading mb-4">
                Primary Building Materials Depot for {area.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Are you an independent builder, contractor, or homeowner in {area.name} looking for certified building materials? Order directly from our Arekere stockyard with digital weighment slips and prompt site dispatch.
              </p>

              <div className="space-y-2.5 mb-8">
                {area.materialsSupplied.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  to="/materials"
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center space-x-2"
                >
                  <span>Browse Full Materials Depot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="tel:8884238688"
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Call Yard: 8884238688
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                  <img
                    src="/images/products/tata-tiscon-tmt.jpg"
                    alt="Tata Tiscon TMT Steel rebar supply"
                    className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 bg-white">
                    <div className="text-xs font-bold text-slate-900">Tata Tiscon Fe 550D</div>
                    <div className="text-[11px] text-slate-500">Depot wholesale bundles</div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                  <img
                    src="/images/products/ultratech-cement.jpg"
                    alt="UltraTech 43 Grade cement bags"
                    className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 bg-white">
                    <div className="text-xs font-bold text-slate-900">UltraTech 43G Cement</div>
                    <div className="text-[11px] text-slate-500">Fresh factory batches</div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                  <img
                    src="/images/products/jcb-3dx.jpg"
                    alt="JCB 3DX backhoe loader rental"
                    className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 bg-white">
                    <div className="text-xs font-bold text-slate-900">JCB 3DX Fleet</div>
                    <div className="text-[11px] text-slate-500">Direct hourly/daily hire</div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                  <img
                    src="/images/construction-works/stage-01-site-foundation.jpg"
                    alt="M-Sand and Aggregate Jelly Delivery"
                    className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3 bg-white">
                    <div className="text-xs font-bold text-slate-900">Double-Washed M-Sand</div>
                    <div className="text-[11px] text-slate-500">High-grade concrete sand</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Interactive Construction Cost Calculator for This Locality */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 font-heading">
              House Construction Cost Estimator for {area.name}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Select your plot configuration or enter your planned built-up area to calculate real-time turnkey construction investment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Controls */}
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    1. Choose Common Plot Configuration:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setBuiltUpArea(2400)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                        builtUpArea === 2400
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                          : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      30x40 (G+1)
                      <span className="block text-[10px] font-normal opacity-80">2,400 sq.ft</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBuiltUpArea(3000)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                        builtUpArea === 3000
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                          : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      30x50 (G+1)
                      <span className="block text-[10px] font-normal opacity-80">3,000 sq.ft</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBuiltUpArea(4200)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                        builtUpArea === 4200
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                          : 'bg-slate-700/60 text-slate-300 border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      40x60 (G+2)
                      <span className="block text-[10px] font-normal opacity-80">4,200 sq.ft</span>
                    </button>
                  </div>
                </div>

                {/* Area Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                    <span>Custom Built-Up Area:</span>
                    <span className="font-mono text-amber-400 text-sm font-extrabold">{builtUpArea.toLocaleString()} sq.ft</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={builtUpArea}
                    onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1,000 sq.ft</span>
                    <span>5,000 sq.ft</span>
                    <span>10,000 sq.ft</span>
                  </div>
                </div>

                {/* Package Select */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    2. Select Construction Package:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPackageType('standard')}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        packageType === 'standard'
                          ? 'bg-amber-500/20 border-amber-500 text-white'
                          : 'bg-slate-700/40 border-slate-600 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-xs font-extrabold">Standard</div>
                      <div className="text-[11px] text-amber-400 font-mono font-bold mt-0.5">₹1,750 / sqft</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPackageType('premium')}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        packageType === 'premium'
                          ? 'bg-amber-500/20 border-amber-500 text-white'
                          : 'bg-slate-700/40 border-slate-600 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-xs font-extrabold">Premium</div>
                      <div className="text-[11px] text-amber-400 font-mono font-bold mt-0.5">₹2,050 / sqft</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPackageType('luxury')}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        packageType === 'luxury'
                          ? 'bg-amber-500/20 border-amber-500 text-white'
                          : 'bg-slate-700/40 border-slate-600 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-xs font-extrabold">Luxury Villa</div>
                      <div className="text-[11px] text-amber-400 font-mono font-bold mt-0.5">₹2,450 / sqft</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="md:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-amber-500/30 text-center">
                <div className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">
                  Estimated Investment ({area.name})
                </div>
                
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono mt-2 mb-1">
                  ₹{(totalCost / 100000).toFixed(2)} <span className="text-lg text-white">Lakhs</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  @ ₹{currentRate}/sq.ft for {builtUpArea.toLocaleString()} sq.ft built-up
                </div>

                {/* Breakdown Mini Table */}
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs text-left">
                  <div className="flex justify-between text-slate-300">
                    <span>Structural Materials (Steel, Cement, Sand):</span>
                    <span className="font-mono text-white">₹{(materialsCost / 100000).toFixed(1)}L (60%)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Labor, Shuttering & Machinery:</span>
                    <span className="font-mono text-white">₹{(laborCost / 100000).toFixed(1)}L (25%)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Finishing, Tiles & Plumbing:</span>
                    <span className="font-mono text-white">₹{(finishingCost / 100000).toFixed(1)}L (15%)</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 pt-2 border-t border-slate-800 font-bold">
                    <span>Estimated Completion:</span>
                    <span>8 – 11 Months</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <a
                    href={`https://wa.me/918884238688?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-all flex items-center justify-center space-x-2 text-xs"
                  >
                    <span>Lock This Estimate via WhatsApp</span>
                  </a>
                  <button
                    onClick={openQuoteModal}
                    className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl transition-colors text-xs"
                  >
                    Request Comprehensive BOQ Breakdown
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. Real Bangalore Construction Photo Showcase */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Workmanship</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Real Construction Workmanship Across South Bengaluru
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Every project is constructed with certified structural steel, machine-vibrated concrete, and master craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/projects/roof-slab-pouring.jpg"
                  alt="RCC Roof Slab Pouring and Vibration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-slate-900">RCC Roof Slab Concreting</h4>
                <p className="text-xs text-slate-500 mt-1">Machine-mixed M25 grade concrete with needle vibrator compaction.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/projects/slab-shuttering-rebar.jpg"
                  alt="Steel Shuttering and Tata Tiscon Rebar Tying"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-slate-900">Precision Rebar Tying</h4>
                <p className="text-xs text-slate-500 mt-1">Tata Tiscon Fe 550D rebar grid tying with cover blocks for durability.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
              <div className="h-56 overflow-hidden">
                <img
                  src="/images/construction-works/stage-08-kitchen.jpg"
                  alt="Luxury Kitchen and Interior Finishing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-slate-900">Turnkey Modern Kitchens</h4>
                <p className="text-xs text-slate-500 mt-1">Waterproof marine ply cabinetry with premium quartz countertops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Local FAQs Accordion (with Rich Schema markup) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Frequently Asked Questions for {area.name}
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Everything you need to know about building, approvals, material supply, and pricing in {area.name}.
            </p>
          </div>

          <div className="space-y-4">
            {area.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center space-x-4 focus:outline-hidden"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-amber-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Nearby Service Areas Cluster */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">South Bengaluru Service Network</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
              Nearby Localities Connected to {area.name}
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Explore our turnkey civil contracting and material delivery hubs across adjacent South Bengaluru neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {area.nearbyLocalities.map((loc, idx) => (
              <Link
                key={idx}
                to={`/areas/${loc.slug}`}
                className="p-3.5 bg-slate-50 hover:bg-amber-500/10 border border-slate-200 hover:border-amber-400 rounded-xl transition-all text-center group"
              >
                <div className="text-xs font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {loc.name}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {loc.distance} from {area.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/areas"
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-amber-600 hover:text-amber-700 underline"
            >
              <span>View All 17 South & Southeast Bengaluru Service Areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. High-Converting Sticky Local CTA Bar */}
      <section className="py-12 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-900 mb-1">
                Start Building in {area.name} Today
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-950">
                Book a Free On-Site Consultation &amp; Soil Assessment
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-900/80 mt-1 max-w-xl">
                Speak directly with Sri Gajanana Constructions leadership. Get itemized estimates, BBMP sanction guidance, and direct depot material pricing.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:8884238688"
                className="px-6 py-3.5 bg-slate-950 text-white hover:bg-slate-900 font-extrabold rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center space-x-2 text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call 8884238688</span>
              </a>

              <a
                href={`https://wa.me/918884238688?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold rounded-xl shadow-md transition-transform hover:scale-[1.02] flex items-center space-x-2 text-xs sm:text-sm"
              >
                <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
