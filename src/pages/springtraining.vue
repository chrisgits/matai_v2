<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card class="my-card" flat>
      <div class="text-h4 q-mt-sm q-mb-xs">2022 Spring Training</div>
      <q-img
        src="../../src/assets/img/lightmappingLogo.jpg"
      />

      <q-card-section>
        <div class="row">
          <div class="col-12 text-bold text-h5 text-orange-9">March 28-30, 2022</div>
          <div class="col-12 text-h4 q-mt-sm q-mb-xs">Forensic Visibility Analysis and Nighttime Mapping Techniques</div>
          <div class="col-12 text-h5 q-mt-sm q-mb-xs">Brown County, WI</div>
          <div class="col-6 text-h5 q-mt-sm q-mb-xs">Current IATAI Members are approved for Member Pricing for this training!</div>
          <div class="col-6 q-pl-md text-center"><img src="../../src/assets/iatai.jpg" style="width: 100px" alt="IATAI Logo"></div>
          <div class="col-6 text-h5">
            ACTAR credits information will be added when available.
          </div>
          <div class="col-6 q-pl-md text-center">
            <img src="../../src/assets/actar.png" style="width: 100px" alt="ACTAR Seal">
          </div>
        </div>
        <hr>
        <div class="text-body1">
          The forensic science of collision reconstruction goes far beyond that which is learned in traditional training. Understanding physics and mathematics, and developing proficiency in those disciplines is only the foundation. The factors which contribute to the cause of collisions are often far more complex than simply determining speed or understanding the basics of time and distance.
          <br>
          Nighttime collisions pose a special set of problems which a Collision Reconstructionist needs to approach with both an appreciation for that which may seem obvious but is not, and a plan as to
          how best to analyze the often complex variables they are presented with.
        </div>
        <div class="text-black text-body1 q-mt-sm">
          Understanding visibility and how to document this evidence is key to forming a solid opinion as to causal factors in nighttime vehicle collisions.
        </div>
        <q-btn
          type="a"
          href="https://momentum.matai.org/collect/description/223295-q-2022-matai-spring-training-green-bay-wi"
          unelevated
          size="lg"
          color="green"
          label="Registration"
          class="q-mt-sm"
        />
        <h4>Course Instructors</h4>
        <h5 class="q-mb-none">Dan Billington</h5>
        <div class="text-body2 q-mb-sm text-bold">Great Lakes Forensic Experts</div>
        <div class="text-black text-body1">
          Dan is an ACTAR Accredited Collision Reconstructionist and Visibility Expert based in south-central Wisconsin.His
          career started in 1994 with the Waukesha County Sheriff’s Department, where he became an integral part of their Collision Reconstruction team.
          <br>
          In 2009, Dan left the Sheriff’s Department to begin full-time work as a private consultant. Since then he has investigated thousands of collisions, and has completed nearly 1000 collision reconstructions!
          <br>
          Currently, Dan’s clients include prosecution, criminal defense attorneys, civil attorneys, and the U.S. military. He has testified as an expert more than 100 times, and has spoken at many national and regional conferences, including Harvard University in Cambridge, MA.
        </div>
        <h5 class="q-mb-none">Chris Starrett</h5>
        <div class="text-body2 q-mb-sm text-bold">SV Aerial Consulting</div>
        <div class="text-black text-body1">
          Chris is an ACTAR Accredited Collision Reconstructionist and Forensic Mapping Expert based in central Iowa. His law enforcement career started in 2003 an he currently serves as the sergeant over the Collision Reconstruction team for the Iowa State Patrol.
          <br>
          Chris and business partner Eric Van Zee formed SV Aerial Consulting in 2020.
          <br>
          Chris is a 17-year veteran of the Iowa State Patrol and has helped launch their drone program. Chris is both a part 107 certified drone pilot, certified drone flight instructor, and a licensed single-engine aircraft pilot.
        </div>
        <h4>Lodging</h4>
        <div class="text-black text-body1">
          A block of rooms has been set aside at the Country Inn & Suites by Radisson, Green Bay East.  850 Kepler Drive Suite A, Green Bay, Wisconsin 54311. <a href="https://www.radissonhotels.com/en-us/hotels/country-inn-green-bay-bellevue-wi">Country Inn & Suites</a>  The hotel is approximately an 8-minute drive to the training facility.
          If you are a member of a tax exempt organization please have that available at the time of booking.
        </div>
        <br>
        <div class="text-black text-body1">
          Reservations by phone <strong>920-288-0101</strong>
        </div>
        <br>
        <div class="text-black text-body1">
          <strong>The group rates have expired for these rooms but reservations can still be made for $96/night.</strong>
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          type="a"
          href="https://momentum.matai.org/collect/description/223295-q-2022-matai-spring-training-green-bay-wi"
          unelevated
          size="lg"
          color="green"
          label="Registration"
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
        <p>Students will be expected to participate in all classroom and outside exercises to receive credit for attendance.</p>
        <p>Training will involve outdoor activities on day two which will extend into the hours of darkness. Students should be prepared to dress for the weather of the day.</p>
        <p>Students should bring materials for taking notes and may bring their own light meters if they so wish, but this is not necessary to complete this training.</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
p
  font-size: 20px
br
  margin-bottom: 1em
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
