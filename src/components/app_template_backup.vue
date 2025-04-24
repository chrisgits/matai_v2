<template>
  <div>
    <h4>APPLICATION FOR MEMBERSHIP</h4>

    <div>
      <q-form @submit="submitForm">
      <q-input v-model="formData.name_first" label="First Name" required />
      <q-input v-model="formData.name_last" label="Last Name" required />
      <q-input v-model="formData.email" label="Email" type="email" required />
      <q-input v-model="formData.home_address" label="Address" required />
      <q-input v-model="formData.city" label="City" required />
      <q-input v-model="formData.state" label="State" required />
      <q-input v-model="formData.zip" label="Zip" required />
      <q-input mask="### - ### - ####"
        hint=""
        v-model="formData.tel_home" label="Phone (Home)" required />
      <q-input mask="### - ### - ####"
        hint=""
        v-model="formData.tel_work" label="Phone (Work)" required />
      <q-input v-model="formData.org" label="Agency/Organization" required />
      <q-input v-model="formData.title" label="Position/Title" required />
      <q-input v-model="formData.empl_dur" label="Length of Employment" required />
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
      <q-input v-model="formData.course_tech_name" label="Advanced Course Name" />
      <q-input v-model="formData.course_tech_loc" label="Advanced Course Location" />
      <q-input v-model="formData.course_tech_dates" label="Advanced Course Dates" />
      <p class="q-mt-lg q-mb-xs text-bold">RECONSTRUCTION (or equivalent) COURSE ATTENDANCE</p>
      <q-input v-model="formData.course_tech_name" label="Advanced Course Name" />
      <q-input v-model="formData.course_tech_loc" label="Advanced Course Location" />
      <q-input v-model="formData.course_tech_dates" label="Advanced Course Dates" />
      <p class="q-mt-lg q-mb-xs text-bold">ACTAR</p>
      <q-select v-model="model" :options="options" label="ACTAR Accredited?" required/>
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
