<template>
  <q-layout view="hHh lpR lFr">
    <q-header reveal bordered class="text-white" style="background: #fff" height-hint="61.59">
      <q-toolbar
        active-color="accent"
        class="q-py-sm q-pl-xs p-pr-xs"
      >
        <q-btn to="/" flat class="q-pl-none">
          <img class="gt-sm" width="250" src="../assets/MATAI_TextBlock@6x.png" alt="">
          <img class="lt-md q-pl-none" width="60" src="../assets/MATAI_Block@6x.png" alt="">
        </q-btn>
        <q-space />
        <q-btn to="/conf" class="lt-md q-py-sm q-px-sm" flat color="black" >Conference</q-btn>
        <q-btn to="/training" class="q-py-sm q-px-sm q-ml-xs" flat color="black" >Training</q-btn>
        <q-btn to="/members" class="q-py-sm q-px-sm q-ml-xs" color="primary" label="MEMBERS" />
        <!-- <q-btn class="q-py-sm q-px- md q-mr-sm" flat round color="black" icon="menu"/> -->

      </q-toolbar>
    </q-header>

    <q-footer
      reveal
      height-hint="2"
      style="background: #1c1c1c"
      class="q-pt-md q-pb-xs "
    >
      <div class="row justify-center items-center text-center">
        <div class="col ">
          <div>
            <img class="lt-md" width="75" src="../assets/MATAI_Block@6x.png" alt="matai-logo">
          </div>
          <div>
            <img class="gt-md" width="200" src="../assets/MATAI_Circle_W@6x.png" alt="matai-logo">
          </div>
        </div>
        <div class="col">
            <div class="">
              <q-list dense bordered padding class="rounded-borders">
                <q-item to="/" clickable v-ripple>
                  <q-item-section>
                    Home
                  </q-item-section>
                </q-item>

                <q-item to="/about" clickable v-ripple>
                  <q-item-section>
                    About
                  </q-item-section>
                </q-item>

                <q-item to="/conf" clickable v-ripple>
                  <q-item-section>
                    Conference
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
        </div>
        <div class="col">
            <div style="max-width: 350px">
              <q-list dense bordered padding class="rounded-borders">
                <q-item to="/" clickable v-ripple>
                  <q-item-section>
                    Home
                  </q-item-section>
                </q-item>

                <q-item to="/about" clickable v-ripple>
                  <q-item-section>
                    About
                  </q-item-section>
                </q-item>

                <q-item to="/members" clickable v-ripple>
                  <q-item-section class="bg-accent" style="color: black">
                    Members
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
        </div>
      </div>
      <div class="q-pt-xs" align="center">
       <p class="q-mb-xs text-uppercase text-caption copyright"><span class="material-icons">
copyright
</span> 2022  matai</p>
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
