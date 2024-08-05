<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { useSupabase } from 'src/composables/use-supabase';
const { supabase } = useSupabase();
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const handleUserLogin = async () => {
  const user = await supabase.auth.getUser()
  console.log(user)
}
</script>

<template>
  <q-page class="flex flex-center">
    <q-card style="width: 400px">
      <q-card-section class="row items-center q-pb-none">
        <div>
          <div class="text-h6">Scoot3r</div>
          <div class="text-subtitle2">Please login to your account</div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-form @submit="handleUserLogin">
          <q-input v-model="email"
            label="Username"
            filled
            :rules="[val => !!val || 'Username is required']"
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
            class="full-width" />
        </q-form>
      </q-card-section>
      <div class="q-flex">
        <q-btn to="/register"
          class="q-text-center q-mx-auto full-width">Register</q-btn>
      </div>
    </q-card>
  </q-page>
</template>



<style scoped>
.full-width {
  width: 100%;
}
</style>
