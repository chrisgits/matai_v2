<template>
  <q-banner dense inline-actions class=" col-xs-12 text-white text-bold text-center bg-green">
    <h5 class="q-ma-none">2025 CONFERENCE is LIVE!</h5>
  </q-banner>

  <div class="justify-center items-start">
    <q-card class="q-pa-xs" flat>
      <div class="row text-center justify-center">
        <div class="col-12 q-px-lg bg-amber">
          <h6>Conference registration will be held in the conference center lobby/entry area. Any urgent conference updates will be posted on this page so check back when you can! We will see everyone Monday morning! Good luck to all ACTAR exam takers!</h6>
        </div>
      </div>
    </q-card>
  </div>

  <div class="justify-center items-start">
    <q-card class="q-pa-xs" flat>
      <div class="row text-center justify-center">
        <div class="col-xs-12 col-6 lt-sm">
          <q-img fit="contain" width="100%" class="q-pa-sm q-ma-md" src="../assets/2025_Conf_Splash.jpg"/>
        </div>
        <div class="col-xs-12 col-6 gt-xs">
          <q-img fit="contain" width="40%" class="q-pa-sm q-ma-md" src="../assets/2025_Conf_Logo.png"/>
        </div>
      </div>
    </q-card>
  </div>

  <!-- SCHEDULE COMPONENT -->
  <ConferenceSchedule :schedule-data="presentations" />
  <!-- SCHEDULE COMPONENT -->

  <section class="text-center">
    <h4 class="q-pa-sm q-ma-none">CONFERENCE HOTEL</h4>
    <q-card class="q-pa-md col-xs-12">
      <h4 class="text-bold">Chula Vista Hotel</h4>
      <h6 class="q-ma-none">1000 Chula Vista Pkwy, Wisconsin Dells, WI 53965</h6>
      <h5 class="q-ma-xs">+16086783119</h5>
      <div class="q-pa-md">
        <q-list bordered>
          <q-item>MATAI Conference Contact</q-item>
          <q-item>Chris Mannel - MATAI VP - 531-444-9348</q-item>
        </q-list>
      </div>
            <q-card-section>
        <h6 class="q-ma-none q-pa-none">Printable Schedule</h6>
      </q-card-section>

      <q-card-actions class="row justify-center q-ma-none">
        <q-btn
          href="https://files.matai.org/public/2025_MATAI_Conf_Schedule.pdf" target="blank"
          class="q-mb-sm  col-xs-12"
          unelevated
          size="lg"
          color="green"
          text-color="white"
          label="CONF SCHEDULE and FACILITY MAP PDF"
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
            label="CHULA VISTA HOTEL"
          />
      </div>
    </q-card>
    <br>
  </section>
  <br><br>
  <section>
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
'Monday': [
  { time: '7:00 AM', title: 'Registration/Breakfast', speaker: '', type: 'break', room: 'Meal Room/Entry Area' },
  { time: '8:00 AM', title: 'Opening Ceremony', speaker: '', type: 'break', room: 'Grand Ballroom' },
  { time: '8:15 AM', title: 'Recent Issues in Digital Evidence Warrants', speaker: 'David Maas', type: 'main', room: 'Grand Ballroom' },
  { time: '10:15 AM', title: 'Morning Break', speaker: '', type: 'break', room: 'Entry Area' },
  { time: '10:30 AM', title: 'Integrated Workflow of Drone, Pix4D Photogrammetry and Lidar Scanning Processes in Scene Evidence Collection - Introduction of Blender 3D Software Tool Integration', speaker: 'Chris Starrett \/ Chris Mannel', type: 'main', room: 'Grand Ballroom' },
  { time: '12:30 PM', title: 'LUNCH PROVIDED', speaker: '', type: 'break', room: 'Meal Room' },
  { time: '1:30 PM', title: 'EDR Updates', speaker: 'Jon Northrup', type: 'main', room: 'Grand Ballroom' },
  { time: '3:30 PM', title: 'Afternoon Break', speaker: '', type: 'break', room: 'Entry Area'  },
  { time: '3:45 PM', title: 'Panel Discussion - Technology: From Scene to Courtroom: Effective Presentation of Tech Evidence in Court', speaker: 'AAG Tara Jenswold. AAG Emily Thompson, Chris Mannel, Dave Hallman, Chris Starrett, Jon Northrop', type: 'main', room: 'Grand Ballroom' }
],
'Tuesday': [
  { time: '7:00 AM', title: 'Breakfast', speaker: '', type: 'main', type: 'break', room: 'Meal Room' },
  { time: '8:00 AM', title: 'Identifying Counterfeit & Non-OEM Airbags in Crash Investigations with Case Study', speaker: 'Thomas Nichols – Global Brand Protection Specialist, General Motors and Automotive Anti-Counterfeiting Council and Thomas Erdmann – Forensic Specialist Seiler Public Safety', type: 'main', room: 'Grand Ballroom' },
  { time: '10:00 AM', title: 'Morning Break', speaker: '', type: 'break', room: 'Entry Area'  },
  { time: '10:15 AM',title: 'I\'m at the Crash, What Do I Need? Gathering Evidence and Preparing for Potential Prosecution', speaker: 'AAG Tara Jenswold, AAG Emily Thompson, Trooper Tracy Drager – Wisconsin State Patrol and Deputy Tim Dexter - Washington County Sheriff’s Office', type: 'TSRP', room: 'Grand Ballroom'},
  { time: '10:15 AM',title: 'Sketchup 3D Modeling for Crash Recon', speaker: 'MATAI Breakout - Bryce Adams', type: 'MATAI', room: 'Upper Dells Ballroom' },
  { time: '12:30 PM', title: 'LUNCH PROVIDED', speaker: '', type: 'break', room: 'Meal Room'  },
  { time: '1:15 or 2:30 PM', title: 'Video Analysis through Axon Software and Case Study', speaker: 'Special Agent Justin Bender – Wisconsin DCI- and Tilo Voitel – Denver Metro Forensics LLC', type: 'breakout', room: 'Upper Dells Ballroom' },
  { time: '1:15 or 2:30 PM', title: 'It\'s Not Just Texting Anymore: What Can You Get From the Phone?', speaker: 'AAG Tara Jenswold and AAG Emily Thompson and Detective Jeff Nocchi – Eau Claire County Sheriff\’s Office', type: 'breakout', room: 'Grand Ballroom' },
  { time: '1:15 or 2:30 PM', title: 'Using Tech to Leverage Fundamental Evidence Collection at Crash Scenes and Creating Deliverables for Court ', speaker: 'Lt. Hunter Martin, Kentucky State Police', type: 'breakout', room: 'Breakout G & H' },
  { time: '1:15 or 2:30 PM', title: 'WSP - Avoiding Spoilation of Electronic Evidence in CMV Crashes', speaker: 'Inspector Ryan Schultz and Inspector Colton Fields – Wisconsin State Patrol', type: 'breakout', room: 'Breakout I' },
  { time: '4:30 - 7:30 PM', title: 'Seiler Sponsored Conference Attendee and Customer Appreciation Cookout', speaker: '', type: 'main', room: 'Kilbourne Fireman\'s Park' },
],
'Wednesday': [
  { time: '7:00 AM', title: 'Breakfast', speaker: '', type: 'break', room: 'Meal Room' },
  { time: '8:00 or 9:15 AM', title: 'Electric Vehicle Safety for First Responders', speaker: 'Breakout - Jeff Gross', type: 'breakout', room: 'Upper Dells Ballroom' },
  { time: '8:00 or 9:15 AM', title: 'Drone Comparison, Best Fit Methodology and Current Tech Advances', speaker: 'Adam Johnston -Forensic Specialist Seiler Public Safety', type: 'breakout', room: 'Breakout G & H' },
  { time: '8:00 or 9:15 AM', title: 'Testimony Training - Tips and Common Challenges, From Basic to Expert', speaker: 'AAGs Tara Jenswold and Emily Thompson', type: 'breakout', room: 'Grand Ballroom' },
  { time: '10:30 AM', title: 'Full Session Closing and Release', speaker: 'MATAI and TSRP Representatives', type: 'main', room: 'Grand Ballroom' },
]
}

</script>

