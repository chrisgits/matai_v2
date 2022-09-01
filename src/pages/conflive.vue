<template>
    <div class="row justify-center items-start q-gutter-md">
      <q-card class="q-pa-xs" flat>
        <div class="row text-center justify-center">
          <div class="text-h2 text-center q-mt-sm q-mb-xs"><p>2022 Conference is <span class="text-green text-bold">LIVE!</span></p></div>
          <div class="col-xs-12 col-6">
            <q-img fit="contain" width="20%" class="q-pa-sm q-ma-md" src="../assets/2022_falltrain@6x.png"/>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-3 q-pa-md align-center justify-center">
            <q-img  class="q-pa-sm q-mt-lg" src="../assets/actar.png"/>
          </div>
          <div class="col-xs-8 col-sm-9 q-pa-md text-h6">
            <h5 class="q-ma-none text-bold">Attention!</h5>
            <p>For attendees to receive credit for ACTAR CEUs for this conference you must download the i-Attend app for your device and check in to each session you attend with the QR code available at the entrance. This is a change and process implemented by ACTAR. Please visit <a href="www.actar.org/ceu/earning">www.actar.org/ceu/earning</a> for the details of this change.</p>
            <p>For your convenience here is the <a href="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1b0333fe-f7a7-4cbd-a61a-ae900137cf2b">i-Attend Video</a> to the video instructions for the app. If you would like the PDF version download it <a href="">here</a>.</p>
          </div>
        </div> 
        <q-card-section>
          <div class="text-bold text-h5 text-orange-9">September 12-14, 2022</div>
          <div class="text-h4 q-mt-sm q-mb-xs">Commercial Motor Vehicle Topics</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Des Moines, IA</div>   
        </q-card-section>
  
        <q-card-actions>
          <q-btn
            href="https://files.matai.org/conf_schedule.pdf" target="blank"
            class="q-my-sm"
            unelevated
            size="lg"
            color="blue"
            text-color="white"
            label="CONF SCHEDULE PDF"
          />
        </q-card-actions>
      </q-card>

      <q-card>
        <q-card-section>
          <div class="text-bold text-h5 text-blue-9">2022 Conference Schedule</div>
          <br>
          <q-card class="bg-grey-4">
            <q-card-section>
              <div class="text-deep-orange-8 text-h6">
                <span class="text-bold text-black">9/10</span> Saturday – Crash Test Academy
              </div>
              <div class="text-deep-orange-8 text-h6">
                <span class="text-bold text-black">9/11</span> <span><img style="width: 50px; position: relative; top: 5px;" src="../assets/img/usa-flag.png" alt=""></span> Sunday - Crash Test Academy
              </div>
              <div class="text-black text-h6">
                <span class="text-bold text-black">9/12</span> Monday – Crash Day, Iowa State Fairgrounds
              </div>
              <div class="text-black text-h6">
                <span class="text-bold text-black">9/13</span> Tuesday – William Messerschmidt, Iowa DOT, Lawyer presentation
              </div>
              <div class="text-black text-h6">
                <span class="text-bold text-black">9/14</span> Wednesday – Kent Boots, Data presentation
              </div>
            </q-card-section>
          </q-card>
  
          <br>
        </q-card-section>  
      </q-card>
  
    </div>
  </template>
  
  <style lang="sass" scoped>
  
  .rounded
    border-radius: 10px
  
  </style>
  
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        expanded: ref(false),
      }
    }
  }
  </script>