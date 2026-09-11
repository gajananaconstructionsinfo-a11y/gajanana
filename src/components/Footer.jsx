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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 font-extrabold text-xl shadow-md font-heading">
                GC
              </div>
              <div>
                <div className="text-white font-heading font-extrabold text-lg tracking-wider">
                  GAJANANA
                </div>
                <div className="text-amber-400 text-[10px] font-bold tracking-widest uppercase">
                  CONSTRUCTIONS &amp; MATERIALS
                </div>
              </div>
            </div>
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
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Services Directory</Link></li>
              <li><Link to="/materials" className="hover:text-amber-400 transition-colors">Materials Depot</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition-colors">Projects Portfolio</Link></li>
              <li><Link to="/why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/get-a-quote" className="hover:text-amber-400 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Construction Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Key Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {data.services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="hover:text-amber-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Machinery & Materials */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Fleet & Materials</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link to="/services/earthmoving-machinery-jcb" className="hover:text-amber-400 transition-colors">JCB 3DX & Excavators</Link></li>
              <li><Link to="/materials/earthmoving-machinery" className="hover:text-amber-400 transition-colors">Earthmoving Machinery</Link></li>
              <li><Link to="/materials/steel" className="hover:text-amber-400 transition-colors">Fe 550D TMT Steel</Link></li>
              <li><Link to="/materials/cement" className="hover:text-amber-400 transition-colors">Grade 53 OPC Cement</Link></li>
              <li><Link to="/materials/aggregates" className="hover:text-amber-400 transition-colors">Washed M-Sand & Metal</Link></li>
              <li><Link to="/materials/concrete" className="hover:text-amber-400 transition-colors">Ready Mix Concrete (RMC)</Link></li>
            </ul>
          </div>

          {/* Contact Yard & Price Queries */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-mono">Contact & Quotes</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-[11px] leading-relaxed">
                <span className="font-bold block text-amber-400 uppercase font-mono">Pricing Queries:</span>
                Call <a href="tel:8884238688" className="font-bold underline text-white">8884238688</a> or email <a href="mailto:gajananaconstructionsinfo@gmail.com" className="underline text-white">gajananaconstructionsinfo@gmail.com</a>
              </div>
              <p className="leading-relaxed flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 font-mono font-bold">
                  {company.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-amber-400 font-mono text-[11px]">
                  {company.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
