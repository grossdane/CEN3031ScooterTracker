import { useQuery, useMutation } from '@tanstack/vue-query';
import { useSupabase } from './use-supabase';
import axios from 'axios';
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
export const useCheckoutScooterMutation = () => {
  const { supabase } = useSupabase();
  return useMutation({
    mutationFn: async (scooterId: number) => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from('rentals')
        .insert([
          { scooter_id: scooterId, user_name: user?.user_metadata.name },
        ])
        .select();

      if (error) {
        throw error;
      }
      return data;
    },
  });
};
export const getNearestStreet = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${process.env.GOOGLE_MAPS_API_KEY}`
    );
    if (
      response.data.results[0]?.address_components[0].types[0] !==
      'street_number'
    ) {
      return response.data.results[0]?.address_components[0]?.long_name;
    } else {
      return response.data.results[0]?.formatted_address;
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    return 'Unknown';
  }
};
