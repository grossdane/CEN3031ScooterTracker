<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px">
      <q-card-section class="row items-center q-pb-none">
        <div>
          <div class="text-h6">Create Account</div>
          <div class="text-subtitle2">Register a new account</div>
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

          <q-input v-model="username"
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

<script setup>
import { ref } from 'vue'

const email = ref('')
const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const onSubmit = () => {
  // Perform registration logic here
  if (email.value && username.value && password.value && password.value === confirmPassword.value) {
    console.log('Registering with', email.value, username.value, password.value)
    // Add your registration logic here
  } else {
    console.log('Please fill in all fields correctly')
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
