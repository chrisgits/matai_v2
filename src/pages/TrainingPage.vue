<template>
  <q-page>
    <div class="row">
      <div class="col-12">
            <h4 class="text-center">Training Opportunities</h4>
      </div>
      <div v-if="traindates.length" class="col-12">
        <q-card
          v-for="traindate in traindates"
          :key="traindate.id"
          dark
          bordered
          class="bg-grey-10 training-card q-mb-md"
        >
          <q-card-section horizontal>
            <q-card-section>
              <div class="text-h5">{{traindate.caption}}</div>
              <div class="text-h6">Date: {{traindate.date}}</div>
              <div class="text-h6">Location: {{traindate.location}}</div>
              <q-card-section>
                {{ traindate.desc }}
              </q-card-section>
              <q-card-section>
                <q-btn
                  v-if="traindate.regBtn === 'true'"
                  :to="traindate.confRegistration"
                  class="q-py-sm q-px-md"
                  flat
                  rounded
                  outline
                  dark
                  color="accent"
                  >Register</q-btn>
                <q-btn
                  to="/currentTraining"
                  class="q-py-sm q-px-md"
                  flat
                  elevated
                  rounded
                  color="green"
                  >Schedule</q-btn>
                <q-btn
                  :to="traindate.dataUrl"
                  class="q-py-sm q-px-md"
                  flat
                  elevated
                  rounded
                  color="white"
                  >Conf Data</q-btn>
              </q-card-section>
              </q-card-section>
                <q-img
                  class="col-5"
                  :src="traindate.imageUrl"
                />
              </q-card-section>
        </q-card>
      </div>
      <div v-if="!traindates.length" class="col-12 text-center">
          <h4>There are no training opportunities on the calendar. Please check back soon and contact MATAI with any questions.</h4>
        </div>
    </div>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TrainingPage',
  data() {
  return {
    traindates: []
  }
  },
  methods: {
    getTraindates() {
      this.$axios.get(`${process.env.API}/traindates`).then(response => {
        this.traindates = response.data
      }).catch(err => {
        console.log('err:', err)
      })
    }
  },
  created() {
    this.getTraindates()
  }
})
</script>
