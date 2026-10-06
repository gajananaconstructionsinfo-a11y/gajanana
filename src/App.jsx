import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuickQuoteModal from './components/QuickQuoteModal';
import MillReportModal from './components/MillReportModal';

// Home is eagerly loaded for instant initial render and optimal LCP
import Home from './pages/Home';

// Route-level code-splitting: Other pages are loaded on demand
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Materials = lazy(() => import('./pages/Materials'));
const MaterialCategory = lazy(() => import('./pages/MaterialCategory'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Contact = lazy(() => import('./pages/Contact'));
const GetAQuote = lazy(() => import('./pages/GetAQuote'));
const AreasDirectory = lazy(() => import('./pages/AreasDirectory'));
const AreaDetail = lazy(() => import('./pages/AreaDetail'));
const GuidesDirectory = lazy(() => import('./pages/GuidesDirectory'));
const GuideDetail = lazy(() => import('./pages/GuideDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

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

      {/* Main Page Routing with Suspense Boundary */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div></div>}>
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
        </Suspense>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
