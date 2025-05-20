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
    <div class="q-pa-lg col-12">
      <img style="width: 100%" class="q-pa-sm" src="../assets/2025_Conf_Splash.jpg">
    </div>
    <q-card class="q-pa-xs flex row" flat>
      <q-card-section class="col-sm-4 col-xs-12 gt-xs">
        <img style="width: 100%" class="q-pa-sm" src="../assets/2025_Conf_Logo.png">
          <q-card-section class="text-black text-center">
            <h6>In Association with:</h6>
            <img style="width: 100%" class="q-pa-sm" src="../assets/seilerPS.png">
            <!-- <q-btn
              unelevated
              to="/conflive24"
              class="q-py-xs q-px-sm q-ml-sm text-black"
              color="green"
              label="conf live!"
              size="lg"
              style="border: black 4px solid"
            /> -->
          </q-card-section>
      </q-card-section>

      <q-card-section class="col-sm-8 col-xs-12">
        <q-banner
            dense
            class="bg-green text-black"
          >
          CONFERENCE REGISTRATION IS OPEN!
        </q-banner>
        <br>
        <div class="text-bold text-h5 text-orange-9">June 9-11, 2025</div>
        <div class="text-h4 q-mt-sm q-mb-xs">RECON TECH SYMPOSIUM</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Wisconsin Dells, WI</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Chula Vista Resort and Water Park</div>
        <img style="width: 30%" class="q-pa-sm" src="../assets/Chula-Logo.png">
        <!-- <div class="text-h5 q-mt-sm q-mb-xs"><span class="text-bold">ACTAR Exam</span> - Sunday September 15, 2024 - Applications for this exam are <span class="text-orange-10 text-bold">OPEN and due by Wednesday July 17, 2024</span> Please see the ACTAR <a href="http://actar.org">website</a> for more information.</div> -->
        <br>
        <br>
        <div class="text-h4 text-red">UPDATED TOPICS / SPEAKERS BELOW!</div>
        <br>
        <div class="text-black text-h6">
          This conference will be focused on technology in crash reconstruction investigations.
          <br>
          <ul>
            <li>Joint Conference with Wisconsin AG Office, TSRP and regional Motor Vehicle Homicide Investigators</li>
            <li>Main presentations for both groups + breakout sessions on numerous tech topics!</li>
            <li>Keep an eye out on this page for more updates and presenter information.</li>
            <li>Great family destination with HUGE waterpark and area activities</li>
          </ul>
          <h6 class="q-pa-none">Attendees that are ACTAR accredited can earn approximately <span class="text-red">18 credits</span> (pending final approval from ACTAR and our schedule) for this conference if they login to each session available to them. These credits are <span class="text-bold">NOT</span> automatically awarded by registering for the conference. Please see <a href="http://www.actar.org">ACTAR</a> website for more information!</h6>
        </div>
        <div class="text-blue text-bold text-h5">Conference Pricing</div>
        <ul>
          <h6 class="q-ma-none">$500 for MATAI Members</h6>
          <h6 class="q-ma-none">$550 for non-members</h6>
        </ul>
        <q-btn
            href="https://momentum.matai.org/collect/description/479287-q-2025-matai-conference-registration-wisconsin-dells-wi" target="blank"
            class="q-ml-none q-mr-sm col-xs-12"
            unelevated
            size="lg"
            color="green"
            text-color="dark-grey"
            label="CONF REGISTRATION"
          />
          <br>
          <br>
          <div class="text-orange-9 text-bold text-h5">WISCONSIN ATTENDEES</div>
        <ul>
          <li class="text-bold">PLEASE VISIT YOUR WI DOJ WILENET for CONF REGISTRATION</li>
        </ul>
        <br>

        <div class="text-blue text-bold text-h5">Hotel Information</div>

        <ul>
          <li>Chula Vista Resort and Waterpark</li>
          <li>Booking at conference rates is OPEN</li>
          <li class="text-bold">Single Room Rate $98</li>
          <li class="text-bold">Double Room Rate $129</li>
          <li class="text-bold text-red">PLEASE CALL HOTEL USING NUMBER BELOW. SPECIAL RATES NOT AVAILABLE THROUGH WEBSITE!</li>
          <li class="text-red text-bold">Phone for reservations: <H5 class="q-ma-none"><a href="tel:833-495-4218">833.495.4218</a></H5> </li>
          <li>Booking ID used for room rates</li>
            <h6 class="q-ma-none text-bold">K86714 Midwest Assn of Technical Accident Investigators</h6>
          <li>We have secured an agreement with the hotel including NO resort fees. Please make sure this is the case in your reservation.</li>
        </ul>
        <q-btn
          href="https://chulavistaresort.com/"
          class="q-my-md col-xs-12"
          unelevated
          size="lg"
          color="green"
          text-color="dark-gray"
          label="Chula Vista Hotel Info"
        />
      </q-card-section>

    </q-card>
  </div>
  <!-- CONFERENCE SCHEDULE COMPONENT INSERTED HERE -->
  <ConferenceSchedule :schedule-data="presentations" />
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
  { time: '7:00 AM', title: 'Registration/Breakfast', speaker: 'David Maas', type: 'break' },
  { time: '8:00 AM', title: 'Opening Ceremony', speaker: '', type: 'break' },
  { time: '8:15 AM', title: 'Recent Issues in Digital Evidence Warrants', speaker: 'David Maas', type: 'main' },
  { time: '10:15 AM', title: 'Morning Break', speaker: '', type: 'break' },
  { time: '10:30 AM', title: 'Integrated Workflow of Drone, Pix4D Photogrammetry and Lidar Scanning Processes in Scene Evidence Collection - Introduction of Blender 3D Software Tool Integration', speaker: 'Chris Starrett \/ Chris Mannel', type: 'main' },
  { time: '12:30 PM', title: 'LUNCH PROVIDED', speaker: '', type: 'break' },
  { time: '1:30 PM', title: 'EDR Updates', speaker: 'Jon Northrup', type: 'main' },
  { time: '3:30 PM', title: 'Afternoon Break', speaker: '', type: 'break'  },
  { time: '3:45 PM', title: 'Panel Discussion - TECH - FROM SCENE TO COURTROOM - How Does Data Collection Translate to a Prosecutable Case?', speaker: 'AAG Tara Jenswold. AAG Emily Thompson, Chris Mannel, Dave Hallman, Chris Starrett, Jon Northrop', type: 'main' }
],
'Tuesday': [
  { time: '7:00 AM', title: 'Breakfast', speaker: '', type: 'main', type: 'break' },
  { time: '8:00 AM', title: 'Identifying Counterfeit & Non-OEM Airbags in Crash Investigations with Case Study', speaker: 'Thomas Nichols – Global Brand Protection Specialist, General Motors and Automotive Anti-Counterfeiting Council and Thomas Erdmann – Forensic Specialist Seiler Public Safety', type: 'main' },
  { time: '10:00 AM', title: 'Morning Break', speaker: '', type: 'break'  },
  { time: '10:15 AM',title: 'I\'m at the Crash, What Do I Need? Gathering Evidence and Preparing for Potential Prosecution', speaker: 'AAG Tara Jenswold, AAG Emily Thompson, Trooper Tracy Drager – Wisconsin State Patrol and Deputy Tim Dexter - Washington County Sheriff’s Office', type: 'TSRP'},
  { time: '10:15 AM',title: 'Sketchup 3D Modeling for Crash Recon', speaker: 'MATAI Breakout - Bryce Adams', type: 'MATAI' },
  { time: '12:30 PM', title: 'LUNCH PROVIDED', speaker: '', type: 'break'  },
  { time: '1:15 or 2:30 PM', title: 'Video Analysis through Axon Software and Case Study', speaker: 'Special Agent Justin Bender – Wisconsin DCI- and Tilo Voitel – Denver Metro Forensics LLC', type: 'breakout' },
  { time: '1:15 or 2:30 PM', title: 'It\'s Not Just Texting Anymore: What Can You Get From the Phone?', speaker: 'AAG Tara Jenswold and AAG Emily Thompson and Detective Jeff Nocchi – Eau Claire County Sheriff\’s Office', type: 'breakout' },
  { time: '1:15 or 2:30 PM', title: 'Using Tech to Leverage Fundamental Evidence Collection at Crash Scenes and Creating Deliverables for Court ', speaker: 'Lt. Hunter Martin, Kentucky State Police', type: 'breakout' },
  { time: '1:15 or 2:30 PM', title: 'WSP - Avoiding Spoilation of Electronic Evidence in CMV Crashes', speaker: 'Inspector Ryan Schultz and Inspector Colton Fields – Wisconsin State Patrol', type: 'breakout' }
],
'Wednesday': [
  { time: '7:00 AM', title: 'Breakfast', speaker: '', type: 'break' },
  { time: '8:00 or 9:15 AM', title: 'Electric Vehicle Safety for First Responders', speaker: 'Breakout - Jeff Gross', type: 'breakout' },
  { time: '8:00 or 9:15 AM', title: 'Drone Comparison, Best Fit Methodology and Current Tech Advances', speaker: 'Adam Johnston -Forensic Specialist Seiler Public Safety', type: 'breakout' },
  { time: '8:00 or 9:15 AM', title: 'Testimony Training - Tips and Common Challenges, From Basic to Expert', speaker: 'AAGs Tara Jenswold and Emily Thompson', type: 'breakout' },
  { time: '10:30 AM', title: 'Full Session Closing and Release', speaker: 'MATAI and TSRP Representatives', type: 'main' },
]
}

</script>

