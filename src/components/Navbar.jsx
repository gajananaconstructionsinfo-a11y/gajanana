import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ChevronDown, Menu, X, Building2 } from 'lucide-react';

export default function Navbar() {
  const { data } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `py-2 text-sm font-semibold transition-colors ${
      isActive ? 'text-amber-600 font-bold' : 'text-slate-700 hover:text-amber-600'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-slate-900 font-extrabold text-lg sm:text-xl tracking-wider font-heading leading-tight group-hover:text-amber-600 transition-colors">
                GAJANANA
              </div>
              <div className="text-amber-600 text-[10px] font-extrabold tracking-widest uppercase">
                CONSTRUCTIONS &amp; MATERIALS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold">
            <NavLink to="/" className={navLinkClass} end>
              HOME
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              ABOUT
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <NavLink to="/services" className="flex items-center space-x-1 text-slate-700 hover:text-amber-600">
                <span>SERVICES</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:rotate-180" />
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fade-in">
                {data.services.slice(0, 5).map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="block px-3.5 py-2.5 text-xs font-bold text-amber-600 hover:bg-amber-50 rounded-xl transition-colors border-t border-slate-100 mt-1"
                >
                  View All Services →
                </Link>
              </div>
            </div>

            {/* Materials Dropdown */}
            <div className="relative group py-2">
              <NavLink to="/materials" className="flex items-center space-x-1 text-slate-700 hover:text-amber-600">
                <span>MATERIALS</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:rotate-180" />
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:block w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 z-50 animate-fade-in">
                <div className="grid grid-cols-2 gap-1 mb-2">
                  <div>
                    <Link to="/materials/earthmoving-machinery" className="block px-2.5 py-1.5 text-xs text-amber-700 font-bold hover:bg-amber-50 rounded-lg">🚜 JCB &amp; Machinery</Link>
                    <Link to="/materials/steel" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Steel &amp; TMT Rebar</Link>
                    <Link to="/materials/cement" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Cement &amp; Binders</Link>
                    <Link to="/materials/rmc" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Ready-Mix Concrete</Link>
                    <Link to="/materials/sand-aggregates" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Sand &amp; Aggregates</Link>
                  </div>
                  <div>
                    <Link to="/materials/bricks-blocks" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Bricks &amp; Blocks</Link>
                    <Link to="/materials/sub-base-filling" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Earthfilling &amp; Murrum</Link>
                    <Link to="/materials/tiles" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Tiles &amp; Granite</Link>
                    <Link to="/materials/plumbing" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Plumbing &amp; Tanks</Link>
                    <Link to="/materials/electrical" className="block px-2.5 py-1.5 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Electrical &amp; Wires</Link>
                  </div>
                </div>
                <Link
                  to="/materials"
                  className="block px-3 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 rounded-xl transition-colors border-t border-slate-100 text-center"
                >
                  All Building Materials Depot →
                </Link>
              </div>
            </div>

            <NavLink to="/projects" className={navLinkClass}>
              PROJECTS
            </NavLink>
            <NavLink to="/why-us" className={navLinkClass}>
              WHY US
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              CONTACT
            </NavLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:8884238688"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 bg-amber-50 hover:bg-amber-100 text-slate-900 rounded-xl text-xs font-bold border border-amber-200 transition"
              title="Call for Price Enquiry"
            >
              <i className="fa-solid fa-phone text-amber-600"></i>
              <span>8884238688</span>
            </a>
            <Link
              to="/get-a-quote"
              className="px-5 py-2.5 bg-slate-950 hover:bg-amber-600 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow hover:shadow-md"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-amber-600"
          >
            HOME
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-amber-600"
          >
            ABOUT
          </Link>
          
          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              <span>SERVICES</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-1.5 py-1 border-l-2 border-amber-500 my-1">
                {data.services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-slate-600 hover:text-amber-600"
                  >
                    {s.title}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-bold text-amber-600"
                >
                  All Services Directory →
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Materials Accordion */}
          <div>
            <button
              onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800 hover:text-amber-600"
            >
              <span>MATERIALS</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileMaterialsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileMaterialsOpen && (
              <div className="pl-4 space-y-1.5 py-1 border-l-2 border-amber-500 my-1">
                <Link to="/materials/earthmoving-machinery" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-amber-700 font-bold">🚜 JCB &amp; Earthmoving Fleet</Link>
                <Link to="/materials/steel" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Steel &amp; TMT Rebar</Link>
                <Link to="/materials/cement" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Cement &amp; Binders</Link>
                <Link to="/materials/rmc" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Ready-Mix Concrete (RMC)</Link>
                <Link to="/materials/bricks-blocks" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Bricks &amp; Blocks</Link>
                <Link to="/materials/sand-aggregates" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Sand &amp; Aggregates</Link>
                <Link to="/materials/sub-base-filling" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Earthfilling &amp; Murrum</Link>
                <Link to="/materials/tiles" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Tiles &amp; Granite</Link>
                <Link to="/materials" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-bold text-amber-600">Full Building Materials Depot →</Link>
              </div>
            )}
          </div>

          <Link
            to="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-amber-600"
          >
            PROJECTS
          </Link>
          <Link
            to="/why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-amber-600"
          >
            WHY US
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-amber-600"
          >
            CONTACT
          </Link>

          <div className="pt-2 space-y-2">
            <a
              href="tel:8884238688"
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow"
            >
              <i className="fa-solid fa-phone text-amber-400"></i>
              <span>Price Queries: 8884238688</span>
            </a>
            <Link
              to="/get-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-center font-bold text-xs uppercase tracking-wider rounded-xl shadow"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
