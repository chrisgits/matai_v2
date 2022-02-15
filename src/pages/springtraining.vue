<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <div class="text-h4 q-mt-sm q-mb-xs">2022 Spring Training</div>
      <q-img
        src="../../src/assets/img/lightmappingLogo.jpg"
      />

      <q-card-section>
        <div class="text-bold text-h5 text-orange-9">March 28-30, 2022</div>
        <div class="text-h4 q-mt-sm q-mb-xs">Forensic Visibility Analysis and Nighttime Mapping Techniques</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Brown County, WI</div>
        <div class="text-black text-body1">
          This training will focus on visibility, lighting analysis and nighttime mapping techniques. It will be held over 3 days in Brown County, WI. It will start and 0800 Monday morning and continue through Wednesday including some hours after dark.
        </div>
        <br>
        <div class="text-black text-body1">
          A block of rooms has been set aside at the Country Inn & Suites by Radisson, Green Bay East.  850 Kepler Drive Suite A, Green Bay, Wisconsin 54311. <a href="https://www.radissonhotels.com/en-us/hotels/country-inn-green-bay-bellevue-wi">Country Inn & Suites</a>  The hotel is approximately an 8-minute drive to the training facility.  They are offering a rate of $ 90/ night.  If you are a member of a tax exempt organization please have that available at the time of booking.
        </div>
        <br>
        <div class="text-black text-body1">
          Reservations by phone <strong>920-288-0101</strong> ask for <strong>Midwest Association - MATAI Group  (Group ID 220326MATA)</strong>
        </div>
        <br>
        <div class="text-black text-body1">
          This rate is available for the night of Saturday, March 26, 2022 departing Wednesday, March 30, 2022.  This offer expires on <strong>February 24, 2022</strong>.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          unelevated
          size="lg"
          color="grey"
          label="Registration Live Soon!"
        />
        <q-btn
          href="https://www.radissonhotels.com/en-us/hotels/country-inn-green-bay-bellevue-wi" target="_blank"
          unelevated
          size="lg"
          color="blue"
          label="hotel"
        />
        <q-space />
      </q-card-actions>
      <q-card-section>
        <h4>Additional Details</h4>
          <p>The 24 hour Forensic Visibility Analysis and Nighttime Mapping Techniques course is open to
          anyone who has completed basic and technical collision investigation courses from a recognized
          collision investigation program.</p>
          <p>The forensic science of collision reconstruction goes far beyond that which is learned in traditional training. Understanding physics and mathematics, and developing proficiency in those disciplines is only the foundation. The factors which contribute to the cause of collisions are often far more complex than simply determining speed or understanding the basics of time and distance.</p>
          <p>Nighttime collisions pose a special set of problems which a Collision Reconstructionist needs to approach with both an appreciation for that which may seem obvious but is not, and a plan as to how best to analyze the often complex variables they are presented with.</p>
          <p>Understanding visibility and how to document this evidence is key to forming a solid opinion as to causal factors in nighttime vehicle collisions.</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
p
  font-size: 20px
</style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      expanded: ref(false),
    }
  }
}
</script>