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
            Direct Material Stockyard &amp; Construction Engineering Hub
          </span>
          <span className="text-slate-400 flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
            <span>{company.workingHours}</span>
          </span>
        </div>
        <div className="flex items-center space-x-5">
          <a
            href={`tel:${company.phone.replace(/\s+/g, '')}`}
            className="flex items-center hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
            <span className="font-mono">{company.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
