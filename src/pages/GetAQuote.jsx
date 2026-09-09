import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { useApp } from '../context/AppContext';

export default function GetAQuote() {
  const { submitInquiry } = useApp();

  // Estimator state
  const [projectType, setProjectType] = useState('turnkey'); // turnkey, civil, materials, renovation
  const [builtUpArea, setBuiltUpArea] = useState(2500); // sq ft
  const [qualityGrade, setQualityGrade] = useState('premium'); // standard, premium, luxury
  const [selectedMaterials, setSelectedMaterials] = useState({
    steel: true,
    cement: true,
    aggregates: true,
    rmc: false,
    blocks: true,
  });
  const [timeline, setTimeline] = useState('immediate'); // immediate, 1to3months, planning

  // Contact form state
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState(null);

  // Dynamic calculations
  const estimation = useMemo(() => {
    let ratePerSqFt = 0;
    if (projectType === 'turnkey') {
      if (qualityGrade === 'standard') ratePerSqFt = 1850;
      else if (qualityGrade === 'premium') ratePerSqFt = 2450;
      else ratePerSqFt = 3200;
    } else if (projectType === 'civil') {
      if (qualityGrade === 'standard') ratePerSqFt = 1250;
      else if (qualityGrade === 'premium') ratePerSqFt = 1600;
      else ratePerSqFt = 2100;
    } else if (projectType === 'materials') {
      // Estimated materials base consumption per sqft
      ratePerSqFt = 950;
    } else {
      // Renovation
      ratePerSqFt = 1100;
    }

    const baseCost = builtUpArea * ratePerSqFt;

    // Materials add-on delta
    let materialCostEstimate = baseCost * 0.58;
    let laborStructuralEstimate = baseCost * 0.32;
    let complianceSafetyEstimate = baseCost * 0.10;

    return {
      ratePerSqFt,
      totalCost: baseCost,
      materialCostEstimate,
      laborStructuralEstimate,
      complianceSafetyEstimate,
      estSteelQty: Math.round((builtUpArea * 3.8) / 1000 * 10) / 10, // metric tons (approx 3.8kg/sqft)
      estCementQty: Math.round(builtUpArea * 0.42), // bags (approx 0.42 bags/sqft)
      estSandQty: Math.round((builtUpArea * 1.8) / 100), // tons
    };
  }, [projectType, builtUpArea, qualityGrade]);

  const handleMaterialToggle = (key) => {
    setSelectedMaterials(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.phone) return;

    const ticketId = 'GC-EST-' + Math.floor(100000 + Math.random() * 900000);
    const quotePayload = {
      ticketId,
      customer,
      projectType,
      builtUpArea,
      qualityGrade,
      estimatedTotal: estimation.totalCost,
      date: new Date().toISOString(),
      type: 'Comprehensive Rate Estimation'
    };

    submitInquiry(quotePayload);
    setGeneratedTicket(quotePayload);
    setSubmitted(true);
  };

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumb items={[{ label: 'Get a Quote' }]} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/30">
            Interactive BOQ & Cost Estimator
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Instant Construction & Material Quotation Engine
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Calculate accurate preliminary project expenditures, material volume allocations (TMT steel, cement bags, sand tonnage), and receive an engineering-verified itemized quotation within hours.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Project Type */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">1</span>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900">Select Project Execution Scope</h3>
                  <p className="text-xs text-slate-500">Choose between end-to-end turnkey delivery or raw materials supply.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'turnkey', title: 'Complete Turnkey Construction', desc: 'Architecture, civil structure, finishes, plumbing, electrical & handover.', icon: 'fa-house-chimney' },
                  { id: 'civil', title: 'Civil & Structural Core', desc: 'Foundation, RCC column frame, masonry walls & slab casting.', icon: 'fa-cubes-stacked' },
                  { id: 'materials', title: 'Direct Yard Materials Supply', desc: 'Bulk procurement of Fe 550D TMT, 53G cement, sand & bricks.', icon: 'fa-truck-ramp-box' },
                  { id: 'renovation', title: 'Commercial / Structural Additions', desc: 'Vertical floors expansion, retrofitting, industrial shed erection.', icon: 'fa-industry' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      projectType === item.id
                        ? 'border-amber-500 bg-amber-50/50 shadow-sm ring-2 ring-amber-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <i className={`fa-solid ${item.icon} ${projectType === item.id ? 'text-amber-600' : 'text-slate-500'} text-lg`}></i>
                      <span className="font-bold text-sm text-slate-900">{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area & Quality Grade */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">2</span>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900">Project Dimensions & Quality Specification</h3>
                  <p className="text-xs text-slate-500">Fine-tune the gross built-up area and structural finish grade.</p>
                </div>
              </div>

              {/* Area Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-800">Total Built-Up Area / Footprint:</label>
                  <div className="px-3 py-1 bg-slate-900 text-amber-400 font-mono font-bold text-base rounded-md">
                    {builtUpArea.toLocaleString('en-IN')} <span className="text-xs text-slate-300 font-normal">Sq.Ft</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="600"
                  max="25000"
                  step="100"
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
                  <span>600 Sq.Ft (Compact Villa)</span>
                  <span>5,000 Sq.Ft</span>
                  <span>15,000 Sq.Ft</span>
                  <span>25,000 Sq.Ft+</span>
                </div>
              </div>

              {/* Quality Grade Options */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Specification Grade & Finish Standard
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'standard', title: 'Standard Grade', rate: '₹1,850/sq.ft', desc: 'ISI Fe 500D Steel, 43G Cement, vitrified tiles, standard CP fittings.' },
                    { id: 'premium', title: 'Premium Architectural', rate: '₹2,450/sq.ft', desc: 'Tata Tiscon Fe 550D, UltraTech 53G, Italian marble touch, Kohler fittings.' },
                    { id: 'luxury', title: 'Luxury Signature', rate: '₹3,200/sq.ft', desc: 'Engineered earthquake resistant, smart home automation, imported finishes.' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setQualityGrade(tier.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        qualityGrade === tier.id
                          ? 'border-amber-500 bg-amber-500/5 ring-2 ring-amber-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div className="font-bold text-sm text-slate-900">{tier.title}</div>
                      <div className="text-xs font-bold text-amber-600 mt-0.5">{tier.rate}</div>
                      <p className="text-xs text-slate-500 mt-2 leading-tight">{tier.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Material Packages Included */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">3</span>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900">Direct Material Logistics Inclusions</h3>
                  <p className="text-xs text-slate-500">Check required materials from our centralized yard dispatch.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'steel', name: 'TMT Steel Fe 550D Primary Mills', tag: 'Direct Trailer' },
                  { key: 'cement', name: 'Fresh Batch 53G Portland Cement', tag: 'Moisture Sealed' },
                  { key: 'aggregates', name: 'Washed M-Sand & 20mm Blue Metal', tag: 'Calibrated Tippers' },
                  { key: 'rmc', name: 'Transit Mix Concrete (M20-M40)', tag: 'With Boom Pump' },
                  { key: 'blocks', name: 'High-Density AAC Lightweight Blocks', tag: 'Factory Bundled' },
                ].map((mat) => (
                  <label
                    key={mat.key}
                    onClick={() => handleMaterialToggle(mat.key)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition select-none ${
                      selectedMaterials[mat.key] ? 'border-amber-500 bg-amber-50/40' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center border ${selectedMaterials[mat.key] ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-300'}`}>
                        {selectedMaterials[mat.key] && <i className="fa-solid fa-check text-xs"></i>}
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{mat.name}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono font-medium">{mat.tag}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Expected Timeline to Groundbreaking / Yard Dispatch
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'immediate', label: 'Immediate (< 10 Days)' },
                    { id: '1to3months', label: '1 - 3 Months' },
                    { id: 'planning', label: 'Feasibility / Planning Phase' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition ${
                        timeline === t.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-100 text-slate-700 border-transparent hover:bg-slate-200'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Cost Summary & Official Quote Generator (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Pricing Breakdown Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Live Preliminary Estimate
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  NABL / CPWD Calibrated
                </span>
              </div>

              <div className="my-6">
                <div className="text-xs text-slate-400 font-medium mb-1">Total Estimated Project Value</div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight text-amber-400">
                  {formatINR(estimation.totalCost)}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Based on ~₹{estimation.ratePerSqFt.toLocaleString('en-IN')} / sq.ft across {builtUpArea.toLocaleString('en-IN')} sq.ft
                </div>
              </div>

              {/* Itemized Volume Allocation Forecast */}
              <div className="space-y-3 py-4 border-t border-slate-800/80 text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-xs">Direct Raw Materials Allocation (58%):</span>
                  <span className="font-mono font-bold text-white">{formatINR(estimation.materialCostEstimate)}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-xs">Civil Engineering, Labour & Machinery (32%):</span>
                  <span className="font-mono font-bold text-white">{formatINR(estimation.laborStructuralEstimate)}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-xs">Quality Audits, Approvals & Buffer (10%):</span>
                  <span className="font-mono font-bold text-white">{formatINR(estimation.complianceSafetyEstimate)}</span>
                </div>
              </div>

              {/* Estimated Material Quantities (BOQ Preview) */}
              <div className="mt-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                  Estimated Physical Yard Consumption:
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">TMT Fe 550D</span>
                    <span className="font-bold text-white font-mono">{estimation.estSteelQty} MT</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">53G Cement</span>
                    <span className="font-bold text-white font-mono">{estimation.estCementQty} Bags</span>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">M-Sand</span>
                    <span className="font-bold text-white font-mono">{estimation.estSandQty} Tons</span>
                  </div>
                </div>
              </div>

              {/* Official Quote Submission Form */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Lock Rates & Receive Formally Signed PDF BOQ
                </div>

                {submitted ? (
                  <div className="p-5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2 text-lg">
                      <i className="fa-solid fa-file-invoice-dollar"></i>
                    </div>
                    <div className="font-bold text-white text-base">Quotation Ticket Created!</div>
                    <div className="text-xs text-slate-300 mt-1">Ticket Reference:</div>
                    <div className="font-mono text-amber-400 font-bold text-sm my-1">{generatedTicket?.ticketId}</div>
                    <p className="text-xs text-slate-400 mt-2">
                      Our commercial estimation lead has been assigned. You will receive the detailed rate-card PDF on your phone via WhatsApp.
                    </p>
                    <a
                      href={`https://wa.me/919448123456?text=Hello%20Gajanana%20Constructions,%20I%20generated%20Estimate%20${generatedTicket?.ticketId}%20for%20${builtUpArea}%20sqft.%20Please%20send%20PDF.`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>Fast-Track on WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name / Entity Name *"
                        value={customer.name}
                        onChange={(e) => setCustomer(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={customer.phone}
                        onChange={(e) => setCustomer(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                      <input
                        type="email"
                        placeholder="Email (Optional)"
                        value={customer.email}
                        onChange={(e) => setCustomer(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Project Site Location (e.g. Whitefield, Bangalore)"
                        value={customer.location}
                        onChange={(e) => setCustomer(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Lock In Estimate & Generate Official BOQ</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center">
                      Rates valid for 14 calendar days from creation. Transparent billing guarantee.
                    </p>
                  </form>
                )}
              </div>

            </div>

            {/* Corporate Transparency Callout */}
            <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <i className="fa-solid fa-certificate text-amber-500"></i>
                <span>Gajanana Direct Transparency Promise</span>
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                  <span><strong>Zero Hidden Cost Policy:</strong> Itemized line-by-line schedules with standard escalation clauses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                  <span><strong>Direct Weighbridge Slips:</strong> Certified computer slip delivered with every tipper / flatbed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-emerald-500 mt-0.5"></i>
                  <span><strong>Dedicated Project Lead:</strong> Senior civil engineer appointed as single point of contact.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
