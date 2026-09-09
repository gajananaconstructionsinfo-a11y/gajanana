import React, { createContext, useContext, useState, useEffect } from 'react';
import { getPlatformData, savePlatformData, resetPlatformData } from '../data/data';
import { insertInquiry, insertQuoteEstimate } from '../lib/supabase';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [data, setData] = useState(() => getPlatformData());
  
  const [quickQuoteModal, setQuickQuoteModal] = useState({
    isOpen: false,
    initialTitle: ''
  });

  const [millReportModal, setMillReportModal] = useState({
    isOpen: false,
    report: null
  });

  useEffect(() => {
    savePlatformData(data);
  }, [data]);

  const openQuickQuote = (title = '') => {
    setQuickQuoteModal({ isOpen: true, initialTitle: title });
  };

  const closeQuickQuote = () => {
    setQuickQuoteModal({ isOpen: false, initialTitle: '' });
  };

  const openMillReport = (report) => {
    setMillReportModal({ isOpen: true, report });
  };

  const closeMillReport = () => {
    setMillReportModal({ isOpen: false, report: null });
  };

  const addEnquiry = async (enquiry) => {
    setData((prev) => ({
      ...prev,
      enquiries: [enquiry, ...(prev.enquiries || [])]
    }));
    try {
      await insertInquiry(enquiry);
    } catch (err) {
      console.warn('Supabase sync background note:', err);
    }
  };

  const submitInquiry = async (payload) => {
    setData((prev) => ({
      ...prev,
      enquiries: [payload, ...(prev.enquiries || [])]
    }));
    try {
      if (payload.type === 'Comprehensive Rate Estimation' || payload.builtUpArea) {
        await insertQuoteEstimate(payload);
      } else {
        await insertInquiry(payload);
      }
    } catch (err) {
      console.warn('Supabase sync background note:', err);
    }
  };

  const updateSKU = (skuId, updatedFields) => {
    setData((prev) => ({
      ...prev,
      heavySKUs: prev.heavySKUs.map((item) =>
        item.id === skuId ? { ...item, ...updatedFields } : item
      )
    }));
  };

  const resetData = () => {
    const fresh = resetPlatformData();
    setData(fresh);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        openQuickQuote,
        closeQuickQuote,
        quickQuoteModal,
        openMillReport,
        closeMillReport,
        millReportModal,
        addEnquiry,
        submitInquiry,
        updateSKU,
        resetData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
