<template>
  <q-page class="q-pa-md text-center">
    <h4>Welcome back!</h4>
    <h5>The members platform is LIVE! Once you have gone through the <a href="https://momentum.matai.org/collect/description/228963-r-matai-member-renewal">renewal</a> process you can login below:</h5>
    <q-btn
          unelevated
          href="https://momentum.matai.org/contacts/login"
          class="q-my-md q-pa-md"
          color="primary"
          label="CURRENT MEMBER LOGIN"
          text-color="white"
          icon-right="login"
        />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Members'
})
</script>
