<template>
    <q-form>
      <q-input v-model="formData.name" label="Full Name" required />
      <q-input v-model="formData.email" label="Email" type="email" required />
      <q-input v-model="formData.phone" label="Phone Number"  />
      <q-input v-model="formData.address" label="Address"  />
      <q-btn label="Submit" type="submit" color="primary" />
    </q-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        address: '',
      }
    }
  },
  methods: {
    submitForm() {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwvWcEikRpNHjj05BxeWgKJY-1JxNZY2Anzs4MeyxEx8SwsXoUkGmHQpKmn6CBelrg/exec';

      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(this.formData),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          this.$q.notify({ type: 'positive', message: 'Form submitted successfully!' });
        } else {
          this.$q.notify({ type: 'negative', message: 'Form submission failed!' });
        }
      })
      .catch(error => {
        this.$q.notify({ type: 'negative', message: 'Error submitting form!' });
        console.error(error);
      });
    }
  }
}
</script>
