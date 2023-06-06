<template>
  <div class="q-px-none">
    <div class="q-mt-none q-pb-lg">
      <!-- <q-banner dense inline-actions class=" col-xs-12 text-white text-center bg-green q-pa-lg">
        ADD COUNTER BACK WHEN NEEDED!
        <Counter/>
    </q-banner> -->
    <q-banner dense inline-actions class=" col-xs-12 text-white text-center bg-orange q-pa-md">
      <h4 class="q-ma-none text-black">Conf 2023 Dates! September 18 - 20th</h4>
    </q-banner>
    </div>
    <div id="jumbo" class="q-pa-lg  text-center text-black">
      <h3>MIDWEST ASSOCIATION OF TECHNICAL ACCIDENT INVESTIGATORS</h3>
      <h5 style="color: #1a1a1a">FOR THE ADVANCEMENT OF MOTOR VEHICLE CRASH INVESTIGATION</h5>
      <div class="flex flex-center q-pb-lg">
        <q-btn
          to="/join"
          unelevated
          class="q-py-md q-px-lg text-weight-bolder"
          color="green"
          label="join now"
          text-color="black"
        />
        <q-btn
          to="/about"
          outline
          class="q-ml-xs q-py-md q-px-lg text-weight-bolder"
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
          <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-4 gt-xs">
                    <img style="width: 100%" class="q-pa-sm" src="../assets/img/2023Conf.png">
                  </q-card-section>
                  <q-card-section class="col-xs-12 col-sm-8">
                    <div class="text-h4 text-green-10">NEW</div>
                    <div class="text-h5 text-bold text-blue-10">2023 MATAI FALL CONFERENCE</div>
                    <div class="text-h2 text-bold">BACK TO THE BASICS</div>
                    <div class="text-h5">September 18 - 20, 2023</div>
                    <div class="text-h6 ">Des Moines, IA</div>
                    <q-btn
                      to="/confinfo"
                      unelevated
                      class="q-my-md q-px-lg q-pa-md"
                      color="orange"
                      label="conf info"
                      text-color="black"
                    />
                  </q-card-section>
                </div>
              </q-card>
            </div>
          <!-- training cards -->
          <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">
          <div class="q-pa-md">
            <q-video
            :ratio="16/9"
              src="https://www.youtube.com/embed/i_we7VvWqr0"
            />
          </div>

          </div>
          <div class="q-mb-lg">
            <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row text-center justify-center">
                  <q-card-section class="col-xs-12 col-sm-10">
                    <div class="text-h4 text-orange text-center">2022 Conference Crash Videos now Online</div>
                    <div class="text-h5 text-bold text-blue-10 text-center">Check out MATAI's YouTube Channel and Playlists to see the compiled videos from last year's conference crash testing</div>
                    <q-btn
                      href="https://www.youtube.com/channel/UCvLubrvZf15Zm4-ioYWlYHg"
                      unelevated
                      class="q-my-md q-px-lg q-pa-md"
                      color="blue"
                      label="MATAI YouTube Channel"
                      text-color="white"
                    />
                  </q-card-section>
                </div>
              </q-card>
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-xs-12 col-sm-10">
                    <div class="text-h5 text-bold text-blue-10">Please submit training ideas to your Board Members!</div>
                    <q-btn
                      to="/about"
                      unelevated
                      class="q-my-md q-px-lg q-pa-md"
                      color="blue"
                      label="MATAI Board Contact"
                      text-color="white"
                    />
                    <div class="text-h5 text-bold text-blue-10">Be on the lookout for your email newsletter and upcoming membership survey!</div>
                    <br>
                    <div class="text-h6 text-bold text-orange-10">The data from the 2022 Conference is available under the members section! If you are not a member and attended this year's Conference you should have received an email with the link. If not please contact <a href="mailto:admin@matai.org">admin@matai.org</a>. Thank you!</div>
                  </q-card-section>
                </div>
              </q-card>
            </div>
          </div>
          <q-separator inset />
          <!-- past events section -->
          <div class="q-border-top">
            <div class="text-center">
              <div class="text-uppercase text-h3 q-pa-lg">past events</div>
            </div>
            <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-xs-12 col-sm-8">
                    <div class="text-h4 text-red-10">COMPLETED</div>
                    <div class="text-h5 text-bold text-blue-10">Optics, Lighting and Visibility for the Forensic Investigator</div>
                    <div class="text-h5">October 10-12, 2022</div>
                    <div class="text-h6 ">Lincoln, Nebraska</div>
                    <q-btn
                      to="/optics-training"
                      unelevated
                      class="q-my-md q-px-lg q-pa-md"
                      color="blue"
                      label="more info"
                      text-color="white"
                    />
                  </q-card-section>
                </div>
              </q-card>
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-4 gt-xs">
                    <img style="width: 100%" class="q-pa-sm" src="../assets/2022_falltrain@6x.png">
                  </q-card-section>
                  <q-card-section class="col-xs-12 col-sm-8">
                    <div class="text-h4">2022 FALL CONFERENCE<br>
                      <span class="text-red-10">COMPLETED</span></div>
                    <div class="text-h5">September 12-14, 2022</div>
                    <div class="text-h6">Des Moines, IA</div>
                    <br>
                    <div class="text-body1 text-orange-10">Crash Testing Data now available. Members - login to the <a href="/members">members</a> section or email <a href="mailto:admin@matai.org">admin@matai.org</a> if you attended and did not receive the emailed link.</div>
                    <div class="text-body1">This training will be hosted in Des Moines, IA by the Iowa State Patrol. This conference will be centered on the topic of Commercial Motor Vehicles and will include live crash testing as well as presentations from industry experts.</div>
                    <q-btn
                      to="/confinfo2022"
                      unelevated
                      class="q-my-md q-px-lg q-pa-md"
                      color="blue"
                      label="more info"
                      text-color="white"
                    />
                    <!-- <q-btn
                      unelevated
                      to="/conflive"
                      class="q-py-xs q-px-sm q-ml-sm text-black"
                      color="accent"
                      label="conf live!"
                      size="lg"
                      style="border: black 4px solid"
                    /> -->
                  </q-card-section>
                </div>
              </q-card>
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-4 gt-xs">
                      <img style="width: 100%" class="q-pa-sm" src="../assets/SpringTraining2022.png">
                  </q-card-section>
                  <q-card-section class="col-xs-12 col-sm-8">
                    <div class="text-h4">SPRING TRAINING 2022 <span class="text-red-10">COMPLETED</span></div>
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
              <hr>
              <h4>History Page</h4>
              <h5>If you are a history buff check out our organization's past on the <a href="/history">History</a> page. If you have past experiences to share with the membership please email the website admin with stories, media or the like that could be added in the future. <a href="mailto:admin@matai.org">admin@matai.org</a>.</h5>
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
  background-image: url("../assets/img/buscrash2022.jpg");
  background-color: #686868;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import { defineComponent } from 'vue';
import Counter from '../components/Counter.vue';


export default defineComponent({
  name: 'Home',
  components: {
//    Counter

  }
})
</script>
