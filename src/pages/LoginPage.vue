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
        <q-form @submit="onSubmit">
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

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      // Perform login logic here
      if (this.username && this.password) {
        console.log('Logging in with', this.username, this.password);
        // Add your login logic here
      } else {
        console.log('Please fill in all fields');
      }
    }
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
