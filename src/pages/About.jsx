import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import { Shield, Target, Eye, CheckCircle2, Building, ArrowRight, Award } from 'lucide-react';

export default function About() {
  const { data } = useApp();
  const { company } = data;

  return (
    <div>
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
