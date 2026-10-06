import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { data } = useApp();
  const { company } = data;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-3">
            <Link to="/" className="flex items-center space-x-3 mb-4 group inline-flex" title="Gajanana Constructions Home">
              <img
                src="/logo.svg"
                alt="Gajanana Constructions Logo"
                width="40"
                height="40"
                className="w-10 h-10 rounded-xl shadow-md group-hover:scale-105 transition-transform shrink-0 object-contain"
              />
              <div className="flex flex-col">
                <div className="text-white font-heading font-extrabold text-lg tracking-wider leading-tight group-hover:text-amber-400 transition-colors">
                  GAJANANA
                </div>
                <div className="text-amber-400 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase leading-tight mt-0.5">
                  TRADERS &amp; CONSTRUCTIONS &amp; MATERIALS
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm font-light">
              {company.subheading}. {company.tagline}
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={`https://wa.me/${company.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                title="WhatsApp Consultation"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
              <a
                href={`tel:${company.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-all"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Navigation</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/guides" className="text-amber-400 font-semibold hover:text-white transition-colors">📚 Construction Guides</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services Directory</Link></li>
              <li><Link to="/materials" className="hover:text-amber-400 transition-colors">Materials Depot</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition-colors">Projects Portfolio</Link></li>
              <li><Link to="/why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/get-a-quote" className="hover:text-amber-400 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Fleet & Services Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Fleet &amp; Materials</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/services/earthmoving-machinery-jcb" className="hover:text-amber-400 transition-colors">JCB 3DX &amp; Excavator Fleet</Link></li>
              <li><Link to="/materials/earthmoving-machinery" className="hover:text-amber-400 transition-colors">Heavy Machinery Fleet</Link></li>
              <li><Link to="/materials/steel" className="hover:text-amber-400 transition-colors">Tata Tiscon Fe 550D TMT</Link></li>
              <li><Link to="/materials/cement" className="hover:text-amber-400 transition-colors">UltraTech Grade 43 OPC</Link></li>
              <li><Link to="/materials/sand-aggregates" className="hover:text-amber-400 transition-colors">Washed M-Sand &amp; 20mm Metal</Link></li>
              <li><Link to="/materials/rmc" className="hover:text-amber-400 transition-colors">Ready-Mix Concrete (RMC)</Link></li>
              <li><Link to="/services/residential-construction" className="hover:text-amber-400 transition-colors">Turnkey Residential Civil</Link></li>
            </ul>
          </div>

          {/* Contact Yard & Price Queries - WIDE AND SPACIOUS (4 columns on lg) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Contact &amp; Quotes</h3>
            <div className="space-y-4 text-xs text-slate-400">
              
              {/* Wide Pricing Queries Card with Generous Margins */}
              <div className="p-4 sm:p-4.5 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-amber-300 text-xs leading-relaxed w-full shadow-md">
                <span className="font-extrabold block text-amber-400 uppercase font-mono tracking-wider text-xs mb-1.5">
                  PRICING QUERIES:
                </span>
                <p className="text-slate-200 text-xs">
                  Call <a href="tel:8884238688" className="font-bold underline text-white hover:text-amber-400 font-mono">8884238688</a> / <a href="tel:9535828286" className="font-bold underline text-white hover:text-amber-400 font-mono">9535828286</a> or email
                </p>
                <p className="mt-1">
                  <a
                    href="mailto:gajananaconstructionsinfo@gmail.com"
                    className="underline text-amber-300 hover:text-white font-mono text-[11px] sm:text-xs tracking-tight break-all inline-block font-semibold"
                  >
                    gajananaconstructionsinfo@gmail.com
                  </a>
                </p>
              </div>

              <p className="leading-relaxed flex items-start space-x-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </p>
              <p className="flex items-center space-x-2.5 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono font-bold text-white flex items-center space-x-1.5">
                  <a href="tel:8884238688" className="hover:text-amber-400">{company.phoneDisplay}</a>
                  <span className="text-slate-500 font-normal">/</span>
                  <a href="tel:9535828286" className="hover:text-amber-400">{company.phoneSecondaryDisplay}</a>
                </span>
              </p>
              <p className="flex items-center space-x-2.5 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-amber-400 font-mono text-white text-xs break-all">
                  {company.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        
        {/* Industry Publications & External Citations */}
        <div className="pt-6 pb-6 border-t border-slate-900 mb-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] uppercase font-mono font-bold text-amber-400">
              Verified Publication
            </span>
            <span>Central Bannerghatta Road Sector Civil Engineering Feature:</span>
          </div>
          <a
            href="https://www.quora.com/profile/Gajananaconstructions/Central-Bannerghatta-Road-Sector-South-Bengaluru-Construction-Company-Building-Contractor-in-Bilekahalli-Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-white underline font-semibold transition-colors flex items-center space-x-1"
          >
            <span>Read Bilekahalli &amp; Bannerghatta Road Construction Feature on Quora</span>
            <span>↗</span>
          </a>
        </div>
        {/* Areas We Serve Across South & Southeast Bengaluru */}
        <div className="pt-8 pb-6 border-t border-slate-900 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-white font-bold text-xs tracking-wider uppercase font-mono">
                Service Areas &bull; South &amp; Southeast Bengaluru Construction Corridor
              </h3>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Turnkey residential construction, commercial civil contracting, JCB fleet rental &amp; wholesale materials stockyard
              </p>
            </div>
            <Link to="/areas" className="text-xs text-amber-400 hover:text-amber-300 font-bold mt-2 md:mt-0 inline-flex items-center">
              All 17 Areas Directory &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs">
            <Link to="/areas/arekere" className="text-amber-400 hover:text-white transition-colors font-medium">📍 Arekere (Main Depot)</Link>
            <Link to="/areas/jp-nagar" className="text-slate-400 hover:text-amber-400 transition-colors">JP Nagar</Link>
            <Link to="/areas/btm-layout" className="text-slate-400 hover:text-amber-400 transition-colors">BTM Layout</Link>
            <Link to="/areas/hsr-layout" className="text-slate-400 hover:text-amber-400 transition-colors">HSR Layout</Link>
            <Link to="/areas/bommanahalli" className="text-slate-400 hover:text-amber-400 transition-colors">Bommanahalli</Link>
            <Link to="/areas/electronic-city" className="text-slate-400 hover:text-amber-400 transition-colors">Electronic City</Link>
            <Link to="/areas/attibele" className="text-slate-400 hover:text-amber-400 transition-colors">Attibele</Link>
            <Link to="/areas/begur" className="text-slate-400 hover:text-amber-400 transition-colors">Begur</Link>
            <Link to="/areas/bommasandra" className="text-slate-400 hover:text-amber-400 transition-colors">Bommasandra</Link>
            <Link to="/areas/chandapura" className="text-slate-400 hover:text-amber-400 transition-colors">Chandapura</Link>
            <Link to="/areas/hebbagodi" className="text-slate-400 hover:text-amber-400 transition-colors">Hebbagodi</Link>
            <Link to="/areas/hulimavu" className="text-slate-400 hover:text-amber-400 transition-colors">Hulimavu</Link>
            <Link to="/areas/bilekahalli" className="text-slate-400 hover:text-amber-400 transition-colors">Bilekahalli</Link>
            <Link to="/areas/harlur" className="text-slate-400 hover:text-amber-400 transition-colors">Harlur &amp; Haralur Rd</Link>
            <Link to="/areas/kudlu" className="text-slate-400 hover:text-amber-400 transition-colors">Kudlu</Link>
            <Link to="/areas/singasandra" className="text-slate-400 hover:text-amber-400 transition-colors">Singasandra</Link>
            <Link to="/areas/sarjapur-road" className="text-slate-400 hover:text-amber-400 transition-colors">Sarjapur Road</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
