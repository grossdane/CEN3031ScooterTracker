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
  29.648545849384718, -82.34352858059584
  <ScooterMap :markers="scooterLocations"
    :center="mapCenter" />
</template>