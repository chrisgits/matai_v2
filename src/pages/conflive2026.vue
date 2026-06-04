<template>
  <q-banner dense inline-actions class=" col-xs-12 text-white text-bold text-center bg-green">
    <h5 class="q-ma-none">2026 CONFERENCE is LIVE!</h5>
  </q-banner>

  <div class="justify-center items-start">
    <q-card class="q-pa-xs" flat>
      <div class="row text-center justify-center">
        <div class="col-12 q-px-lg bg-amber">
          <h6>Welcome to FARGO! No current urgent info!</h6>
        </div>
      </div>
    </q-card>
  </div>

  <div class="justify-center items-start">
    <q-card class="q-pa-xs" flat>
      <div class="row text-center justify-center">
        <div class="col-xs-12 col-6 gt-xs">
          <q-img fit="contain" width="40%" class="q-pa-sm q-ma-md" src="../assets/Conf_40@2x.png"/>
        </div>
      </div>
    </q-card>
  </div>

  <!-- SCHEDULE COMPONENT -->
  <ConferenceSchedule :schedule-data="presentations" />
  <!-- SCHEDULE COMPONENT -->

  <section class="text-center">
    <div class="col-xs-12 col-6 gt-xs">
      <q-img fit="contain" width="60%" class="q-pa-sm q-ma-md" src="../assets/hilton_garden_fargo_conf_floor.png"/>
    </div>
    <h4 class="q-pa-sm q-ma-none">VENDORS setup in Lilac Room -- Be sure to visit them!</h4>
    <h4 class="q-pa-sm q-ma-none text-bold">CONFERENCE HOTEL</h4>
    <q-card class="q-pa-md col-xs-12">
      <h4 class="q-ma-xs text-bold">Hilton Garden Inn</h4>
      <h6 class="q-ma-none">Fargo, ND</h6>
      <h5 class="q-ma-xs">#701.499.6000</h5>
      <div class="q-pa-md">
        <q-list bordered>
          <q-item>MATAI Conference Contact</q-item>
          <q-item>Chris Mannel - MATAI - 531-444-9348</q-item>
        </q-list>
      </div>
            <q-card-section>
        <h6 class="q-ma-none q-pa-none">Printable Schedule</h6>
      </q-card-section>

      <q-card-actions class="row justify-center q-ma-none">
        <q-btn
          href="https://files.matai.org/public/2026_MATAI_Conf_Schedule.pdf" target="blank"
          class="q-mb-sm  col-xs-12"
          unelevated
          size="lg"
          color="green"
          text-color="white"
          label="CONF SCHEDULE PDF"
        />
      </q-card-actions>
      <div class="row justify-center q-ma-none q-pa-sm">
          <q-btn
            href="https://maps.app.goo.gl/2rcW8pr4Sk3FpDP86" target="blank"
            class="q-ml-none col-xs-12"
            unelevated
            size="lg"
            color="blue"
            icon="location_on"
            text-color="white"
            label="DoubleTree Hotel"
          />
      </div>
    </q-card>
    <br>
  </section>
  <section class="actar">
    <div class="row justify-center" id="actar">
        <div class="col-xs-4 col-sm-3 q-pa-md">
          <q-img fit="contain" width="100%" class="q-pa-sm q-mt-lg gt-xs" src="../assets/actar.png"/>
        </div>
        <div class="col-xs-12 col-sm-9 q-pa-md text-h6">
          <h3 class="q-ma-none text-red text-bold">Attention!</h3>
          <p>For attendees to receive credit for ACTAR CEUs for this conference you <span class="text-bold text-red">MUST</span> download the i-Attend app for your device and check in to <span class="text-bold">EACH</span> session you attend with the QR code available at the entrance. This is a change and process implemented by ACTAR. Please visit <a href="http://www.actar.org/ceu/earning">www.actar.org/ceu/earning</a> for the details of this change.</p>
          <p>For your convenience here is the <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1b0333fe-f7a7-4cbd-a61a-ae900137cf2b">link</a> to the i-Attend video instructions for the app. If you would like the PDF instructions download it <a href="https://files.matai.org/public/i-attend.pdf">here</a>.</p>
          <h4 class="text-center text-deep-orange text-bold">Credit hours available IF you login to each session as directed.</h4>
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
  <!-- social media links -->
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

<style lang="css" scoped>

/* #jumbo {
  background-image: url("../assets/2024_Conf_Splash.jpg");
  background-color: #686868;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */

