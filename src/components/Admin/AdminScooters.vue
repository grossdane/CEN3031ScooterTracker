<script lang="ts" setup>
import { useSupabase } from 'src/composables/use-supabase';
const { supabase } = useSupabase();

let { data: scooters, error } = await supabase
  .from('scooters')
  .select('*')

</script>
<template>
  <div>
    <div class="tw-text-xl tw-font-medium">All Scooters
      {{ scooters }}
    </div>
  </div>
</template>