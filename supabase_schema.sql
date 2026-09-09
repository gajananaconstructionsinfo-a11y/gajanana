-- ==============================================================================
-- GAJANANA CONSTRUCTIONS & MATERIALS - Supabase Database Schema
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/bawfqbdwtnhtajdagyij/sql
-- ==============================================================================

-- 1. Inquiries Table (Quick quotes, Contact page submissions, Material inquiries)
CREATE TABLE IF NOT EXISTS public.inquiries (
  id BIGSERIAL PRIMARY KEY,
  ticket_id TEXT NOT NULL UNIQUE,
  type TEXT DEFAULT 'General Inquiry',
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  location TEXT,
  requirement TEXT,
  quantity TEXT,
  message TEXT,
  status TEXT DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Interactive BOQ Quote Estimates Table
CREATE TABLE IF NOT EXISTS public.quote_estimates (
  id BIGSERIAL PRIMARY KEY,
  ticket_id TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  project_location TEXT,
  project_type TEXT,
  built_up_area_sqft NUMERIC,
  quality_grade TEXT,
  estimated_total_inr NUMERIC,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Row Level Security (RLS) Setup
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_estimates ENABLE ROW LEVEL SECURITY;

-- Allow public website visitors to submit inquiries & quote requests (applies to all roles)
DROP POLICY IF EXISTS "Allow anonymous inquiries insert" ON public.inquiries;
CREATE POLICY "Allow anonymous inquiries insert" ON public.inquiries
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anonymous quotes insert" ON public.quote_estimates;
CREATE POLICY "Allow anonymous quotes insert" ON public.quote_estimates
  FOR INSERT WITH CHECK (true);

-- Allow reading inquiries & quotes
DROP POLICY IF EXISTS "Allow authenticated read inquiries" ON public.inquiries;
CREATE POLICY "Allow authenticated read inquiries" ON public.inquiries
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow authenticated read quotes" ON public.quote_estimates;
CREATE POLICY "Allow authenticated read quotes" ON public.quote_estimates
  FOR SELECT USING (true);
