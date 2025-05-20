<template>
  <q-page class="q-pa-md bg-grey-1">
    <div class="q-mx-auto" style="max-width: 900px;">
      <h1 class="text-h4 text-center q-mb-md">Conference Schedule</h1>

      <!-- Day Switcher Tabs -->
      <q-tabs
        v-model="selectedDay"
        dense
        class="bg-white text-primary shadow-1 q-mb-lg"
        active-color="primary"
        indicator-color="red"
        narrow-indicator
      >
        <q-tab
          v-for="day in days"
          :key="day"
          :name="day"
          :label="day"
        />
      </q-tabs>
      <!-- Legend Bar -->
      <div class="q-mb-lg q-gutter-sm row items-center justify-center">
        <div
          v-for="type in allTypes"
          :key="type"
          class="row items-center q-pa-sm rounded legend-item"
          :class="typeColors[type] || 'bg-grey-3 text-black'"
          style="min-width: 120px; justify-content: center;"
        >
          <q-icon name="label" size="16px" class="q-mr-xs" />
          <span class="text-caption">{{ type.charAt(0).toUpperCase() + type.slice(1) }}</span>
        </div>
      </div>

      <!-- Events List -->
      <div v-for="(event, index) in props.scheduleData[selectedDay]" :key="index" class="q-mb-md">
        <q-card flat bordered class="calendar-block">
          <q-card-section class="flex" horizontal>
            <div class="time-column"
              :class="typeColors[event.type] || 'bg-grey-7 text-black'">
              <div class="text-h6 text-black">{{ event.time }}</div>
            </div>
            <q-separator vertical />
            <div class="content-column q-pa-md">
              <div class="text-h6">{{ event.title }}</div>
              <div class="text-subtitle2 text-grey">
                {{ event.speaker }}
              </div>
              <div class="text-caption q-mt-sm">
                {{ event.location }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { defineProps} from 'vue'

const allTypes = computed(() => {
  const seen = new Set()
  const result = []

  for (const day in props.scheduleData) {
    for (const event of props.scheduleData[day]) {
      if (event.type && !seen.has(event.type)) {
        seen.add(event.type)
        result.push(event.type)
      }
    }
  }

  return result
})

// Setup the days
const days = computed(() => Object.keys(props.scheduleData))

const props = defineProps({
  scheduleData: {
    type: Object,
    required: true
  }
})

// Current selected day
const selectedDay = ref(days.value[0] || '')

// Full event schedule
const events = {

}

const typeColors = {
  break: 'bg-green-2 text-black',
  main: 'bg-orange text-black',
  TSRP: 'bg-secondary text-white',
  MATAI: 'bg-blue-6 text-white',
  breakout: 'bg-purple-5 text-white',
}
</script>

<style scoped>

.legend-item {
  font-weight: 500;
  white-space: nowrap;
}

.calendar-block {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.calendar-block:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.time-column {
  flex: .5;
  width: 100px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c58fe;
}

.content-column {
  flex: 1;
}

@media (max-width: 600px) {
  .time-column {
    width: 70px;
    min-width: 60px;
    font-size: 0.8rem;
  }
  .content-column .text-h6 {
    font-size: 1rem;
  }
  .content-column .text-subtitle2 {
    font-size: 0.8rem;
  }
}
</style>

