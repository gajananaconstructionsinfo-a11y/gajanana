import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuickQuoteModal from './components/QuickQuoteModal';
import MillReportModal from './components/MillReportModal';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Materials from './pages/Materials';
import MaterialCategory from './pages/MaterialCategory';
import ProductDetail from './pages/ProductDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import GetAQuote from './pages/GetAQuote';
import AreasDirectory from './pages/AreasDirectory';
import AreaDetail from './pages/AreaDetail';
import GuidesDirectory from './pages/GuidesDirectory';
import GuideDetail from './pages/GuideDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-amber-500 selection:text-white overflow-x-hidden w-full max-w-full">
      <ScrollToTop />
      
      {/* Modals */}
      <QuickQuoteModal />
      <MillReportModal />

      {/* Persistent Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <TopUtilityBar />
        <Navbar />
      </header>

      {/* Main Page Routing */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/materials/:category" element={<MaterialCategory />} />
          <Route path="/materials/product/:skuId" element={<ProductDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
          <Route path="/areas" element={<AreasDirectory />} />
          <Route path="/areas/:slug" element={<AreaDetail />} />
          <Route path="/guides" element={<GuidesDirectory />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
