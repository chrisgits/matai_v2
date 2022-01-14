<template>
  <q-layout view="hhh lpR lFr">
    <q-header reveal bordered class="text-white" style="background: #fff" height-hint="61.59">
      <q-toolbar
        active-color="accent"
        class="q-py-sm q-pl-xs p-pr-xs"
      >
        <q-btn to="/" flat class="q-pl-none">
          <img class="gt-sm" width="250" src="../assets/MATAI_TextBlock@6x.png" alt="">
          <img class="lt-md q-pl-none" width="75" src="../assets/MATAI_Block@6x.png" alt="">
        </q-btn>
        <q-space />
        <q-btn to="/conf" class="q-py-sm q-px-md" flat color="black" >Conference</q-btn>
        <q-btn to="/training" class="q-py-sm q-px-md q-ml-xs" flat color="black" >Training</q-btn>
        <q-btn to="/members" class="q-py-sm q-px-md q-ml-xs" color="primary" label="MEMBERS" />
        <!-- <q-btn class="q-py-sm q-px- md q-mr-sm" flat round color="black" icon="menu"/> -->

      </q-toolbar>
    </q-header>

    <q-footer style="background: #3a3a3a" class="q-pb-none">
      <div class="q-pt-sm" align="center">
       <p class="q-mb-sm text-uppercase text-caption">Copyright 2021 matai.org</p>
      </div>
    </q-footer>

    <q-page-container class="constrain">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import { defineComponent, ref } from 'vue'

export default {
  name: 'MainLayout',

  data () {

  }
  
}
</script>
