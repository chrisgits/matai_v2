<template>
  <q-banner
    dense
    class="bg-accent text-black"
  >
  Check out the latest Conf Info Here:

  <q-btn
    unelevated
    to="/conflive24"
    class="q-py-xs q-px-sm q-ml-sm text-black"
    color="green"
    label="conf live!"
    size="lg"
    style="border: black 4px solid"
  />
</q-banner>
<div class="row justify-center">
  <div class="q-pa-lg col-12">
    <img style="width: 100%" class="q-pa-sm" src="../assets/2024_Conf_Splash.jpg">
  </div>
  <q-card class="q-pa-xs flex row" flat>
    <q-card-section class="col-sm-4 col-xs-12 gt-xs">
      <img style="width: 100%" class="q-pa-sm" src="../assets/2024_Conf_Logo.png">
        <q-card-section class="text-red">
          <h3>We are live on Monday!</h3>
          <h4>Please head over to the Conf Live page for the current schedule and locations!</h4>
          <q-btn
            unelevated
            to="/conflive24"
            class="q-py-xs q-px-sm q-ml-sm text-black"
            color="green"
            label="conf live!"
            size="lg"
            style="border: black 4px solid"
          />
        </q-card-section>
    </q-card-section>

    <q-card-section class="col-sm-8 col-xs-12">
      <div class="text-bold text-h5 text-orange-9">September 16-18, 2024</div>
      <div class="text-h4 q-mt-sm q-mb-xs">ATV / UTV Topics - Live Crash Testing</div>
      <div class="text-h5 q-mt-sm q-mb-xs">Newton, IA</div>
      <!-- <div class="text-h5 q-mt-sm q-mb-xs"><span class="text-bold">ACTAR Exam</span> - Sunday September 15, 2024 - Applications for this exam are <span class="text-orange-10 text-bold">OPEN and due by Wednesday July 17, 2024</span> Please see the ACTAR <a href="http://actar.org">website</a> for more information.</div> -->
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
        <h6 class="q-pa-none">Attendees that are ACTAR accredited can earn up to <span class="text-red">18 credits</span> for this conference if they login to each session available to them. These credits are <span class="text-bold">NOT</span> automatically awarded by registering for the conference. Please see <a href="http://www.actar.org">ACTAR</a> website for more information!</h6>
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
        <li>Both hotels are close to everything but the Cobblestone is nearest the interstate and the raceway (crash testing), and the Best Western is nearest the DMACC Conference facility.</li>
        <li class="text-bold">Please call these properties directly to get our MATAI 2024 rates. Website links below for room information.</li>
        <li>Cobblestone telephone: <a href="tel:641-275-9495">641.275.9495</a> </li>
        <li>Best Western telephone: <a href="tel:641-792-3333">641.792.3333</a></li>
      </ul>
      <q-btn
        href="https://staycobblestone.com/ia/newton/"
        class="q-my-md col-xs-12"
        unelevated
        size="lg"
        color="green"
        text-color="dark-gray"
        label="Cobblestone Website"
      />
      <br>
      <q-btn
        href="https://www.bestwestern.com/en_US/book/newton/hotel-rooms/best-western-holiday-manor/propertyCode.16108.html"
        class="q-my-md col-xs-12"
        unelevated
        size="lg"
        color="green"
        text-color="dark-gray"
        label="Best Western Newton Website"
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
      <q-card>
        <h3>Printable Conference Brochure (PDF)</h3>
        <q-card-section>
          <q-btn
          href="https://files.matai.org/public/2024_MATAI_Conf_Prog.pdf" target="blank"
          class="q-mb-sm  col-xs-12"
          unelevated
          size="lg"
          color="green"
          text-color="white"
          label="CONF BROCHURE PDF"
        />
        </q-card-section>
      </q-card>
      <br>
    </q-card-section>
    <q-card-section>
      <div class="text-black text-h5 q-mb-md">
        Conference Presenter Bios available in the brochure linked above!
      </div>
      <!-- Presenter COMPONENT -->
      <!-- <Presenter/> -->
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
// import Presenter from '../components/presenter.vue';
import actar from '../components/actar.vue';

export default {
setup () {
return {
  expanded: ref(false),
}
},
components: {

}
}
</script>
