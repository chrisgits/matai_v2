<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h4 q-mt-sm q-mb-xs">2022 Fall Conference</div>
      <q-img
        width="400px"
        src="../../src/assets/img/semi_crash.jpg"
      />

      <q-card-section>
        <div class="text-bold text-h5 text-orange-9">September 12-14, 2022</div>
        <div class="text-h4 q-mt-sm q-mb-xs">Commercial Motor Vehicle Topics</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Des Moines, IA</div>
        <div class="text-black text-body1">
          This training will focus on crashes involving CMVs and be held over 3 days. It will be hosted at the Iowa Raceway with lodging provided by Praire Meadows.
        </div>
        <br>
        <div class="text-black text-body1">
          Lodging will be at the nearby Praire Meadows Raceway and Casino. The link below will provide attendees to take advantage of group rates for this conference. Please use GROUP Code: <strong>091122MATAI</strong> with password <strong>863000679</strong> for the reserved conference rooms at the $129/night rate.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          to="/2022ConfRegistration"
          unelevated
          size="lg"
          color="deep-orange"
          label="register"
        />
        <q-btn
          href="https://book.rguest.com/onecart/wbe/group/1609/PrairieMeadowsRacetrackandCasino/auth"
          unelevated
          size="lg"
          color="blue"
          label="hotel"
        />
        <q-space />
        <span class="text-bold text-h6">Details</span>
        <q-btn
          color="blue"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            <h4>Additional Details</h4>
            <p>More information about hotel pricing, conference location and specifics will be found here... </p>
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>
