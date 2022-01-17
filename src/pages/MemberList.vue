<template>
  <q-page class="row">
    <div class="col-12">
      <h4 class="q-px-sm">MATAI Member List</h4>
    </div>
    <div class="col-12">
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
      .get('https://opensheet.elk.sh/1UZZRY29-F64yIKmaVGA7BcVuGlrdzYh9gmWjj6kQfoU/members')
      .then(res => {
        this.members = res.data
      })
      .catch(err => {
        console.log('there was an error' + err.res)
      })
  }
}
</script>