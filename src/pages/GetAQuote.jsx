import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { useApp } from '../context/AppContext';

export default function GetAQuote() {
  const { submitInquiry, data } = useApp();
  const company = data?.company || {
    phone: "8884238688",
    phoneDisplay: "+91 88842 38688",
    email: "gajananaconstructionsinfo@gmail.com",
    whatsappNumber: "918884238688"
  };

  // Estimator state
  const [projectType, setProjectType] = useState('turnkey'); // turnkey, machinery, civil, materials, renovation
  const [builtUpArea, setBuiltUpArea] = useState(2500); // sq ft
  const [qualityGrade, setQualityGrade] = useState('premium'); // standard, premium, luxury
  const [selectedMaterials, setSelectedMaterials] = useState({
    jcb: true,
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

  // Dynamic engineering physical takeoffs based on IS 456 standards (Strictly physical units, ZERO numeric prices)
  const estimation = useMemo(() => {
    return {
      estSteelQty: Math.round((builtUpArea * 3.8) / 1000 * 10) / 10, // metric tons (approx 3.8kg/sqft)
      estCementQty: Math.round(builtUpArea * 0.42), // 50kg bags (approx 0.42 bags/sqft)
      estSandQty: Math.round((builtUpArea * 1.8) / 100), // tonnes
      estJcbHours: Math.max(12, Math.round(builtUpArea * 0.038)), // machine hours (JCB 3DX & Excavation)
      estRmcQty: Math.round(builtUpArea * 0.14), // cu.m of concrete
      estBlocksQty: Math.round(builtUpArea * 1.25), // AAC masonry blocks
    };
  }, [builtUpArea]);

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
      estimatedTotal: 'Price on Enquiry',
      estimationTakeoff: estimation,
      date: new Date().toISOString(),
      type: 'Engineering Takeoff & BOQ Estimation'
    };

    submitInquiry(quotePayload);
    setGeneratedTicket(quotePayload);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Breadcrumb items={[{ label: 'Get a Quote' }]} />

      {/* Pricing Policy Top Notice */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 text-xs font-mono font-bold text-center border-b border-amber-600 shadow-inner">
        <span>📢 ZERO BROKERAGE PRICING: For official rate cards, wholesale project pricing, and machine dispatch, contact </span>
        <a href="tel:8884238688" className="underline font-extrabold text-slate-950 hover:text-white ml-1">8884238688</a>
        <span className="mx-1.5">|</span>
        <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline font-extrabold text-slate-950 hover:text-white">gajananaconstructionsinfo@gmail.com</a>
      </div>

      {/* Header */}
      <section className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/30">
            Interactive BOQ &amp; Physical Takeoff Estimator
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Construction, JCB Fleet &amp; Material BOQ Engine
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Calculate accurate structural material volume allocations (Fe 550D TMT steel, 53G cement bags, sand tonnage, JCB machine hours), and receive an engineering-verified itemized quotation directly from our central depot.
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
                  <p className="text-xs text-slate-500">Choose between end-to-end turnkey delivery, earthmoving machinery, or raw materials supply.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'turnkey', title: 'Complete Turnkey Construction', desc: 'Architecture, civil structure, finishes, plumbing, electrical & handover.', icon: 'fa-house-chimney' },
                  { id: 'machinery', title: 'Earthmoving & JCB Fleet Rental', desc: 'JCB 3DX backhoes, 20T hydraulic excavators, rock breakers & site grading.', icon: 'fa-truck-front' },
                  { id: 'civil', title: 'Civil & Structural Core', desc: 'Foundation, RCC column frame, masonry walls & slab casting.', icon: 'fa-cubes-stacked' },
                  { id: 'materials', title: 'Direct Yard Materials Supply', desc: 'Bulk procurement of Fe 550D TMT, 53G cement, sand & bricks.', icon: 'fa-truck-ramp-box' },
                  { id: 'renovation', title: 'Commercial & Structural Additions', desc: 'Vertical floors expansion, retrofitting, industrial shed erection.', icon: 'fa-industry' },
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
                  <h3 className="text-lg font-bold font-heading text-slate-900">Project Dimensions &amp; Specification Standard</h3>
                  <p className="text-xs text-slate-500">Fine-tune the gross built-up area and structural quality benchmarks.</p>
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

              {/* Quality Grade Options - Without monetary currency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Specification Grade &amp; Finish Standard
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'standard', title: 'Standard Grade', badge: 'IS 456 Standard', desc: 'ISI Fe 500D Steel, 43G Cement, vitrified tiles, standard CP fittings.' },
                    { id: 'premium', title: 'Premium Architectural', badge: 'High Ductility 550D', desc: 'Tata Tiscon Fe 550D, UltraTech 53G, Italian marble touch, Kohler fittings.' },
                    { id: 'luxury', title: 'Luxury Signature', badge: 'Engineered Elite', desc: 'Earthquake-resistant RCC frame, smart home automation, imported finishes.' },
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
                      <span className="inline-block mt-1 px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[10px] font-bold">
                        {tier.badge}
                      </span>
                      <p className="text-xs text-slate-500 mt-2 leading-tight">{tier.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Material & Machinery Packages Included */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">3</span>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900">Direct Material &amp; Machinery Logistics</h3>
                  <p className="text-xs text-slate-500">Check required machinery &amp; materials from our centralized yard dispatch.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { key: 'jcb', name: 'JCB 3DX & Heavy Excavators', tag: 'Machinery Fleet' },
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

          {/* Right Column: Physical BOQ Matrix & Direct Official Quote (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Pricing Policy Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl sticky top-28">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                  Official Rate Specification
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  NABL / CPWD Calibrated
                </span>
              </div>

              <div className="my-6">
                <div className="text-xs text-slate-400 font-medium mb-1 font-mono uppercase">Indicative Quotation</div>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-400">
                  Price on Enquiry
                </div>
                <div className="text-xs text-slate-300 mt-2 font-mono">
                  Physical quantity takeoff calculated across {builtUpArea.toLocaleString('en-IN')} sq.ft
                </div>
              </div>

              {/* Price Enquiry Direct Notice Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono space-y-2 mb-6">
                <div className="font-bold text-amber-300 uppercase">
                  📞 For Official Price Queries &amp; Signed Rate Sheet:
                </div>
                <div className="text-slate-200">
                  Phone: <a href="tel:8884238688" className="font-bold underline text-amber-400">8884238688</a>
                </div>
                <div className="text-slate-200">
                  Email: <a href="mailto:gajananaconstructionsinfo@gmail.com" className="font-bold underline text-amber-400">gajananaconstructionsinfo@gmail.com</a>
                </div>
              </div>

              {/* Physical Quantities BOQ Matrix */}
              <div className="space-y-3 py-4 border-t border-slate-800/80">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 font-mono">
                  Estimated Physical Yard Consumption:
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">TMT Fe 550D Steel</span>
                    <span className="font-bold text-white text-base">{estimation.estSteelQty} MT</span>
                    <span className="text-[10px] text-slate-500 block">Primary Rolling Mill</span>
                  </div>

                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">53G Cement</span>
                    <span className="font-bold text-emerald-400 text-base">{estimation.estCementQty} Bags</span>
                    <span className="text-[10px] text-slate-500 block">Moisture-Proof HDPE</span>
                  </div>

                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">M-Sand &amp; Coarse</span>
                    <span className="font-bold text-blue-400 text-base">{estimation.estSandQty} Tons</span>
                    <span className="text-[10px] text-slate-500 block">Zero Silt Grade</span>
                  </div>

                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">JCB &amp; Excavator Fleet</span>
                    <span className="font-bold text-orange-400 text-base">~{estimation.estJcbHours} Hrs</span>
                    <span className="text-[10px] text-slate-500 block">Excavation &amp; Grading</span>
                  </div>

                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">Ready Concrete (RMC)</span>
                    <span className="font-bold text-purple-400 text-base">{estimation.estRmcQty} cu.m</span>
                    <span className="text-[10px] text-slate-500 block">Transit Mixer Pour</span>
                  </div>

                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <span className="text-slate-400 block text-[10px]">AAC Masonry Blocks</span>
                    <span className="font-bold text-amber-300 text-base">{estimation.estBlocksQty} Units</span>
                    <span className="text-[10px] text-slate-500 block">Precision Joint Units</span>
                  </div>
                </div>
              </div>

              {/* Official Quote Submission Form */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Lock Specifications &amp; Receive Signed PDF BOQ
                </div>

                {submitted ? (
                  <div className="p-5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="font-bold text-white text-base">Quotation Ticket Created!</div>
                    <div className="text-xs text-slate-300">Ticket Reference:</div>
                    <div className="font-mono text-amber-400 font-bold text-base">{generatedTicket?.ticketId}</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Our commercial estimating lead has received your specifications for {builtUpArea.toLocaleString('en-IN')} sq.ft.
                    </p>
                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={`https://wa.me/918884238688?text=Hello%20GCM,%20I%20generated%20Estimate%20${generatedTicket?.ticketId}%20for%20${builtUpArea}%20sqft.%20Please%20send%20signed%20rate%20card.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow"
                      >
                        <i className="fa-brands fa-whatsapp text-sm"></i>
                        <span>Fast-Track on WhatsApp (8884238688)</span>
                      </a>
                      <a
                        href="tel:8884238688"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition font-mono"
                      >
                        <i className="fa-solid fa-phone text-sm"></i>
                        <span>Call Dispatch Desk: 8884238688</span>
                      </a>
                    </div>
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
                        placeholder="Project Site Location (e.g. Bangalore / Industrial Ring Road)"
                        value={customer.location}
                        onChange={(e) => setCustomer(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                    >
                      <span>Lock In Specifications &amp; Request BOQ</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center">
                      Rates provided directly without broker markup. For price queries call 8884238688.
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
                  <span><strong>In-House Machinery Fleet:</strong> JCB 3DX &amp; heavy excavators mobilized directly from yard.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
