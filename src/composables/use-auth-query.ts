import { useQuery } from '@tanstack/vue-query';
import { useSupabase } from './use-supabase';
export const useAuthQuery = () => {
  const { supabase } = useSupabase();
  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        throw error;
      }
      return user;
    },
  });
};
