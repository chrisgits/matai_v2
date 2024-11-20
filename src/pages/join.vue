<template>
  <div class="row justify-center">
    <div class="col join" style="max-width: 600px">
      <h4 class="text-bold">Joining MATAI - New Members</h4>
      <p>As an association we recognize all potential members interested in our organization. With this in mind we require that Applicants must have successfully completed a recognized Technical Crash Investigation Course, or its equivalent.</p>
      <p>We also provide that if the Applicant has completed an advanced Accident Investigation Course with at least one (1) year experience in the area of Accident Investigation, and provide a copy of an investigation completed during that year, to include a scaled diagram.</p>
      <p>A link to our PDF Application is provided below.</p>
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          type="a"
          href="https://files.matai.org/public/MATAI_Application_2025.pdf"
          target="_blank"
          value="Open"
          color="accent"
          class="q-ma-md q-px-lg q-pa-md"
          text-color="black"
          label="Membership Application Form"
        />
      </div>

      <!-- <p>You are invited to register for <strong>website access</strong> during the interim while your application is reviewed. Once approved you will be granted access to the Members section with exclusive content.</p> -->
      <p>Our members site has a unique orange navigation bar for easy identification and will provide our members the ability to control their memberships, update their contact information and register for upcoming training and conferences.</p>
      <q-img
        width="400px"
        src="../../src/assets/MATAI_memberNav.png"
        class="nav-img"
      />

      <p>New features will be implemented as the Board explores the new potentials in the new site and management platform.</p>
        <div class="q-pa-md">
          <q-list separator>
            <q-item clickable:false v-ripple>
              <q-item-section>ARJ (Accident Reconstruction Journal) Issues since 2013</q-item-section>
            </q-item>
            <q-item clickable:false v-ripple>
              <q-item-section>Conference Content and crash data (if applicable)</q-item-section>
            </q-item>
            <q-item clickable:false v-ripple>
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
          href="https://momentum.matai.org/collect/description/225038-j-matai-new-member-application"
          unelevated
          class="q-my-md q-pa-md"
          color="green"
          label="new member website registration"
          text-color="white"
        />
      </div>
      <h4 class="q-mb-xs"><strong>Current/Past MATAI Members</strong></h4>
      <h5 class="q-mt-xs q-pa-sm bg-orange"><strong>Member renewal is LIVE!</strong></h5>
      <p>We have created a current/past member renewal form for the members-only site. This provides you website access as well as method to pay your annual dues for membership. You can choose a payment method in this form and we can take credit/debit cards as well as payment by check to the MATAI Secretary. Additional instructions are included in the form where needed. If you encounter troubles with this process please send an email to <a href="mailto:admin@matai.org">admin@matai.org</a>. <strong>Thank you!</strong></p>
      <p>Please remember that the email you provide during this process will be our primary method to contact the membership so make sure it is one that you check regularly.</p>
      <p>Once you have access to the members only site (orange header) -- please click or hover the "My Account" button in the upper right to access the <strong>Profile</strong> to make sure your contact information is correct. You can add ACTAR information as well as a cell phone number if desired. You will also have visibility of when your membership was renewed and how many months remaining you have in your membership.</p>

      <div class="q-pa-md">
        <!-- website member form -->
        <q-btn
          unelevated
          href="https://momentum.matai.org/collect/description/228963-r-matai-member-renewal"
          class="q-my-md q-pa-md"
          color="green"
          label="current member renewal"
          text-color="white"
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
