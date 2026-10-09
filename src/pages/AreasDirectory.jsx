import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Search, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Truck, 
  HardHat, 
  ChevronRight,
  Phone
} from 'lucide-react';
import { AREAS } from '../data/areasData';
import SEOHead from '../components/SEOHead';
import { useApp } from '../context/AppContext';

export default function AreasDirectory() {
  const { openQuoteModal } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeZone, setActiveZone] = useState('all'); // 'all' | 'South Bengaluru' | 'Southeast Bengaluru'

  const filteredAreas = AREAS.filter(area => {
    const matchesSearch = area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          area.subheading.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          area.pincode.includes(searchTerm);
    const matchesZone = activeZone === 'all' || area.zone === activeZone;
    return matchesSearch && matchesZone;
  });

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Areas We Serve in South Bengaluru | Gajanana Constructions"
        description="Turnkey residential house construction, JCB earthmoving fleet rental & wholesale building materials depot across 19 South & Southeast Bengaluru localities."
        keywords="construction areas Bangalore, house builders South Bangalore, civil contractors JP Nagar, building materials Electronic City, Arekere builders"
        canonical="https://www.gajananaconstructions.in/areas"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Areas We Serve in South Bengaluru",
          "url": "https://www.gajananaconstructions.in/areas",
          "description": "Comprehensive construction and materials supply across 19 major South & Southeast Bengaluru localities.",
          "provider": {
            "@type": "GeneralContractor",
            "name": "Gajanana Constructions",
            "telephone": "+918884238688",
            "url": "https://www.gajananaconstructions.in/"
          }
        }}
      />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-200 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Areas We Serve</span>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-700 text-xs font-extrabold tracking-wide uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>South &amp; Southeast Bengaluru Construction Corridor</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight mb-4">
            Turnkey Construction &amp; Building Materials Across 19 Localities
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Operating from our central Arekere depot, Gajanana Constructions delivers A-Grade residential house construction, JCB earthmoving, and wholesale building materials across South Bengaluru.
          </p>

          {/* Search & Filter Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 border border-slate-200 shadow-md flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by area name (e.g. Arekere, JP Nagar, HSR)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div className="flex gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setActiveZone('all')}
                className={`px-3 py-2 text-xs font-bold rounded-xl transition-colors ${
                  activeZone === 'all'
                    ? 'bg-amber-500 text-slate-950 font-extrabold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All (17)
              </button>
              <button
                type="button"
                onClick={() => setActiveZone('South Bengaluru')}
                className={`px-3 py-2 text-xs font-bold rounded-xl transition-colors ${
                  activeZone === 'South Bengaluru'
                    ? 'bg-amber-500 text-slate-950 font-extrabold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                South Bengaluru
              </button>
              <button
                type="button"
                onClick={() => setActiveZone('Southeast Bengaluru')}
                className={`px-3 py-2 text-xs font-bold rounded-xl transition-colors ${
                  activeZone === 'Southeast Bengaluru'
                    ? 'bg-amber-500 text-slate-950 font-extrabold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Southeast Corridor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of 19 Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm font-extrabold text-slate-900 uppercase font-mono">
              Showing {filteredAreas.length} Localities
            </div>
            <div className="text-xs text-slate-500">
              Central Stockyard: <span className="font-bold text-slate-800">Samrat Layout, Arekere</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area, idx) => (
              <div
                key={area.slug}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={area.heroImage}
                      alt={`Construction contractor in ${area.name}, Bengaluru`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-lg text-slate-900 text-[11px] font-bold shadow-xs">
                        {area.zone}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-xs font-mono font-bold text-amber-400">
                        PIN: {area.pincode} • Dispatch: {area.deliveryTime}
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {area.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {area.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {area.uniqueDescription}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                        Nearby Connectors:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {area.nearbyLocalities.slice(0, 4).map((loc, lIdx) => (
                          <span
                            key={lIdx}
                            className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-medium"
                          >
                            {loc.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">
                    Direct Depot &amp; Turnkey Civil
                  </span>
                  
                  <Link
                    to={`/areas/${area.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Area Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3">
            Don't See Your Exact Locality Listed?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
            We deliver building materials and execute turnkey construction projects across the entire greater South Bengaluru corridor. Call us to confirm coverage for your plot.
          </p>

          <div className="flex justify-center items-center gap-4">
            <a
              href="tel:8884238688"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Yard Office: 8884238688</span>
            </a>

            <button
              onClick={openQuoteModal}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors"
            >
              Request Quick Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
