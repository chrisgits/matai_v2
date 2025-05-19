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

      <!-- Events List -->
      <div v-for="(event, index) in events[selectedDay]" :key="index" class="q-mb-md">
        <q-card flat bordered class="calendar-block">
          <q-card-section class="flex" horizontal>
            <div class="time-column">
              <div class="text-h6 text-white">{{ event.time }}</div>
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
import { ref } from 'vue'

// Setup the days
const days = ['Monday - 9th', 'Tuesday - 10th', 'Wednesday - 11th']

// Current selected day
const selectedDay = ref('Day 1')

// Full event schedule
const events = {
  'Monday - 9th': [
    { time: '8:00 AM', title: 'Opening Remarks', speaker: 'Conference Host', location: 'Main Hall' },
    { time: '9:00 AM', title: 'The Future of Innovation', speaker: 'Chris Mannel', location: 'Room A' },
    { time: '10:00 AM', title: 'Sustainable Engineering', speaker: 'Jordan Lee', location: 'Room B' },
    { time: '11:00 AM', title: 'AI and Human Creativity', speaker: 'Alex Smith', location: 'Room C' },
    { time: '12:00 PM', title: 'Lunch Break', speaker: '', location: 'Dining Area' },
  ],
  'Tuesday - 10th': [
    { time: '9:00 AM', title: 'Morning Kickoff', speaker: 'Session Leader', location: 'Main Hall' },
    { time: '10:00 AM', title: 'Machine Learning Trends', speaker: 'Taylor Kim', location: 'Room A' },
    { time: '11:00 AM', title: 'Sustainable Cities', speaker: 'Dr. Sophia Nguyen', location: 'Room B' },
    { time: '1:00 PM', title: 'Workshop: Innovation Labs', speaker: 'Various Speakers', location: 'Room C' },
  ],
  'Wednesday - 11th': [
    { time: '8:30 AM', title: 'Breakfast Networking', speaker: '', location: 'Lobby' },
    { time: '9:30 AM', title: 'Closing Keynote', speaker: 'Special Guest', location: 'Main Hall' },
    { time: '11:00 AM', title: 'Farewell Lunch', speaker: '', location: 'Dining Area' },
  ]
}
</script>

<style scoped>
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

