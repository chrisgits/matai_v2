<template>
  <div class="fullscreen bg-yellow-10 text-black text-center q-pa-md flex flex-center">
    <div>
      <div class="img">
        <img src="../../src/assets/MATAI_Circle_W@6x.png" alt="MATAI Circle Logo">
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. MATAI says there's nothing here... Someone took a wrong turn. May have been our bad.
      </div>

      <q-btn
        class="q-mt-xl q-pa-lg"
        color="primary"
        text-color="white"
        unelevated
        rounded
        size="35px"
        to="/"
        label="Head Back to Safety"
        no-caps
      />
    </div>
  </div>
</template>

<style scoped>
.img > img {
  width: 30%;
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
