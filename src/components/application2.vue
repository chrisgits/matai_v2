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
        email: '',
      }
    };
  },
  methods: {
    async submitForm() {
      const url = `${process.env.API_URL}/.netlify/functions/submitForm`; // URL to your Netlify Function
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form.');
      }
    }
  }
};
</script>
