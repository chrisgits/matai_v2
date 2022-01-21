<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h4 q-mt-sm q-mb-xs">2022 Spring Training</div>
      <q-img
        src="../../src/assets/img/lightmapping.jpg"
      />

      <q-card-section>
        <div class="text-bold text-h5 text-orange-9">March 28-30, 2022</div>
        <div class="text-h4 q-mt-sm q-mb-xs">Visibility Analysis and Advanced Nighttime Mapping Techniques</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Green Bay, WI</div>
        <div class="text-black text-body1">
          This training will focus on visibility, basic lighting analysis and advanced nighttime headlight mapping techniques. It will be held over 2 1/2 days in Green Bay, WI. It will start and 0800 Monday morning and continue through Wednesday at noon.
        </div>
        <br>
        <div class="text-black text-body1">
          Lodging will be attendee's choice and can be found in the area around .... More info will be provided here when available and you will use hotel link below to register.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          to="/registerTraining"
          unelevated
          size="lg"
          color="deep-orange"
          label="register"
        />
        <q-btn
          to="/404"
          unelevated
          size="lg"
          color="blue-grey"
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