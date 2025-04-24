<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-input v-model="formData.name" label="Full Name" required />
      <q-input v-model="formData.email" label="Email" type="email" required />
      <q-input v-model="formData.phone" label="Phone Number" required />
      <q-input v-model="formData.address" label="address" required />
      <q-input v-model="formData.address" label="city" required />
      <q-input v-model="formData.address" label="state" required />
      <q-input v-model="formData.address" label="zip" required />
      <q-input v-model="formData.agency" label="agency" required />
      <q-input v-model="formData.title" label="title" required />
      <q-input v-model="formData.emplduration" label="emptime" required />
      <q-file v-model="formData.pdfFile" label="Upload PDF Document" accept=".pdf" required />
      <q-btn class="q-ma-sm" label="Submit" type="submit" color="primary" />
    </q-form>
  </q-page>
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
        pdfFile: null,  // Store the uploaded file
      }
    }
  },
  methods: {
    submitForm() {
      const scriptURL = 'https://script.google.com/macros/s/your-script-id/exec';
      const formData = new FormData();

      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
      formData.append('phone', this.formData.phone);
      formData.append('address', this.formData.address);
      formData.append('pdfFile', this.formData.pdfFile); // Attach the PDF file

      fetch(scriptURL, {
        method: 'POST',
        body: formData,
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
