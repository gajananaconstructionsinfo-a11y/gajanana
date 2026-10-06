import { Clock, Phone, Mail } from 'lucide-react';

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
            <Mail className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
            <span>gajananaconstructionsinfo@gmail.com</span>
          </a>
          <span className="text-slate-700">|</span>
          <div className="flex items-center text-amber-400 font-bold space-x-1.5 font-mono">
            <Phone className="w-3.5 h-3.5 mr-1 text-amber-500" />
            <a href="tel:8884238688" className="hover:text-white transition-colors">8884238688</a>
            <span className="text-slate-600 font-normal">/</span>
            <a href="tel:9535828286" className="hover:text-white transition-colors">9535828286</a>
          </div>
        </div>
      </div>
    </div>
  );
}
