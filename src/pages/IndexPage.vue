<script setup lang="ts">
import { ref } from 'vue';
import ScooterMap from 'src/components/ScooterMap.vue';
import ScootersNear from 'src/components/ScootersNear.vue';
import UserProfile from 'src/components/UserProfile.vue';
import RentalDialog from 'src/components/RentalDialog.vue';
import { useScooterQuery } from 'src/composables/use-scooter-query';
import { type Scooter } from 'src/components/types';
const { data } = useScooterQuery();
const mapCenter = {
  lat: 29.6465,
  lng: -82.3533
}
const scooterLocations = ref([
  {
    id: 1,
    battery: 100,
    price: 0.15,
    position: {
      lat: 29.648067984286616,
      lng: -82.34353394501409
    }
  },
  {
    id: 2,
    battery: 100,
    price: 0.15,
    position: {
      lat: 29.648545849384718,
      lng: -82.34352858059584
    }
  },
])

</script>
<template>
  <div class="tw-flex">
    <div class="tw-min-w-[350px] tw-min-h-screen tw-p-4 tw-shadow-lg tw-flex tw-flex-col">
      <!-- Branding -->
      <div class="tw-flex tw-gap-4 tw-items-center tw-mb-8">
        <img src="~assets/logo.png"
          alt="Scooter Logo"
          class="tw-w-16  tw-rounded-lg" />
        <div>
          <div class="tw-text-base tw-font-medium">Scoot3r</div>
          <div class="tw-text-xs tw-text-gray-600">👋 Welcome, Ethan Smith</div>
        </div>
      </div>
      <!-- Scooter Locations -->
      <h1 class="tw-text-xl tw-font-bold tw-mb-0">Scooter Locations</h1>
      <p class="tw-text-gray-600 tw-mb-4">Click on a scooter to see more information.</p>
      <ScootersNear :scooters="scooterLocations" />
      <UserProfile class="tw-mt-auto" />

    </div>
    <ScooterMap :scooters="data as Scooter[]"
      :center="mapCenter" />
    <RentalDialog />
  </div>
</template>