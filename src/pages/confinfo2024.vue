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
  <div class="q-pa-lg col-12">
    <img style="width: 100%" class="q-pa-sm" src="../assets/2024_Conf_Splash.jpg">
  </div>
  <q-card class="q-pa-xs flex row" flat>
    <q-card-section class="col-sm-4 col-xs-12 gt-xs">
      <img style="width: 100%" class="q-pa-sm" src="../assets/2024_Conf_Logo.png">
    </q-card-section>
    <q-card-section class="col-sm-8 col-xs-12">
      <div class="text-bold text-h5 text-orange-9">September 16-18, 2024</div>
      <div class="text-h4 q-mt-sm q-mb-xs">ATV / UTV Topics - Live Crash Testing</div>
      <div class="text-h5 q-mt-sm q-mb-xs">Newton, IA</div>
      <div class="text-h5 q-mt-sm q-mb-xs"><span class="text-bold">ACTAR Exam</span> - Sunday September 15, 2024 - Applications for this exam are <span class="text-orange-10 text-bold">OPEN SOON</span></div>
      <br>
      <div class="text-black text-h6">
        This conference focused on ATV/UTV involved crashes and will have the following highlights:
        <br>
        <ul>
          <li>NEW Conference Location! - Newton Iowa DMACC facility!</li>
          <li>MATAI BOD local food and cookouts!</li>
          <li>ATV Related Crash Testing</li>
          <li>ATV Related Visibility / Conspicuity</li>
          <li>ATV Crash Dynamics and restraints</li>
          <li>Vendors available during crash test downtimes</li>
          <li>Crash Testing Data Review</li>
        </ul>
        <q-img width="25%" class="q-pa-none q-ma-none gt-xs" src="../assets/actar.png"/>
        <h6 class="q-pa-none">Attendees that are ACTAR accredited can earn up to <span class="text-deep-orange">24 credits</span> for this conference if they login to each session available to them. These credits are <span class="text-bold">NOT</span> automatically awarded by registering for the conference. Please see <a href="http://www.actar.org">ACTAR</a> website for more information!</h6>
      </div>
      <div class="text-blue text-bold text-h5">Conference Pricing</div>
      <ul>
        <li>$500 for MATAI Members</li>
        <li>$550 for non-members</li>
        <!-- <li>$119 for 1 day ACTAR Prep Course with Andy Rich (Wednesday)</li> -->
      </ul>
      <q-btn
          href="https://momentum.matai.org/collect/description/425975-q-2024-matai-fall-conference-registration-newton-ia" target="blank"
          class="q-ml-none q-mr-sm col-xs-12"
          unelevated
          size="lg"
          color="orange-10"
          text-color="dark-grey"
          label="CONF REGISTRATION"
        />
      <br>
      <br>
      <div class="text-blue text-bold text-h5">Hotel Information</div>

      <ul>
        <li>CobbleStone and the Best Western in Newton, IA</li>
        <li>Booking at conference rates is OPEN</li>
      </ul>
      <q-btn
        class="q-my-md col-xs-12"
        unelevated
        size="lg"
        color="grey"
        text-color="dark-gray"
        label="Hotel Registration Open soon"
      />
      <!-- <h5 class="q-ma-none text-blue">MATAI Hotel Block FULL!</h5> -->
    </q-card-section>
    <q-card-section>

      <!-- <q-btn
        href="https://momentum.matai.org/collect/description/325510-q-2023-actar-prep-course-with-andy-rich-des-moines-ia" target="blank"
        class="q-ml-none col-xs-12"
        unelevated
        size="lg"
        color="green"
        text-color="dark-grey"
        label="ACTAR PREP Registration"
      /> -->
    </q-card-section>
  </q-card>
  <q-card>
    <q-card-section>
      <div class="text-bold text-h5 text-blue-9">2024 Conference Schedule</div>
      <br>
      <q-card class="bg-grey-7">
        <q-card-section>
          <!-- <div class="text-deep-orange-8 text-h6">
            <span class="text-bold text-black">9/10</span> Saturday – Crash Test Academy - Iowa Speedway
          </div> -->
          <div class="text-light-blue-4 text-h6">
            <span class="text-bold text-light-blue-4">9/15</span> Sunday – Hosted ACTAR Exam
          </div>
          <div class="text-black text-h6">
            <span class="text-bold text-black">9/16</span> Monday – Crash Testing - Iowa Speedway - Newton
          </div>
          <div class="text-black text-h6">
            <span class="text-bold text-black">9/17</span> Tuesday – Presentations
          </div>
          <div class="text-black text-h6">
            <span class="text-bold text-black">9/18</span> Wednesday Morning – Presentations, crash data review and conference wrap-up
          </div>
          <!-- <div class="text-black text-h6">
            <span class="text-bold text-black">9/20</span> Wednesday <span class="text-bold text-orange-5">ALL DAY SESSION*</span> – Optional ACTAR Prep Session
          </div> -->
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

<style lang="css" scoped>

#jumbo {
  background-image: url("../assets/2024_Conf_Splash.jpg");
  background-color: #686868;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

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
