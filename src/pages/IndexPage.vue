<script setup lang="ts">
import { ref } from 'vue';
import ScooterMap from 'src/components/ScooterMap.vue';
import ScootersNear from 'src/components/ScootersNear.vue';
const mapCenter = {
  lat: 29.6465,
  lng: -82.3533
}
const scooterLocations = ref([
  {
    id: 1,
    battery: 100,
    position: {
      lat: 29.648067984286616,
      lng: -82.34353394501409
    }
  },
  {
    id: 2,
    battery: 100,
    position: {
      lat: 29.648545849384718,
      lng: -82.34352858059584
    }
  },
])

</script>
<template>
  <div class="tw-flex">
    <div class="tw-min-w-[300px] tw-min-h-screen tw-p-4">
      <h1 class="tw-text-2xl tw-font-bold tw-mb-2">Scooter Locations</h1>
      <p class="tw-text-gray-600 tw-mb-4">Click on a scooter to see more information.</p>
      <ScootersNear :scooters="scooterLocations" />
    </div>
    <ScooterMap :markers="scooterLocations"
      :center="mapCenter" />
  </div>
</template>