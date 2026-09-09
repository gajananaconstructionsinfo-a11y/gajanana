import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bawfqbdwtnhtajdagyij.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseAnonKey.trim() !== '' &&
    supabaseAnonKey !== 'your_supabase_anon_key_here'
  );
};

// Initialize Supabase Client if credentials are present
export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

/**
 * Persist an inquiry to Supabase 'inquiries' table
 */
export async function insertInquiry(inquiryData) {
  if (!isSupabaseConfigured() || !supabase) {
    console.info('[Supabase] Client not fully configured with anon key. Saved locally.');
    return { success: true, source: 'local', data: inquiryData };
  }

  try {
    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        {
          ticket_id: inquiryData.id || inquiryData.ticketId,
          type: inquiryData.type || 'General Inquiry',
          name: inquiryData.name || '',
          phone: inquiryData.phone || '',
          email: inquiryData.email || '',
          location: inquiryData.location || '',
          requirement: inquiryData.requirement || inquiryData.interest || '',
          quantity: inquiryData.quantity || '',
          message: inquiryData.message || inquiryData.notes || '',
          status: 'New',
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.warn('[Supabase] Insert error:', error.message);
      return { success: false, error: error.message, source: 'supabase-fallback' };
    }

    console.log('[Supabase] Inquiry recorded successfully to database.');
    return { success: true, source: 'supabase' };
  } catch (err) {
    console.error('[Supabase] Unexpected error:', err);
    return { success: false, error: err.message, source: 'local' };
  }
}

/**
 * Persist an interactive quote estimate to Supabase 'quote_estimates' table
 */
export async function insertQuoteEstimate(quoteData) {
  if (!isSupabaseConfigured() || !supabase) {
    console.info('[Supabase] Saved locally. Add VITE_SUPABASE_ANON_KEY to .env to push to Supabase.');
    return { success: true, source: 'local', data: quoteData };
  }

  try {
    const { data, error } = await supabase
      .from('quote_estimates')
      .insert([
        {
          ticket_id: quoteData.ticketId,
          customer_name: quoteData.customer?.name,
          customer_phone: quoteData.customer?.phone,
          customer_email: quoteData.customer?.email,
          project_location: quoteData.customer?.location,
          project_type: quoteData.projectType,
          built_up_area_sqft: quoteData.builtUpArea,
          quality_grade: quoteData.qualityGrade,
          estimated_total_inr: quoteData.estimatedTotal,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.warn('[Supabase] Quote insert error:', error.message);
      return { success: false, error: error.message };
    }

    console.log('[Supabase] Quote estimate recorded successfully to database.');
    return { success: true, source: 'supabase' };
  } catch (err) {
    console.error('[Supabase] Quote unexpected error:', err);
    return { success: false, error: err.message };
  }
}
