<template>
      <!-- <q-banner
        dense
        class="bg-accent text-black"
      >
      Check out the latest Conf Info Here:

      <q-btn
        unelevated
        to="/conflive"
        class="q-py-xs q-px-sm q-ml-sm text-black"
        color="accent"
        label="conf live!"
        size="lg"
        style="border: black 4px solid"
      />
    </q-banner> -->
  <div class="row justify-center">
    <div class="col-12">
        <div class="text-h4 text-red q-mt-sm q-mb-xs q-pl-lg">2023 Fall Conference</div>
      </div>
    <q-card class="q-pa-xs flex row" flat>
      <q-card-section class="col-sm-4 col-xs-12">
        <img style="width: 100%" class="q-pa-sm" src="../assets/img/2023Conf.png">
      </q-card-section>
      <q-card-section class="col-sm-8 col-xs-12">
        <div class="text-bold text-h5 text-orange-9">September 18-20, 2023</div>
        <div class="text-h4 q-mt-sm q-mb-xs">Back to the Basics - Live Crash Testing</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Des Moines, IA</div>
        <div class="text-h5 q-mt-sm q-mb-xs">ACTAR Exam - Thursday September 21, 2023 - Applications for this exam are now <span class="text-red text-bold">CLOSED</span></div>
        <br>
        <div class="text-black text-h6">
          This conference focused on going Back to Basics and will include the following testing and topics:
          <br>
          <ul>
            <li>Photography</li>
            <li>Evidence Documentation</li>
            <li>EDR Analysis Update - Andy Rich</li>
            <li>Criminal Prosecution of Serious Injury or Fatality Crashes</li>
            <li>Evidence and Testimony Presentation in Court</li>
            <li>Crash Testing Data Review</li>
          </ul>
          <q-img width="25%" class="q-pa-none q-ma-none gt-xs" src="../assets/actar.png"/>
          <h6 class="q-pa-none">Attendees that are ACTAR accredited can earn up to <span class="text-deep-orange">24 credits</span> for this conference if they login to each session available to them. These credits are <span class="text-bold">NOT</span> automatically awarded by registering for the conference. Please see <a href="http://www.actar.org">ACTAR</a> website for more information!</h6>
        </div>
        <br>
        <div class="text-blue text-bold text-h5">Conference Pricing</div>
        <ul>
          <li>$500 for MATAI Members</li>
          <li>$550 for non-members</li>
          <li>$119 for 1 day ACTAR Prep Course with Andy Rich (Wednesday)</li>
        </ul>
        <br>
        <div class="text-blue text-bold text-h5">Hotel Information</div>

        <ul>
          <li>Prairie Meadows Raceway and Casino</li>
          <li>Booking at conference rates is CLOSED</li>
          <li>Other nearby hotels available for late registrations (book on your own)</li>
        </ul>
        <q-btn
          class="q-my-md col-xs-12"
          unelevated
          size="lg"
          color="grey"
          text-color="dark-gray"
          label="Hotel Registration Closed"
        />
        <h5 class="q-ma-none text-blue">MATAI Hotel Block FULL!</h5>
      </q-card-section>
      <q-card-section>
        <q-btn
            href="https://momentum.matai.org/collect/description/325508-q-2023-matai-fall-conference-registration-des-moines-ia" target="blank"
            class="q-ml-none q-mr-sm col-xs-12"
            unelevated
            size="lg"
            color="orange-10"
            text-color="dark-grey"
            label="CONF REGISTRATION"
          />
        <q-btn
          href="https://momentum.matai.org/collect/description/325510-q-2023-actar-prep-course-with-andy-rich-des-moines-ia" target="blank"
          class="q-ml-none col-xs-12"
          unelevated
          size="lg"
          color="green"
          text-color="dark-grey"
          label="ACTAR PREP Registration"
        />
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section>
        <div class="text-bold text-h5 text-blue-9">2023 Conference Schedule</div>
        <br>
        <q-card class="bg-grey-7">
          <q-card-section>
            <!-- <div class="text-deep-orange-8 text-h6">
              <span class="text-bold text-black">9/10</span> Saturday – Crash Test Academy - Iowa Speedway
            </div> -->
            <div class="text-black text-h6">
              <span class="text-bold text-black">9/18</span> Monday – Crash Testing
            </div>
            <div class="text-black text-h6">
              <span class="text-bold text-black">9/19</span> Tuesday – Presentations -- Photography, Evidence Documentation and Andy Rich afternoon session on EDR Analysis update
            </div>
            <div class="text-black text-h6">
              <span class="text-bold text-black">9/20</span> Wednesday Morning – Presentations, crash data review and conference wrap-up
            </div>
            <div class="text-black text-h6">
              <span class="text-bold text-black">9/20</span> Wednesday <span class="text-bold text-orange-5">ALL DAY SESSION*</span> – Optional ACTAR Prep Session
            </div>
            <div class="text-light-blue-4 text-h6">
              <span class="text-bold text-light-blue-4">9/21</span> Thursday – Hosted ACTAR Exam
            </div>
            <div class="text-orange-2 text-h6">
              <span class="text-bold text-orange-5">*NOTE </span>Those attending the Conference and ACTAR Prep session will have access to a recorded version of the Wednesday morning  presentations, data review and closing so as not to miss any of the conference content.
            </div>
          </q-card-section>
        </q-card>
        <br>
      </q-card-section>
      <q-card-section>
        <div class="text-black text-h5 q-mb-md">
          Conference Presenter Bios
        </div>
        <!-- Presenter COMPONENT -->
        <Presenter/>
      <br>

      </q-card-section>

    </q-card>
  </div>
  <!-- turn on actar component once ready -->
  <!-- <actar/> -->
</template>

<style lang="sass" scoped>

.rounded
  border-radius: 10px

</style>


<script>
import { ref } from 'vue'
import Presenter from '../components/presenter.vue';
import actar from '../components/actar.vue';

export default {
  setup () {
    return {
      expanded: ref(false),
    }
  },
  components: {
    Presenter
  }
}
</script>
