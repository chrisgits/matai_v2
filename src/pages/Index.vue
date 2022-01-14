<template>
  <q-page class="flex column">
    <div class="q-pa-md" align="center" style="background: #3e3e3e">
      <h3>MIDWEST ASSOCIATION OF TECHNICAL ACCIDENT INVESTIGATORS</h3>
      <h5 style="color: white">FOR THE ADVANCEMENT OF MOTOR VEHICLE CRASH INVESTIGATION</h5>
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
          color="white"
          label="learn more"
        />
      </div>
    </div>
    
    <div>
      <div>
          <div class="text-center">
            <h5 class="text-uppercase">upcoming events</h5>
            <h6 class="text-uppercase">check out our latest training offerings</h6>
          </div>
          <!-- upcoming training cards -->
          <div class="row wrap justify-evenly">
            <div class="col-12 col-md-6 q-pa-md q-gutter-md">
              <q-card class="flex justify-center q-pa-md my-card">
                <img style="width: 200px" class="q-pa-sm" src="../assets/MATAI_Circle@6x.png">
                <q-card-section>
                  <div class="text-h6">2022 CONFERENCE</div>
                  <div class="text-subtitle2">Des Moines, IA</div>
                  <div class="text-body1">This training will be hosted in Des Moines, IA by the Iowa State Patrol. This is further body copy that will be filled in with actual event data and wonderful words about the training that is to occur.</div>
                  <q-btn
                    to="/join"
                    unelevated
                    class="q-ma-md q-px-lg q-pa-md"
                    color="green"
                    label="register"
                    text-color="black"
                  />
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-6 q-pa-md items-start q-gutter-md">  
              <q-card class="flex justify-center q-pa-md my-card">
                <img style="width: 200px" class="q-pa-sm" src="../assets/MATAI_Circle@6x.png">
                <q-card-section>
                  <div class="text-h6">FALL TRAINING 2023</div>
                  <div class="text-body1">This training will be hosted in Lincoln, NE Hosted by Lancaster County Sheriff's Office. This is further body copy that will be filled in with actual event data and wonderful words about the training that is to occur.</div>
                  <q-btn
                    to="/registerTraining"
                    unelevated
                    class="q-ma-md q-px-lg q-pa-md"
                    color="green"
                    label="register"
                    text-color="black"
                  />
                </q-card-section>
              </q-card>
            </div>
        </div>
      </div>
      <!-- footer -->
      <div class="row" style="background: #3a3a3a">
        <div align="center" class="col">
          <img
            width="200"
            src="../assets/MATAI_Circle_W@2x.png"
            alt=""
          >
          </div>
          <div class="col">
            SOCIAL LINKS
          </div>
          <div class="col">
            MEMBERS / JOIN
          </div>
        </div>
    </div>
  </q-page>
</template>

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
