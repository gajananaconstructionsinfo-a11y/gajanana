import React from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle, Download, FileText } from 'lucide-react';

export default function MillReportModal() {
  const { millReportModal, closeMillReport } = useApp();

  if (!millReportModal.isOpen || !millReportModal.report) return null;

  const { report } = millReportModal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-100 relative font-sans">
        <button
          onClick={closeMillReport}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono font-bold uppercase text-amber-600 tracking-wider">
              NABL CERTIFIED MILL TEST SHEET
            </span>
            <h3 className="text-lg font-extrabold text-slate-950 font-heading">
              {report.heatNo || 'TR-MILL-REPORT'}
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Certified primary mill heat report confirming chemical carbon balance and mechanical tensile compliance before site dispatch.
        </p>

        <div className="space-y-3 font-mono text-xs mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Material Grade:</span>
            <span className="font-bold text-slate-900">{report.material}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Manufacturing Unit:</span>
            <span className="font-bold text-slate-900">{report.mill}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Yield Strength (Tested):</span>
            <span className="font-bold text-emerald-700">{report.yieldStrength}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-200">
            <span className="text-slate-500">Chemical Check:</span>
            <span className="font-bold text-slate-900">{report.chemicalCheck}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-slate-500">Certification Status:</span>
            <span className="inline-flex items-center font-bold text-emerald-600">
              <CheckCircle className="w-3.5 h-3.5 mr-1" />
              {report.status || 'NABL Passed'}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => alert(`Downloading verified mill heat test certificate for ${report.heatNo}...`)}
            className="flex-1 py-3 bg-slate-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Certified PDF</span>
          </button>
          <button
            onClick={closeMillReport}
            className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
