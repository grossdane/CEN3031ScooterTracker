import { useQuery } from '@tanstack/vue-query';
import { useSupabase } from './use-supabase';

export const useScooterQuery = () => {
  const { supabase } = useSupabase();
  return useQuery({
    queryKey: ['scooters'],
    queryFn: async () => {
      const { data, error } = await supabase.from('scooters').select('*');
      if (error) {
        throw error;
      }
      return data;
    },
  });
};
