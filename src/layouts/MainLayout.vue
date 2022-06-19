<template>
  <q-layout view="hHh lpR lFr">
    <q-header reveal bordered class="text-white justify-center" style="background: #fff" height-hint="61.59">
      <q-toolbar
        active-color="accent"
        class="q-py-sm q-pl-xs p-pr-xs row justify-evenly"
      >
        <div>
          <q-btn to="/" flat class="q-pl-none">
            <img class="gt-sm" width="250" src="../assets/MATAI_TextBlock@6x.png" alt="">
            <img class="lt-md q-pl-none" width="60" src="../assets/MATAI_Block@6x.png" alt="">
          </q-btn>
        </div>
        <div>
          <q-space />
        </div>
        <div>
          <q-btn to="/cta" class="q-py-sm q-px-sm" flat color="deep-orange" >CTA</q-btn>
          <q-btn to="/confinfo" class="q-py-sm q-px-sm" flat color="black" >Conference</q-btn>
          <q-btn to="/springtraining" class="q-py-sm q-px-sm q-ml-xs" flat color="black" >Training</q-btn>
          <q-btn
            unelevated
            href="https://momentum.matai.org/collect/description/228963-r-matai-member-renewal"
            class="q-py-xs q-px-sm q-ml-xs text-black"
            icon-right="login"
            color="accent"
            label="renewals"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-footer
      reveal
      height-hint="2"
      style="background: #1c1c1c"
      class="q-pt-md q-pb-xs "
    >
      <div class="row justify-center items-center text-center">
        <div class="col-sm-4 gt-xs row justify-end">
          <div class="">
            <q-btn unelevated flat to="/"><img class="lt-lg" width="125" src="../assets/MATAI_blockw@2x.png" alt="matai-logo"/></q-btn>
          </div>
          <div>
            <q-btn unelevated flat to="/"><img class="gt-md" width="175" src="../assets/MATAI_Circle_W.svg" alt="matai-logo"></q-btn>
          </div>
        </div>
        <div class="col-sm-4 col-xs-6">
            <div class="">
              <q-list dense padding class="rounded-borders">
                <q-item to="/join" clickable v-ripple>
                  <q-item-section>
                    Join
                  </q-item-section>
                </q-item>
                <q-item to="/confinfo" clickable v-ripple>
                  <q-item-section>
                    Conference
                  </q-item-section>
                </q-item>
                <q-item to="/springtraining" clickable v-ripple>
                  <q-item-section>
                    Spring Training
                  </q-item-section>
                </q-item>
                <q-item to="/history" clickable v-ripple>
                  <q-item-section>
                    MATAI History
                  </q-item-section>
                </q-item>
              </q-list>

            </div>
        </div>
        <div class="col-sm-4 col-xs-6">
            <div style="max-width: 350px">
              <q-list dense padding class="rounded-borders">
                <q-item to="/about" clickable v-ripple>
                  <q-item-section>
                    About
                  </q-item-section>
                </q-item>
                <q-item to="/members" clickable v-ripple>
                  <q-item-section class="bg-primary">
                    <q-btn unelevevated class="text-white" label="members"></q-btn>
                  </q-item-section>
                </q-item>
                <!-- <q-item to="/history" clickable v-ripple>
                  <q-item-section>
                    History
                  </q-item-section>
                </q-item> -->

                <q-item href="https://momentum.matai.org/collect/description/228963-r-matai-member-renewal" clickable v-ripple>
                  <q-item-section class="bg-accent q-pa-xs">
                    <q-btn unelevated class="text-black" icon-right="login" label="member renewal"></q-btn>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="q-pt-xs social text-center">
              <q-btn href="https://www.youtube.com/channel/UCvLubrvZf15Zm4-ioYWlYHg"><i class="fab fa-youtube-square fa-2x"></i></q-btn>
              <q-btn href="https://www.facebook.com/Midwest-Association-of-Technical-Accident-Investigators-1513079988957586/"><i class="fab fa-facebook-square fa-2x"></i></q-btn>
            </div>
        </div>
      </div>

      <div class="q-pt-xs" align="center">
       <p class="q-mb-xs text-uppercase text-caption copyright"><span class="material-icons">
        copyright</span>2022  matai</p>
      </div>
    </q-footer>

    <q-page-container class="constrain">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
.constrain
  padding: 0px

.copyright
  font-size: 8px

</style>

<script>


import { defineComponent, ref } from 'vue'

export default {
  name: 'MainLayout',

  data () {

  }

}
</script>
