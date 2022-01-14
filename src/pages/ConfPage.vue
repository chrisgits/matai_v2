<template>
  <q-page>
    <div class="row">
      <div class="col-12">
            <h4>MATAI Annual Conference</h4>
      </div>
      <div class="col-12">
        <q-card
          v-for="confdate in confdates"
          :key="confdate.id"
          dark
          bordered
          class="bg-grey-10 conf-card q-mb-md"
        >
          <q-card-section horizontal>
            <q-card-section>
              <div class="text-h5">{{confdate.caption}}</div>
              <div class="text-h6">Date: {{confdate.date}}</div>
              <div class="text-h6">Location: {{confdate.location}}</div>
              <q-card-section>
                {{ confdate.desc }}
              </q-card-section>
              <q-card-section>
                <q-btn
                  v-if="confdate.regBtn === 'true'"
                  :to="confdate.registerUrl"
                  class="q-py-sm q-px-md"
                  flat
                  rounded
                  outline
                  dark
                  size="lg"
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
                  to="/currentTraining"
                  class="q-py-sm q-px-md"
                  flat
                  elevated
                  rounded
                  color="white"
                  >Conf Data</q-btn>
              </q-card-section>
            </q-card-section>
              <q-img
                class="col-5 gt-xs"
                :src="confdate.imageUrl"
              />
            </q-card-section>
        
        </q-card>
      </div>
    </div>


  </q-page>
</template>


<script>
import { defineComponent } from 'vue';

export default defineComponent({
   name: 'ConfPage',
  data() {
    return {
      confdates: []
    }
  },
  methods: {
    getConfdates() {
      this.$axios.get(`${process.env.API}/confdates`).then(response => {
        this.confdates = response.data
      }).catch(err => {
        console.log('err:', err)
      })
    }
  },
  created() {
    this.getConfdates()
  }
})
</script>
