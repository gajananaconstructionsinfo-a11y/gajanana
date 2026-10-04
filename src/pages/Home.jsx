import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Shield, Award, Users, CheckCircle, ArrowRight, Building, Truck, FileText, Star, ChevronDown, Check, X, HelpCircle, MapPin, Sparkles } from 'lucide-react';
import { AREAS } from '../data/areasData';
import SEOHead from '../components/SEOHead';

export default function Home() {
  const { data, openQuickQuote } = useApp();
  const { company, services, heavySKUs, projects, workflow, testimonials } = data;
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-0">
      <SEOHead
        title="House Construction Company in Bangalore | Sri Gajanana Constructions"
        description="Sri Gajanana Constructions is a leading house construction company in Bangalore. Turnkey residential building, in-house JCB fleet & direct materials depot. Call 8884238688 / 9535828286."
        keywords="house construction company in Bangalore, house construction in Bangalore, house builders in Bangalore, residential construction company in Bangalore, construction company in Bangalore, house construction contractors in Bangalore, turnkey house construction near me, civil contractors in Bangalore"
        canonical="https://www.gajananaconstructions.in/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "GeneralContractor",
              "@id": "https://www.gajananaconstructions.in/#contractor",
              "name": "Sri Gajanana Constructions - GAJANANA TRADERS & CONSTRUCTIONS & MATERIALS",
              "alternateName": "Sri Gajanana Constructions",
              "url": "https://www.gajananaconstructions.in/",
              "logo": "https://www.gajananaconstructions.in/fallback.svg",
              "image": "https://www.gajananaconstructions.in/images/products/tata-tiscon-tmt.jpg",
              "description": "Complete construction solutions company, trading house and one-stop construction materials destination. Turnkey house building, earthmoving fleet, and primary stockyard in Bangalore since 2005.",
              "founder": {
                "@type": "Person",
                "name": "Mr. Gajanana",
                "jobTitle": "Founder & Managing Director"
              },
              "foundingDate": "2005",
              "telephone": ["+918884238688", "+919535828286"],
              "email": "gajananaconstructionsinfo@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7013, 2nd Main Rd, Samrat Layout, Sarvobhogam Nagar, Arekere",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560076",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 12.8878405,
                "longitude": 77.6017497
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "248",
                "bestRating": "5"
              },
              "priceRange": "₹₹"
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.gajananaconstructions.in/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which is the best house construction company in Bangalore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sri Gajanana Constructions is rated among the best house construction companies in Bangalore, with over 20 years of continuous civil engineering legacy since 2005. Unlike tech aggregator portals that subcontract builds to third-party labor groups, Sri Gajanana operates its own central 15,000 MT primary materials depot (Tata Tiscon, UltraTech) and in-house JCB 3DX & excavator fleet in Arekere, ensuring 100% authentic IS-grade materials, zero broker markups, and on-time project completion."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost to build a house in Bangalore in 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "House construction costs in Bangalore vary based on architectural design, soil depth, steel grades, and interior finishes. Rather than arbitrary flat per-sqft estimates that lead to 25-40% cost overruns, Sri Gajanana Constructions provides transparent, itemized Bill of Quantities (BOQ) estimates based on actual structural drawings. Call 8884238688 for an itemized estimate for your plot (30x40, 30x50, 40x60)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between turnkey construction and a labor contract in Bangalore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In a labor contract, the homeowner is responsible for buying, transporting, and securing steel, cement, sand, bricks, and tiles, which frequently causes project halts and material price fluctuations. Turnkey house construction with Sri Gajanana Constructions is an all-inclusive solution covering architectural planning, BBMP sanctions, mechanized excavation, high-grade structural materials from our own stockyard, plumbing, electrical, and turnkey interior handover with a single point of structural accountability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is choosing a builder with their own material depot better than tech aggregator apps?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tech aggregators act as middleman portals charging 15% to 25% commissions and passing the actual work to unknown subcontractors who often cut corners on steel grades and cement batches. With Sri Gajanana Constructions, you deal directly with the builder and stockyard. We supply genuine Tata Tiscon Fe 550D rebar and factory-fresh UltraTech cement with NABL batch test certificates at wholesale rates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What BBMP bylaws and plan sanctions are required in South Bangalore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Building a residential house requires clear A-Khata/B-Khata title deeds, BBMP building plan sanction, BESCOM temporary power connection, and BWSSB water/sewerage connections. Sri Gajanana assists homeowners with complete sanction drawings, structural stability certificates, setback calculations, and rainwater harvesting compliance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to construct a G+1 or G+2 house in Bangalore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, a G+1 house (approx. 2,400 sq.ft) takes 8 to 10 months, while a G+2 house takes 10 to 12 months. This includes 21-day slab curing, mechanized soil excavation, foundation footings, brick masonry, MEP rough-ins, plastering, waterproofing, and architectural finishing. Our in-house machinery and direct material stockyard prevent the supply-chain bottlenecks common with other contractors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What areas in Bangalore does Sri Gajanana Constructions serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our primary service areas include Arekere (Central Headquarters & Stockyard), JP Nagar, BTM Layout, HSR Layout, Bommanahalli, Electronic City, Attibele, Begur, Hulimavu, Singasandra, Kudlu, Harlur, Sarjapur Road, Hebbagodi, Chandapura, and Bommasandra."
                  }
                }
              ]
            }
          ]
        }}
      />

      
      {/* 1. HERO SECTION (Matching Stitch Screen 1) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-12 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>HOUSE CONSTRUCTION COMPANY IN BANGALORE • SINCE 2005</span>
              </div>

              <div>
                <p className="text-amber-600 font-bold text-xs sm:text-sm tracking-widest uppercase font-mono mb-2">
                  Premier Residential Builders &amp; Turnkey Civil Contractors
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-heading leading-none tracking-tight">
                  BUILDING DREAMS. <br />
                  SUPPLYING QUALITY. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                    DELIVERING STRENGTH.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-2xl">
                {company.subheading}. Since {company.establishedYear}, we bridge high-engineering civil execution with a central 15,000 MT primary materials depot to ensure zero site delays and verified structural integrity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/get-a-quote"
                  className="px-8 py-4 bg-slate-950 hover:bg-amber-600 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 flex items-center space-x-2 group"
                >
                  <span>REQUEST PROJECT ESTIMATE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/materials"
                  className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs tracking-wider uppercase rounded-xl transition-all border border-slate-200"
                >
                  EXPLORE MATERIALS DEPOT
                </Link>
              </div>

              {/* Fast trust stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 font-mono text-xs">
                <div>
                  <div className="text-2xl font-extrabold text-slate-950 font-heading">{company.experienceYears}</div>
                  <div className="text-slate-500 font-medium">Years Legacy</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-amber-600 font-heading">240+</div>
                  <div className="text-slate-500 font-medium">Completed Builds</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-950 font-heading">15,000 MT</div>
                  <div className="text-slate-500 font-medium">Live Depot Stock</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-amber-600 font-heading">NABL</div>
                  <div className="text-slate-500 font-medium">Certified Mill Tests</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Showcase Individual Build Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80"
                  alt="On-Site Wall Construction and Bricklaying"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-mono text-[11px] font-extrabold uppercase">
                    ON-SITE CONSTRUCTION PROGRESS
                  </span>
                  <h3 className="text-xl font-bold font-heading">Individual Residential Build #101</h3>
                  <p className="text-xs text-slate-300 font-mono">
                    Wall Construction &amp; Brick Masonry • 2,800 sq ft • Wire-Cut Bricks &amp; Fe 550D
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/projects"
                      className="inline-flex items-center text-xs font-bold text-amber-400 hover:text-amber-300 font-mono uppercase tracking-wider"
                    >
                      <span>Explore Individual Projects →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS (4 Key Cards matching Screen 1) */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.stats.map((stat) => (
              <div key={stat.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-amber-600 font-mono font-bold text-xs uppercase tracking-wider block mb-1">
                  Pillar {stat.id}
                </span>
                <h4 className="text-base font-bold text-slate-950 mb-1 font-heading">{stat.label}</h4>
                <p className="text-xs text-slate-600 font-mono">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block">
                INTEGRATED ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                Civil Engineering Precision Meets Direct Material Sourcing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Unlike traditional construction firms who rely on fragmented third-party brokers, Gajanana Traders &amp; Constructions &amp; Materials operates our own central 15,000 MT stockyard and direct trading network.
              </p>
              <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Primary Mill Direct Fe 550D TMT Rebar &amp; Grade 53 Cement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Daily digital site logs, slump tests, and NABL batch test certificates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Locked-in milestone contracts shielding clients from raw material inflation</span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-xs font-extrabold text-amber-600 hover:text-amber-700 font-mono uppercase tracking-wider group"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80"
                  alt="Construction Site Engineering"
                  className="rounded-2xl object-cover h-64 w-full shadow-md"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                  alt="Quality Material Depot"
                  className="rounded-2xl object-cover h-64 w-full shadow-md mt-6"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                Comprehensive Construction Solutions
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-extrabold text-amber-600 hover:text-amber-700 uppercase tracking-wider font-mono"
            >
              <span>VIEW ALL SERVICES →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-mono font-bold">
                      {service.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-950 font-heading mb-2 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-extrabold text-amber-600 hover:text-amber-700 font-mono uppercase tracking-wider flex items-center space-x-1"
                  >
                    <span>EXPLORE DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MATERIALS DEPOT PREVIEW (Matching Stitch Screen 2 Featured Cards) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                CENTRAL DEPOT INVENTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                Heavy Construction Materials &amp; Primary SKUs
              </h2>
            </div>
            <Link
              to="/materials"
              className="inline-flex items-center text-xs font-extrabold text-amber-600 hover:text-amber-700 uppercase tracking-wider font-mono"
            >
              <span>VIEW ALL MATERIALS →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heavySKUs.slice(0, 4).map((sku) => (
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
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase">
                      {sku.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-slate-950 text-base font-heading mb-1.5 group-hover:text-amber-600 transition-colors">
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
                    View Technical Sheet →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* B2B Wholesale & Pricing Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                COMMERCIAL FLEET &amp; BULK MATERIALS QUOTATIONS
              </span>
              <h3 className="text-2xl font-bold font-heading">
                For All Price Queries &amp; Bulk Rake Dispatches
              </h3>
              <p className="text-xs text-slate-300 max-w-xl font-light">
                We supply primary steel, cement, triple-washed M-Sand, and dispatch JCB 3DX &amp; heavy excavators directly to site. For live market rates and project quotes, contact our coordination desk:
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-amber-400">
                <span>📞 <a href="tel:8884238688" className="font-bold underline text-white hover:text-amber-400">8884238688</a> / <a href="tel:9535828286" className="font-bold underline text-white hover:text-amber-400">9535828286</a></span>
                <span>✉️ <a href="mailto:gajananaconstructionsinfo@gmail.com" className="font-bold underline text-white hover:text-amber-400">gajananaconstructionsinfo@gmail.com</a></span>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shrink-0 transition-colors shadow"
            >
              CONTACT DISPATCH DESK →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US PREVIEW (8 Pillars) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              THE GAJANANA ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Why Build &amp; Source With Us
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our 8 operational pillars guarantee structural integrity, honest billing, and uncompromised timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '01', title: 'Integrated Construction', desc: 'Single point of accountability from soil testing to interior finishing.' },
              { id: '02', title: 'NABL Certified Quality', desc: 'Every steel batch and cement lot backed by verified primary mill heat sheets.' },
              { id: '03', title: '15,000 MT Stockyard', desc: 'De-humidified automated warehousing shielding materials from moisture degradation.' },
              { id: '04', title: 'Milestone Transparency', desc: 'Pay strictly against verified civil milestones. Zero surprise advances.' },
              { id: '05', title: 'Senior Civil Engineers', desc: 'Every site overseen by experienced structural site supervisors.' },
              { id: '06', title: 'Direct B2B Pricing', desc: 'Eliminates 3 layers of intermediary commissions for our clients.' },
              { id: '07', title: 'Zero Site Stoppages', desc: 'Dedicated fleet ensures uninterrupted concrete pours and brickwork.' },
              { id: '08', title: '10-Year Warranty', desc: 'Comprehensive structural stability guarantee on all turnkey projects.' }
            ].map((pillar) => (
              <div key={pillar.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-amber-600 font-mono font-extrabold text-lg block mb-2">
                  {pillar.id}
                </span>
                <h4 className="font-bold text-slate-950 text-base mb-1 font-heading">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/why-us"
              className="inline-flex items-center text-xs font-extrabold text-amber-600 hover:text-amber-700 uppercase tracking-wider font-mono"
            >
              <span>EXPLORE COMPLETE WHY US MATRIX →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PROJECTS PREVIEW */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                ON-SITE PROGRESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                Individual Construction Builds &amp; Photos
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center text-xs font-extrabold text-amber-600 hover:text-amber-700 uppercase tracking-wider font-mono"
            >
              <span>VIEW ALL INDIVIDUAL BUILDS →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold font-mono">
                      INDIVIDUAL BUILD
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-slate-500 font-mono mb-2">
                      <span className="text-amber-600 font-bold">{proj.stage}</span> • {proj.area}
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 font-heading mb-2 group-hover:text-amber-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {proj.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/projects/${proj.id}`}
                    className="text-xs font-extrabold text-amber-600 hover:text-amber-700 uppercase tracking-wider font-mono flex items-center space-x-1"
                  >
                    <span>VIEW ON-SITE PHOTOS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 6-STEP WORKFLOW */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              DISCIPLINED PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Our 6-Step Construction Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((w) => (
              <div key={w.step} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-amber-600 font-mono font-extrabold text-xl block mb-2">
                  {w.step}
                </span>
                <h4 className="font-bold text-slate-950 text-base mb-2 font-heading">{w.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* 8.5. COMPETITOR COMPARISON TABLE (Rank #1 Factor: Demonstrating Superior Capability) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              WHY SRI GAJANANA OUTPERFORMS OTHERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Sri Gajanana Constructions vs. Tech Aggregators vs. Local Contractors
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 font-light">
              See why hundreds of Bengaluru families choose our direct-builder ecosystem over middleman apps and unverified contractors.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs sm:text-sm font-heading">
                  <th className="p-4 sm:p-6 w-1/4 border-b border-slate-800">Key Feature &amp; Capability</th>
                  <th className="p-4 sm:p-6 w-1/3 bg-amber-500 text-slate-950 font-black border-b border-amber-600">
                    <div className="flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 fill-slate-950" />
                      <span>Sri Gajanana Constructions</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-6 w-1/4 border-b border-slate-800 text-slate-300">Tech Aggregator Portals</th>
                  <th className="p-4 sm:p-6 w-1/4 border-b border-slate-800 text-slate-400">Local Unregistered Labor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-amber-50/20 transition-colors">
                  <td className="p-4 sm:p-6 font-bold text-slate-900 bg-slate-50/50">
                    Material Sourcing &amp; Authenticity
                  </td>
                  <td className="p-4 sm:p-6 bg-amber-500/10 font-bold text-slate-950 border-x border-amber-500/20">
                    <div className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Own 15,000 MT Stockyard:</strong> Direct primary mill Fe 550D TMT (Tata Tiscon, JSW) &amp; UltraTech Cement with NABL test certificates.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Subcontracts supply to random local traders. No mill test batch verification.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Retail hardware sourcing with frequent secondary steel &amp; expired cement bags.</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/20 transition-colors">
                  <td className="p-4 sm:p-6 font-bold text-slate-900 bg-slate-50/50">
                    Heavy Machinery Fleet
                  </td>
                  <td className="p-4 sm:p-6 bg-amber-500/10 font-bold text-slate-950 border-x border-amber-500/20">
                    <div className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>In-House Fleet:</strong> JCB 3DX, 20-ton excavators, rock breakers, and tippers ready for immediate site mobilization.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Rents machinery from third parties. Severe scheduling delays and markup rental fees.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Manual pickaxe digging or irregular equipment rentals causing site delays.</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/20 transition-colors">
                  <td className="p-4 sm:p-6 font-bold text-slate-900 bg-slate-50/50">
                    Execution Team &amp; Accountability
                  </td>
                  <td className="p-4 sm:p-6 bg-amber-500/10 font-bold text-slate-950 border-x border-amber-500/20">
                    <div className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>100% In-House Civil Engineers:</strong> Dedicated project managers, licensed structural consultants, and verified skilled craftsmen.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Subcontracts to 3rd-party freelance contractors. High dispute rates &amp; lack of ownership.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Unsupervised migrant labor groups without structural engineering qualifications.</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/20 transition-colors">
                  <td className="p-4 sm:p-6 font-bold text-slate-900 bg-slate-50/50">
                    Cost Transparency &amp; Variations
                  </td>
                  <td className="p-4 sm:p-6 bg-amber-500/10 font-bold text-slate-950 border-x border-amber-500/20">
                    <div className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Transparent BOQ:</strong> Itemized material and labor schedules. Milestone-linked payment stages with zero hidden markups.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Teaser square-foot rates with 20% to 35% surprise variation charges during structural work.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Vague verbal estimates leading to frequent mid-project budget disputes and abandonment.</span>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-amber-50/20 transition-colors">
                  <td className="p-4 sm:p-6 font-bold text-slate-900 bg-slate-50/50">
                    Quality &amp; Structural Warranty
                  </td>
                  <td className="p-4 sm:p-6 bg-amber-500/10 font-bold text-slate-950 border-x border-amber-500/20">
                    <div className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>10-Year Written Warranty:</strong> IS 456 &amp; IS 13920 seismic-compliant RCC casting backed by physical Arekere office presence since 2005.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Complicated warranty clauses with third-party liability disclaimers on digital apps.</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600">
                    <div className="flex items-start space-x-2">
                      <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>Zero warranty. Contractor phone numbers often disconnect once final payments clear.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8.6. LOCAL SERVICE NETWORK (High-Ranking Geo Coverage) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              LOCAL SOUTH BENGALURU COVERAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              House Construction Services Across South &amp; Southeast Bengaluru
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 font-light">
              Our central yard in Arekere and machinery depot allows us to provide rapid on-site civil execution, material delivery, and supervision across all major residential sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/areas/${a.slug}`}
                className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1.5 text-amber-600 mb-2">
                    <MapPin className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 group-hover:text-amber-600">
                      {a.distanceFromArekere}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-sm font-heading leading-snug">
                    {a.name}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-900">
                  <span>Explore Area</span>
                  <span className="text-amber-600">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Planning a house construction project in South Bengaluru? Call our engineering desk at{' '}
              <a href="tel:8884238688" className="font-bold text-amber-600 hover:underline">+91 88842 38688</a>{' '}
              or visit our stockyard at Samrat Layout, Arekere.
            </p>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              CLIENT TRUST
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Endorsed by Builders &amp; Homeowners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-500 mb-4 space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="font-bold text-slate-950 text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                  <div className="text-[11px] text-amber-700 font-mono mt-1">{t.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* 9.5. GOOGLE SEARCH FAQS (High-Rank People Also Ask Search Queries) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Everything You Need to Know Before Building a House in Bangalore
            </h2>
            <p className="text-slate-600 text-sm mt-3 font-light">
              Clear, transparent answers from our senior civil engineers on costs, bylaws, timelines, and material standards.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Which is the best house construction company in Bangalore?",
                a: "Sri Gajanana Constructions is rated among the best house construction companies in Bangalore, with over 20 years of continuous civil engineering legacy since 2005. Unlike tech aggregator portals that subcontract builds to third-party labor groups, Sri Gajanana operates its own central 15,000 MT primary materials depot (Tata Tiscon, UltraTech) and in-house JCB 3DX & excavator fleet in Arekere, ensuring 100% authentic IS-grade materials, zero broker markups, and on-time project completion."
              },
              {
                q: "How much does it cost to build a house in Bangalore in 2026?",
                a: "House construction costs in Bangalore vary based on architectural design, soil depth, steel grades, and interior finishes. Rather than arbitrary flat per-sqft estimates that lead to 25-40% cost overruns, Sri Gajanana Constructions provides transparent, itemized Bill of Quantities (BOQ) estimates based on actual structural drawings. Call 8884238688 for an itemized estimate for your plot (30x40, 30x50, 40x60)."
              },
              {
                q: "What is the difference between turnkey construction and a labor contract in Bangalore?",
                a: "In a labor contract, the homeowner is responsible for buying, transporting, and securing steel, cement, sand, bricks, and tiles, which frequently causes project halts and material price fluctuations. Turnkey house construction with Sri Gajanana Constructions is an all-inclusive solution covering architectural planning, BBMP sanctions, mechanized excavation, high-grade structural materials from our own stockyard, plumbing, electrical, and turnkey interior handover with a single point of structural accountability."
              },
              {
                q: "Why is choosing a builder with their own material depot better than tech aggregator apps?",
                a: "Tech aggregators act as middleman portals charging 15% to 25% commissions and passing the actual work to unknown subcontractors who often cut corners on steel grades and cement batches. With Sri Gajanana Constructions, you deal directly with the primary builder and materials stockyard. We supply genuine Tata Tiscon Fe 550D rebar and factory-fresh UltraTech cement with NABL batch test certificates at wholesale rates."
              },
              {
                q: "What BBMP bylaws and plan sanctions are required in South Bangalore?",
                a: "Building a house in Bangalore requires an A-Khata/B-Khata title verification, BBMP plan sanction (or BDA/BMRDA approvals depending on jurisdiction), BESCOM temporary electrical connection, and BWSSB water/sewerage connections. Sri Gajanana assists homeowners with complete sanction drawings, structural stability certificates, setback calculations, and rainwater harvesting compliance."
              },
              {
                q: "How long does it take to construct a G+1 or G+2 house in Bangalore?",
                a: "Typically, a G+1 house (approx. 2,400 sq.ft) takes 8 to 10 months, while a G+2 house takes 10 to 12 months. This includes 21-day slab curing, mechanized soil excavation, foundation footings, brick masonry, MEP rough-ins, plastering, waterproofing, and architectural finishing. Our in-house machinery and direct material stockyard prevent the supply-chain bottlenecks common with other contractors."
              },
              {
                q: "What areas in Bangalore does Sri Gajanana Constructions serve?",
                a: "Our primary service areas include Arekere (Central Headquarters & Stockyard), JP Nagar, BTM Layout, HSR Layout, Bommanahalli, Electronic City, Attibele, Begur, Hulimavu, Singasandra, Kudlu, Harlur, Sarjapur Road, Hebbagodi, Chandapura, and Bommasandra."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-amber-400 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 font-heading text-base sm:text-lg focus:outline-none"
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-700 font-mono text-xs font-black flex items-center justify-center shrink-0">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-600 transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50 font-light">
                    <p>{faq.a}</p>
                    <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>Gajanana Constructions Engineering Desk</span>
                      <a href="tel:8884238688" className="text-amber-600 font-bold hover:underline">
                        Call 8884238688 for Details →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 font-mono">
              Have a specific architectural drawing or plot measurement?{' '}
              <Link to="/contact" className="text-amber-600 font-bold underline hover:text-amber-700">
                Contact our Arekere Engineering Office
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block mb-3">
            READY TO BUILD WITH UNCOMPROMISED STRENGTH?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mb-4 max-w-2xl mx-auto">
            Get an Itemized Estimate or Material Rate Sheet
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-4 font-light">
            Schedule a consultation with our senior civil engineering estimators today. For all pricing queries, daily wholesale rates, and machine dispatch:
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 mb-8 shadow-inner">
            <span>Call: <a href="tel:8884238688" className="font-bold underline text-white hover:text-amber-400">8884238688</a> / <a href="tel:9535828286" className="font-bold underline text-white hover:text-amber-400">9535828286</a></span>
            <span>•</span>
            <span>Email: <a href="mailto:gajananaconstructionsinfo@gmail.com" className="font-bold underline text-white hover:text-amber-400">gajananaconstructionsinfo@gmail.com</a></span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-amber-500/20"
            >
              REQUEST DETAILED BOQ →
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-all border border-slate-700"
            >
              CONTACT HEADQUARTERS
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
