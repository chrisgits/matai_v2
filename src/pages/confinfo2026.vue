<template>
    <!-- <q-banner
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
  </q-banner> -->
  <div class="row justify-center">
    <!-- <div class="q-pa-lg col-12">
      <img style="width: 100%" class="q-pa-sm" src="../assets/2025_Conf_Splash.jpg">
    </div> -->
    <q-card class="q-pa-xs flex row" flat>
      <q-card-section class="col-sm-4 col-xs-12 gt-xs">
        <img style="width: 100%" class="q-pa-sm" src="../assets/Conf_40@2x.png">
          <!-- <q-card-section class="text-black text-center">
            <h6>In Association with:</h6>
            <img style="width: 100%" class="q-pa-sm" src="../assets/seilerPS.png">
            <q-btn
              unelevated
              to="/conflive24"
              class="q-py-xs q-px-sm q-ml-sm text-black"
              color="green"
              label="conf live!"
              size="lg"
              style="border: black 4px solid"
            />
          </q-card-section> -->
      </q-card-section>

      <q-card-section class="col-sm-8 col-xs-12">
        <!-- <q-banner
            dense
            class="bg-green text-black"
          >
          CONFERENCE REGISTRATION IS OPEN!
        </q-banner> -->
        <br>
        <div class="text-bold text-h5 text-orange-9">June 8 - 10, 2026</div>
        <div class="text-h4 q-mt-sm q-mb-xs">HEAVY TRUCK TOPICS</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Fargo, ND</div>
        <!-- <div class="text-h5 q-mt-sm q-mb-xs">Hilton Hotels, Fargo</div> -->
        <!-- <img style="width: 30%" class="q-pa-sm" src="../assets/Chula-Logo.png"> -->
        <!-- <div class="text-h5 q-mt-sm q-mb-xs"><span class="text-bold">ACTAR Exam</span> - Sunday September 15, 2024 - Applications for this exam are <span class="text-orange-10 text-bold">OPEN and due by Wednesday July 17, 2024</span> Please see the ACTAR <a href="http://actar.org">website</a> for more information.</div> -->
        <br>
        <br>
        <!-- <div class="text-h4 text-red">UPDATED TOPICS / SPEAKERS BELOW!</div> -->
        <br>
        <div class="text-black text-h6">
          This conference will be focused on heavy truck/CMV involved crash investigations.
          <br>
          <ul>
            <li>Celebrating the MATAI organization's 40th Anniversary!</li>
            <li>We don't have Far2Go to make it another 40 years!</li>
          </ul>
          <h6 class="q-pa-none">Attendees that are ACTAR accredited can earn approximately <span class="text-red">20 credits</span> (pending final approval from ACTAR and our schedule) for this conference if they login to each session available to them. These credits are <span class="text-bold">NOT</span> automatically awarded by registering for the conference. Please see <a href="http://www.actar.org">ACTAR</a> website for more information!</h6>
        </div>
        <div class="text-blue text-bold text-h5">Conference Pricing</div>
        <ul>
          <h5 class="q-ma-none">Early Registration</h5>
          <h6 class="q-ma-none text-blue">$500 for MATAI Members</h6>
          <h6 class="q-ma-none text-orange-10">$600 for non-members</h6>
          <h5 class="q-my-sm text-red-10">Late Registration After April 15th!</h5>
          <h6 class="q-ma-none">$650 for non-members</h6>
          <h6 class="text-bold text-red-10 q-ma-none">Hotel Conference Room Rate available until May 7th.</h6>
          <q-btn
            href="https://momentum.matai.org/collect/description/663946-q-2026-matai-conference-registration-fargo-nd" target="blank"
            class="q-ml-none q-mr-sm col-xs-12"
            unelevated
            size="lg"
            color="green"
            text-color="dark-grey"
            label="CONF REGISTRATION OPEN"
          />
        </ul>

        <br>
        <div class="q-mt-lg text-blue text-bold text-h5">Hotel Information</div>
        <ul>
          <h5 class="q-my-sm">Hilton Garden Inn - Fargo</h5>
          <h5 class="q-my-sm">Booking at conference rates is <span class="text-green text-bold">OPEN</span></h5>
          <h6 class="q-my-sm text-bold">King or Queen Special Rate $115/night</h6>
          <h6 class="q-my-sm text-bold text-red">RATES ALSO AVAILABLE THROUGH THIS LINK ONLY:</h6>
          <q-btn
            href="https://www.hilton.com/en/attend-my-event/fargigi-910-5fbe8f8d-c92c-46ad-b2b6-6afbe32d39fa/" target="blank"
            class="q-ml-none q-mr-sm col-xs-12"
            unelevated
            size="lg"
            color="green"
            text-color="dark-grey"
            label="HOTEL GROUP RATE"
          />
          <h6 class="q-my-sm text-bold">OR direct phone number for reservations: <H5 class="q-ma-none"><a href="tel:701.499.6000">701.499.6000</a></H5> </h6>
          <h6 class="q-my-sm">Group Name used for Conference room rate: </h6>
            <h5 class="q-ma-none text-bold">MATAI</h5>
          <!-- <li>We have secured an agreement with the hotel including NO resort fees. Please make sure this is the case in your reservation.</li> -->
        </ul>
      </q-card-section>

    </q-card>
  </div>
  <!-- CONFERENCE SCHEDULE COMPONENT INSERTED HERE -->
  <!-- <ConferenceSchedule :schedule-data="presentations" /> -->
    <!-- turn on actar component once ready -->
  <!-- <actar/> -->
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


// import Presenter from '../components/presenter.vue';
// import actar from '../components/actar.vue';


<script setup>
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

