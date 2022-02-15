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
            <div class="text-uppercase text-h3 q-pa-lg">upcoming events</div>
          </div>
          <!-- upcoming training cards -->
          <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">  
              <q-card class="flex justify-center q-pa-md my-card shadow-2 rounded-borders">
                <div class="flex row">
                  <q-card-section class="col-4 gt-xs">
                      <img style="width: 100%" class="q-pa-sm" src="../assets/SpringTraining2022.png">
                  </q-card-section>
                  <q-card-section class="col-xs-12 col-sm-8">
                    <div class="text-h4">SPRING TRAINING 2022</div>
                    <div class="text-h5 text-orange-10">Forensic Visibility Analysis and Nighttime Mapping Techniques</div>
                    <div class="text-h5">March 28-30, 2022</div>
                    <div class="text-h6 ">Green Bay, WI</div>
                    <br>
                    <div class="text-body1">This training will focus on visibility, basic lighting analysis and advanced nighttime headlight mapping techniques. It will be held over 2 1/2 days in Green Bay, WI. It will start and 0800 Monday morning and continue through Wednesday at noon. There will be hours of training after dark as well.</div>
                    <br>
                    <div class="text-body1">Nighttime collisions pose a special set of problems which a Collision Reconstructionist needs to approach with both an appreciation for that which may seem obvious but is not, and a plan as to how best to analyze the often complex variables they are presented with.</div>
                    <br>
                    <div class="text-body1">Understanding visibility and how to document this evidence is key to forming a solid opinion as to causal factors in nighttime vehicle collisions.</div>
                    <q-btn
                    
                      unelevated
                      class="q-ma-md q-px-lg q-pa-md"
                      color="grey"
                      label="registration live soon"
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
                </div>
              </q-card>

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
                      class="q-ma-md q-px-lg q-pa-md"
                      color="grey"
                      label="registration live soon"
                      text-color="darkgray"
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
                </div>
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
