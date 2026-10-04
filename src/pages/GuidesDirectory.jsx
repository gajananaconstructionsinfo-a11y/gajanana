import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GUIDES } from '../data/guidesData';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { BookOpen, Search, Clock, ArrowRight, Tag, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

export default function GuidesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Cost & Budgeting', 'Engineering & Structural', 'Planning & Timelines', 'Area-Specific Guides'];

  const filteredGuides = useMemo(() => {
    return GUIDES.filter(guide => {
      const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            guide.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            guide.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Bengaluru House Construction Guides & Knowledge Hub | Sri Gajanana Constructions"
        description="Authoritative homeowner guides on building a house in Bangalore. Civil engineering insights, construction cost breakdowns, structural RCC tips, timelines, and BBMP bylaws."
        keywords="Bangalore house construction guide, house construction cost Bangalore, building stages foundation to finishing, civil contractors advice, Sri Gajanana Guides"
        canonical="https://www.gajananaconstructions.in/guides"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Bengaluru House Construction Guides & Insights",
          "url": "https://www.gajananaconstructions.in/guides",
          "description": "Comprehensive engineering guides and cost planning insights for homeowners building independent houses and villas in Bengaluru."
        }}
      />

      <Breadcrumb items={[{ label: 'Construction Guides' }]} />

      {/* Hero Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Civil Engineering Knowledge Hub</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              Bengaluru House Construction <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                Guides &amp; Engineering Insights
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-8">
              Straightforward, transparent engineering advice for homeowners planning to build an independent house, duplex, or custom villa in Bengaluru. Avoid costly shortcuts and build with uncompromised structural integrity.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics (e.g. costs, waterproofing, timelines, JP Nagar, stages)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 border-b border-slate-100 bg-slate-50/50 sticky top-16 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide) => (
              <article
                key={guide.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-amber-400/80 transition-all flex flex-col justify-between overflow-hidden group p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-bold font-mono uppercase tracking-wider text-[11px]">
                      {guide.category}
                    </span>
                    <span className="flex items-center text-slate-400 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-950 font-heading group-hover:text-amber-600 transition-colors leading-snug mb-3">
                    <Link to={`/guides/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light line-clamp-3 mb-6">
                    {guide.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {guide.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {guide.author.split(',')[0]}
                  </span>
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <p className="text-base text-slate-500 font-medium">
                No guides found matching "{searchQuery}".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Helpful Consultation CTA */}
      <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3">
            Have Questions About Building Your Bangalore Home?
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-6">
            Speak directly with our senior civil engineers and project consultants. Get genuine advice on soil conditions, structural designs, and itemized Bill of Quantities without sales pressure.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/get-a-quote"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Request Itemized Project Estimate →
            </Link>
            <a
              href="tel:8884238688"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Engineer: 8884238688</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
