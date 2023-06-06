<template>
    <!-- <q-banner dense inline-actions class=" col-xs-12 text-white text-center bg-green">
      2023 CONFERENCE IS LIVE
    </q-banner> -->
    <div class="row justify-center items-start q-gutter-md">
      <q-card class="q-pa-xs" flat>
        <div class="row text-center justify-center">
          <!-- <div class="text-h2 text-center q-mt-sm q-mb-xs"><p>2022 Conference is <span class="text-green text-bold">LIVE!</span></p></div> -->
          <div class="col-xs-12 col-6 lt-sm">
            <q-img fit="contain" width="50%" class="q-pa-sm q-ma-md" src="../assets/2022_falltrain@6x.png"/>
          </div>
          <div class="col-xs-12 col-6 gt-xs">
            <q-img fit="contain" width="40%" class="q-pa-sm q-ma-md" src="../assets/2022_falltrain@6x.png"/>
          </div>
        </div>
        <q-card-section>
          <div class="text-bold text-h5 text-orange-9">September 12-14, 2022 <br><span class="text-red-10">COMPLETED</span></div>
          <div class="text-h4 q-mt-sm q-mb-xs">Commercial Motor Vehicle Topics</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Des Moines, IA</div>
        </q-card-section>

        <q-card-actions class="row justify-center q-ma-none">
          <q-btn
            href="https://files.matai.org/public/2022_MATAI_Conf_Program.pdf" target="blank"
            class="q-mb-sm  col-xs-12"
            unelevated
            size="lg"
            color="green"
            text-color="white"
            label="CONF BROCHURE PDF"
          />
        </q-card-actions>
        <div class="row justify-center q-ma-none q-pa-sm">
          <q-btn
              href="https://www.google.com/maps/place/Prairie+Meadows+Casino,+Racetrack,+%26+Hotel/@41.6545048,-93.4930985,17z/data=!3m1!4b1!4m8!3m7!1s0x87ee93c4ee30aa63:0x36dc2b61db51851a!5m2!4m1!1i2!8m2!3d41.6545008!4d-93.4909045" target="blank"
              class="q-mb-sm q-ml-none col-xs-12"
              unelevated
              size="lg"
              color="blue"
              icon="location_on"
              text-color="white"
              label="HOTEL"
            />
            <q-btn
              href="https://www.google.com/maps/place/Iowa+Speedway/@41.6768427,-93.0131922,17z/data=!3m1!4b1!4m5!3m4!1s0x87ef1b22825f07e3:0x7e6fd16dea43ebae!8m2!3d41.6768427!4d-93.0110035" target="blank"
              class="q-ml-none col-xs-12"
              unelevated
              size="lg"
              color="blue"
              icon="location_on"
              text-color="white"
              label="IOWA SPEEDWAY"
            />
        </div>
        <h6 class="q-ma-sm">Group transportation will be provided by bus to the speedway.</h6>
      </q-card>

      <!-- SCHEDULE COMPONENT -->
      <schedule />
      <!-- SCHEDULE COMPONENT -->
    </div>
    <section class="text-center">
      <h4 class="q-pa-sm q-ma-none">IMPORTANT LOCATIONS</h4>
      <q-card class="q-pa-md col-xs-12">
        <h4 style="color: red; font-weight: bold;" class="q-ma-none">LOCATION CHANGE!!</h4>
        <h4 class="text-bold">Iowa Speedway</h4>
        <p class="text-bold text-red">TRANSPORTATION PROVIDED BY BUS from HOTEL</p>
        <div class="q-pa-md">
          <q-list bordered>
            <q-item><h5>CTA Classroom and Crash Testing Site</h5></q-item>
            <q-item><h5>3333 Rusty Wallace Dr, Newton, IA 50208</h5></q-item>
          </q-list>
        </div>

        <q-card-actions class="row justify-center">
            <q-btn
              href="https://www.google.com/maps/place/Iowa+Speedway/@41.6768427,-93.0131922,17z/data=!3m1!4b1!4m5!3m4!1s0x87ef1b22825f07e3:0x7e6fd16dea43ebae!8m2!3d41.6768427!4d-93.0110035" target="blank"
              class="col-xs-12 col-sm-6"
              unelevated
              size="lg"
              color="blue"
              icon="location_on"
              text-color="white"
              label="IOWA SPEEDWAY"
            />
          </q-card-actions>
      </q-card>
      <q-card class="q-pa-md">
        <h5 class="text-bold">Prairie Meadows Casino, Racetrack and Hotel</h5>
        <q-list bordered>
          <q-item><h5>Conference Presentations and Lodging</h5></q-item>
          <q-item><h5>1 Prairie Meadows Dr, Altoona, IA 50009</h5></q-item>
        </q-list>
        <q-card-actions class="row justify-center">
            <q-btn
              href="https://www.google.com/maps/place/Prairie+Meadows+Casino,+Racetrack,+%26+Hotel/@41.6545048,-93.4930985,17z/data=!3m1!4b1!4m8!3m7!1s0x87ee93c4ee30aa63:0x36dc2b61db51851a!5m2!4m1!1i2!8m2!3d41.6545008!4d-93.4909045" target="blank"
              class="col-xs-12 col-sm-6"
              unelevated
              size="lg"
              color="blue"
              icon="location_on"
              text-color="white"
              label="HOTEL"
            />
          </q-card-actions>
      </q-card>
      <br>
    </section>
    <br><br>
    <section>
      <div class="row justify-center" id="actar">
          <div class="col-xs-4 col-sm-3 q-pa-md">
            <q-img  class="q-pa-sm q-mt-lg gt-xs" src="../assets/actar.png"/>
          </div>
          <div class="col-xs-12 col-sm-9 q-pa-md text-h6">
            <h5 class="q-ma-none text-bold">Attention!</h5>
            <p>For attendees to receive credit for ACTAR CEUs for this conference you must download the i-Attend app for your device and check in to each session you attend with the QR code available at the entrance. This is a change and process implemented by ACTAR. Please visit <a href="www.actar.org/ceu/earning">www.actar.org/ceu/earning</a> for the details of this change.</p>
            <p>For your convenience here is the <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1b0333fe-f7a7-4cbd-a61a-ae900137cf2b">link</a> to the i-Attend video instructions for the app. If you would like the PDF instructions download it <a href="https://files.matai.org/public/i-attend.pdf">here</a>.</p>
          </div>
          <q-card-actions class="col-xs-12 col-sm-6">
            <q-btn
              href="https://apps.apple.com/us/app/i-attend-self-check-in/id1421201302" target="blank"
              class="q-my-sm col-xs-12"
              unelevated
              size="lg"
              color="blue"
              icon="apple"
              text-color="white"
              label="i-ATTEND iOS APP"
            />
          </q-card-actions>
          <q-card-actions class="col-xs-12 col-sm-6">
            <q-btn
              href="https://play.google.com/store/apps/details?id=com.tnetic.iselfcheck&hl=en_US&gl=US" target="blank"
              class="q-my-sm col-xs-12"
              unelevated
              size="lg"
              color="blue"
              icon="android"
              text-color="white"
              label="i-ATTEND APP"
            />
          </q-card-actions>
        </div>
    </section>
    <!-- social media links -->
    <section>
      <q-card class="q-pa-md">
        <h5 class="text-bold">SOCIAL MEDIA / LINKS</h5>
        <q-card-actions class="row justify-center">
            <q-btn
              href="https://www.youtube.com/channel/UCvLubrvZf15Zm4-ioYWlYHg" target="blank"
              class="col-xs-12 col-sm-6"
              unelevated
              icon="fab fa-youtube-square fa-2x"
              size="lg"
              color="red"
              text-color="white"
              label="MATAI YOUTUBE"
            />
          </q-card-actions>
          <q-card-actions class="row justify-center">
            <q-btn
              href="https://www.facebook.com/Midwest-Association-of-Technical-Accident-Investigators-1513079988957586/" target="blank"
              class="col-xs-12 col-sm-6"
              unelevated
              icon="fab fa-facebook-square fa-2x"
              size="lg"
              color="blue"
              text-color="white"
              label="MATAI facebook"
            />
          </q-card-actions>
      </q-card>
    </section>
  </template>

  <style lang="sass" scoped>

  .rounded
    border-radius: 10px

  </style>


  <script>
  import { ref } from 'vue';
  import Schedule from '../components/schedule.vue';

  export default {
    setup () {
      return {
        expanded: ref(false),
      }
    },
    components: {
    Schedule
  }
  }
  </script>
