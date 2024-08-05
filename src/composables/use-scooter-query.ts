import { useQuery } from '@tanstack/vue-query';
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
