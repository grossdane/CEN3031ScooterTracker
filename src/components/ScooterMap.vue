<script setup lang="ts">
import { defineProps } from 'vue'
interface position {
  lat: number
  lng: number
}
const props = defineProps<{
  center: position
  markers: { position: position }[]
}>()
</script>
<template>
  <GMapMap :center="center"
    :zoom="16"
    map-type-id="terrain"
    style="width: 100vw; height: 20rem"
    :options="{
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true
    }">
    <GMapMarker :key="index"
      v-for="(m, index) in props.markers"
      :position="m.position"
      :clickable="true">
      <GMapInfoWindow>
        <div class="location">
          Scooter
        </div>
      </GMapInfoWindow>
    </GMapMarker>

  </GMapMap>

</template>