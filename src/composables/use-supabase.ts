import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl as string, supabaseAnonKey as string);

export const useSupabase = () => {
  return {
    supabase,
  };
};
