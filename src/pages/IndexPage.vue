<script setup>
import { onMounted, ref } from 'vue'
const center = { lat: 51.093048, lng: 6.842120 }
const markers = [
  {
    position: {
      lat: 51.093048, lng: 6.842120
    }
  }
]
</script>
<template>
  <GMapMap :center="center"
    :zoom="10"
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
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      @click="center = m.position">
      <GMapInfoWindow>
        <div class="location">
          Scooter
        </div>
      </GMapInfoWindow>
    </GMapMarker>

  </GMapMap>

</template>