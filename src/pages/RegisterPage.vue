<script setup>
import { ref } from 'vue'
import { useSupabase } from 'src/composables/use-supabase';
const { supabase } = useSupabase();
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
const $q = useQuasar()
const email = ref('')
const name = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()
const onSubmit = () => {
  // Perform registration logic here
  if (email.value && name.value && password.value && password.value === confirmPassword.value) {
    supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: name.value
        }
      }
    }).then(() => {
      $q.notify({
        message: 'Your account has be registered successfully! ',
        type: 'positive',
        position: 'top',
        timeout: 2000
      })
      router.push('/login')
    }).catch(error => {
      console.error('Registration error:', error)
    })
  } else {
    console.log('Please fill in all fields correctly')
  }
}
</script>

<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div>
          <div class="text-h6">Create Account</div>
          <div class="text-subtitle2 tw-mb-4">Register a new account</div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-form @submit="onSubmit">
          <q-input v-model="email"
            label="Email"
            type="email"
            filled
            :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Email must be valid']"
            class="q-mb-md" />

          <q-input v-model="name"
            label="Name"
            filled
            :rules="[val => !!val || 'Name is required']"
            class="q-mb-md" />

          <q-input v-model="password"
            label="Password"
            type="password"
            filled
            :rules="[val => !!val || 'Password is required']"
            class="q-mb-md" />

          <q-input v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            filled
            :rules="[val => !!val || 'Password confirmation is required', val => val === password || 'Passwords must match']"
            class="q-mb-md" />

          <q-btn type="submit"
            label="Register"
            color="primary"
            class="full-width" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>


<style scoped>
.full-width {
  width: 100%;
}
</style>
