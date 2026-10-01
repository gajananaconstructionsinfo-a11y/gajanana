import React from 'react';
import { useApp } from '../context/AppContext';
import { Clock, Phone } from 'lucide-react';

export default function TopUtilityBar() {
  const { data } = useApp();
  const { company } = data;

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center text-amber-400 font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            Trading, Building Materials, JCB Earthmoving &amp; Turnkey Construction
          </span>
          <span className="text-slate-400 flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
            <span>Mon - Sat: 8:00 AM – 7:30 PM (Yard &amp; Fleet Open)</span>
          </span>
        </div>
        <div className="flex items-center space-x-5">
          <a
            href="mailto:gajananaconstructionsinfo@gmail.com"
            className="flex items-center hover:text-amber-400 transition-colors text-slate-300"
          >
            <i className="fa-solid fa-envelope mr-1.5 text-amber-500"></i>
            <span>gajananaconstructionsinfo@gmail.com</span>
          </a>
          <span className="text-slate-700">|</span>
          <a
            href="tel:8884238688"
            className="flex items-center hover:text-amber-400 transition-colors font-bold text-amber-400"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
            <span className="font-mono">8884238688</span>
          </a>
        </div>
      </div>
    </div>
  );
}
