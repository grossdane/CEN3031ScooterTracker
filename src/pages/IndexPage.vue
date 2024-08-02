<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ScooterMap from 'src/components/ScooterMap.vue';
import axios from 'axios';
const mapCenter = {
  lat: 29.6465,
  lng: -82.3533
}
const getNearestStreet = async (lat: number, lng: number) => {
  const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${process.env.GOOGLE_MAPS_API_KEY}`);
  return response.data.results[0].formatted_address;
}
const scooterLocations = ref([
  {
    id: 1,
    battery: 100,
    near: '',
    position: {
      lat: 29.648067984286616,
      lng: -82.34353394501409
    }
  },
  {
    id: 2,
    battery: 100,
    near: '',
    position: {
      lat: 29.648545849384718,
      lng: -82.34352858059584
    }
  },
])
onMounted(() => {
  scooterLocations.value.forEach(async (scooter) => {
    scooter.near = await getNearestStreet(scooter.position.lat, scooter.position.lng);
  });
});
</script>
<template>
  <div class="tw-flex">
    <div class="tw-min-w-[300px] tw-min-h-screen tw-p-4">
      <h1 class="tw-text-2xl tw-font-bold tw-mb-2">Scooter Locations</h1>
      <p class="tw-text-gray-600 tw-mb-4">Click on a scooter to see more information.</p>
      <div class="tw-text-base tw-font-medium tw-mb-2">Scooters Near You</div>
      <div class="tw-flex tw-flex-col tw-gap-2">
        <div class="tw-border"
          v-for="scooter in scooterLocations"
          :key="scooter.id">
          <div class="tw-p-2 tw-border-b tw-flex tw-justify-between">
            <div>Scooter {{ scooter.id }}</div>
            <div> {{ scooter.near }}</div>
            <div>{{ scooter.battery }}%</div>
          </div>
        </div>
      </div>
    </div>
    <ScooterMap :markers="scooterLocations"
      :center="mapCenter" />
  </div>
</template>