<script lang="ts" setup>
import AdminHeader from 'src/components/Admin/AdminHeader.vue';
import AdminScooters from 'src/components/Admin/AdminScooters.vue';
import AdminRequests from 'src/components/Admin/AdminRequests.vue';
</script>
<template>
  <AdminHeader />
  <div class="tw-container tw-mx-auto">
    <div class="tw-grid tw-grid-cols-2 tw-gap-4">
      <AdminScooters />
      <AdminRequests />
    </div>
  </div>
</template>