.presentation-container {
  animation: fadeIn 1.5s ease-out;
}

.presentation-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.presentation-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #7f8c8d;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 600px) {
  .presentation-title {
    font-size: 2rem;
  }
  .presentation-subtitle {
    font-size: 1.2rem;
  }
}
</style>


<script setup>
import { ref } from 'vue';
import ConferenceSchedule from '../components/ConferenceSchedule.vue';

const presentations = {
'Sunday': [

  { time: '8a - 5p', title: 'ACTAR Exam', type: 'main', room: 'Iris Room' },
  { time: '7:30 PM', title: 'Pre-Conference Registration / Packet Pickup (optional)', type: 'main', room: 'Pre-Function Area' },
  { time: '8:30 PM', title: 'BOD Meeting', speaker: '', type: 'admin', room: 'Iris Room'  },
  { time: '9:30 PM', title: 'Hospitality Room', speaker: '', type: 'activity', room: 'Iris Room' }
],
  'Monday': [
  { time: '7:00 AM', title: 'Conf Registration/Breakfast', speaker: '', type: 'admin', room: 'Orchid Room' },
  { time: '8:00 AM', title: 'Opening Ceremony', speaker: '', type: 'admin', room: 'Rose/Lily Rooms' },
  { time: '9:00 AM', title: 'CMV Crash Testing', speaker: 'Crash Team', type: 'main', room: 'West Fargo Fairgrounds' },
  { time: '10:00 AM', title: 'On-site Breakout Sessions', speaker: '', type: 'main', room: 'West Fargo Fairgrounds'  },
  { time: '12:00 PM', title: 'Lunch', speaker: '', type: 'admin', room: 'Barnyard Bar' },
  { time: '1:00 PM', title: 'CMV Crash Testing', speaker: 'Crash Team', type: 'main', room: 'West Fargo Fairgrounds' },
  { time: '2:00 PM', title: 'On-site Breakout Sessions', speaker: '', type: 'main', room: 'West Fargo Fairgrounds'  },
  { time: '6:00 PM', title: 'Hospitality Room', speaker: '', type: 'activity', room: 'Orchid Room' }
],
'Tuesday': [
  { time: '7:00 AM', title: 'Breakfast', speaker: '', type: 'admin', room: 'Hotel' },
  { time: '8:00 AM', title: 'Federal Driver Regulations/HOS', speaker: 'Trooper J. Anderson', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '9:00 AM', title: 'Heavy Truck Post-Crash Inspections and Scene Considerations', speaker: 'Matthew Brown', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '10:00 AM', title: 'Heavy Truck Braking Systems and Efficiency Calculations', speaker: 'Matthew Brown', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '11:00 AM', title: 'HVEDR/Dash Cams/GPS Systems on CMVs', speaker: 'Chris Mannel', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '12:00 PM', title: 'Lunch', speaker: '', type: 'admin', room: 'Orchid Room' },
  { time: '1:00 PM', title: 'Nighttime Visibility and Retroreflective Striping', speaker: 'William Messerschmidt', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '3:00 PM', title: 'Rotational Mechanics', speaker: 'John Daily', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '5:30 PM', title: 'Evening Activity - Bus Pickup (to Suite Shots)', speaker: '', type: 'activity', room: 'Hotel' },
  { time: '6 - 8 PM', title: 'Evening Activity - Suite Shots - Fargo', speaker: '', type: 'activity', room: 'Suite Shots - Pebble Beach Event Room' },
  { time: '8:00 PM', title: 'Evening Activity - Bus Pickup (back to hotel)', speaker: '', type: 'activity', room: 'Suite Shots' },
  { time: '8:30 PM', title: 'Hospitality Room', speaker: '', type: 'activity', room: 'Orchid Room' }
],
'Wednesday': [
  { time: '7:00 AM', title: 'Breakfast', speaker: '', type: 'admin', room: 'Orchid Room' },
  { time: '8:00 AM', title: 'Calculating Speeds in Trailer Underride Crashes', speaker: 'Scott Skinner', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '9:00 AM', title: 'Previous Underride Crash Testing', speaker: 'Scott Skinner', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '10:00 AM', title: 'Live Crash Test Review', speaker: 'Dave Hallman', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '11:00 AM', title: 'Raffle Drawing / Closing / Colors Retired', speaker: '', type: 'main', room: 'Rose/Lily Rooms' },
  { time: '12:00 PM', title: 'BOD Meeting', speaker: '', type: 'admin', room: 'Iris Room'  }
]
}

</script>

