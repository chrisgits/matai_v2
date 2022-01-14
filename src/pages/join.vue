<template>
  <q-page class="flex column">
    <h4 class="text-bold">Joining MATAI</h4>
    <p>As an association we recognize all potential members interested in our organization. With this in mind we require that Applicants must have successfully completed a recognized Technical Crash Investigation Course, or its equivalent.</p>
    <p>We also provide that if the Applicant has completed an advanced Accident Investigation Course with at
    least one (1) year experience in the area of Accident Investigation, and provide a copy of an investigation completed during that year, to include a scaled diagram.</p>
    <p>A link to our PDF Application is provided below.</p>  
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        onClick="/assets/MATAI_Application_2021.pdf"
        value="Open"
        color="accent"
        text-color="black"
        label="Membership Application Form"
      />
    </div>
   
    <p>You are invited to register for <strong>website access</strong> during the interim while your application is reviewed. Once approved you will be granted access to the Members section with exclusive content: </p>
      <div class="q-pa-md">
        <q-list separator>
          <q-item clickable v-ripple>
            <q-item-section>ARJ (Accident Reconstruction Journal) Issues since 2013</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Conference Content and crash data (if applicable)</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Networking with industry professionals and peers</q-item-section>
          </q-item>
        </q-list>
      </div>

    <p>So long as your dues are paid on an annual basis you will retain these membership privileges and content.</p>

    <div class="q-pa-md">
      <!-- website member form -->
      <q-btn
        to="/auth"
        unelevated
        class="q-ma-md q-px-lg q-pa-md"
        color="green"
        label="website registration"
        text-color="black"
      /> 
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About'
})
</script>