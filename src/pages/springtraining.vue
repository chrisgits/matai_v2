<template>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <div class="text-center">
      <div class="text-uppercase text-h3 q-pa-lg">upcoming events</div>
    </div>
    <q-card class="my-card">


      <q-card-section>
        <div class="row">
          <div class="text-h4 q-mt-sm q-mb-xs">2023 Training Session<span class="text-blue-10"></span></div>
          <div class="col-12 text-uppercase text-bold text-h5 text-orange-9">tbd</div>
          <div class="col-12 text-h4 q-mt-sm q-mb-xs">Upcoming training session to be announced</div>
        </div>
        <hr>
        <div class="text-body1">
          As always, the board is always discussing future trainings during their monthly board meetings. As soon as a topic and location are decided on that information will be posted here. We will notify the membership via email as well.
          <br>
          We have always encouraged membership participation, so if you have a topic you would like considered or feel folks need more training or exposure to please contact the Board through the <a href="/about">about</a> page via email or phone call. Any input is greatly appreciated.
        </div>
      </q-card-section>


    </q-card>
    <div class="text-center">
      <div class="text-uppercase text-h3 q-pa-lg">past events</div>
    </div>
    <q-card class="my-card">
      <div class="text-h4 q-mt-sm q-mb-xs">2022 Spring Training <span class="text-blue-10">-- COMPLETED</span></div>
      <q-img
        src="../../src/assets/img/lightmappingLogo.jpg"
      />

      <q-card-section>
        <div class="row">
          <div class="col-12 text-bold text-h5 text-orange-9">March 28-30, 2022</div>
          <div class="col-12 text-h4 q-mt-sm q-mb-xs">Forensic Visibility Analysis and Nighttime Mapping Techniques</div>
          <div class="col-12 text-h5 q-mt-sm q-mb-xs">Brown County, WI</div>
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
      </q-card-section>

      <q-card-actions>
        <q-btn
          type="a"
          href="/"
          unelevated
          size="lg"
          color="grey"
          label="event completed"
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
