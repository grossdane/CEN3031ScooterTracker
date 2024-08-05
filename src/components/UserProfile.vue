<script lang="ts" setup>
import { useAuthQuery } from 'src/composables/use-auth-query';
import { useSupabase } from 'src/composables/use-supabase';
import { useRouter } from 'vue-router';
const { data: user } = useAuthQuery();
const router = useRouter();
const { supabase } = useSupabase();
const handleUserLogout = async () => {
  await supabase.auth.signOut();
  router.push('/login');
}
</script>
<template>
  <div class="user-profile tw-flex">
    <img src="~assets/profile.png"
      alt="User Avatar"
      class=" tw-h-10 tw-rounded-full tw-mr-2" />
    <div>
      <div class="tw-text-base tw-font-medium tw-mb-0">{{ user?.user_metadata.name }}</div>
      <div class="tw-text-xs tw-text-gray-600 tw-cursor-pointer"
        @click="handleUserLogout()">Logout</div>
    </div>
  </div>
</template>