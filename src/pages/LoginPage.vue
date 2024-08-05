<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { useSupabase } from 'src/composables/use-supabase';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const { supabase } = useSupabase();
const router = useRouter();
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const handleUserLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });
  if (error) {
    console.error('Error logging in:', error.message);
    $q.notify({
      type: 'negative',
      message: error.message
    });
  }
  if (data) {
    router.push('/');
  }
}
</script>

<template>
  <q-page class="tw-flex tw-justify-center tw-items-center">
    <q-card class="tw-w-[400px] tw-flex tw-flex-col tw-h-[380px]">
      <q-card-section class="row items-center q-pb-none">
        <div>
          <div class="text-h6">Scoot3r</div>
          <div class="text-subtitle2 tw-mb-4">Please login to your account</div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-form @submit="handleUserLogin">
          <q-input v-model="email"
            label="Email"
            filled
            :rules="[val => !!val || 'Email is required']"
            class="q-mb-md" />

          <q-input v-model="password"
            label="Password"
            type="password"
            filled
            :rules="[val => !!val || 'Password is required']"
            class="q-mb-md" />

          <q-btn type="submit"
            label="Login"
            color="primary"
            no-caps
            class="full-width tw-mb-4" />
          <q-btn to="/register"
            unelevated
            no-caps
            class="q-text-center q-mx-auto full-width">Create Account</q-btn>
        </q-form>
      </q-card-section>

    </q-card>
    <div class="q-flex">

    </div>
  </q-page>
</template>



<style scoped>
.full-width {
  width: 100%;
}
</style>
