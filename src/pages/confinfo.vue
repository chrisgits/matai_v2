<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card q-pa-xs" flat bordered>
      <div class="text-h4 q-mt-sm q-mb-xs">2022 Fall Conference</div>
      <q-img
        width="400px"
        class="q-pa-sm gt-xs"
        src="../../src/assets/img/semi_crash.jpg"
      />
      <q-img width="350px" class="q-pa-sm q-ma-md" src="../assets/2022_falltrain@6x.png"/>

      <q-card-section>
        <div class="text-bold text-h5 text-orange-9">September 12-14, 2022</div>
        <div class="text-h4 q-mt-sm q-mb-xs">Commercial Motor Vehicle Topics</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Des Moines, IA</div>
        <div class="text-black text-body1">
          This training will focus on crashes involving CMVs and be held over 3 days. It will be held in the Des Moines metro area with lodging provided by Praire Meadows.
        </div>
        <br>
        <div class="text-black text-body1">
          Lodging will be at the nearby Praire Meadows Raceway and Casino. The link below will provide attendees to take advantage of group rates for this conference. Please use GROUP Code: <strong>091122MATAI</strong> with password <strong>863000679</strong> for the reserved conference rooms at the $129/night rate.
        </div>
        <h5>More information will be posted here and the registration button below will become live as soon as it is available!</h5>
      </q-card-section>

      <q-card-actions>
        <q-btn
          unelevated
          size="lg"
          color="grey"
          text-color="darkgrey"
          label="registration coming soon"
        />
        <q-btn
          href="https://book.rguest.com/onecart/wbe/group/1609/PrairieMeadowsRacetrackandCasino/auth"
          unelevated
          size="lg"
          color="blue"
          label="hotel"
        />
      </q-card-actions>

    </q-card>
  </div>
</template>

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
