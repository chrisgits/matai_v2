<template>
  <q-page class="">
    <div class="q-pa-md">
      <h4 class="text-center">MATAI Applicants</h4>
      <p>Thank you for your interest in joining our organization. Below you will find our electronic application form. Once you have determined that you have the minimum qualifications set forth below, please fill out the form and submit it to our Board of Directors. We have recently changed to an 'all electronic' system for faster processing of your application. If you are unable to submit the form electronically below please reach out to <a href="mailto: admin@matai.org">admin@matai.org</a> for instructions on how to mail it to our secretary directly.</p>
      <h5 class="text-bold text-center">MEMBERSHIP QUALIFICATION REQUIREMENTS</h5>
      <ul>
        <li class="q-mb-sm">Applicants must have successfully completed a recognized <span class="text-bold">Technical Accident
          Investigation Course</span>, or its equivalent.</li>
        <li>OR, successfully completed an advanced <span class="text-bold">Accident Investigation Course</span> with at
        least one (1) year experience in the area of Accident Investigation, and provide a
        copy of an investigation completed during that year, to include a scaled diagram (either hand-drawn or electronic)</li>
      </ul>
    <Application2></Application2>
    </div>

  </q-page>
</template>

<script>
import Application2 from 'src/components/application2.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
   Application2

  }
})
</script>
