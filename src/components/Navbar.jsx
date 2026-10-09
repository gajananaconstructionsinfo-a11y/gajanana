import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ChevronDown, Menu, X, Building2, Phone } from 'lucide-react';

export default function Navbar() {
  const { data } = useApp();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);

  // Auto-close mobile drawer upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith('/services');
  const isMaterialsActive = location.pathname.startsWith('/materials');
  const isAreasActive = location.pathname.startsWith('/areas');
  const isGuidesActive = location.pathname.startsWith('/guides');
  const isProjectsActive = location.pathname.startsWith('/projects');

  const getLinkClasses = (isActive) =>
    `inline-flex items-center justify-center h-8 xl:h-9 px-2 xl:px-2.5 text-[11px] xl:text-[12px] 2xl:text-[12.5px] font-bold tracking-wider uppercase transition-colors rounded-lg whitespace-nowrap ${
      isActive
        ? 'text-amber-600 font-black bg-amber-50/70'
        : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
    }`;

  return (
    <div className="relative w-full">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20 gap-2">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0" title="Gajanana Constructions Home">
            <img
              src="/logo.svg"
              alt="Gajanana Constructions Logo"
              width="44"
              height="44"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-slate-900 font-extrabold text-base sm:text-lg lg:text-xl tracking-wider font-heading leading-tight group-hover:text-amber-600 transition-colors">
                GAJANANA
              </div>
              <div className="text-amber-700 text-[8.5px] sm:text-[9.5px] font-extrabold tracking-wider uppercase leading-tight">
                TRADERS &amp; CONSTRUCTIONS &amp; MATERIALS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered, Compact, Pixel-Perfect Alignment */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 2xl:gap-2 flex-1 max-w-fit mx-auto">
            {/* 1. HOME */}
            <NavLink to="/" className={({ isActive }) => getLinkClasses(isActive)} end>
              HOME
            </NavLink>

            {/* 2. ABOUT */}
            <NavLink to="/about" className={({ isActive }) => getLinkClasses(isActive)}>
              ABOUT
            </NavLink>

            {/* 3. SERVICES Dropdown */}
            <div className="relative group">
              <NavLink to="/services" className={getLinkClasses(isServicesActive)}>
                <span>SERVICES</span>
                <ChevronDown className="w-3 h-3 ml-1 text-slate-400 group-hover:text-amber-600 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block z-50">
                <div className="w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 animate-fade-in">
                  {data.services.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 rounded-xl transition-colors border-t border-slate-100 mt-1"
                  >
                    View All 12 Services →
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. MATERIALS Dropdown */}
            <div className="relative group">
              <NavLink to="/materials" className={getLinkClasses(isMaterialsActive)}>
                <span>MATERIALS</span>
                <ChevronDown className="w-3 h-3 ml-1 text-slate-400 group-hover:text-amber-600 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 hidden group-hover:block z-50">
                <div className="w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 animate-fade-in">
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
            </div>

            {/* 5. AREAS Dropdown */}
            <div className="relative group">
              <NavLink to="/areas" className={getLinkClasses(isAreasActive)}>
                <span>AREAS</span>
                <ChevronDown className="w-3 h-3 ml-1 text-slate-400 group-hover:text-amber-600 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 hidden group-hover:block z-50">
                <div className="w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 animate-fade-in">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 px-1">
                    19 Localities in South &amp; Southeast Bengaluru
                  </div>
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    <div>
                      <div className="text-[10px] font-bold text-amber-700 uppercase px-1 mb-1">South</div>
                      <Link to="/areas/arekere" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Arekere (HQ)</Link>
                      <Link to="/areas/jp-nagar" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">JP Nagar</Link>
                      <Link to="/areas/btm-layout" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">BTM Layout</Link>
                      <Link to="/areas/anekal" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Anekal</Link>
                      <Link to="/areas/hulimavu" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Hulimavu</Link>
                      <Link to="/areas/begur" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Begur</Link>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-amber-700 uppercase px-1 mb-1">Southeast</div>
                      <Link to="/areas/hsr-layout" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">HSR Layout</Link>
                      <Link to="/areas/electronic-city" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Electronic City</Link>
                      <Link to="/areas/marsur" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Marsur Gate</Link>
                      <Link to="/areas/bommanahalli" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Bommanahalli</Link>
                      <Link to="/areas/sarjapur-road" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Sarjapur Rd</Link>
                      <Link to="/areas/attibele" className="block px-2 py-1 text-xs text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-lg">Attibele</Link>
                    </div>
                  </div>
                  <Link
                    to="/areas"
                    className="block px-3 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 rounded-xl transition-colors border-t border-slate-100 text-center"
                  >
                    All 19 Areas Directory →
                  </Link>
                </div>
              </div>
            </div>

            {/* 6. PROJECTS */}
            <NavLink to="/projects" className={({ isActive }) => getLinkClasses(isActive || isProjectsActive)}>
              PROJECTS
            </NavLink>

            {/* 7. GUIDES Dropdown & Direct Link */}
            <div className="relative group">
              <NavLink to="/guides" className={getLinkClasses(isGuidesActive)}>
                <span>GUIDES</span>
                <ChevronDown className="w-3 h-3 ml-1 text-slate-400 group-hover:text-amber-600 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 hidden group-hover:block z-50">
                <div className="w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 animate-fade-in">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 px-2">
                    Construction Guides &amp; Insights
                  </div>
                  <Link
                    to="/guides/how-much-does-it-cost-to-build-a-house-in-bangalore"
                    className="block px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    How Much Does It Cost to Build?
                  </Link>
                  <Link
                    to="/guides/house-construction-cost-per-sq-ft-bangalore"
                    className="block px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    Cost Per Sq Ft in Bangalore
                  </Link>
                  <Link
                    to="/guides/what-is-included-turnkey-house-construction-package"
                    className="block px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    Turnkey Package Scope
                  </Link>
                  <Link
                    to="/guides/checklist-before-starting-house-construction-bangalore"
                    className="block px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    Pre-Construction Checklist
                  </Link>
                  <Link
                    to="/guides"
                    className="block px-2.5 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 rounded-xl transition-colors border-t border-slate-100 mt-1 text-center"
                  >
                    All 11 Construction Guides →
                  </Link>
                </div>
              </div>
            </div>

            {/* 8. WHY US */}
            <NavLink to="/why-us" className={({ isActive }) => getLinkClasses(isActive)}>
              WHY US
            </NavLink>

            {/* 9. CONTACT */}
            <NavLink to="/contact" className={({ isActive }) => getLinkClasses(isActive)}>
              CONTACT
            </NavLink>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 shrink-0">
            <div
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50/80 hover:bg-amber-100 text-slate-900 rounded-xl text-xs font-bold border border-amber-200/80 transition font-mono"
              title="Call for Price Enquiry"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <a href="tel:8884238688" className="hover:text-amber-700">8884238688</a>
              <span className="text-slate-400 font-normal">/</span>
              <a href="tel:9535828286" className="hover:text-amber-700">9535828286</a>
            </div>
            <Link
              to="/get-a-quote"
              className="px-3.5 py-2 xl:px-4.5 xl:py-2.5 bg-slate-950 hover:bg-amber-600 text-white font-extrabold text-[11px] xl:text-xs tracking-wider uppercase rounded-xl transition-all shadow hover:shadow-md shrink-0"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Right Controls: Quote Button + Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/get-a-quote"
              className="px-3 py-1.5 bg-slate-950 hover:bg-amber-600 text-white font-bold text-[10px] tracking-wider uppercase rounded-lg shadow"
            >
              QUOTE
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu - Displays ALL Options Including Guides */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-8 space-y-1.5 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* 1. HOME */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
              location.pathname === '/' ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50'
            }`}
          >
            HOME
          </Link>

          {/* 2. ABOUT */}
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
              location.pathname === '/about' ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50'
            }`}
          >
            ABOUT
          </Link>

          {/* 3. SERVICES Accordion */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
                  isServicesActive ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600'
                }`}
              >
                SERVICES
              </Link>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-2 text-slate-500 hover:text-amber-600 rounded-lg hover:bg-slate-100"
                aria-label="Toggle services list"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="ml-3 pl-3 space-y-1 py-1.5 border-l-2 border-amber-500 my-1 bg-slate-50/50 rounded-r-xl">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-bold text-amber-600 hover:underline"
                >
                  All 12 Services Directory →
                </Link>
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
              </div>
            )}
          </div>

          {/* 4. MATERIALS Accordion */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                to="/materials"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
                  isMaterialsActive ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600'
                }`}
              >
                MATERIALS
              </Link>
              <button
                type="button"
                onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
                className="p-2 text-slate-500 hover:text-amber-600 rounded-lg hover:bg-slate-100"
                aria-label="Toggle materials list"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileMaterialsOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {mobileMaterialsOpen && (
              <div className="ml-3 pl-3 space-y-1 py-1.5 border-l-2 border-amber-500 my-1 bg-slate-50/50 rounded-r-xl">
                <Link to="/materials" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-bold text-amber-600 hover:underline">
                  All Building Materials Depot →
                </Link>
                <Link to="/materials/earthmoving-machinery" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-amber-700 font-bold">🚜 JCB &amp; Machinery Fleet</Link>
                <Link to="/materials/steel" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Steel &amp; TMT Rebar</Link>
                <Link to="/materials/cement" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Cement &amp; Binders</Link>
                <Link to="/materials/rmc" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Ready-Mix Concrete (RMC)</Link>
                <Link to="/materials/sand-aggregates" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Sand &amp; Aggregates</Link>
                <Link to="/materials/bricks-blocks" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Bricks &amp; Blocks</Link>
                <Link to="/materials/sub-base-filling" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Earthfilling &amp; Murrum</Link>
                <Link to="/materials/tiles" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Tiles &amp; Granite</Link>
                <Link to="/materials/plumbing" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Plumbing &amp; Tanks</Link>
                <Link to="/materials/electrical" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Electrical &amp; Wires</Link>
              </div>
            )}
          </div>

          {/* 5. AREAS WE SERVE Accordion */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                to="/areas"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
                  isAreasActive ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600'
                }`}
              >
                AREAS WE SERVE
              </Link>
              <button
                type="button"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="p-2 text-slate-500 hover:text-amber-600 rounded-lg hover:bg-slate-100"
                aria-label="Toggle areas list"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {mobileAreasOpen && (
              <div className="ml-3 pl-3 space-y-1 py-1.5 border-l-2 border-amber-500 my-1 bg-slate-50/50 rounded-r-xl">
                <Link to="/areas" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs font-bold text-amber-600 hover:underline">
                  All 19 Areas Directory →
                </Link>
                <Link to="/areas/arekere" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-amber-700 font-bold">📍 Arekere (Main Depot &amp; HQ)</Link>
                <Link to="/areas/jp-nagar" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">JP Nagar</Link>
                <Link to="/areas/btm-layout" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">BTM Layout</Link>
                <Link to="/areas/anekal" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Anekal</Link>
                <Link to="/areas/marsur" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Marsur Gate</Link>
                <Link to="/areas/hsr-layout" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">HSR Layout</Link>
                <Link to="/areas/electronic-city" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Electronic City</Link>
                <Link to="/areas/bommanahalli" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Bommanahalli</Link>
                <Link to="/areas/sarjapur-road" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Sarjapur Road</Link>
                <Link to="/areas/attibele" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Attibele</Link>
                <Link to="/areas/begur" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Begur</Link>
                <Link to="/areas/hulimavu" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">Hulimavu</Link>
              </div>
            )}
          </div>

          {/* 6. PROJECTS */}
          <Link
            to="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
              isProjectsActive ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50'
            }`}
          >
            PROJECTS
          </Link>

          {/* 7. GUIDES (Knowledge Hub) - Explicit Mobile Access */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                to="/guides"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex-1 py-2 px-3 text-sm font-semibold rounded-xl transition-colors flex items-center space-x-2 ${
                  isGuidesActive ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600'
                }`}
              >
                <span>GUIDES</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  Knowledge Hub
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileGuidesOpen(!mobileGuidesOpen)}
                className="p-2 text-slate-500 hover:text-amber-600 rounded-lg hover:bg-slate-100"
                aria-label="Toggle construction guides list"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileGuidesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {mobileGuidesOpen && (
              <div className="ml-3 pl-3 space-y-1 py-1.5 border-l-2 border-amber-500 my-1 bg-slate-50/50 rounded-r-xl">
                <Link
                  to="/guides"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-bold text-amber-600 hover:underline"
                >
                  All 11 Construction Guides Directory →
                </Link>
                <Link to="/guides/how-much-does-it-cost-to-build-a-house-in-bangalore" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">
                  How Much Does It Cost to Build in Bangalore?
                </Link>
                <Link to="/guides/house-construction-cost-per-sq-ft-bangalore" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">
                  House Construction Cost Per Sq Ft Guide
                </Link>
                <Link to="/guides/what-is-included-turnkey-house-construction-package" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">
                  Turnkey House Construction Package Scope
                </Link>
                <Link to="/guides/checklist-before-starting-house-construction-bangalore" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">
                  Homeowner Pre-Construction Checklist
                </Link>
                <Link to="/guides/rcc-frame-vs-load-bearing-structures" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-slate-600 hover:text-amber-600">
                  RCC Frame vs Load-Bearing Structures
                </Link>
              </div>
            )}
          </div>

          {/* 8. WHY US */}
          <Link
            to="/why-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
              location.pathname === '/why-us' ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50'
            }`}
          >
            WHY US
          </Link>

          {/* 9. CONTACT */}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 px-3 text-sm font-semibold rounded-xl transition-colors ${
              location.pathname === '/contact' ? 'text-amber-600 font-bold bg-amber-50/70' : 'text-slate-800 hover:text-amber-600 hover:bg-slate-50'
            }`}
          >
            CONTACT
          </Link>

          {/* Direct Phone & Quote Action Buttons */}
          <div className="pt-3 space-y-2 border-t border-slate-100">
            <div className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow font-mono">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: </span>
              <a href="tel:8884238688" className="underline hover:text-amber-400">8884238688</a>
              <span>/</span>
              <a href="tel:9535828286" className="underline hover:text-amber-400">9535828286</a>
            </div>
            <Link
              to="/get-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 text-center font-extrabold text-xs uppercase tracking-wider rounded-xl shadow transition-all"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
