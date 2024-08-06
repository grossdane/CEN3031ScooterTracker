<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { getNearestStreet, useGetRentalsQuery } from 'src/composables/use-scooter-query';
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

  <div class="scooters-near">
    <div class="tw-flex tw-flex-col tw-gap-4">
      <div class="tw-border tw-rounded-lg"
        v-for="scooter in props.scooters"
        :key="scooter.id">
        <div class="tw-p-3 tw-flex tw-justify-between tw-items-center">
          <div>
            <div class="tw-text-sm tw-font-bold">Scooter {{ scooter.id }} <span class="tw-text-[12px] tw-font-medium tw-text-gray-500">${{ scooter.price }}/min</span></div>
            <div class="tw-text-xs tw-mb-1">📍 {{ addresses[scooter.id] || 'Loading...' }}</div>
            <div class="tw-text-xs">🔋 {{ scooter.battery }}%</div>
          </div>
          <div>
            <div v-if="scooter.status === 'Approved'"
              class="tw-text-lg tw-text-green-600 tw-font-bold">
              Rented</div>
            <div v-else-if="scooter.status === 'Pending'"
              class="tw-text-lg tw-text-yellow-600 tw-font-bold">Pending</div>
            <q-btn label="Rent"
              v-else
              no-caps
              unelevated
              :to="`?rent=${scooter.id}`"
              class="tw-w-full"
              color="black" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.scooters-near {
  overflow-y: auto;
  height: calc(100vh - 250px);
  padding-right: 15px;
  margin-right: -15px;
}
</style>