<script setup lang="ts">
import { defineProps } from 'vue'
import { ref } from 'vue'
const displayedMarker = ref<number | null>(null)
interface position {
  lat: number;
  lng: number;
}
interface Scooter {
  id: number;
  battery: number;
  price: number;
  position: {
    lat: number;
    lng: number;
  };
}

const props = defineProps<{
  center: position,
  scooters: Scooter[];
}>()
</script>
<template>
  <GMapMap :center="center"
    :zoom="16"
    map-type-id="terrain"
    style="width: calc(100vw - 350px); height: 100vh;"
    :options="{
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true
    }">
    <GMapMarker :key="index"
      v-for="(m, index) in props.scooters"
      :position="m.position"
      :clickable="true"
      @click="displayedMarker = index">

      <GMapInfoWindow v-if="displayedMarker == index">
        <div class="location tw-flex tw-items-center tw-gap-x-10">
          <div>
            <div class="tw-text-sm tw-font-bold">Scooter {{ m.id }}</div>
            <div class="tw-text-[12px] tw-text-grey-500 tw-font-normal">${{ m.price }}/min</div>
          </div>
          <div class="tw-text-xs tw-mb-1 tw-font-medium">
            🔋 {{ m.battery }}%
          </div>
        </div>
        <q-btn label="Rent"
          no-caps
          unelevated
          :to="`?rent=${m.id}`"
          class="tw-w-full tw-mt-4"
          color="black" />
      </GMapInfoWindow>
    </GMapMarker>

  </GMapMap>

</template>