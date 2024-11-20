<template>
  <q-page>
    <q-form class="q-gutter-md q-mx-sm" @submit="submitForm">
      <h5 class="q-mb-none text-bold">APPLICATION FORM</h5>
      <q-input v-model="formData.first" label="First Name" required />
      <q-input v-model="formData.last" label="Last Name" required />
      <q-input v-model="formData.email" label="Email" type="email" required />
      <q-input v-model="formData.address" label="Address" />
      <q-input v-model="formData.city" label="City" />
      <q-input v-model="formData.state" label="State" />
      <q-input v-model="formData.zip" label="ZIP Code" type="number" />
      <q-input v-model="formData.hphone" label="Home Phone" />
      <q-input v-model="formData.wphone" label="Work Phone" />
      <q-input v-model="formData.org" label="Organization" />
      <q-input v-model="formData.title" label="Title" />
      <q-input v-model="formData.orgDuration" label="Organization Duration" />
      <q-input v-model="formData.ICILoc" label="ICI Location" />
      <q-input v-model="formData.ICIName" label="ICI Name" />
      <q-input v-model="formData.ICIDates" label="ICI Dates" />
      <q-input v-model="formData.ACILoc" label="ACI Location" />
      <q-input v-model="formData.ACIName" label="ACI Name" />
      <q-input v-model="formData.ACIDates" label="ACI Dates" />
      <q-input v-model="formData.TCILoc" label="TCI Location" />
      <q-input v-model="formData.TCIName" label="TCI Name" />
      <q-input v-model="formData.TCIDates" label="TCI Dates" />
      <q-input v-model="formData.ReconLoc" label="Recon Location" />
      <q-input v-model="formData.ReconName" label="Recon Name" />
      <q-input v-model="formData.ReconDates" label="Recon Dates" />
      <q-input v-model="formData.actar" label="ACTAR" />
      <q-input v-model="formData.actarNum" label="ACTAR Number" />
      <h6 class="q-mb-none">Please upload a detailed resume and/or additional information regarding your training and experience. Also, include a copy of the certificates of completion for any training listed on the application. Additional certificates for seminars and related activities are welcome.</h6>
      <q-uploader
        class="q-my-lg"
        v-model="pdfFiles"
        accept=".pdf"
        label="Upload PDF"
        multiple
        max-files="5"
        @added="handleFilesAdded"
        @removed="handleFileRemoved"
        required
      />
      <h6 class="q-mb-none">By submitting this form electronically below, I certify that the information in the form and the attached documents are true and correct to the best of my knowledge. I authorize MATAI, through its representatives, to verify the information provided herein.</h6>
      <q-btn size="xl" :loading="loading" :disable="loading" type="submit" label="Submit" color="green" />
    </q-form>
  </q-page>
</template>

<script>

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "src/firebaseConfig"; // Adjust path as needed

export default {
  data() {
    return {
      formData: {
        applicationDate: '', //autopopulated at Submit
        first: '',
        last: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        hphone: '',
        wphone: '',
        org: '',
        title: '',
        orgDuration: '',
        ICILoc: '',
        ICIName: '',
        ICIDates: '',
        ACILoc: '',
        ACIName: '',
        ACIDates: '',
        TCILoc: '',
        TCIName: '',
        TCIDates: '',
        ReconLoc: '',
        ReconName: '',
        ReconDates: '',
        actar: '',
        actarNum: ''
      },
      pdfFiles: [], // Array of uploaded files
      uploadedPdfUrls: [], // Array of URLs for the uploaded files
      loading: false,
    };
  },
  methods: {
    handleFilesAdded(files) {
      this.pdfFiles = this.pdfFiles.concat(files); // Add newly selected files
    },
    handleFileRemoved(file) {
      this.pdfFiles = this.pdfFiles.filter(f => f !== file); // Remove the specific file
    },
    async submitForm() {
      if (!this.pdfFiles.length) {
        alert("Please upload a PDF file.");
        return;
      }

      this.loading = true;

      try {
        // Set the application date
        this.formData.applicationDate = new Date().toISOString().split("T")[0];

        // Upload each PDF file to Firebase
        this.uploadedPdfUrls = await Promise.all(
          this.pdfFiles.map(file => this.uploadPDF(file))
        );

        // Submit the form data along with the uploaded file URLs
        const response = await fetch("https://api.sheety.co/2a633611410ac0b1df71370783cb36ee/mataiNewApplicantList/sheet1", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheet1: {
              ...this.formData,
              pdfUrls: this.uploadedPdfUrls.join(", "), // Store as comma-separated string
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log('Form submitted successfully:', result);

        // Notify parent component of success
        this.$emit('formSubmitted');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an issue submitting your form. Please try again.');
      } finally {
        this.loading = false;
      }
    },
    async uploadPDF(file) {
      const fileRef = ref(storage, `uploads/${this.formData.last}/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snapshot.ref);
      console.log("Uploaded file URL:", url);
      return url; // Return the file's URL
    },
  },
};
</script>

