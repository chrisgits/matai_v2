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
      <h5><strong>Under Construction!</strong></h5>
      <p>While we are ramping up our new website please be patient as we implement this new system. If you have questions about joining or anything during this time please send them to our website admin <a href="mailto:admin@matai.org">admin@matai.org</a></p>
      <div class="q-pa-md">
        <!-- website member form -->
        <!-- <q-btn
          to="/auth"
          unelevated
          class="q-ma-md q-px-lg q-pa-md"
          color="grey"
          label="member website registration"
          text-color="black"
        />  -->
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