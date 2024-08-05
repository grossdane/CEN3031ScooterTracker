import { useQuery } from '@tanstack/vue-query';
import { useSupabase } from './use-supabase';

export const useScooterQuery = () => {
  const { supabase } = useSupabase();

  return useQuery({
    queryKey: ['scooters'],
    queryFn: async () => await supabase.from('scooters').select('*'),
  });
};
