<template>
  <q-page padding>
    <h4>New Member Qualification Requirements for Application</h4>
    <h6>1. Applicants must have successfully completed a recognized Technical Accident Investigation Course, or its equivalent</h6>
    <h6>2. OR, successfully completed an Accident Investigation Course with at least one (1) year experience in the area of Accident Investigation, <span class="text-bold">and provide a copy of an investigation completed during that year,</span> to include a scaled diagram.</h6>
    <h6>In the form below you will be able to attach PDF documents to this form. <span class="text-bold">Please include copies of certificates of completed for any training list on the application.</span></h6>
    <h5>I certifiy that the attached information is true and correct to the best of my knowledge. I authorize MATAI, through its representatives, to verify the information provided herein.</h5>
    <p>Please remember, filling out this form and providing MATAI with your training credentials is what the New Member committee uses to determine eligibility to become a paying member of this organization.</p>
    <br>
    <p>Once you receive an email confirmation that your application has been Approved, you will simply go to the website registration page to create a member profile/account and login to your member area. If you have any questions please email <a href="mailto:admin@matai.org">admin@matai.org</a>.</p>

    <h4>APPLICATION FOR MEMBERSHIP</h4>
    <app-form/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import appForm from '../components/app_form.vue';


export default defineComponent({
  name: 'Home',
  components: {
   appForm

  }
})
</script>
