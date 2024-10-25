<template>
  <q-form @submit="submitForm">
    <q-input filled v-model="formData.name" label="Name" />
    <q-input filled v-model="formData.email" label="Email" />
    <q-btn type="submit" label="Submit" />
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    async submitForm() {
      const url = 'https://script.google.com/macros/s/AKfycbwvWcEikRpNHjj05BxeWgKJY-1JxNZY2Anzs4MeyxEx8SwsXoUkGmHQpKmn6CBelrg/exec';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      });

      if (response.ok) {
        // Success handling
        alert('Form submitted successfully!');
      } else {
        // Error handling
        alert('Error submitting form.');
      }
    }
  }
};
</script>
