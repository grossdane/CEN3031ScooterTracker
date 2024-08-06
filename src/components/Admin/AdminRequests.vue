<script lang="ts" setup>
import { useGetRentalsQuery } from 'src/composables/use-scooter-query';
import AdminActionCell from 'src/components/Admin/AdminActionCell.vue';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridVue } from 'ag-grid-vue3';
const { data } = useGetRentalsQuery();
const columns = [
  {
    field: 'id',
    headerName: '',
    width: 70,
    cellRenderer: AdminActionCell
  },
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
  },
  {
    field: 'scooter_id',
    headerName: 'Scooter ID',
    width: 120,

  },
  {
    field: 'user_name',
    headerName: 'Name',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
  {
    field: 'start_time',
    headerName: 'Start Time',
  },
  {
    field: 'end_time',
    headerName: 'End Time',
  },

]
</script>
<template>
  <div>
    <div class="tw-text-lg tw-font-medium tw-mb-3">Requests</div>
    <ag-grid-vue :rowData="data"
      :columnDefs="columns"
      style="height: calc(100vh - 200px)"
      :rowHeight="35"
      class="ag-theme-quartz">
    </ag-grid-vue>
  </div>
</template>