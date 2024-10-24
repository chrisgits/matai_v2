<template>
  <div>
    <h4>APPLICATION FOR MEMBERSHIP</h4>

    <div>
      <q-form @submit="submitForm">
        <q-input v-model="formData.name_first" label="First Name" required />
        <q-input v-model="formData.name_last" label="Last Name" required />
        <q-input v-model="formData.eaddy" label="Email" required />
        <q-input v-model="formData.home_address" label="Home Address"  />
        <q-input v-model="formData.city" label="City"  />
        <q-input v-model="formData.state" label="State"  />
        <q-input v-model="formData.zip" label="Zip"  />
        <q-input mask="### - ### - ####"
          hint=""
          v-model="formData.tel_home" label="Phone (Home)"  />
        <q-input mask="### - ### - ####"
          hint=""
          v-model="formData.tel_work" label="Phone (Work)"  />
        <q-input v-model="formData.org" label="Agency/Organization"  />
        <q-input v-model="formData.title" label="Position/Title"  />
        <q-input v-model="formData.empl_dur" label="Length of Employment"  />
        <h6 class="q-my-md">Crash Courses Attended (if applicable)</h6>
        <p class="q-mt-lg q-mb-xs text-bold">INTERMEDIATE (or equivalent) COURSE ATTENDANCE</p>
        <q-input v-model="formData.course_interm_name" label="Intermediate Course Name" />
        <q-input v-model="formData.course_interm_loc" label="Intermediate Course Location" />
        <q-input v-model="formData.course_interm_dates" label="Intermediate Course Dates" />
        <p class="q-mt-lg q-mb-xs text-bold">ADVANCED (or equivalent) COURSE ATTENDANCE</p>
        <q-input v-model="formData.course_adv_name" label="Advanced Course Name" />
        <q-input v-model="formData.course_adv_loc" label="Advanced Course Location" />
        <q-input v-model="formData.course_adv_dates" label="Advanced Course Dates" />
        <p class="q-mt-lg q-mb-xs text-bold">TECHNICAL (or equivalent) COURSE ATTENDANCE</p>
        <q-input v-model="formData.course_tech_name" label="Technical Course Name" />
        <q-input v-model="formData.course_tech_loc" label="Technical Course Location" />
        <q-input v-model="formData.course_tech_dates" label="Technical Course Dates" />
        <p class="q-mt-lg q-mb-xs text-bold">RECONSTRUCTION (or equivalent) COURSE ATTENDANCE</p>
        <q-input v-model="formData.course_recon_name" label="Recon Course Name" />
        <q-input v-model="formData.course_recon_loc" label="Recon Course Location" />
        <q-input v-model="formData.course_recon_dates" label="Recon Course Dates" />
        <p class="q-mt-lg q-mb-xs text-bold">ACTAR</p>
        <q-input v-model="formData.actar_status" label="ACTAR Accredited?" />
        <q-input v-model="formData.actar_number" label="ACTAR Number"/>
        <p class="q-mt-lg q-mb-xs text-bold text-blue">Please attach a detailed resume and/or additional information regarding your
          training and experience. Also, include a copy of the certificates of completion for
          any training listed on the application. Additional certificates for seminars and
          related activities are welcome.</p>
        <p class="q-mt-lg q-mb-xs text-bold text-red-10">Please scan all required documents into one PDF to upload with this form.</p>
        <q-file v-model="formData.pdfFile" label="Upload PDF Document" accept=".pdf" />
        <p class="text-bold q-my-sm">By submitting this form and the required attachments, I certify the attached information is true and correct to the best of my knowledge.
          I authorize MATAI, through its representatives, to verify the information provided herein.</p>
        <q-btn label="Submit" type="submit" color="primary" class="q-ma-sm" />
      </q-form>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'application',
  data() {
    return {
      formData: {
        name_first: '',
        name_last: '',
        eaddy: '',
        home_address: '',
        city: '',
        state: '',
        zip: '',
        tel_home: '',
        tel_work: '',
        org: '',
        title: '',
        empl_dur: '',
        course_interm_loc: '',
        course_adv_loc: '',
        course_tech_loc: '',
        course_recon_loc: '',
        course_interm_name: '',
        course_adv_name: '',
        course_tech_name: '',
        course_recon_name: '',
        course_interm_dates: '',
        course_adv_dates: '',
        course_tech_dates: '',
        course_recon_dates: '',
        actar_status: '',
        actar_number: '',
        pdfFile: null // Store the uploaded file
      }
    }
  },
  methods: {
    submitForm() {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyugjdzlpE-LZrHZo6SGM6Pb7YOjfIgKjsCTVJQ3CGrnHMRNfojo-ufE91tj4OEJDMY/exec';
      const formData = new FormData();

      formData.append('first_name', this.formData.name_first);
      formData.append('last_name', this.formData.name_last);
      formData.append('email', this.formData.eaddy);
      formData.append('address', this.formData.home_address);
      formData.append('city', this.formData.city);
      formData.append('state', this.formData.state);
      formData.append('zip', this.formData.zip);
      formData.append('home phone', this.formData.tel_home);
      formData.append('work phone', this.formData.tel_work);
      formData.append('organization', this.formData.org);
      formData.append('title', this.formData.title);
      formData.append('employment length', this.formData.empl_dur);
      formData.append('Int name', this.formData.course_interm_name);
      formData.append('Int loc', this.formData.course_interm_loc);
      formData.append('Int dates', this.formData.course_interm_dates);
      formData.append('Adv name', this.formData.course_adv_name);
      formData.append('Adv loc', this.formData.course_adv_loc);
      formData.append('Adv dates', this.formData.course_adv_dates);
      formData.append('Tech name', this.formData.course_tech_name);
      formData.append('Tech loc', this.formData.course_tech_loc);
      formData.append('Tech dates', this.formData.course_tech_dates);
      formData.append('Recon name', this.formData.course_recon_name);
      formData.append('Recon loc', this.formData.course_recon_loc);
      formData.append('Recon dates', this.formData.course_recon_dates);
      formData.append('ACTAR Status', this.formData.actar_status);
      formData.append('ACTAR Number', this.formData.actar_number);
      formData.append('pdfFile', this.formData.pdfFile); // Attach the PDF file

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
  },
  setup () {
    return {

    }
  }
}
</script>
