<template>
      <!-- <q-banner
        dense
        class="bg-accent text-black"
      >
      Check out the latest Conf Info Here:

      <q-btn
        unelevated
        to="/conflive"
        class="q-py-xs q-px-sm q-ml-sm text-black"
        color="accent"
        label="conf live!"
        size="lg"
        style="border: black 4px solid"
      />
    </q-banner> -->
  <div class="row justify-center items-start q-gutter-md">
    <q-card class="q-pa-xs" flat>
      <div class="row">
        <div class="text-h4 q-mt-sm q-mb-xs">2023 Fall Conference <br><span class="text-green-10">PLANNED</span></div>
      </div>
      <q-card-section>
        <div class="text-bold text-h5 text-orange-9">TBD</div>
        <div class="text-h4 q-mt-sm q-mb-xs">Back to Basics (TENTATIVE)</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Des Moines, IA</div>
        <br>
        <div class="text-black text-h6">
          This conference focused on going back to basics and will include the following testing and topics:
          <br>
        </div>
        <br>
        <div class="text-black text-body1">
          The MATAI annual conference continues to grow each year. This year we will step 'Back to Basics' to provide attendees a through review of the fundamentals that drive our understanding and interpretation of real-world evidence during our investigations.
        </div>
        <br>
      </q-card-section>
    </q-card>
    <q-card>
      <q-card-section>
        <div class="text-bold text-h5 text-blue-9">2023 Conference Schedule</div>
        <br>
        <q-card class="bg-grey-4">
          <q-card-section>
            <div class="text-deep-orange-8 text-h6">
              <span class="text-bold text-black">TBD</span>
            </div>
            <!-- <div class="text-deep-orange-8 text-h6">
              <span class="text-bold text-black">9/10</span> Saturday – Crash Test Academy - Iowa Speedway
            </div>
            <div class="text-deep-orange-8 text-h6">
              <span class="text-bold text-black">9/11</span> <span><img style="width: 50px; position: relative; top: 5px;" src="../assets/img/usa-flag.png" alt=""></span> Sunday - Crash Test Academy
            </div>
            <div class="text-black text-h6">
              <span class="text-bold text-black">9/12</span> Monday – Crash Day, Iowa Speedway
            </div>
            <div class="text-black text-h6">
              <span class="text-bold text-black">9/13</span> Tuesday – William Messerschmidt, Iowa DOT, Presentations
            </div>
            <div class="text-black text-h6">
              <span class="text-bold text-black">9/14</span> Wednesday – Kent Boots, Data Presentation
            </div> -->
          </q-card-section>
        </q-card>
        <br>
      </q-card-section>
      <q-card-section>
        <div class="text-black text-h5">
          Conference Presenters - TBD
        </div>
        <br>
        
      </q-card-section>

    </q-card>

    <div class="col-xs-12 col-6">
          <q-img fit="contain" width="20%" class="q-pa-sm q-ma-md" src="../assets/2022_falltrain@6x.png"/>
          <q-img fit="contain" width="50%" class="q-pa-sm q-ma-md" src="../assets/CTA_full@2x.png"/>
        </div>
        <div class="col-xs-12 col-sm-6 text-h6">
          <div>ACTAR Credit Info</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4 col-sm-3 q-pa-md">
          <q-img fit="contain" width="100%" class="q-pa-sm" src="../assets/actar.png"/>
        </div>
        <div class="col-xs-8 col-sm-9 q-pa-md text-h6">
          <p><strong>Credits for CTA Participation: 16 Hours</strong></p>
          <p><strong>Credits for Conference Participation: 19 Hours</strong></p>
        </div>
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
