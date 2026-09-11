import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const { data } = useApp();
  const { services } = data;

  return (
    <div>
      <Breadcrumb items={[{ label: 'Services Directory' }]} />

      {/* Pricing Policy Top Banner */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 text-xs font-mono font-bold text-center border-b border-amber-600 shadow-inner">
        <span>📢 For service quotes, machinery dispatch (JCB 3DX &amp; excavators), and turnkey project pricing: Contact </span>
        <a href="tel:8884238688" className="underline font-extrabold text-slate-950 hover:text-white ml-1">8884238688</a>
        <span className="mx-1.5">|</span>
        <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline font-extrabold text-slate-950 hover:text-white">gajananaconstructionsinfo@gmail.com</a>
      </div>

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
              DISCIPLINED EXECUTION
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              CONSTRUCTION &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                MACHINERY SERVICES.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              End-to-end turnkey construction, JCB &amp; heavy earthmoving machinery fleet, and civil engineering solutions backed by direct material inventory from our central stockyard.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
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
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
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

                <div className="p-7 pt-0 border-t border-slate-100">
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full py-3 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <span>VIEW SERVICE DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold font-heading mb-4">
            Need a Tailored Construction or Machinery Proposal?
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            Tell us about your plot dimensions, excavation depth, commercial scope, or renovation timeline.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 mb-8">
            <span>Price Queries: <a href="tel:8884238688" className="text-white font-bold underline">8884238688</a></span>
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
