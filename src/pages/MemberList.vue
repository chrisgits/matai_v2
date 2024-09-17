<template>
  <q-page class="row">
    <div class="col-12">
      <h4 class="q-px-sm q-py-xs">MATAI Current Member List</h4>
      <h5 class="q-py-none text-red">As of September 2024 - Updated Annually</h5>
    </div>
    <div class="col-12 q-py-xs">
      <div class="row justify-evenly">
        <div class="colhead col-4">
          <span>Name</span>
        </div>
        <div class="colhead col-4">
          <span>Organization</span>
        </div>
        <div class="colhead gt-xs col-2">
          <span>Location</span>
        </div>
        <div class="colhead col-1">
          <span>ACTAR</span>
        </div>
      </div>
      <div class="q-pb-xl">
        <membercard
          v-for="member in members"
          :key="member.id"
          :member="member"
          class="memberlist q-pa-xs"
        />
      </div>
      <h5 class="q-py-xs text-bold">Finding any errors?</h5>
      <p>If there are errors in your listed information please correct it through the membership <a class="text-bold" href="https://momentum.matai.org/contacts/login">portal</a></p>
      <p>If you have other questions or concerns with the information listed please contact <a href="mailto:admin@matai.org">admin@matai.org</a></p>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.colhead span
  font-weight: bold


</style>

<script>
import membercard from 'components/membercard.vue'
import axios from 'axios'

export default {
  components: {
    membercard
  },
  data() {
    return {
      members: []
    }
  },
  created() {
    axios
      .get('https://opensheet.elk.sh/11FaAIuTyNDvHlZI5E-5EIL3ScvfB5dPjrXtshsbZaxY/members')
      .then(res => {
        this.members = res.data
      })
      .catch(err => {
        console.log('there was an error' + err.res)
      })
  }
}
</script>
