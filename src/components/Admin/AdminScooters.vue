<script lang="ts" setup>
import { useSupabase } from 'src/composables/use-supabase';
import { useScooterQuery } from 'src/composables/use-scooter-query';
const { supabase } = useSupabase();
const { data } = useScooterQuery();


</script>
<template>
  <div>
    <div class="tw-text-xl tw-font-medium">All Scooters
      {{ data }}
    </div>
  </div>
</template>