<script lang="ts" setup>
import { useUpdateRentalMutation, useGetRentalsQuery } from 'src/composables/use-scooter-query';
const { mutate: updateRental } = useUpdateRentalMutation();
const { refetch } = useGetRentalsQuery();
const props = defineProps<{
  params: Record<string, any>;
}>();
console.log(props.params.value)
const handleUpdateScooter = async (id: string, status: string) => {
  if (status === 'Returned') {
    updateRental({ id: parseInt(id), status, end_time: new Date().toISOString(), scooter_id: props.params.node.data.scooter_id });
  } else {
    updateRental({ id: parseInt(id), status, start_time: new Date().toISOString(), scooter_id: props.params.node.data.scooter_id });
  }
  refetch();
}
</script>
<template>
  <div class="tw-text-center">
    <q-icon name="check"
      v-if="props.params.node.data.status === 'Pending'"
      class="tw-text-green-600 tw-cursor-pointer tw-font-bold tw-text-xl tw-mr-2"
      @click="handleUpdateScooter(props.params.value, 'Approved')">
      <q-tooltip>Approve Scooter Request</q-tooltip>

    </q-icon>
    <q-icon name="close"
      v-if="props.params.node.data.status === 'Pending'"
      class="tw-text-red-600 tw-cursor-pointer tw-font-bold tw-text-xl"
      @click="handleUpdateScooter(props.params.value, 'Rejected')">
      <q-tooltip>Reject Scooter Request</q-tooltip>
    </q-icon>
    <q-icon name="pause"
      v-if="props.params.node.data.status === 'Approved'"
      class="tw-text-yellow-600 tw-cursor-pointer tw-font-bold tw-text-xl"
      @click="handleUpdateScooter(props.params.value, 'Returned')">
      <q-tooltip>Mark scooter as Returned</q-tooltip>
    </q-icon>
  </div>
</template>