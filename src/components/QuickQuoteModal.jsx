import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle, Send, Loader2, Mail } from 'lucide-react';
import { buildMailtoUrl, buildWhatsAppUrl } from '../lib/email';

export default function QuickQuoteModal() {
  const { quickQuoteModal, closeQuickQuote, addEnquiry } = useApp();
  const [submittedId, setSubmittedId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailDispatchResult, setEmailDispatchResult] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '',
    location: '',
    notes: ''
  });

  if (!quickQuoteModal.isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    const reqId = 'GCM-REQ-' + Math.floor(100000 + Math.random() * 900000);
    
    const payload = {
      id: reqId,
      ticketId: reqId,
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
    };

    try {
      const res = await addEnquiry(payload);
      setSubmittedId(reqId);
      setEmailDispatchResult(res?.emailResult || null);
    } catch (err) {
      console.error('Error submitting quick quote:', err);
    } finally {
      setIsSubmitting(false);
    }
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
            <span className="text-amber-700 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
              DIRECT WHOLESALE QUOTE
            </span>
            <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-1">
              Request Rate Schedule
            </h3>
            <p className="text-xs text-slate-500 mb-5 font-mono">
              Item: <strong className="text-slate-800">{quickQuoteModal.initialTitle || 'General Sourcing'}</strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-900">
                <span>For immediate wholesale pricing: </span>
                <a href="tel:8884238688" className="font-bold underline text-slate-900">8884238688</a>
                <span className="mx-1">/</span>
                <a href="tel:9535828286" className="font-bold underline text-slate-900">9535828286</a>
                <span className="mx-1">•</span>
                <a href="mailto:gajananaconstructionsinfo@gmail.com" className="font-bold underline text-slate-900">Email us</a>
              </div>

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
                disabled={isSubmitting}
                className="w-full py-3.5 bg-slate-950 hover:bg-amber-700 disabled:bg-slate-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4 text-amber-400" />
                    <span>DISPATCHING TO GAJANANACONSTRUCTIONSINFO@GMAIL.COM...</span>
                  </>
                ) : (
                  <>
                    <span>REQUEST IMMEDIATE DISPATCH QUOTE</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-1">
              REQUEST RECORDED
            </div>
            <h3 className="text-xl font-extrabold text-slate-950 font-heading mb-2">
              Reference: {submittedId}
            </h3>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono mb-2">
              <Mail className="w-3.5 h-3.5 text-emerald-600" />
              <span>Delivered to gajananaconstructionsinfo@gmail.com</span>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry for{' '}
              <strong className="text-slate-900">{quickQuoteModal.initialTitle}</strong> is logged. Send directly or connect with dispatch:
            </p>

            <div className="space-y-2">
              <a
                href={buildMailtoUrl({
                  ...formData,
                  ticketId: submittedId,
                  type: 'Quick Material Quotation',
                  requirement: quickQuoteModal.initialTitle,
                  materials: quickQuoteModal.initialTitle
                })}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Gmail / Mail App</span>
              </a>

              <a
                href={buildWhatsAppUrl({
                  ...formData,
                  ticketId: submittedId,
                  requirement: quickQuoteModal.initialTitle,
                  materials: quickQuoteModal.initialTitle
                })}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 shadow"
              >
                <span>Send on WhatsApp (8884238688)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:8884238688"
                  className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1 font-mono"
                >
                  <span>Call 8884238688</span>
                </a>
                <a
                  href="tel:9535828286"
                  className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-1 font-mono"
                >
                  <span>Call 9535828286</span>
                </a>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
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
