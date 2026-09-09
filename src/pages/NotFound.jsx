import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-200">
          <i className="fa-solid fa-compass-drafting text-3xl text-amber-600"></i>
        </div>
        <div className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-2">404 Error</div>
        <h1 className="text-3xl font-extrabold font-heading text-slate-900 mb-3">
          Blueprint Not Found
        </h1>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          The project blueprint or material page you are trying to inspect does not exist or has been relocated within our central catalog.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition"
          >
            Return to Homepage
          </Link>
          <Link
            to="/materials"
            className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold uppercase tracking-wider transition border border-slate-200"
          >
            Explore Materials
          </Link>
        </div>
      </div>
    </div>
  );
}
