<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { getNearestStreet } from 'src/composables/use-scooter-query';
import { type Scooter } from 'src/components/types';


const props = defineProps<{
  scooters?: Scooter[];
}>();

const addresses = ref<Record<number, string>>({});
const fetchAddresses = async () => {
  if (props.scooters) {
    for (const scooter of props?.scooters) {
      const address = await getNearestStreet(scooter.lat, scooter.lng);
      addresses.value[scooter.id] = address;
    }
  }
};

onMounted(fetchAddresses);

watch(() => props.scooters, fetchAddresses);
</script>

<template>
  <div class="tw-text-base tw-font-medium tw-mb-2">Scooters Near You</div>
  <div class="tw-flex tw-flex-col tw-gap-4">
    <div class="tw-border tw-rounded-lg"
      v-for="scooter in props.scooters"
      :key="scooter.id">
      <div class="tw-p-3 tw-flex tw-justify-between">
        <div>
          <div class="tw-text-sm tw-font-bold">Scooter {{ scooter.id }} <span class="tw-text-[12px] tw-font-medium tw-text-gray-500">${{ scooter.price }}/min</span></div>
          <div class="tw-text-xs tw-mb-1">📍 {{ addresses[scooter.id] || 'Loading...' }}</div>
          <div class="tw-text-xs">🔋 {{ scooter.battery }}%</div>
        </div>
        <div>
          <q-btn label="Rent"
            no-caps
            unelevated
            :to="`?rent=${scooter.id}`"
            class="tw-w-full tw-mt-4"
            color="black" />
        </div>

      </div>
    </div>
  </div>
</template>
