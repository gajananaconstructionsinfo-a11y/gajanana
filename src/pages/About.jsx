import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import { Shield, Target, Eye, CheckCircle2, Building, ArrowRight, Award } from 'lucide-react';

export default function About() {
  const { data } = useApp();
  const { company } = data;

  return (
    <div>
      <SEOHead
        title="About Gajanana Constructions | 20+ Years Civil Engineering Legacy in Bangalore"
        description="Learn about Gajanana Constructions (GTCM) founded by Mr. Gajanana in 2005. Over 20 years of trusted civil engineering, turnkey house builds, and 15,000 MT primary stockyard in Bengaluru."
        keywords="about Gajanana Constructions, civil contractors Bangalore history, Mr Gajanana CEO, building contractors Arekere, trusted builders South Bangalore"
        canonical="https://www.gajananaconstructions.in/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Gajanana Constructions",
          "url": "https://www.gajananaconstructions.in/about",
          "description": "About Gajanana Constructions - 20+ Years of Construction Leadership & Direct Material Stockyard in Bengaluru.",
          "mainEntity": {
            "@type": "GeneralContractor",
            "name": "Gajanana Constructions",
            "foundingDate": "2005",
            "founder": {
              "@type": "Person",
              "name": "Mr. Gajanana"
            },
            "telephone": "+918884238688",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "postalCode": "560076",
              "addressCountry": "IN"
            }
          }
        }}
      />

      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              ABOUT GAJANANA TRADERS &amp; CONSTRUCTIONS &amp; MATERIALS
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              BUILDING WITH PURPOSE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                ENGINEERED FOR GENERATIONS.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              Founded on unyielding civil engineering principles, Gajanana Traders &amp; Constructions &amp; Materials brings together full-scale architectural turnkey construction with trading and a central 15,000 MT primary materials depot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-a-quote"
                className="px-6 py-3.5 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow"
              >
                REQUEST PROJECT CONSULTATION →
              </Link>
              <Link
                to="/materials"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs tracking-wider uppercase rounded-xl transition-all border border-slate-200"
              >
                OUR MATERIAL DEPOT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Model Story */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block">
                OUR INTEGRATED APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                The True Cost of Middlemen in Construction
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                In traditional construction, building contractors purchase materials through local retail intermediaries with markups, lack batch mill certificates, and often delay concrete pours waiting for cement or steel trucks.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                At Gajanana Traders &amp; Constructions &amp; Materials, our construction and trading divisions draw directly from our primary railway rake stockyard. This guarantees 100% NABL-certified steel rebars, freshly bagged OPC 53 cement, and uninterrupted on-site pouring schedules.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm font-mono text-xs text-slate-700 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Established:</span>
                  <span className="font-bold text-slate-900">{company.establishedYear} ({company.experienceYears} Years Legacy)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Central Logistics:</span>
                  <span className="font-bold text-slate-900">Gajanana Industrial Corridor, Bengaluru</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Execution Capacity:</span>
                  <span className="font-bold text-emerald-700">Turnkey Civil Superstructures to High Finishes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Civil Engineering Supervision"
                  className="w-full aspect-[4/3] object-cover"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & CEO Leadership Spotlight */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              EXECUTIVE LEADERSHIP &amp; VISION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              Meet Our Founder &amp; CEO
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Guiding Gajanana's civil engineering standards, primary material integrity, and turnkey project execution since 2005.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-slate-950/80 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Executive Portrait Card / Crest Placeholder (No random photo) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-sm rounded-2xl border-2 border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-950 p-6 flex flex-col items-center text-center shadow-xl relative overflow-hidden group">
                  {/* Decorative ambient glows */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-600/10 rounded-full blur-2xl"></div>

                  {/* Monogram Seal / Executive Crest */}
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-slate-900 border-2 border-amber-500/50 flex flex-col items-center justify-center mb-5 relative shadow-inner">
                    <div className="w-28 h-28 rounded-xl bg-slate-950/90 border border-amber-500/30 flex flex-col items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 tracking-wider">
                        MG
                      </span>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-amber-400/80 mt-0.5">
                        FOUNDER
                      </span>
                    </div>
                  </div>

                  {/* Notice Badge: Real photo to be added */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] text-slate-400 font-mono mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Official Portrait • To be updated</span>
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white tracking-wide">
                    Mr. Gajanana
                  </h3>
                  <div className="text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mt-1">
                    Founder &amp; Chief Executive Officer
                  </div>
                  <div className="text-slate-400 text-xs mt-1">
                    GAJANANA TRADERS &amp; CONSTRUCTIONS &amp; MATERIALS
                  </div>

                  <div className="w-full mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Experience</span>
                      <span className="font-bold text-amber-400">20+ Years</span>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Established</span>
                      <span className="font-bold text-white">Since 2005</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Vision Statement */}
              <div className="lg:col-span-7 space-y-6">
                {/* Quote Box */}
                <div className="p-6 rounded-2xl bg-slate-900/90 border-l-4 border-amber-500 border border-slate-800/60 shadow-lg relative">
                  <div className="text-amber-400 text-3xl font-serif leading-none mb-2">“</div>
                  <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed font-light">
                    Our principle has remained unwavering since 2005: Every home and commercial structure we build must stand for generations, constructed with uncompromised primary steel, certified cement, and honest craftsmanship.
                  </p>
                  <div className="mt-3 text-right">
                    <span className="text-xs font-bold text-amber-400 font-mono">— Mr. Gajanana</span>
                    <span className="text-[11px] text-slate-400 ml-1">, Founder &amp; CEO</span>
                  </div>
                </div>

                {/* Narrative Bio */}
                <div className="space-y-3 text-slate-300 text-sm leading-relaxed font-light">
                  <p>
                    Founded in 2005 under the visionary leadership of <strong className="text-white font-semibold">Mr. Gajanana</strong>, GAJANANA TRADERS &amp; CONSTRUCTIONS &amp; MATERIALS was built on a direct, no-compromise civil engineering ethos.
                  </p>
                  <p>
                    Recognizing early that quality delays and price escalations in residential and commercial builds were primarily caused by third-party broker supply chains, Mr. Gajanana pioneered the integration of turnkey contracting with direct primary railway rake material stockyards (Tata Tiscon, JSW, UltraTech, ACC) and a dedicated in-house JCB 3DX earthmoving fleet.
                  </p>
                </div>

                {/* 4 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {[
                    "Direct Primary Mill Steel & Cement Stockyards",
                    "Complete Turnkey Execution (Earthwork to Handover)",
                    "100% Quality & IS-Standard Laboratory Compliance",
                    "Two Decades of Client Trust & Transparent BOQs"
                  ].map((pillar, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>

                {/* Call & Consultation */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition shadow"
                  >
                    CONNECT WITH EXECUTIVE DESK →
                  </Link>
                  <a
                    href="tel:8884238688"
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold rounded-xl transition border border-slate-700 flex items-center gap-2"
                  >
                    <span>CALL 8884238688</span>
                  </a>
                  <a
                    href="tel:9535828286"
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold rounded-xl transition border border-slate-700 flex items-center gap-2"
                  >
                    <span>CALL 9535828286</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Values */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              FOUNDATIONAL PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              Our 6 Core Engineering Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Quality Without Compromise', desc: 'No recycled scrap rebars or adulterated sand. Every component is laboratory tested.' },
              { title: 'Absolute Transparency', desc: 'Itemized BOQ contracts with zero hidden escalation clauses or surprise billing.' },
              { title: 'Precision Engineering', desc: 'Strict compliance with Indian Standard Codes (IS 456, IS 1786, IS 383, IS 2185).' },
              { title: 'Supply Chain Reliability', desc: 'Dedicated dispatch fleet and 15,000 MT live inventory shielding projects from delays.' },
              { title: 'Safety First', desc: 'Rigorous job-site safety protocols, certified scaffolding, and personal protective gear.' },
              { title: 'Long-Term Partnership', desc: '10-year structural stability warranties and dedicated post-handover support.' }
            ].map((v, i) => (
              <div key={i} className="p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 font-bold font-mono flex items-center justify-center mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-slate-950 text-base mb-2 font-heading">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 font-heading">Our Mission</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                To deliver residential, commercial, and civil structures that stand as benchmarks of structural resilience and aesthetic elegance, while providing builders direct access to certified construction materials at wholesale mill rates.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 font-heading">Our Vision</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                To be the most trusted and technically disciplined construction brand in South India, recognized for transparent customer relations, innovative civil engineering execution, and zero-defect delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold font-heading mb-4">
            Partner With Gajanana Traders &amp; Constructions &amp; Materials
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            Let's discuss your upcoming residential villa, commercial complex, or bulk material supply requirements.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
          >
            CONTACT OUR ENGINEERING TEAM →
          </Link>
        </div>
      </section>
    </div>
  );
}
