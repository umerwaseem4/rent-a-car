"use client";
import { createClient } from "@supabase/supabase-js";

// Types for our database
export type Application = {
  id: string;
  created_at: string;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  employment_status: string;
  monthly_income: string;
  car_make?: string;
  car_model?: string;
  car_year?: string;
  car_price?: string;
  down_payment?: string;
  status: "pending" | "reviewing" | "approved" | "rejected";
  admin_notes?: string;
};

export type Profile = {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  role: "customer" | "admin";
};

// Create a Supabase client for use in the browser
export const createBrowserClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
