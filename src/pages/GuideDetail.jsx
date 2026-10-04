import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { GUIDES } from '../data/guidesData';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { Clock, Calendar, User, ArrowRight, ShieldCheck, HelpCircle, ChevronDown, PhoneCall, Building2, Truck, CheckCircle2 } from 'lucide-react';

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = GUIDES.find(g => g.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const relatedGuides = GUIDES.filter(g => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title={guide.metaTitle}
        description={guide.metaDescription}
        keywords={guide.tags.join(', ')}
        canonical={`https://www.gajananaconstructions.in/guides/${guide.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `https://www.gajananaconstructions.in/guides/${guide.slug}#article`,
              "headline": guide.title,
              "description": guide.metaDescription,
              "datePublished": guide.publishedDate,
              "dateModified": guide.lastUpdated,
              "author": {
                "@type": "Person",
                "name": guide.author
              },
              "publisher": {
                "@type": "Organization",
                "name": "Sri Gajanana Constructions",
                "url": "https://www.gajananaconstructions.in/",
                "logo": "https://www.gajananaconstructions.in/fallback.svg"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.gajananaconstructions.in/guides/${guide.slug}`
              }
            },
            ...(guide.faqs ? [{
              "@type": "FAQPage",
              "@id": `https://www.gajananaconstructions.in/guides/${guide.slug}#faq`,
              "mainEntity": guide.faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            }] : [])
          ]
        }}
      />

      <Breadcrumb
        items={[
          { label: 'Construction Guides', link: '/guides' },
          { label: guide.title }
        ]}
      />

      {/* Article Header */}
      <header className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 font-bold font-mono uppercase tracking-wider">
              {guide.category}
            </span>
            <span className="flex items-center text-slate-500 font-mono">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              {guide.readTime}
            </span>
            <span className="flex items-center text-slate-500 font-mono">
              <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
              Updated: {guide.lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-heading leading-tight tracking-tight mb-6">
            {guide.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light mb-6 border-l-4 border-amber-500 pl-4 bg-amber-500/5 py-2 rounded-r-xl">
            {guide.summary}
          </p>

          <div className="flex items-center space-x-3 text-xs text-slate-500 pt-4 border-t border-slate-200">
            <User className="w-4 h-4 text-amber-600" />
            <span className="font-semibold text-slate-800">{guide.author}</span>
            <span>•</span>
            <span>Gajanana Constructions Engineering Desk</span>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Article Sections */}
          <div className="space-y-12 prose prose-slate max-w-none text-slate-700 leading-relaxed">
            {guide.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading pt-2 border-b border-slate-100 pb-3">
                  {sec.heading}
                </h2>
                <div className="text-sm sm:text-base leading-relaxed text-slate-600 whitespace-pre-line font-light space-y-3">
                  {sec.content}
                </div>
              </section>
            ))}
          </div>

          {/* Quick Authority Callout Box */}
          <div className="mt-14 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-xs">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  The Gajanana Engineering Standard
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We supply 100% primary mill-certified Fe 550D TMT steel and fresh factory-direct 53-grade cement from our central Arekere stockyard. Every stage of construction is supervised by qualified site civil engineers with digital milestone reporting.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-700">
                  <Link to="/services/residential-construction" className="hover:underline flex items-center space-x-1">
                    <span>Turnkey Residential Construction</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/materials" className="hover:underline flex items-center space-x-1">
                    <span>Materials Depot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/areas" className="hover:underline flex items-center space-x-1">
                    <span>Bengaluru Service Areas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          {guide.faqs && guide.faqs.length > 0 && (
            <section className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-6">
                Common Questions on This Topic
              </h2>

              <div className="space-y-3">
                {guide.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-slate-900 text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          openFaqIndex === fIdx ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === fIdx && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Action Consultation Box */}
          <div className="mt-14 p-8 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-extrabold font-heading">
              Ready to Discuss Your Construction Project?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Get a detailed, transparent Bill of Quantities (BOQ) estimation based on your plot dimensions and architectural plans.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
              <Link
                to="/get-a-quote"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow transition-all"
              >
                Request Free BOQ Quote →
              </Link>
              <a
                href="tel:8884238688"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Call 8884238688</span>
              </a>
            </div>
          </div>

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-6">
                Explore More Construction Guides
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedGuides.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/guides/${rel.slug}`}
                    className="p-5 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded mb-2 inline-block">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 font-heading group-hover:text-amber-600 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-amber-600 font-bold space-x-1">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
