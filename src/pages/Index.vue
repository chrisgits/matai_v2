<template>
  <div class="q-px-none">
    <div id="jumbo" class="q-pa-lg  text-center">
      <h3>MIDWEST ASSOCIATION OF TECHNICAL ACCIDENT INVESTIGATORS</h3>
      <h5 style="color: #1a1a1a">FOR THE ADVANCEMENT OF MOTOR VEHICLE CRASH INVESTIGATION</h5>
      <div class="flex flex-center q-pb-lg">
        <q-btn
          to="/join"
          unelevated
          class="q-py-md q-px-lg"
          color="accent"
          label="join now"
          text-color="black"
        />
        <q-btn
          to="/about"
          outline
          class="q-ml-xs q-py-md q-px-lg"
          color="#1a1a1a"
          label="learn more"
        />
        <q-btn
          to="/members"
          outline
          class="bg-primary q-ml-xs q-py-md q-px-lg"
          color="white"
          label="members"
        />
      </div>
    </div>

    <div>
      <div>
          <div class="text-center">
            <div class="text-uppercase text-h3 q-pa-lg">upcoming events</div>
          </div>
          <!-- upcoming training cards -->
          <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-4 gt-xs">
                    <img style="width: 100%" class="q-pa-sm" src="../assets/2022_falltrain@6x.png">
                  </q-card-section>
                  <q-card-section class="col-xs-12 col-sm-8">
                    <div class="text-h4">2022 FALL CONFERENCE</div>
                    <div class="text-h5">September 12-14, 2022</div>
                    <div class="text-h6">Des Moines, IA</div>
                    <br>
                    <div class="text-body1">This training will be hosted in Des Moines, IA by the Iowa State Patrol. This conference will be centered on the topic of Commercial Motor Vehicles and will include live crash testing as well as presentations from industry experts.</div>
                    <q-btn
                      unelevated
                      class="q-my-md q-mr-md q-px-lg q-pa-md"
                      color="grey"
                      label="registration live soon"
                      text-color="white"
                    />
                    <q-btn
                      to="/confinfo"
                      unelevated
                      class="q-my-md q-px-lg q-pa-md"
                      color="blue"
                      label="more info"
                      text-color="white"
                    />
                  </q-card-section>
                </div>
              </q-card>
          </div>
          <div>
            <div class="text-center">
              <div class="text-uppercase text-h3 q-pa-lg">past events</div>
            </div>
            <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-4 gt-xs">
                      <img style="width: 100%" class="q-pa-sm" src="../assets/SpringTraining2022.png">
                  </q-card-section>
                  <q-card-section class="col-xs-12 col-sm-8">
                    <div class="text-h4">SPRING TRAINING 2022 <span class="text-green-10">COMPLETED</span></div>
                    <div class="text-h5 text-blue-10">Forensic Visibility Analysis and Nighttime Mapping Techniques</div>
                    <div class="text-h5">March 28-30, 2022</div>
                    <div class="text-h6 ">Green Bay, WI</div>
                    <q-btn
                      to="/springtraining"
                      unelevated
                      class="q-my-md q-px-lg q-pa-md"
                      color="blue"
                      label="more info"
                      text-color="white"
                    />
                  </q-card-section>
                </div>
              </q-card>
            </div>
          </div>
          <!--training section-->
          <div class="row wrap justify-evenly">
            <div class="col-12 col-md-12 q-pa-md items-start q-gutter-md">
              <h3>Welcome to MATAI</h3>
              <h5>The <strong>Midwest Association of Technical Accident Investigators</strong>, MATAI, was formed to provide a professional affiliation of individuals dedicated to advancement in the technical aspects of motor vehicle traffic accident investigations.</h5>
              <h5>Check back often as we update our new site with more content for members and visitors alike.</h5>
              <h5>We look foward to interacting with our membership as well as presenting material relevant to the field of crash investigation for visitors from around the globe.</h5>
            </div>
        </div>
        <div class="q-pa-md">
          <q-video
          :ratio="16/9"
            src="https://www.youtube.com/embed/4XfUUX31Ieo?rel=0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.constrain {
  padding: 0px;
}
/* br {
  margin-top: 1em;
} */

h3 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding: 0px;
  margin-top: 0px 0px;
}
/* webpackIgnore: true */
#jumbo {
  background-image: url("../assets/img/buscrash2.jpg");
  background-color: #686868;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
})
</script>
