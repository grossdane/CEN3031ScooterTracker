<script setup lang="ts">
import ScooterMap from 'src/components/ScooterMap.vue';
import ScootersNear from 'src/components/ScootersNear.vue';
import UserProfile from 'src/components/UserProfile.vue';
import RentalDialog from 'src/components/RentalDialog.vue';
import { useScooterQuery } from 'src/composables/use-scooter-query';
import { useAuthQuery } from 'src/composables/use-auth-query';
import { type Scooter } from 'src/components/types';
const { data } = useScooterQuery();

const { data: user } = useAuthQuery();

const mapCenter = {
  lat: 29.6465,
  lng: -82.3533
};

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
          <div class="tw-text-xs tw-text-gray-600">👋 Welcome, {{ user?.user_metadata.name }}</div>
        </div>
      </div>
      <!-- Scooter Locations -->
      <h1 class="tw-text-xl tw-font-bold tw-mb-0">Scooter Locations</h1>
      <p class="tw-text-gray-600 tw-mb-4">Click on a scooter to see more information.</p>
      <ScootersNear :scooters="data" />
      <UserProfile class="tw-mt-auto" />

    </div>
    <ScooterMap :scooters="data as Scooter[]"
      :center="mapCenter" />
    <RentalDialog />
  </div>
</template>