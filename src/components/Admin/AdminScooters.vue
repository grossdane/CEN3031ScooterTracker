<script lang="ts" setup>
import { useScooterQuery, useUpdateRentalMutation } from 'src/composables/use-scooter-query';
const { data } = useScooterQuery();

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridVue } from 'ag-grid-vue3';

const { mutate: updateRental } = useUpdateRentalMutation();
// Column Definitions: Defines the columns to be displayed.
const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
  },
  {
    field: 'rented',
    width: 100,
    headerName: 'Rented',
  },
  {
    field: 'battery',
    headerName: 'Battery',
    width: 100,
    valueFormatter: (params: { value: string }) => {
      return `${params.value}%`
    }

  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
    valueFormatter: (params: { value: string }) => {
      return `$${params.value}`
    }

  },
  {
    field: '',
    headerName: 'Location',
    children: [
      {
        field: 'lat',
        headerName: 'Latitude',
      },
      {
        field: 'lng',
        headerName: 'Longitude',
      },
    ]
  }
]


</script>
<template>
  <div>
    <div class="tw-text-base tw-font-medium tw-mb-3">All Scooters</div>
    <button @click="updateRental({ id: 4, status: 'yes' })">Update Rental</button>
    <ag-grid-vue :rowData="data"
      :columnDefs="columns"
      style="height: calc(100vh - 200px)"
      :rowHeight="35"
      class="ag-theme-quartz">
    </ag-grid-vue>
  </div>
</template>