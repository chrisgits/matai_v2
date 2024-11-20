<template>
  <q-page class="">
    <div class="q-pa-md">
      <h4 class="text-center">MATAI Applicants</h4>
      <h6 class="text-size: 10">Thank you for your interest in joining our organization. Below you will find our electronic application form. Once you have determined that you have the minimum qualifications set forth below, please fill out the form and submit it to our Board of Directors. We have recently changed to an 'all electronic' system for faster processing of your application. If you are unable to submit the form electronically below please reach out to <a href="mailto: admin@matai.org">admin@matai.org</a> for instructions on how to mail it to our secretary directly.</h6>
      <h5 class="text-bold text-center">MEMBERSHIP QUALIFICATION REQUIREMENTS</h5>
      <ul>
        <li class="q-mb-sm">Applicants must have successfully completed a recognized <span class="text-bold">Technical Accident
          Investigation Course</span>, or its equivalent.</li>
        <li><span class="text-red text-bold">OR</span>, successfully completed an advanced <span class="text-bold">Accident Investigation Course</span> with at
        least one (1) year experience in the area of Accident Investigation, and provide a
        copy of an investigation completed during that year, to include a scaled diagram (either hand-drawn or electronic)</li>
      </ul>
    </div>
    <div class="q-my-xl">
      <component
        :is="currentComponent"
        @formSubmitted="markFormAsSubmitted"
        @resetForm="resetForm"
      />
    </div>
  </q-page>
</template>

<style scoped>
li{
  font-size: 20px;
}
</style>

<script>
import Application from 'src/components/ApplicationForm.vue';
import AppSubmitSuccess from 'components/AppSubmitSuccess.vue';

export default {
  data() {
    return {
      formSubmitted: false, // Tracks if the form was submitted successfully
    };
  },
  computed: {
    currentComponent() {
      return this.formSubmitted ? AppSubmitSuccess : Application;
    },
  },
  methods: {
    markFormAsSubmitted() {
      this.formSubmitted = true; // Switch to the success component
    },
    resetForm() {
      this.formSubmitted = false; // Reset to show the form again
    },
  },
};
</script>
