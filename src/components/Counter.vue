<template>
  <div class="text-center">
    <h5 class="q-pb-none q-my-none">CMV Conference 2022</h5>
  </div>
  <div v-if="loaded" class="text-center q-pb-xs">
    <section class="flex text-h3 justify-center content-center">
      <div class="days q-mr-xs relative">
        {{displayDays}}
        <div class="label text-subtitle2 q-ml-md absolute bottom-0">days</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours q-mr-xs relative">
        {{displayHours}}
        <div class="label text-subtitle2 q-ml-md absolute bottom-0">hours</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours q-mr-xs relative">
        {{displayMin}}
        <div class="label text-subtitle2 q-ml-md absolute bottom-0">min</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours relative">
        {{displaySec}}
        <div class="label text-subtitle2 q-ml-md absolute bottom-0">sec</div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  data: ()=> ({
    displayDays: 0,
    displayHours: 0,
    displayMin: 0,
    displaySec: 0,
    loaded: false
  }),
  computed: {
    _seconds: ()=> {
      return 1000;
    },
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),

    showRemaining (){
      const timer = setInterval (()=> {
        const now = new Date();
        // conf start date 9/12/22 at 0800 hrs
        const end = new Date(2022, 8, 12, 10, 0, 0);
        const distance = end.getTime() - now.getTime();

        if(distance < 0){
          clearInterval(timer);
          return
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours );
        const minutes = Math.floor((distance % this._hours) / this._minutes );
        const seconds = Math.floor((distance % this._minutes) / this._seconds );
        this.displayMin = this.formatNum(minutes);
        this.displaySec = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
        this.loaded = true;
      })
    }
  }

};
</script>

