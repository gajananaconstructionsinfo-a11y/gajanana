import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function WhyUs() {
  const { data } = useApp();

  return (
    <div>
      <SEOHead
        title="Why Choose Gajanana Constructions | Single-Source Construction Advantage"
        description="Discover the Gajanana advantage: Turnkey civil engineering backed by our own 15,000 MT primary materials stockyard and JCB fleet. Zero broker markups, 100% IS grade compliance."
        keywords="why choose Gajanana Constructions, best builders Bangalore, direct material depot builders, trusted contractor Arekere"
        canonical="https://www.gajananaconstructions.in/why-us"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Why Choose Gajanana Constructions",
          "url": "https://www.gajananaconstructions.in/why-us",
          "description": "The Gajanana Advantage: Single-source construction solutions, heavy machinery fleet, and direct wholesale primary stockyard in Bengaluru."
        }}
      />

      <Breadcrumb items={[{ label: 'Why Choose Us' }]} />

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              THE GAJANANA ADVANTAGE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              ONE SOURCE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                UNCOMPROMISED STRENGTH.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              In an industry plagued by fragmented contractors, unreliable material middlemen, and hidden cost escalations, Gajanana Traders &amp; Constructions &amp; Materials bridges the gap by operating both an in-house civil engineering division, a trading arm, and a central 15,000 MT certified material depot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-a-quote"
                className="px-6 py-3.5 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow"
              >
                REQUEST A PROJECT ESTIMATE →
              </Link>
              <Link
                to="/materials"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs tracking-wider uppercase rounded-xl transition-all border border-slate-200"
              >
                EXPLORE MATERIAL DEPOT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Core Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              FOUNDATION OF TRUST
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              8 Pillars of Engineering Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Complete Integrated Solutions', desc: 'One entity takes full responsibility for architectural drawings, civil casting, and high finishes.' },
              { num: '02', title: 'NABL-Certified Quality', desc: 'Every steel rebar batch and cement lot arrives accompanied by certified primary mill test heat sheets.' },
              { num: '03', title: '15,000+ MT Bulk Depot', desc: 'De-humidified automated warehousing protects high-grade cement and steel against moisture degradation.' },
              { num: '04', title: 'Transparent Milestone Billing', desc: 'No surprise price revisions. Clients pay strictly against verified milestone completions.' },
              { num: '05', title: 'Senior Civil Supervision', desc: 'Certified structural engineers and supervisors oversee daily formwork and curing duration.' },
              { num: '06', title: 'Direct B2B Pricing', desc: 'Sourcing directly from primary mills in railway rake volumes eliminates middleman markups.' },
              { num: '07', title: 'Zero Site Stoppages', desc: 'Live reserve stock guarantees continuous concrete pours and synchronized masonry schedules.' },
              { num: '08', title: 'Full Structural Warranty', desc: '10-year structural stability guarantee and 5-year terrace and basement waterproofing warranty.' }
            ].map((p) => (
              <div key={p.num} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 font-heading font-extrabold text-xl">
                  {p.num}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2 font-heading">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Matrix */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              HEAD-TO-HEAD COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
              The GCM Model vs. Conventional Construction
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Operational Parameter</th>
                  <th className="py-4 px-6 text-slate-400">Traditional Contractor</th>
                  <th className="py-4 px-6 text-slate-400">Material Retailer</th>
                  <th className="py-4 px-6 bg-amber-600 text-white font-extrabold">GAJANANA INTEGRATED MODEL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-bold text-slate-900">Material Sourcing &amp; Delivery</td>
                  <td className="py-4 px-6 text-slate-600">Buys retail on credit; prone to frequent delays</td>
                  <td className="py-4 px-6 text-slate-600">Delivers to curb; zero responsibility for pouring</td>
                  <td className="py-4 px-6 bg-amber-50/40 font-bold text-emerald-800">15,000 MT Stockyard; 24h Synchronized Site Pouring</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-bold text-slate-900">Quality &amp; Batch Verification</td>
                  <td className="py-4 px-6 text-slate-600">Rarely checks mill certificates; disclaims defects</td>
                  <td className="py-4 px-6 text-slate-600">Dealer invoice only; no lab verification</td>
                  <td className="py-4 px-6 bg-amber-50/40 font-bold text-emerald-800">NABL Mill Heat Sheets &amp; 28-Day Concrete Cube Tests</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-bold text-slate-900">Price Escalation Risk</td>
                  <td className="py-4 px-6 text-slate-600">Demands budget hikes if raw steel or cement rises</td>
                  <td className="py-4 px-6 text-slate-600">Daily fluctuating spot market pricing</td>
                  <td className="py-4 px-6 bg-amber-50/40 font-bold text-emerald-800">Locked-in Milestone BOQ; Direct Rake Sourcing Shield</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-bold text-slate-900">Engineering &amp; Supervision</td>
                  <td className="py-4 px-6 text-slate-600">Subcontracted uncertified local artisans</td>
                  <td className="py-4 px-6 text-slate-600">None (Sales representatives only)</td>
                  <td className="py-4 px-6 bg-amber-50/40 font-bold text-emerald-800">In-house Certified Civil Engineers &amp; Daily Digital Logs</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-bold text-slate-900">Accountability</td>
                  <td className="py-4 px-6 text-slate-600">Blames bad materials for structural cracks</td>
                  <td className="py-4 px-6 text-slate-600">Blames contractor workmanship</td>
                  <td className="py-4 px-6 bg-amber-50/40 font-bold text-emerald-800">100% Single-Entity Structural Stability Warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold font-heading mb-4">
            Build With Proven Structural Integrity
          </h2>
          <p className="text-slate-400 text-sm mb-8 font-light">
            Consult with our structural engineering desk or inspect our central material depot.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
          >
            CONTACT OUR CENTRAL DESK →
          </Link>
        </div>
      </section>
    </div>
  );
}
