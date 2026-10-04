import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import { ArrowRight, Clock, HardHat, Layers } from 'lucide-react';

export default function Projects() {
  const { data } = useApp();
  const { projects } = data;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <div>
      <SEOHead
        title="Ongoing & Completed Construction Projects in Bengaluru | Sri Gajanana Constructions"
        description="Explore authentic on-site photos of individual residential houses, standalone villas, and commercial builds in Bangalore at foundation, masonry, shuttering, and slab stages."
        keywords="construction projects Bangalore, house construction photos, villa construction stage, residential civil works Bengaluru, Sri Gajanana Projects"
        canonical="https://www.gajananaconstructions.in/projects"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Construction Projects Portfolio - Sri Gajanana Constructions",
          "url": "https://www.gajananaconstructions.in/projects",
          "description": "Authentic on-site construction photos and structural progress across individual residential and commercial builds in Bengaluru."
        }}
      />

      <Breadcrumb items={[{ label: 'Individual Projects' }]} />

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ON-SITE CONSTRUCTION PROGRESS &amp; MASONRY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              INDIVIDUAL BUILDS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                REAL ON-SITE PROGRESS.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              Explore authentic on-site construction progress across individual residential homes, standalone villas, and commercial units — featuring live wall bricklaying, column shuttering, slab pouring, and JCB earthmoving.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 font-mono text-xs">
              <div>
                <div className="text-3xl font-extrabold text-slate-950 font-heading">100%</div>
                <div className="text-slate-500 font-medium">Individual Builds</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-amber-600 font-heading">On-Site</div>
                <div className="text-slate-500 font-medium">Stage Photos</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-950 font-heading">Fe 550D</div>
                <div className="text-slate-500 font-medium">Standard TMT</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-amber-600 font-heading">0%</div>
                <div className="text-slate-500 font-medium">Structural Defects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Filter Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: `All Individual Builds (${projects.length})` },
                { id: 'residential', label: 'Residential Construction' },
                { id: 'civil', label: 'Foundation & Groundworks' },
                { id: 'commercial', label: 'Commercial Units' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all ${
                    filter === tab.id
                      ? 'bg-slate-950 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-mono flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
              Showing verified on-site construction &amp; wall masonry progress
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
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
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold font-mono">
                      INDIVIDUAL BUILD
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-lg text-xs font-bold font-mono shadow">
                      {proj.area}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center text-xs text-slate-500 mb-2 gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold font-mono text-[11px] border border-amber-200/60">
                        {proj.stage}
                      </span>
                      <div className="flex items-center space-x-1 font-mono text-slate-400">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{proj.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-2 group-hover:text-amber-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {proj.desc}
                    </p>

                    {/* Scope stats */}
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs font-mono text-slate-700 space-y-1 mb-4">
                      {proj.stats?.map((st, i) => (
                        <div key={i} className="flex items-center space-x-1.5">
                          <span className="text-amber-500">•</span>
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/projects/${proj.id}`}
                    className="text-amber-600 hover:text-amber-700 font-extrabold text-xs tracking-wider uppercase flex items-center group-hover:translate-x-1 transition-transform font-mono"
                  >
                    <span>VIEW ON-SITE PHOTOS</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-400">Ref: {proj.id.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
              EXECUTION RIGOR
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
              Our 4-Point Civil Quality Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Pre-Pour Cube Testing', desc: 'Slump tests on site with 7-day and 28-day compressive strength laboratory verification.' },
              { num: '02', title: 'Mill Test Certificates', desc: 'Primary mill test sheets verified for yield strength, elongation, and carbon equivalent.' },
              { num: '03', title: 'Daily Digital Logbook', desc: 'Photographic progress tracking, curing schedules, and milestone checklist shared directly with client.' },
              { num: '04', title: 'Zero-Escalation Guarantee', desc: 'Fixed milestone material schedules protect your project from spot-market price spikes.' }
            ].map((pt) => (
              <div key={pt.num} className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 font-mono font-bold text-base flex items-center justify-center mb-4">
                  {pt.num}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 font-heading text-sm">{pt.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
