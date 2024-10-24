<template>
  <form @submit.prevent="submit">
    <div>
      <label for="name">Name:</label>
      <input type="text" v-model="formData.name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="formData.email" required />
    </div>
    <div>
      <label for="pdf">Upload PDF:</label>
      <input type="file" @change="handleFileUpload" />
    </div>
    <button type="submit">Submit</button>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">{{ success }}</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        pdfData: null, // To hold the PDF file data
      },
      error: null,
      success: null,
    };
  },
  methods: {
    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.formData.pdfData = reader.result; // Store base64 data or handle accordingly
        };
        reader.readAsDataURL(file); // Read file as base64
      }
    },
    async submit() {
      this.error = null;
      this.success = null;

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyugjdzlpE-LZrHZo6SGM6Pb7YOjfIgKjsCTVJQ3CGrnHMRNfojo-ufE91tj4OEJDMY/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result.success) {
          this.success = 'Form submitted successfully!';
          // Reset form data
          this.formData = {
            name: '',
            email: '',
            pdfData: null,
          };
        } else {
          throw new Error(result.error || 'Unknown error occurred');
        }
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
