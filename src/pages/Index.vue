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
          class="q-ml-lg q-py-md q-px-lg"
          color="#1a1a1a"
          label="learn more"
        />
      </div>
    </div>
    
    <div>
      <div>
          <div class="text-center">
            <h5 class="text-uppercase text-h4">upcoming events</h5>
          </div>
          <!-- upcoming training cards -->
          <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">  
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <img style="width: 200px" class="q-pa-sm" src="../assets/MATAI_Circle.svg">
                <q-card-section>
                  <div class="text-h4">SPRING TRAINING 2022</div>
                  <div class="text-h5 text-orange-10">Visibility Analysis and Advanced Nighttime Mapping Techniques</div>
                  <div class="text-h5">March 28-30, 2022</div>
                  <div class="text-h6 ">Green Bay, WI</div>
                  <br>
                  <div class="text-body1">This training will focus on visibility, basic lighting analysis and advanced nighttime headlight mapping techniques. It will be held over 2 1/2 days in Green Bay, WI. It will start and 0800 Monday morning and continue through Wednesday at noon.</div>
                  <q-btn
                    to="/registerTraining"
                    unelevated
                    class="q-ma-md q-px-lg q-pa-md"
                    color="green"
                    label="register"
                    text-color="white"
                  />
                  <q-btn
                    to="/springtraining"
                    unelevated
                    class="q-ma-md q-px-lg q-pa-md"
                    color="blue"
                    label="info"
                    text-color="white"
                  />
                </q-card-section>
              </q-card>

              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <img style="width: 200px" class="q-pa-sm" src="../assets/2022_falltrain@6x.png">
                <q-card-section>
                  <div class="text-h4">2022 FALL CONFERENCE</div>
                  <div class="text-h5">September 12-14, 2022</div>
                  <div class="text-h6">Des Moines, IA</div>
                  <br>
                  <div class="text-body1">This training will be hosted in Des Moines, IA by the Iowa State Patrol. This conference will be centered on the topic of Commercial Motor Vehicles and will include live crash testing as well as presentations from industry experts.</div>
                  <q-btn
                    to="/2022ConfRegistration"
                    unelevated
                    class="q-ma-md q-px-lg q-pa-md"
                    color="green"
                    label="register"
                    text-color="white"
                  />
                  <q-btn
                    to="/confinfo"
                    unelevated
                    class="q-ma-md q-px-lg q-pa-md"
                    color="blue"
                    label="info"
                    text-color="white"
                  />
                </q-card-section>
              </q-card>
            </div>
          <!--training section-->
          <div class="row wrap justify-evenly">
            <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">
              
            </div>
            

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.constrain {
  padding: 0px;
}

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
  name: 'Home',
  data () {
  return {}
  },
  methods: {
    logout() {
      console.log('logged out')
    }
  }
})
</script>
