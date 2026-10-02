import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import { Shield, CheckCircle, FileText, ArrowRight } from 'lucide-react';

export default function ProductDetail() {
  const { skuId } = useParams();
  const { data, openQuickQuote } = useApp();
  const { heavySKUs } = data;

  const sku = heavySKUs.find((s) => s.id === skuId) || heavySKUs[0];

  if (!sku) {
    return <Navigate to="/materials" replace />;
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Materials Depot', link: '/materials' },
          { label: sku.name }
        ]}
      />

      {/* Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Image (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-3">
                <img
                  src={sku.image}
                  alt={sku.name}
                  className="w-full aspect-square object-cover rounded-2xl"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-slate-500 px-2">
                <span className="flex items-center text-emerald-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                  {sku.availability}
                </span>
                <span className="text-slate-400">Report: {sku.testReportId}</span>
              </div>
            </div>

            {/* Overview & Action (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider">
                    {sku.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{sku.category}</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight mb-3">
                  {sku.name}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  {sku.specSummary}
                </p>
              </div>

              {/* Price Box */}
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200">
                <div className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-1">
                  Pricing Policy &amp; Quotation
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  Price on Enquiry
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  For wholesale market rates, bulk project volume discounts, and site delivery quotation:
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono font-bold">
                  <span>
                    📞 Call: <a href="tel:8884238688" className="text-slate-950 hover:text-amber-600 underline">8884238688</a> / <a href="tel:9535828286" className="text-slate-950 hover:text-amber-600 underline">9535828286</a>
                  </span>
                  <span className="text-slate-300">•</span>
                  <a href="mailto:gajananaconstructionsinfo@gmail.com" className="text-slate-950 hover:text-amber-600 underline">
                    ✉️ gajananaconstructionsinfo@gmail.com
                  </a>
                </div>
              </div>

              {/* Technical Specs Table */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden text-xs font-mono">
                <div className="bg-slate-900 text-white font-bold px-4 py-2.5 uppercase tracking-wider">
                  NABL Verified Technical Benchmarks
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                  {sku.specs?.map((sp, i) => (
                    <div key={i} className="flex justify-between px-4 py-2.5">
                      <span className="text-slate-500">{sp.label}:</span>
                      <span className="font-bold text-slate-900">{sp.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openQuickQuote(sku.name)}
                  className="px-6 py-4 bg-slate-950 hover:bg-amber-600 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center space-x-2"
                >
                  <span>REQUEST INSTANT BATCH QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:8884238688"
                  className="px-5 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center space-x-2 font-mono"
                >
                  <span>CALL 8884238688</span>
                </a>
                <a
                  href="tel:9535828286"
                  className="px-5 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center space-x-2 font-mono"
                >
                  <span>CALL 9535828286</span>
                </a>
                <a
                  href={`https://wa.me/918884238688?text=Hello%20GCM,%20please%20send%20current%20site%20delivery%20rates%20for%20${encodeURIComponent(
                    sku.name
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center space-x-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Quality Assurances */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              QUALITY CERTIFICATION
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
              Direct Depot Quality Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 font-mono font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Virgin Billet Certification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No re-rolled scrap iron. 100% pure primary iron billets ensuring uniform core ductility and fatigue resistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 font-mono font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Digital Weighbridge Verification</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                All deliveries pass through our government-calibrated automated weighbridge with printed gross and tare weight slips.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 font-mono font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Zero-Moisture Covered Bays</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cement bags and steel bundles stored in elevated dry pavilions to prevent surface rust and hydration pre-curing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
