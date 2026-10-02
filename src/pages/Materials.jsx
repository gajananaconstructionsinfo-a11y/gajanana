import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Breadcrumb from '../components/Breadcrumb';
import { Shield, FileCheck, Truck, Scale, ChevronRight, Sliders, CheckCircle } from 'lucide-react';

export default function Materials() {
  const { data, openQuickQuote, openMillReport } = useApp();
  const { heavySKUs, materialCategories, millReports, boqRatios } = data;

  const [builtupSqFt, setBuiltupSqFt] = useState(3500);

  // Dynamic calculations based on physical ratios in data
  const steelTons = ((builtupSqFt * boqRatios.steelKgPerSqFt) / 1000).toFixed(2);
  const cementBags = Math.round(builtupSqFt * boqRatios.cementBagsPerSqFt).toLocaleString('en-IN');
  const sandTons = Math.round(builtupSqFt * boqRatios.sandTonnesPerSqFt).toLocaleString('en-IN');
  const aacBlocks = Math.round(builtupSqFt * boqRatios.aacBlocksPerSqFt).toLocaleString('en-IN');
  const jcbHours = Math.max(8, Math.round(builtupSqFt * 0.035));

  return (
    <div>
      <Breadcrumb items={[{ label: 'Materials Depot & Mill Specs' }]} />

      {/* Pricing Policy Top Banner */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 text-xs font-mono font-bold text-center border-b border-amber-600 shadow-inner">
        <span>📢 NOTICE: We maintain strict transparency with zero hidden brokerage. For wholesale bulk rates, project BOQ pricing, and today's market rate card, contact </span>
        <a href="tel:8884238688" className="underline font-extrabold text-slate-950 hover:text-white ml-1">8884238688</a>
        <span className="mx-1">/</span>
        <a href="tel:9535828286" className="underline font-extrabold text-slate-950 hover:text-white">9535828286</a>
        <span className="mx-1.5">|</span>
        <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline font-extrabold text-slate-950 hover:text-white">gajananaconstructionsinfo@gmail.com</a>
      </div>

      {/* 1. HERO & STATS BANNER (Stitch Screen 2) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>CENTRAL DIRECT STOCKYARD • 15,000 MT CAPACITY</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
                CERTIFIED PRIMARY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700">
                  CONSTRUCTION MATERIALS.
                </span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-light max-w-2xl">
                Direct primary rolling mill TMT rebars, factory-fresh cement silos, triple-washed M-Sand, heavy earthmoving machinery fleet (JCB 3DX &amp; excavators), and precision AAC blocks with verified NABL mill test reports.
              </p>
            </div>

            {/* Controlled Humidity Storage Card */}
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm font-mono text-xs space-y-3">
              <div className="flex items-center space-x-2 text-amber-700 font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4 text-amber-600" />
                <span>Controlled Humidity Silos</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                All bagged cement is stored in elevated, de-humidified covered bays to prevent hydration pre-curing. Rebars stored under overhead gantry cranes. Heavy fleet mobilized within 2 hours.
              </p>
              <div className="pt-2 border-t border-slate-200 flex justify-between text-slate-900 font-bold">
                <span>Daily Dispatch Fleet:</span>
                <span className="text-emerald-700">24 Trucks &amp; Machinery</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INSTANT BOQ GENERATOR (Interactive Slider matching Screen 2) */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block">
                INTERACTIVE ESTIMATOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Instant BOQ Quantity Generator
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                Slide your anticipated built-up area to compute indicative core structural material tonnages based on IS 456 standard concrete frame ratios.
              </p>

              {/* Slider */}
              <div className="pt-4 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400 uppercase">Built-Up Area:</span>
                  <span className="text-xl font-extrabold text-amber-400">
                    {Number(builtupSqFt).toLocaleString('en-IN')} sq ft
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="100"
                  value={builtupSqFt}
                  onChange={(e) => setBuiltupSqFt(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>500 sq ft</span>
                  <span>5,000 sq ft</span>
                  <span>15,000 sq ft</span>
                  <span>25,000+ sq ft</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider font-mono"
                >
                  <span>Request Full Itemized Bill of Quantities →</span>
                </Link>
              </div>
            </div>

            {/* Calculated Results (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block mb-2"></span>
                  <div className="text-[11px] text-slate-400 font-mono">Fe 550D Steel</div>
                  <div className="text-lg font-extrabold text-amber-400 font-mono mt-1">{steelTons} MT</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">~3.8 kg/sq ft</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block mb-2"></span>
                  <div className="text-[11px] text-slate-400 font-mono">53G Cement</div>
                  <div className="text-lg font-extrabold text-emerald-400 font-mono mt-1">{cementBags}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">50 kg Bags</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 block mb-2"></span>
                  <div className="text-[11px] text-slate-400 font-mono">M-Sand Metal</div>
                  <div className="text-lg font-extrabold text-blue-400 font-mono mt-1">{sandTons} T</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">Zero Silt</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 block mb-2"></span>
                  <div className="text-[11px] text-slate-400 font-mono">AAC Blocks</div>
                  <div className="text-lg font-extrabold text-purple-400 font-mono mt-1">{aacBlocks}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">Masonry Units</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 col-span-2 sm:col-span-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-400 block mb-2"></span>
                  <div className="text-[11px] text-slate-400 font-mono">JCB / Excavator</div>
                  <div className="text-lg font-extrabold text-orange-400 font-mono mt-1">~{jcbHours} Hrs</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">Earthmoving</div>
                </div>
              </div>

              {/* Price Enquiry Notice */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <span className="text-amber-300">
                  ⚡ <strong>Rate Schedule:</strong> For wholesale prices per MT/bag &amp; machine dispatch, contact our dispatch desk:
                </span>
                <span className="shrink-0 font-bold text-white">
                  Call <a href="tel:8884238688" className="text-amber-400 underline">8884238688</a> / <a href="tel:9535828286" className="text-amber-400 underline">9535828286</a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HEAVY CONSTRUCTION SKUs (8 Certified Products matching Screen 2) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
              HEAVY CONSTRUCTION CATALOGUE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
              Primary Infrastructure SKUs
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Direct site delivery with certified laboratory test reports for civil verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heavySKUs.map((sku) => (
              <div
                key={sku.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={sku.image}
                      alt={sku.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                    />
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase">
                      {sku.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-slate-950 text-base font-heading mb-1.5 group-hover:text-amber-600 transition-colors">
                      {sku.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mb-4">
                      {sku.specSummary}
                    </p>

                    {/* Technical spec chips */}
                    <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-[11px] mb-4">
                      {sku.specs?.slice(0, 2).map((sp, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span className="text-slate-400">{sp.label}:</span>
                          <span className="font-bold text-slate-800">{sp.val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-slate-500 uppercase font-bold">Pricing Policy</span>
                        <span className="text-xs font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">Price on Enquiry</span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Call: <a href="tel:8884238688" className="font-bold text-slate-900 hover:text-amber-600 font-mono">8884238688</a> / <a href="tel:9535828286" className="font-bold text-slate-900 hover:text-amber-600 font-mono">9535828286</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => openQuickQuote(sku.name)}
                    className="w-full py-3 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                  >
                    REQUEST BATCH QUOTE
                  </button>
                  <Link
                    to={`/materials/product/${sku.id}`}
                    className="block text-center py-2 text-xs font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider font-mono"
                  >
                    View Technical Sheet →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALL 16 MATERIAL CATEGORIES (Full Grid) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
              16 VERIFIED CATEGORIES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
              Complete Materials Catalogues
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Select any category to view full product ranges, IS standards, and volume discounts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {materialCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/materials/${cat.slug}`}
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all group"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-3 bg-slate-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => { e.currentTarget.src = '/fallback.svg'; }}
                  />
                </div>
                <h4 className="font-bold text-slate-900 text-sm font-heading group-hover:text-amber-600 transition-colors">
                  {cat.name}
                </h4>
                <p className="text-xs text-slate-500 font-mono mt-1">{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIVE MILL HEAT SHEETS & TEST REPORTS (Stitch Screen 2 Table) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                CIVIL COMPLIANCE RECORDS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
                Live Mill Heat Sheets &amp; Test Reports
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Inspect physical tensile and chemical test sheets for current active stock batches.
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-700 flex items-center font-bold">
              <CheckCircle className="w-4 h-4 mr-1.5" />
              100% NABL Accredited Laboratory Passed
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900 text-white uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Material Grade</th>
                  <th className="py-3.5 px-4">Primary Rolling Unit</th>
                  <th className="py-3.5 px-4">Batch / Heat No.</th>
                  <th className="py-3.5 px-4">Yield Strength</th>
                  <th className="py-3.5 px-4">Chemical Check</th>
                  <th className="py-3.5 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {millReports.map((report, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 text-slate-500">{report.date}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{report.material}</td>
                    <td className="py-3.5 px-4 text-slate-600">{report.mill}</td>
                    <td className="py-3.5 px-4 font-bold text-amber-700">{report.heatNo}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700">{report.yieldStrength}</td>
                    <td className="py-3.5 px-4 text-slate-600">{report.chemicalCheck}</td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => openMillReport(report)}
                        className="px-3 py-1 bg-slate-950 hover:bg-amber-600 text-white rounded-lg text-[10px] uppercase font-bold tracking-wider transition-colors"
                      >
                        Inspect Sheet
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold font-heading mb-4">
            Need Scheduled Delivery to Your Active Site?
          </h2>
          <p className="text-slate-400 text-sm mb-4 font-light">
            We provide timed site tipping for aggregates, transit mixer coordinate pourings, and heavy machinery dispatch.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 mb-8">
            <span>Price Queries: <a href="tel:8884238688" className="text-white font-bold underline">8884238688</a> / <a href="tel:9535828286" className="text-white font-bold underline">9535828286</a></span>
            <span>•</span>
            <span><a href="mailto:gajananaconstructionsinfo@gmail.com" className="text-white font-bold underline">gajananaconstructionsinfo@gmail.com</a></span>
          </div>
          <div>
            <Link
              to="/contact"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
            >
              DISCUSS SITE DISPATCH SCHEDULE →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
