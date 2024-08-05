<script lang="ts" setup>
import { ref } from 'vue';
import { useScooterQuery } from 'src/composables/use-scooter-query';
const { data } = useScooterQuery();

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridVue } from 'ag-grid-vue3';

const rowData = ref([
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
]);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
  { field: 'electric' }
]);


</script>
<template>
  <div>
    <div class="tw-text-xl tw-font-medium">All Scooters
      {{ data }}
      <ag-grid-vue :rowData="rowData"
        :columnDefs="colDefs"
        style="height: 500px"
        class="ag-theme-quartz">
      </ag-grid-vue>
    </div>
  </div>
</template>