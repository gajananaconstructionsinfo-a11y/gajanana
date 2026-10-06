import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import SEOHead from '../components/SEOHead';
import { useApp } from '../context/AppContext';
import { buildMailtoUrl, buildWhatsAppUrl } from '../lib/email';

export default function Contact() {
  const { submitInquiry } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'General Construction Enquiry',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [emailDispatchResult, setEmailDispatchResult] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    const tid = 'GC-INQ-' + Math.floor(100000 + Math.random() * 900000);
    const payload = { ...formData, ticketId: tid, type: 'Contact Page Inquiry' };
    try {
      const res = await submitInquiry(payload);
      setTicketId(tid);
      setEmailDispatchResult(res?.emailResult || null);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <SEOHead
        title="Contact Gajanana Constructions | Yard Location & Phone Numbers Bangalore"
        description="Contact Gajanana Constructions. Call +91 88842 38688 / +91 95358 28286 or visit our central office and stockyard at Samrat Layout, Arekere, Bengaluru 560076."
        keywords="contact Gajanana Constructions, construction company Arekere contact, building materials Bangalore phone number, Sarvobhogam Nagar contractor"
        canonical="https://www.gajananaconstructions.in/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Gajanana Constructions",
          "url": "https://www.gajananaconstructions.in/contact",
          "mainEntity": {
            "@type": "GeneralContractor",
            "name": "Gajanana Constructions",
            "telephone": ["+918884238688", "+919535828286"],
            "email": "gajananaconstructionsinfo@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7013, 2nd Main Rd, Samrat Layout, Sarvobhogam Nagar, Arekere",
              "addressLocality": "Bengaluru",
              "postalCode": "560076",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.8878405,
              "longitude": 77.6017497
            }
          }
        }}
      />

      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      {/* Pricing Policy Top Banner */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-3 sm:px-4 text-[11px] sm:text-xs font-mono font-bold text-center border-b border-amber-600 shadow-inner leading-relaxed overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span>📢 FOR PRICING, WHOLESALE RATES &amp; MACHINERY:</span>
          <span className="inline-flex items-center gap-1">
            <span>Call</span>
            <a href="tel:8884238688" className="underline font-black text-slate-950 hover:text-white">8884238688</a>
            <span>/</span>
            <a href="tel:9535828286" className="underline font-black text-slate-950 hover:text-white">9535828286</a>
          </span>
          <span className="hidden sm:inline text-slate-950/60">•</span>
          <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline font-black text-slate-950 hover:text-white break-all">
            gajananaconstructionsinfo@gmail.com
          </a>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/30">
            Direct Coordination Desk
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight mb-4 break-words">
            Connect With Our Engineering & Yard Teams
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Whether planning a multi-storey development, scheduling heavy structural steel deliveries, or consulting on custom BOQ schedules — our central office and dispatch yards are operational 6 days a week.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-full">
          
          {/* Left: Contact Information & Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 min-w-0 w-full max-w-full overflow-hidden">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2">Corporate Headquarters & Yard</h2>
              <p className="text-slate-600 text-sm">
                Direct walk-in consultations, engineering conference suites, and live physical sample yards.
              </p>
            </div>

            <div className="space-y-4 w-full">
              {/* Address Card */}
              <div className="p-4 sm:p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3 sm:gap-4 overflow-hidden w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Registered Facility</div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1 break-words">GAJANANA TRADERS &amp; CONSTRUCTIONS &amp; MATERIALS</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    7013, 2nd Main Rd, Samrat Layout,<br />
                    Sarvobhogam Nagar, Arekere,<br />
                    Bengaluru, Karnataka - 560076
                  </p>
                  <p className="text-xs text-amber-700 font-medium mt-2">
                    <i className="fa-solid fa-truck-moving mr-1"></i> Heavy commercial trailers clearance &amp; central dispatch available
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="p-4 sm:p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3 sm:gap-4 overflow-hidden w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-phone text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Contact Details</div>
                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-xs text-slate-500">Phone Numbers:</span>
                      <div className="flex items-center gap-2 font-mono font-bold text-slate-900 text-xs sm:text-sm">
                        <a href="tel:8884238688" className="hover:text-amber-600">8884238688</a>
                        <span className="text-slate-400 font-normal">/</span>
                        <a href="tel:9535828286" className="hover:text-amber-600">9535828286</a>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-xs text-slate-500">Direct WhatsApp:</span>
                      <a href="https://wa.me/918884238688?text=Hello%20Gajanana%20Constructions,%20I%20have%20an%20enquiry" target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-bold text-emerald-600 hover:underline font-mono">
                        +91 88842 38688
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Correspondence */}
              <div className="p-4 sm:p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3 sm:gap-4 overflow-hidden w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-envelope text-lg sm:text-xl"></i>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Official Communications &amp; Pricing</div>
                  <a href="mailto:gajananaconstructionsinfo@gmail.com" className="text-xs sm:text-sm font-bold text-slate-900 hover:text-amber-600 block break-all font-mono">
                    gajananaconstructionsinfo@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">Verified digital tenders, structural drawings, and itemized BOQ rate requests.</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-4 sm:p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3 sm:gap-4 overflow-hidden w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-clock text-xl"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Operations Timing</div>
                  <p className="text-sm font-semibold text-slate-800">Mon - Sat: 8:00 AM - 7:30 PM</p>
                  <p className="text-sm text-slate-600">Sunday: 9:00 AM - 2:00 PM (Materials Yard Dispatch Only)</p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Central Weighbridge 24-Hr Gate Operational
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 overflow-hidden w-full">
              <h4 className="font-bold text-sm mb-1"><i className="fa-solid fa-bolt text-amber-600 mr-1.5"></i> Need an immediate formal rate quotation?</h4>
              <p className="text-xs text-amber-800 mb-3">Skip manual email threads and generate an instant itemized estimate with transport costs.</p>
              <Link to="/get-a-quote" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition">
                <span>Go to Estimation Engine</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Right: Interactive Contact Form & Live Routing Desk (7 Cols) */}
          <div className="lg:col-span-7 min-w-0 w-full max-w-full overflow-hidden">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-8 lg:p-10 shadow-sm overflow-hidden w-full max-w-full">
              <div className="mb-8">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Fast-Track Form</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mt-1">Send an Official Message or Inquiry</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Our chief project engineer or regional material manager will review your submission and respond within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 px-5 sm:px-8 bg-emerald-50/70 rounded-2xl border border-emerald-200">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl shadow-sm">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-heading text-center mb-1">
                    Inquiry Details Recorded!
                  </h4>
                  <p className="text-sm text-slate-600 text-center max-w-md mx-auto mb-3">
                    Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Your ticket reference ID is:
                  </p>
                  <div className="text-center mb-4">
                    <span className="inline-block bg-white px-4 py-1.5 rounded-lg border border-emerald-300 font-mono text-base font-bold text-emerald-700 shadow-sm">
                      {ticketId}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed text-center">
                    Your inquiry details have been recorded and forwarded to our official desk at <strong className="text-slate-800">gajananaconstructionsinfo@gmail.com</strong>. Our engineering team will review your specifications and connect with you on <span className="font-bold text-slate-800 font-mono">{formData.phone}</span> shortly.
                  </p>

                  {/* Direct 1-Click Fast Actions */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono text-center">
                      Guaranteed Instant Contact Channels:
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* 1. Direct Email App Link */}
                      <a
                        href={buildMailtoUrl({ ...formData, ticketId, type: 'Contact Page Inquiry' })}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow"
                      >
                        <i className="fa-solid fa-envelope text-sm"></i>
                        <span>Send via Gmail / Mail App</span>
                      </a>

                      {/* 2. Direct WhatsApp Link */}
                      <a
                        href={buildWhatsAppUrl({ ...formData, ticketId, type: 'Contact Page Inquiry' })}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow"
                      >
                        <i className="fa-brands fa-whatsapp text-sm"></i>
                        <span>Send via WhatsApp (8884238688)</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <a
                        href="tel:8884238688"
                        className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition font-mono shadow"
                      >
                        <i className="fa-solid fa-phone text-xs text-amber-400"></i>
                        <span>Call 8884238688</span>
                      </a>
                      <a
                        href="tel:9535828286"
                        className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition font-mono shadow"
                      >
                        <i className="fa-solid fa-phone text-xs text-amber-400"></i>
                        <span>Call 9535828286</span>
                      </a>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setEmailDispatchResult(null);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          interest: 'General Construction Enquiry',
                          location: '',
                          message: ''
                        });
                      }}
                      className="text-xs text-slate-500 hover:text-slate-900 underline font-medium"
                    >
                      ← Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name / Authorized Rep <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Kumar / Ar. Sunita Rao"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full max-w-full box-border px-3.5 sm:px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Contact Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full max-w-full box-border px-3.5 sm:px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Official Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="e.g. contact@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full max-w-full box-border px-3.5 sm:px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Scope / Requirement <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full max-w-full box-border px-3.5 sm:px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition text-slate-800"
                      >
                        <option value="General Construction Enquiry">General Construction Enquiry</option>
                        <option value="JCB 3DX & Heavy Earthmoving Machinery Rental">JCB 3DX &amp; Heavy Earthmoving Machinery Rental</option>
                        <option value="Excavation, Site Grading & Rock Breaking Fleet">Excavation, Site Grading &amp; Rock Breaking Fleet</option>
                        <option value="Turnkey Residential & Luxury Villa">Turnkey Residential &amp; Luxury Villa</option>
                        <option value="Commercial & Structural Contracting">Commercial &amp; Structural Contracting</option>
                        <option value="TMT Steel Bulk Procurement (Fe 550D)">TMT Steel Bulk Procurement (Fe 550D)</option>
                        <option value="Cement (53G / OPC / PPC) Bulk Supply">Cement (53G / OPC / PPC) Bulk Supply</option>
                        <option value="RMC Concrete Transit Mixer Supply">RMC Concrete Transit Mixer Supply</option>
                        <option value="Triple-Washed M-Sand / Aggregates Hauling">Triple-Washed M-Sand / Aggregates Hauling</option>
                        <option value="BOQ Analysis & Architectural Consulting">BOQ Analysis &amp; Architectural Consulting</option>
                        <option value="Site Inspection & Soil Verification Request">Site Inspection &amp; Soil Verification Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Site Location / City / Pincode
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Sarjapur Road, Bangalore / Whitefield / Mysore Road"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full max-w-full box-border px-3.5 sm:px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Detailed Specifications or Inquiries
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Include built-up area (sq.ft), quantity requirements (metric tonnes or bags), expected schedule, or specific engineering parameters..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full max-w-full box-border px-3.5 sm:px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <i className="fa-solid fa-shield-halved text-amber-500"></i>
                    <span>Your contact details are encrypted and strictly used for project coordination. Zero spam policy.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-slate-900 hover:bg-amber-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin text-amber-400"></i>
                        <span>Transmitting to gajananaconstructionsinfo@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Inquiry to Official Desk (Email Dispatch)</span>
                        <i className="fa-solid fa-paper-plane text-amber-400"></i>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Quick Map & Directions Callout */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden w-full">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 font-mono mb-0.5">Office &amp; Yard Location</div>
                <h4 className="font-bold text-slate-900 text-sm">7013, 2nd Main Rd, Samrat Layout, Arekere</h4>
                <p className="text-xs text-slate-500 font-mono">12.8878° N, 77.6017° E • Sarvobhogam Nagar, Bengaluru 560076</p>
              </div>
              <a
                href="#interactive-map"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold transition shadow-sm"
              >
                <i className="fa-solid fa-map-location-dot text-amber-400"></i>
                <span>View Google Map Below</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Google Maps & Facility Location Section */}
      <section id="interactive-map" className="py-10 sm:py-16 bg-slate-50 border-t border-slate-200 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden w-full max-w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-500/20 font-mono">
                <i className="fa-solid fa-location-dot text-amber-600"></i> Interactive Google Maps Navigation
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                Locate Us on Google Maps
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mt-1">
                7013, 2nd Main Rd, Samrat Layout, Sarvobhogam Nagar, Arekere, Bengaluru, Karnataka 560076
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="https://www.google.com/maps/place/7013,+2nd+Main+Rd+Samrat+Layout,+Sarvobhogam+Nagar,+Arekere,+Bengaluru,+Karnataka+560076/@12.8877432,77.6017726,21z/data=!4m6!3m5!1s0x3bae152f523d38af:0x73dac50967405142!8m2!3d12.8878405!4d77.6017497!16s%2Fg%2F11lmp2c1d0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-950 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider transition shadow text-center w-full sm:w-auto"
              >
                <i className="fa-solid fa-map-location-dot text-amber-400"></i>
                <span>Open in Google Maps</span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=7013,+2nd+Main+Rd+Samrat+Layout,+Sarvobhogam+Nagar,+Arekere,+Bengaluru,+Karnataka+560076"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition shadow text-center w-full sm:w-auto"
              >
                <i className="fa-solid fa-diamond-turn-right text-slate-950"></i>
                <span>Get Driving Directions</span>
              </a>
              <a
                href="https://maps.google.com/?q=12.8878405,77.6017497"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition shadow-sm font-mono text-center w-full sm:w-auto"
              >
                <i className="fa-solid fa-location-crosshairs text-blue-600"></i>
                <span>12.8878° N, 77.6017° E</span>
              </a>
            </div>
          </div>

          {/* Map Container + Overlay Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Embedded Google Map (8 Cols) */}
            <div className="lg:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-300 shadow-xl bg-white relative h-[360px] sm:h-[480px] w-full max-w-full">
              <iframe
                title="GAJANANA TRADERS & CONSTRUCTIONS & MATERIALS Google Map - 7013 Samrat Layout Arekere"
                src="https://maps.google.com/maps?q=7013,+2nd+Main+Rd+Samrat+Layout,+Sarvobhogam+Nagar,+Arekere,+Bengaluru,+Karnataka+560076&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '460px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Depot & Logistics Information Card (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4 min-w-0 w-full max-w-full overflow-hidden">
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 overflow-hidden w-full">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-building-wheat text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Corporate Office &amp; Facility Complex</h3>
                    <p className="text-[11px] text-slate-500">Gajanana Headquarters</p>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  <p className="font-semibold text-slate-900">
                    7013, 2nd Main Rd, Samrat Layout, Sarvobhogam Nagar, Arekere, Bengaluru, Karnataka - 560076
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Centrally situated in Arekere with direct arterial road connectivity, heavy vehicle dispatch coordination, and dedicated visitor parking.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Contact Details:</span>
                    <div className="flex items-center gap-2 font-mono font-bold text-slate-900">
                      <a href="tel:8884238688" className="hover:text-amber-600">8884238688</a>
                      <span className="text-slate-400 font-normal">/</span>
                      <a href="tel:9535828286" className="hover:text-amber-600">9535828286</a>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full overflow-hidden">
                    <span className="text-slate-500 shrink-0">Official Email:</span>
                    <a href="mailto:gajananaconstructionsinfo@gmail.com" className="font-bold text-slate-900 hover:text-amber-600 font-mono text-[11px] sm:text-xs break-all">
                      gajananaconstructionsinfo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Transit & Infrastructure Stats */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-center w-full">
                <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm min-w-0 overflow-hidden">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Yard Size</span>
                  <span className="text-base font-extrabold text-slate-900">4.5 Acres</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Heavy Storage Area</span>
                </div>
                <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm min-w-0 overflow-hidden">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Weighbridge</span>
                  <span className="text-base font-extrabold text-emerald-600">100-Ton</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">NABL Certified</span>
                </div>
                <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm min-w-0 overflow-hidden">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Transit Fleet</span>
                  <span className="text-base font-extrabold text-slate-900">42 GPS Trucks</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Live Tracked</span>
                </div>
                <div className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm min-w-0 overflow-hidden">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Loading Bays</span>
                  <span className="text-base font-extrabold text-amber-600">8 Bays</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Fast Turnaround</span>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-emerald-50 rounded-xl sm:rounded-2xl border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2.5 sm:gap-3 overflow-hidden w-full">
                <i className="fa-solid fa-truck-moving text-emerald-600 text-lg shrink-0"></i>
                <div className="leading-tight">
                  <span className="font-bold block">Heavy Commercial Vehicle Clearance</span>
                  <span className="text-[11px] text-emerald-700">Open 24/7 for raw material rake offloading &amp; bulk dispatches.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
