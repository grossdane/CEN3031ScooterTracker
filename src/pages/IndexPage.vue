<script setup lang="ts">
import ScooterMap from 'src/components/ScooterMap.vue';
const mapCenter = {
  lat: 29.6465,
  lng: -82.3533
}
const scooterLocations = [
  {
    position: {
      lat: 29.648067984286616,
      lng: -82.34353394501409
    }
  },
  {
    position: {
      lat: 29.648545849384718,
      lng: -82.34352858059584
    }
  },
]
</script>
<template>
  <div class="tw-w-[400px] tw-min-h-screen">
    <h1 class="tw-text-2xl tw-font-bold tw-mb-4">Scooter Locations</h1>
    <p class="tw-text-gray-600 tw-mb-4">Click on a scooter to see more information.</p>
  </div>
  <ScooterMap :markers="scooterLocations"
    :center="mapCenter" />
</template>