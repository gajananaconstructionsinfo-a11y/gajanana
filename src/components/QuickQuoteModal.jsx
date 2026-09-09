import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle, Send } from 'lucide-react';

export default function QuickQuoteModal() {
  const { quickQuoteModal, closeQuickQuote, addEnquiry } = useApp();
  const [submittedId, setSubmittedId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '',
    location: '',
    notes: ''
  });

  if (!quickQuoteModal.isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqId = 'GCM-REQ-' + Math.floor(100000 + Math.random() * 900000);
    
    addEnquiry({
      id: reqId,
      type: 'Quick Material Quotation',
      name: formData.name,
      phone: formData.phone,
      email: 'Not provided',
      location: formData.location || 'Local Area',
      projectType: 'Material Sourcing',
      requirement: quickQuoteModal.initialTitle || 'General Material Inquiry',
      materials: quickQuoteModal.initialTitle,
      quantity: formData.quantity || 'Standard',
      message: formData.notes || 'Instant price check requested.',
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    });

    setSubmittedId(reqId);
  };

  const handleClose = () => {
    setSubmittedId(null);
    setFormData({ name: '', phone: '', quantity: '', location: '', notes: '' });
    closeQuickQuote();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-7 sm:p-8 shadow-2xl border border-slate-100 relative">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedId ? (
          <div>
            <span className="text-amber-600 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
              DIRECT WHOLESALE QUOTE
            </span>
            <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-1">
              Request Rate Schedule
            </h3>
            <p className="text-xs text-slate-500 mb-5 font-mono">
              Item: <strong className="text-slate-800">{quickQuoteModal.initialTitle || 'General Sourcing'}</strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                    Est. Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 25 MT / 500 Bags"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Site / Delivery Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Whitefield, Bengaluru"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-slate-700 mb-1">
                  Special Instructions
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Need primary mill test sheet with delivery."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm bg-slate-50/50 focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-slate-950 hover:bg-amber-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center space-x-2"
              >
                <span>REQUEST IMMEDIATE DISPATCH QUOTE</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest mb-1">
              REQUEST RECORDED
            </div>
            <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-2">
              Reference: {submittedId}
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our logistics manager has received your inquiry for{' '}
              <strong className="text-slate-900">{quickQuoteModal.initialTitle}</strong>.
            </p>
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/919845012345?text=Hello%20GCM,%20I%20just%20submitted%20Quote%20Request%20${submittedId}%20for%20${encodeURIComponent(
                  quickQuoteModal.initialTitle
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow"
              >
                <span>Chat Immediately on WhatsApp</span>
              </a>
              <button
                onClick={handleClose}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
