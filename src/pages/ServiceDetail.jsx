import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import { CheckCircle, ArrowRight, HelpCircle, Building } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { data } = useApp();
  const { services } = data;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Services', link: '/services' },
          { label: service.title }
        ]}
      />

      {/* Header */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 font-mono text-xs font-bold uppercase tracking-wider inline-block mb-3">
              {service.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-6">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/get-a-quote"
                className="px-6 py-3.5 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
              >
                REQUEST QUOTE FOR THIS SERVICE →
              </Link>
              <Link
                to="/services"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-200"
              >
                BACK TO SERVICES DIRECTORY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details & Visuals */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Details (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Image banner */}
              <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-video object-cover"
                  onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                />
              </div>

              {/* Key Deliverables */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-6">
                  Civil Deliverables &amp; Scope of Execution
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((del, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Applications */}
              {service.applications && (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-6">
                    Target Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    {service.applications.map((app, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 text-slate-800 font-bold flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical FAQs */}
              {service.faqs && (
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-6 flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-amber-600" />
                    <span>Frequently Asked Technical Questions</span>
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <h4 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Fast Consultation Card (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm sticky top-28">
                <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                  DISCUSS THIS SERVICE
                </span>
                <h3 className="text-lg font-extrabold text-slate-950 font-heading mb-3">
                  Speak With an Estimating Engineer
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Have drawings or architectural elevations? Share them directly with our technical team for immediate quantity takeoffs.
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono">
                    <span className="font-bold text-amber-900 block mb-1">Pricing &amp; Mobilization:</span>
                    <span className="text-slate-700">Call <a href="tel:8884238688" className="font-bold underline text-amber-800">8884238688</a> or email <a href="mailto:gajananaconstructionsinfo@gmail.com" className="font-bold underline text-amber-800">gajananaconstructionsinfo@gmail.com</a></span>
                  </div>
                  <Link
                    to="/get-a-quote"
                    className="w-full py-3.5 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center space-x-2"
                  >
                    <span>SUBMIT SPECIFICATIONS →</span>
                  </Link>
                  <a
                    href="tel:8884238688"
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center space-x-2 font-mono"
                  >
                    <span>CALL 8884238688</span>
                  </a>
                  <a
                    href={`https://wa.me/918884238688?text=Hello%20GCM,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center space-x-2"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Other Services Switcher */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs font-mono uppercase tracking-wider mb-3">
                    Other Construction Services
                  </h4>
                  <div className="space-y-2">
                    {services
                      .filter((s) => s.slug !== service.slug)
                      .slice(0, 4)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 text-xs text-slate-700 hover:text-amber-600 font-medium transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
