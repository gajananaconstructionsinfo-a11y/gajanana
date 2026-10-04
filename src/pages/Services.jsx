import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import { 
  ArrowRight, 
  CheckCircle, 
  Search, 
  Building2, 
  Truck, 
  Layers, 
  ShieldCheck, 
  PhoneCall, 
  Check, 
  Sparkles,
  Filter
} from 'lucide-react';

export default function Services() {
  const { data } = useApp();
  const { services, houseConstructionWorks = [] } = data;

  // Filter state for top services grid
  const [serviceFilter, setServiceFilter] = useState('all');

  // Filter and search state for 18-stage House Construction Works
  const [stageFilter, setStageFilter] = useState('all');
  const [stageSearch, setStageSearch] = useState('');

  // Filtered top services
  const filteredServices = useMemo(() => {
    if (serviceFilter === 'all') return services;
    if (serviceFilter === 'materials') {
      return services.filter(s => s.category === 'materials' || s.id.includes('steel') || s.id.includes('cement'));
    }
    if (serviceFilter === 'machinery') {
      return services.filter(s => s.category === 'machinery' || s.id.includes('jcb') || s.id.includes('equipment'));
    }
    if (serviceFilter === 'construction') {
      return services.filter(s => s.category !== 'materials' && s.category !== 'machinery');
    }
    return services;
  }, [services, serviceFilter]);

  // Filtered 18-stage house construction works
  const filteredStages = useMemo(() => {
    return houseConstructionWorks.filter((stage) => {
      // Category filter match
      let matchesCategory = true;
      if (stageFilter === 'civil') {
        matchesCategory = stage.number >= 1 && stage.number <= 3;
      } else if (stageFilter === 'mep') {
        matchesCategory = stage.number === 4 || stage.number === 5 || stage.number === 16;
      } else if (stageFilter === 'surfaces') {
        matchesCategory = stage.number === 6 || stage.number === 7;
      } else if (stageFilter === 'interiors') {
        matchesCategory = stage.number >= 8 && stage.number <= 12;
      } else if (stageFilter === 'fabrication') {
        matchesCategory = stage.number === 13 || stage.number === 15;
      } else if (stageFilter === 'handover') {
        matchesCategory = stage.number === 14 || stage.number === 17 || stage.number === 18;
      }

      // Keyword search match
      const query = stageSearch.trim().toLowerCase();
      let matchesSearch = true;
      if (query) {
        const inTitle = stage.title.toLowerCase().includes(query);
        const inSummary = stage.summary?.toLowerCase().includes(query);
        const inItems = stage.items?.some(item => item.toLowerCase().includes(query));
        const inBadge = stage.badge?.toLowerCase().includes(query);
        matchesSearch = inTitle || inSummary || inItems || inBadge;
      }

      return matchesCategory && matchesSearch;
    });
  }, [houseConstructionWorks, stageFilter, stageSearch]);

  return (
    <div>
      <SEOHead
        title="Construction Services & Heavy Machinery Rental in Bengaluru | Sri Gajanana Constructions"
        description="Complete construction services in Bangalore: turnkey residential villa construction, commercial civil works, JCB 3DX & excavator rental, architectural planning, and structural renovation. Call 8884238688."
        keywords="construction services Bangalore, turnkey house construction, JCB hire Bangalore, civil contractors Arekere, structural engineering Bengaluru, renovation contractors"
        canonical="https://www.gajananaconstructions.in/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Construction & Fleet Services in Bengaluru",
          "url": "https://www.gajananaconstructions.in/services",
          "description": "Turnkey civil engineering, heavy earthmoving fleet rental, and comprehensive construction services by Sri Gajanana Constructions.",
          "provider": {
            "@type": "GeneralContractor",
            "name": "Sri Gajanana Constructions",
            "telephone": "+918884238688",
            "url": "https://www.gajananaconstructions.in/"
          }
        }}
      />

      <Breadcrumb items={[{ label: 'Services Directory' }]} />

      {/* Pricing Policy Top Banner */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 text-xs font-mono font-bold text-center border-b border-amber-600 shadow-inner">
        <span>📢 For service quotes, machinery dispatch (JCB 3DX &amp; excavators), cement/steel procurement, and turnkey house construction: Contact </span>
        <a href="tel:8884238688" className="underline font-extrabold text-slate-950 hover:text-white ml-1">8884238688</a>
        <span className="mx-1">/</span>
        <a href="tel:9535828286" className="underline font-extrabold text-slate-950 hover:text-white">9535828286</a>
        <span className="mx-1.5">|</span>
        <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline font-extrabold text-slate-950 hover:text-white">gajananaconstructionsinfo@gmail.com</a>
      </div>

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              DISCIPLINED EXECUTION • COMPLETE SITE SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              CONSTRUCTION, MATERIALS &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                MACHINERY SERVICES.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              From authorized primary TMT steel &amp; 53-grade cement bulk supply to in-house JCB 3DX earthmoving fleets and complete 18-stage residential turnkey construction — we deliver strength, engineering precision, and single-point accountability.
            </p>

            {/* Quick anchors */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#house-construction-works"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold font-heading uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>EXPLORE 18 HOUSE CONSTRUCTION WORKS ↓</span>
              </a>
              <a
                href="#services-directory"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-heading uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center space-x-2"
              >
                <Layers className="w-4 h-4" />
                <span>ALL SERVICES &amp; SUPPLY DIRECTORY</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-directory" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest">
                CORE CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                Specialized Services &amp; Fleet Directory
              </h2>
            </div>

            {/* Service Filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'materials', label: 'Cement & Steel Supply' },
                { id: 'machinery', label: 'JCB Fleet & Machinery' },
                { id: 'construction', label: 'Turnkey & Civil Engineering' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setServiceFilter(btn.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    serviceFilter === btn.id
                      ? 'bg-slate-950 text-white shadow'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-mono font-bold">
                      {service.badge}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-2 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {service.desc}
                    </p>

                    <div className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-4">
                      {service.deliverables.slice(0, 3).map((d, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/get-a-quote"
                    className="py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center shadow-sm"
                  >
                    <span>GET QUOTE</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18-STAGE HOUSE CONSTRUCTION WORKS SHOWCASE */}
      <section id="house-construction-works" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center space-x-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TURNKEY RESIDENTIAL ENGINEERING • 18 DEDICATED STAGES</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
              House Construction Works
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Every phase of building your home executed with military discipline. Backed by certified Fe 550D TMT rebars, factory-fresh cement, and our dedicated machinery fleet.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="bg-slate-950/80 backdrop-blur border border-slate-800 rounded-3xl p-6 mb-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                <span className="text-xs font-mono text-slate-400 mr-1 flex items-center">
                  <Filter className="w-3.5 h-3.5 mr-1 text-amber-400" /> Filter:
                </span>
                {[
                  { id: 'all', label: 'All 18 Stages' },
                  { id: 'civil', label: '1-3 Civil & Structure' },
                  { id: 'mep', label: '4-5, 16 MEP & Systems' },
                  { id: 'surfaces', label: '6-7 Flooring & Joinery' },
                  { id: 'interiors', label: '8-12 Interiors & Finishes' },
                  { id: 'fabrication', label: '13, 15 Metal & Outdoors' },
                  { id: 'handover', label: '14, 17-18 Protection & Keys' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setStageFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono transition-all ${
                      stageFilter === tab.id
                        ? 'bg-amber-500 text-slate-950 font-extrabold shadow'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Keyword Search */}
              <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={stageSearch}
                  onChange={(e) => setStageSearch(e.target.value)}
                  placeholder="Search works (e.g. excavation, tiles, kitchen)..."
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-amber-400 transition-colors placeholder:text-slate-500"
                />
                {stageSearch && (
                  <button
                    onClick={() => setStageSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Results count banner */}
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Showing {filteredStages.length} of 18 House Construction Works Stages</span>
              {stageSearch && (
                <span className="text-amber-400">Search results for "{stageSearch}"</span>
              )}
            </div>
          </div>

          {/* 18 Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStages.map((stage) => (
              <div
                key={stage.id}
                className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Stage Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Stage number badge */}
                    <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-mono font-extrabold shadow-lg">
                      STAGE {stage.number < 10 ? `0${stage.number}` : stage.number}
                    </div>

                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-slate-300 border border-slate-700 px-3 py-1 rounded-full text-[11px] font-mono">
                      {stage.category}
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-extrabold text-white font-heading">
                        {stage.number}. {stage.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary & Work Item Checklist */}
                  <div className="p-6">
                    <p className="text-xs text-slate-400 mb-4 font-light leading-relaxed">
                      {stage.summary}
                    </p>

                    <div className="border-t border-slate-800/80 pt-4">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-3">
                        Included Execution Items ({stage.items.length}):
                      </span>
                      <ul className="space-y-2">
                        {stage.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-xs text-slate-200 space-x-2"
                          >
                            <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-slate-900 grid grid-cols-2 gap-2 mt-4">
                  <Link
                    to="/get-a-quote"
                    className="py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center shadow"
                  >
                    <span>ESTIMATE STAGE</span>
                  </Link>
                  <div className="py-2.5 bg-slate-900 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-1.5 font-mono">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <a href="tel:8884238688" className="hover:text-amber-400">8884238688</a>
                    <span className="text-slate-500">/</span>
                    <a href="tel:9535828286" className="hover:text-amber-400">9535828286</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStages.length === 0 && (
            <div className="text-center py-16 bg-slate-950 rounded-3xl border border-slate-800">
              <p className="text-slate-400 text-sm mb-4">No construction stages match your search query "{stageSearch}".</p>
              <button
                onClick={() => { setStageFilter('all'); setStageSearch(''); }}
                className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Material Assurance Advantage Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                  THE GAJANANA CONSTRUCTIONS ADVANTAGE
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading mb-4 text-white">
                  Why Our House Construction Works Stand Out: Direct Materials &amp; In-House Fleet
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  Most contractors subcontract earthmoving and buy retail-markup steel and cement. At Gajanana Constructions &amp; Materials, we supply authorized primary Fe 550D TMT bars (Tata Tiscon, JSW) and fresh 53-grade cement directly from our central yard, and mobilize our own JCB 3DX machines. You get wholesale material pricing, zero delays, and guaranteed structural authenticity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-200">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>NABL Batch Mill Certified Steel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fresh &lt;15-Day Factory Bagged Cement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Own JCB 3DX &amp; 20T Excavator Fleet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Stage-by-Stage Snag Inspection &amp; Sign-off</span>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <Link
                  to="/get-a-quote"
                  className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
                >
                  REQUEST ESTIMATE FOR YOUR PLAN →
                </Link>
                <p className="text-xs text-slate-400 font-mono mt-3">
                  Direct WhatsApp / Desk: <a href="tel:8884238688" className="text-white underline font-bold">8884238688</a> / <a href="tel:9535828286" className="text-white underline font-bold">9535828286</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold font-heading mb-4">
            Need a Tailored House Construction or Material Supply Proposal?
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            Share your plot dimensions, architectural drawings, or material BOQ schedule for itemized pricing and timeline planning.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 mb-8">
            <span>Direct Queries: <a href="tel:8884238688" className="text-white font-bold underline">8884238688</a> / <a href="tel:9535828286" className="text-white font-bold underline">9535828286</a></span>
            <span>•</span>
            <span><a href="mailto:gajananaconstructionsinfo@gmail.com" className="text-white font-bold underline">gajananaconstructionsinfo@gmail.com</a></span>
          </div>
          <div>
            <Link
              to="/get-a-quote"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
            >
              REQUEST ITEMISED ESTIMATION →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

