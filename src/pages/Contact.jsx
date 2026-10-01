import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { useApp } from '../context/AppContext';

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
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    const tid = 'GC-INQ-' + Math.floor(100000 + Math.random() * 900000);
    submitInquiry({ ...formData, ticketId: tid, type: 'Contact Page Inquiry' });
    setTicketId(tid);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      {/* Pricing Policy Top Banner */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 text-xs font-mono font-bold text-center border-b border-amber-600 shadow-inner">
        <span>📢 FOR ALL PRICING QUERIES, WHOLESALE RATES &amp; MACHINERY BOOKINGS: Contact </span>
        <a href="tel:8884238688" className="underline font-extrabold text-slate-950 hover:text-white ml-1">8884238688</a>
        <span className="mx-1.5">|</span>
        <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline font-extrabold text-slate-950 hover:text-white">gajananaconstructionsinfo@gmail.com</a>
      </div>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/30">
            Direct Coordination Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Connect With Our Engineering & Yard Teams
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Whether planning a multi-storey development, scheduling heavy structural steel deliveries, or consulting on custom BOQ schedules — our central office and dispatch yards are operational 6 days a week.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Information & Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">Corporate Headquarters & Yard</h2>
              <p className="text-slate-600 text-sm">
                Direct walk-in consultations, engineering conference suites, and live physical sample yards.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Registered Facility</div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">GAJANANA TRADERS &amp; CONSTRUCTIONS &amp; MATERIALS</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Plot #42-45, Industrial Ring Road Bypass,<br />
                    Opp. Toll Freight Terminal, Sector 4,<br />
                    Bangalore / Hosur Industrial Corridor, Karnataka - 560099
                  </p>
                  <p className="text-xs text-amber-700 font-medium mt-2">
                    <i className="fa-solid fa-truck-moving mr-1"></i> Heavy commercial trailers clearance available 24x7
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Direct Lines &amp; Price Queries</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Sales &amp; Price Queries:</span>
                      <a href="tel:8884238688" className="text-sm font-bold text-slate-900 hover:text-amber-600 font-mono">8884238688</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Yard &amp; JCB Dispatch:</span>
                      <a href="tel:8884238688" className="text-sm font-bold text-slate-900 hover:text-amber-600 font-mono">8884238688</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Direct WhatsApp:</span>
                      <a href="https://wa.me/918884238688?text=Hello%20Gajanana%20Constructions,%20I%20have%20an%20enquiry" target="_blank" rel="noreferrer" className="text-sm font-bold text-emerald-600 hover:underline font-mono">
                        +91 88842 38688
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email & Correspondence */}
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Official Communications &amp; Pricing</div>
                  <a href="mailto:gajananaconstructionsinfo@gmail.com" className="text-sm font-bold text-slate-900 hover:text-amber-600 block">
                    gajananaconstructionsinfo@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-2">Verified digital tenders, structural drawings, and itemized BOQ rate requests.</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
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
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
              <h4 className="font-bold text-sm mb-1"><i className="fa-solid fa-bolt text-amber-600 mr-1.5"></i> Need an immediate formal rate quotation?</h4>
              <p className="text-xs text-amber-800 mb-3">Skip manual email threads and generate an instant itemized estimate with transport costs.</p>
              <Link to="/get-a-quote" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition">
                <span>Go to Estimation Engine</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Right: Interactive Contact Form & Live Routing Desk (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Fast-Track Form</span>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mt-1">Send an Official Message or Inquiry</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Our chief project engineer or regional material manager will review your submission and respond within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-heading mb-2">Message Dispatched Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                    Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Your correspondence reference ID is:
                  </p>
                  <div className="inline-block bg-white px-4 py-2 rounded-lg border border-emerald-300 font-mono text-base font-bold text-emerald-700 mb-6 shadow-sm">
                    {ticketId}
                  </div>
                  <p className="text-xs text-slate-500 mb-6">
                    A copy has been recorded on our central system. Our engineering desk will connect with you on <span className="font-bold text-slate-700">{formData.phone}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        interest: 'General Construction Enquiry',
                        location: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition"
                  >
                    Send Another Communication
                  </button>
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
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
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
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
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
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
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
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition text-slate-800"
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
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
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <i className="fa-solid fa-shield-halved text-amber-500"></i>
                    <span>Your contact details are encrypted and strictly used for project coordination. Zero spam policy.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-slate-900 hover:bg-amber-600 text-white font-bold rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <span>Transmit Inquiry to Engineering Desk</span>
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              )}
            </div>

            {/* Map & GPS Logistics Details */}
            <div className="mt-8 p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">GPS Logistics & Heavy Vehicle Access</h4>
                  <p className="text-xs text-slate-500">Coordinates: 12.9249° N, 77.6834° E | Entry Gate #2 for Multi-Axle Trailers</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-bold hover:border-slate-900 transition"
                >
                  <i className="fa-solid fa-map-location-dot text-amber-500"></i>
                  <span>Open in Google Maps</span>
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-400 block font-bold uppercase">Yard Size</span>
                  <span className="text-sm font-bold text-slate-900">4.5 Acres</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-400 block font-bold uppercase">Weighbridge</span>
                  <span className="text-sm font-bold text-emerald-600">100 Ton NABL</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-400 block font-bold uppercase">Transit Fleet</span>
                  <span className="text-sm font-bold text-slate-900">42 GPS Trucks</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-400 block font-bold uppercase">Loading Bays</span>
                  <span className="text-sm font-bold text-slate-900">8 High-Speed</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
