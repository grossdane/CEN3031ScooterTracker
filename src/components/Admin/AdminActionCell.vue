<script lang="ts" setup>
import { useUpdateRentalMutation, useGetRentalsQuery } from 'src/composables/use-scooter-query';
const { mutate: updateRental } = useUpdateRentalMutation();
const { refetch } = useGetRentalsQuery();
const props = defineProps<{
  params: Record<string, string>;
}>();
console.log(props.params.value)
const handleUpdateScooter = async (id: string, status: string) => {
  updateRental({ id: parseInt(id), status, start_time: new Date().toISOString() });
  refetch();
}
</script>
<template>
  <div>
    <q-icon name="check"
      class="tw-text-green-600 tw-cursor-pointer tw-font-bold tw-text-xl tw-mr-2"
      @click="handleUpdateScooter(props.params.value, 'Approved')" />
    <q-icon name="close"
      class="tw-text-red-600 tw-cursor-pointer tw-font-bold tw-text-xl"
      @click="handleUpdateScooter(props.params.value, 'Rejected')" />
  </div>
</template>