<script lang="ts" setup>
import AdminHeader from 'src/components/Admin/AdminHeader.vue';
import AdminScooters from 'src/components/Admin/AdminScooters.vue';
</script>
<template>
  <AdminHeader />
  <div class="tw-container tw-mx-auto">
    <div class="tw-grid tw-grid-cols-2">
      <AdminScooters />
    </div>
  </div>
</template>