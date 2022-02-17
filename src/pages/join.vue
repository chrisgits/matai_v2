<template>
  <div class="row justify-center">
    <div class="col join" style="max-width: 600px">
      <h4 class="text-bold">Joining MATAI</h4>
      <p>As an association we recognize all potential members interested in our organization. With this in mind we require that Applicants must have successfully completed a recognized Technical Crash Investigation Course, or its equivalent.</p>
      <p>We also provide that if the Applicant has completed an advanced Accident Investigation Course with at least one (1) year experience in the area of Accident Investigation, and provide a copy of an investigation completed during that year, to include a scaled diagram.</p>
      <p>A link to our PDF Application is provided below.</p>  
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          type="a"
          href="https://files.matai.org/public/MATAI_Application_2022.pdf"
          target="_blank"
          value="Open"
          color="accent"
          class="q-ma-md q-px-lg q-pa-md"
          text-color="black"
          label="Membership Application Form"
        />
      </div>
    
      <!-- <p>You are invited to register for <strong>website access</strong> during the interim while your application is reviewed. Once approved you will be granted access to the Members section with exclusive content.</p> -->
      <p>Our new members site will have a unique orange navigation bar for easy identification and will provide our members the ability to control their memberships, update their contact information and register for upcoming training and conferences.</p>
      <q-img
        width="400px"
        src="../../src/assets/MATAI_memberNav.png"
        class="nav-img"
      />

      <p>New features will be implemented as the Board explores the new potentials in the new site and management platform.</p>
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
      <p>If you have questions about joining or anything during this time please send them to our website admin <a href="mailto:admin@matai.org">admin@matai.org</a></p>
      <div class="q-pa-md">
        <!-- website member form -->
        <q-btn
          type="a"
          href="https://matai.pixelengineering.co/collect/description/225038-j-matai-new-member-application"
          unelevated
          class="q-my-md q-pa-md"
          color="green"
          label="new member website registration"
          text-color="black"
        /> 
      </div>
      <h5><strong>Current/Past MATAI Members</strong></h5>
      <p>We will be implementing a separate form to intake our current and past members to this new membership platform. We will send out an email notice once this has been finalized and tested. If you did not receive an email recently (on or around Feb 15, 2022) about the Spring Training your email previously registered with MATAI is likely not up to date. Please send our website admin an email to update your contact info with us so we can send you the latest updates with MATAI. <a href="mailto:admin@matai.org">admin@matai.org</a> <strong>Thank you!</strong></p>
      <p><strong>Once this process is set the button below will link you to our form to update your website/membership information.</strong></p>
      <div class="q-pa-md">
        <!-- website member form -->
        <q-btn
          unelevated
          class="q-my-md q-pa-md"
          color="grey"
          label="current member website registration"
          text-color="black"
        /> 
      </div>
    </div> <!--col-->
  </div>
</template>

<style scoped>
.join {
  padding: 1em;
}
.join > p {
  font-size: 20px;
}
.nav-img {
  margin-bottom: 1em;
}
</style>

<script>
export default {
  data () {
    return {
      show: true,
      src: "https://www.orimi.com/pdf-test.pdf"
    }
  },
  computed: {
    updatedSrc () {
      if (process.env.MODE === 'electron') {
        return '/' + this.src
      }
      return this.src
    }
  }
}
</script>