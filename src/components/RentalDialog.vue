<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const displayRentDialog = computed(() => Object.keys(route.query).includes('rent'));
</script>
<template>

  <q-dialog v-model="displayRentDialog">
    <div class="tw-w-[400px] tw-bg-white tw-p-4">
      <div class="card-header tw-flex tw-justify-between tw-items-center tw-mb-4">
        <div>
          <div class="tw-text-sm tw-font-bold -tw-mb-1">Rent Scooter</div>
          <div class="tw-text-xs tw-text-gray-500">Request to rent a scooter</div>
        </div>
        <q-icon name="close"
          class="tw-cursor-pointer"
          @click="displayRentDialog = false" />
      </div>
      <div class="card-body">
        <div class="tw-text-center tw-text-gray-500 tw-mb-2 ">You're requesting to rent scooter </div>
        <div class="tw-text-4xl tw-text-center tw-mb-2 tw-font-bold">1</div>
        <div class="tw-text-center tw-text-gray-500">If approved you will be billed at a rate of $0.15/min</div>
        <q-btn label="Request Rental"
          no-caps
          class="tw-w-full tw-mt-4"
          color="black" />
      </div>
    </div>
  </q-dialog>
</template>