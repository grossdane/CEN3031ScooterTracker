<script lang="ts" setup>
import { useScooterQuery } from 'src/composables/use-scooter-query';
const { data } = useScooterQuery();

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridVue } from 'ag-grid-vue3';


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
    <div class="tw-text-xl tw-font-medium">All Scooters
      <ag-grid-vue :rowData="data"
        :columnDefs="columns"
        style="height: calc(100vh - 200px)"
        :rowHeight="35"
        class="ag-theme-quartz">
      </ag-grid-vue>
    </div>
  </div>
</template>